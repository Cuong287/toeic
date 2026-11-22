// spelling-view.js - Spelling Lab Module for Vocabulary (Tab 4)
let store = null;
let esc = s => s;
let speak = null;
let showToast = null;
let cleanWord = null;
let answers = null;
let norm = null;
let shuffle = null;
let enr = null;
let recordHomeworkCompletion = null;
let SPEAK = '';

export function initSpellingView(context) {
  if (!context) return;
  store = context.store || store;
  esc = context.esc || esc;
  speak = context.speak || speak;
  showToast = context.showToast || showToast;
  cleanWord = context.cleanWord || cleanWord;
  answers = context.answers || answers;
  norm = context.norm || norm;
  shuffle = context.shuffle || shuffle;
  enr = context.enr || enr;
  recordHomeworkCompletion = context.recordHomeworkCompletion || recordHomeworkCompletion;
  SPEAK = context.SPEAK || SPEAK;
}

export function getSpellTarget(w) {
  let clean = cleanWord(w).trim();
  if (clean.includes('/')) {
    const parts = clean.split('/');
    if (parts[0].length <= 3 || parts[1].length <= 3) {
      clean = clean.replace(/\//g, '').trim();
    }
  }
  return clean.split(/[\/=]/)[0].trim();
}

export function isSpellAnswerCorrect(w, input) {
  const target = getSpellTarget(w);
  return norm(input) === norm(target) || answers(w).includes(norm(input));
}

function getSpellLog(topicId) {
  try {
    const d = store.get('spell_log_' + topicId, null);
    if (d && typeof d === 'object' && d.words && typeof d.words === 'object') return d;
  } catch (e) {}
  return { words: {} };
}

function saveSpellWordResult(topicId, target, isCorrect, typo) {
  try {
    const log = getSpellLog(topicId);
    if (!log.words) log.words = {};
    const item = log.words[target] || { seen: 0, correct: 0, wrong: 0, lastWrong: [], updatedAt: 0 };
    item.seen = (item.seen || 0) + 1;
    if (isCorrect) {
      item.correct = (item.correct || 0) + 1;
    } else {
      item.wrong = (item.wrong || 0) + 1;
      if (typo) {
        if (!item.lastWrong) item.lastWrong = [];
        item.lastWrong = [typo, ...item.lastWrong.filter(x => x !== typo)].slice(0, 5);
      }
    }
    item.updatedAt = Date.now();
    log.words[target] = item;
    store.set('spell_log_' + topicId, log);
  } catch (e) {}
}

function trouble(target) {
  const list = [];
  const doubleRe = /([a-z])\1/gi;
  let m;
  while ((m = doubleRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + 2, note: 'double letter' });
    doubleRe.lastIndex = m.index + 1;
  }

  const ieRe = /ie|ei/gi;
  while ((m = ieRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + 2, note: 'ie / ei' });
  }

  const tionRe = /(?:tion|sion)\b/gi;
  while ((m = tionRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + m[0].length, note: '-tion / -sion' });
  }

  const anceRe = /(?:ance|ence|ant|ent)\b/gi;
  while ((m = anceRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + m[0].length, note: '-ance / -ence' });
  }

  const ableRe = /(?:able|ible)\b/gi;
  while ((m = ableRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + m[0].length, note: '-able / -ible' });
  }

  const silentStartRe = /\b(?:kn|wr)/gi;
  while ((m = silentStartRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + 2, note: 'silent letter' });
  }
  const mbRe = /mb\b/gi;
  while ((m = mbRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + 2, note: 'silent letter' });
  }
  const ghRe = /gh/gi;
  while ((m = ghRe.exec(target)) !== null) {
    list.push({ start: m.index, end: m.index + 2, note: 'silent letter' });
  }

  list.sort((a, b) => a.start - b.start || b.end - a.end);

  const merged = [];
  for (const item of list) {
    if (!merged.length) {
      merged.push(item);
    } else {
      const prev = merged[merged.length - 1];
      if (item.start >= prev.end) {
        merged.push(item);
      } else if (item.start === prev.start && item.end === prev.end) {
        if (!prev.note.includes(item.note)) prev.note += ', ' + item.note;
      }
    }
  }
  return merged;
}

function speakSlow(text, onDone) {
  try {
    const s = window.speechSynthesis;
    if (!s) { if (onDone) onDone(); return; }
    s.cancel();
    if (s.paused) s.resume();
    const clean = cleanWord(text);
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'en-US';
    u.rate = 0.6;
    u.onend = () => { if (onDone) onDone(); };
    u.onerror = () => { if (onDone) onDone(); };
    s.speak(u);
  } catch (err) {
    if (onDone) onDone();
  }
}

let curSpellCancel = null;
function spellLetters(target, onHighlight, onDone) {
  try {
    const s = window.speechSynthesis;
    if (!s) { if (onDone) onDone(); return; }
    if (curSpellCancel) curSpellCancel();
    s.cancel();
    if (s.paused) s.resume();

    let cancelled = false;
    curSpellCancel = () => {
      cancelled = true;
      s.cancel();
      if (onHighlight) onHighlight(-1);
    };

    const chars = target.split('');
    let idx = 0;

    function playNext() {
      if (cancelled || idx >= chars.length) {
        if (!cancelled && onHighlight) onHighlight(-1);
        curSpellCancel = null;
        if (onDone) onDone();
        return;
      }
      const curIdx = idx;
      const ch = chars[curIdx];
      const spoken = ch === ' ' ? 'space' : ch.toUpperCase();
      if (onHighlight) onHighlight(curIdx);

      const u = new SpeechSynthesisUtterance(spoken);
      u.lang = 'en-US';
      u.rate = 0.85;
      u.onend = () => {
        if (!cancelled) {
          idx++;
          playNext();
        }
      };
      u.onerror = () => {
        if (!cancelled) {
          idx++;
          playNext();
        }
      };
      s.speak(u);
    }

    playNext();
  } catch (e) {
    if (onDone) onDone();
  }
}

function alignDiff(input, target) {
  const s = String(input || '');
  const t = String(target || '');
  const m = s.length;
  const n = t.length;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1].toLowerCase() === t[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1
        );
      }
    }
  }

  let i = m;
  let j = n;
  const diff = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && s[i - 1].toLowerCase() === t[j - 1].toLowerCase() && dp[i][j] === dp[i - 1][j - 1]) {
      diff.push({ ch: s[i - 1], correctCh: t[j - 1], type: 'ok' });
      i--;
      j--;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      diff.push({ ch: s[i - 1], correctCh: t[j - 1], type: 'wrong' });
      i--;
      j--;
    } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
      diff.push({ ch: t[j - 1], correctCh: t[j - 1], type: 'missing' });
      j--;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      diff.push({ ch: s[i - 1], type: 'extra' });
      i--;
    } else {
      if (i > 0 && j > 0) {
        diff.push({ ch: s[i - 1], correctCh: t[j - 1], type: 'wrong' });
        i--;
        j--;
      } else if (j > 0) {
        diff.push({ ch: t[j - 1], correctCh: t[j - 1], type: 'missing' });
        j--;
      } else {
        diff.push({ ch: s[i - 1], type: 'extra' });
        i--;
      }
    }
  }

  return diff.reverse();
}

function getTargetMistakeIndices(diff) {
  const mistakeIndices = new Set();
  let tIdx = 0;
  for (const d of diff) {
    if (d.type === 'ok') {
      tIdx++;
    } else if (d.type === 'wrong') {
      mistakeIndices.add(tIdx);
      tIdx++;
    } else if (d.type === 'missing') {
      mistakeIndices.add(tIdx);
      tIdx++;
    }
  }
  return mistakeIndices;
}

function clozeGhost(target) {
  const hidden = new Set();
  const troubles = trouble(target);
  for (const tr of troubles) {
    for (let i = tr.start; i < tr.end; i++) {
      if (i < target.length && !/\s/.test(target[i])) {
        hidden.add(i);
      }
    }
  }

  let letterCount = 0;
  for (let i = 0; i < target.length; i++) {
    if (/[a-zA-Z]/.test(target[i])) letterCount++;
  }
  const minHidden = Math.max(2, Math.ceil(letterCount * 0.3));

  if (hidden.size < minHidden) {
    for (let i = 0; i < target.length; i++) {
      if (hidden.size >= minHidden) break;
      const ch = target[i];
      if (!/[aeiou]/i.test(ch)) continue;
      const isFirstLetterOfWord = (i === 0 || /[\s\-]/.test(target[i - 1]));
      if (isFirstLetterOfWord) continue;
      if (!hidden.has(i)) {
        hidden.add(i);
      }
    }
  }

  const ghost = new Set();
  for (let i = 0; i < target.length; i++) {
    if (!/\s/.test(target[i]) && !hidden.has(i)) {
      ghost.add(i);
    }
  }
  return ghost;
}

export function mountLetterBoxes(container, target, { ghost = new Set(), onSubmit } = {}) {
  container.innerHTML = `
    <div class="sl-boxes-wrapper" tabindex="-1">
      <input type="text" class="sl-real-input" aria-label="Type the word" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
      <div class="sl-boxes-row" aria-hidden="true"></div>
    </div>
  `;

  const wrapper = container.querySelector('.sl-boxes-wrapper');
  const input = container.querySelector('.sl-real-input');
  const row = container.querySelector('.sl-boxes-row');
  let highlightedIdx = -1;

  function update() {
    const val = input.value;
    const targetChars = target.split('');
    const N = targetChars.length;
    const L = val.length;
    let html = '';

    for (let i = 0; i < N; i++) {
      const tChar = targetChars[i];
      if (tChar === ' ') {
        const isCur = i === L;
        html += `<span class="sl-box-space ${isCur ? 'sl-box-cursor' : ''}" data-idx="${i}"></span>`;
        continue;
      }

      const isCurrent = i === L;
      const isHighlighted = i === highlightedIdx;

      if (i < L) {
        html += `<span class="sl-box sl-box-filled ${isCurrent ? 'sl-box-cursor' : ''} ${isHighlighted ? 'sl-box-active-letter' : ''}" data-idx="${i}">${esc(val[i])}</span>`;
      } else {
        const isGhost = ghost && ghost.has(i);
        html += `<span class="sl-box ${isGhost ? 'sl-box-ghost' : 'sl-box-empty'} ${isCurrent ? 'sl-box-cursor' : ''} ${isHighlighted ? 'sl-box-active-letter' : ''}" data-idx="${i}">${isGhost ? esc(tChar) : ''}</span>`;
      }
    }

    if (L > N) {
      for (let i = N; i < L; i++) {
        html += `<span class="sl-box sl-box-extra" data-idx="${i}">${esc(val[i])}</span>`;
      }
    }

    row.innerHTML = html;
  }

  input.addEventListener('input', update);
  input.addEventListener('compositionend', update);
  wrapper.addEventListener('click', () => input.focus());

  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      const trimmed = input.value.trim();
      if (trimmed && onSubmit) onSubmit(trimmed);
    }
  });

  update();

  return {
    input,
    wrapper,
    focus: () => input.focus(),
    getValue: () => input.value.trim(),
    clear: () => { input.value = ''; update(); },
    highlightBox: (idx) => {
      highlightedIdx = idx;
      update();
    }
  };
}

export function spellLab(t, box) {
  const pool = t.vocab.filter(v => v.vi);
  if (!pool.length) {
    box.innerHTML = '<div class="empty">No words available for Spelling Lab in this topic.</div>';
    return;
  }

  const log = getSpellLog(t.id);
  const wordsWithTarget = pool.map(v => ({ ...v, target: getSpellTarget(v.w) }));

  const poolNew = wordsWithTarget.filter(v => !log.words[v.target]?.seen);
  const poolWrong = wordsWithTarget.filter(v => (log.words[v.target]?.wrong || 0) >= 2);
  const poolRandom = wordsWithTarget;

  let activeSource = poolNew.length ? 'new' : (poolWrong.length ? 'wrong' : 'random');
  let activeCount = 5;

  let sessionWords = [];
  let curWordIdx = 0;
  let currentStep = 'write'; // 'write' | 'check' | 'log'
  let score = 0;
  let mistakes = [];
  let usedSpellHint = false;

  function renderStepper(step) {
    return `<nav class="sl-stepper" aria-label="Spelling steps">
      <span class="sl-step ${step==='write'?'active':''}" ${step==='write'?'aria-current="step"':''}>Listen &amp; Write</span>
      <span class="sl-step-sep">·</span>
      <span class="sl-step ${step==='check'?'active':''}" ${step==='check'?'aria-current="step"':''}>Check</span>
      <span class="sl-step-sep">·</span>
      <span class="sl-step ${step==='log'?'active':''}" ${step==='log'?'aria-current="step"':''}>Log</span>
    </nav>`;
  }

  function renderWriteStep() {
    usedSpellHint = false;
    const v = sessionWords[curWordIdx];
    const target = v.target;
    const curLog = getSpellLog(t.id);
    const isSeen = Boolean(curLog.words && curLog.words[target]?.seen > 0);
    const ghost = isSeen ? new Set() : clozeGhost(target);
    const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window && !!window.speechSynthesis;

    speak(cleanWord(v.w));

    box.innerHTML = `<div class="card sl-card">
      <div class="qprog"><i style="width:${(curWordIdx / sessionWords.length) * 100}%"></i></div>
      ${renderStepper('write')}
      <div class="row between">
        <span class="eyebrow">Word ${curWordIdx + 1}/${sessionWords.length} · Correct ${score}</span>
        ${v.pos ? `<span class="pos">${esc(v.pos)}</span>` : ''}
      </div>

      <div class="row" style="justify-content:center;margin:2px 0">
        <span class="sl-mode-badge">${isSeen ? 'Full recall' : 'Tricky letters hidden'}</span>
      </div>

      <div class="sl-word-meta" style="margin:4px 0">
        <span class="vi" style="font-size:1.15rem;font-weight:600">${esc(formatVi(v.vi, v.pos))}</span>
      </div>

      <div class="sl-audio-btns">
        <button class="btn ghost sl-btn-audio" id="sl-btn-speak-word" type="button" aria-label="Listen to whole word">${SPEAK} <span>Word</span></button>
        ${hasTTS ? `
          <button class="btn ghost sl-btn-audio" id="sl-btn-speak-slow" type="button" aria-label="Listen slowly at 0.6x speed"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sl-icon" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> <span>Slow</span></button>
          <button class="btn ghost sl-btn-audio" id="sl-btn-speak-spell" type="button" aria-label="Listen to word spelled letter by letter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sl-icon" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg> <span>Spell it</span></button>
        ` : ''}
      </div>

      <div id="sl-boxes-mount"></div>

      <div class="row" style="justify-content:center;margin-top:14px">
        <button class="btn primary" id="sl-btn-check" type="button">Check</button>
      </div>
    </div>`;

    const mountEl = box.querySelector('#sl-boxes-mount');
    const boxes = mountLetterBoxes(mountEl, target, {
      ghost,
      onSubmit: (val) => {
        if (val) handleWordSubmission(val);
      }
    });
    boxes.focus();

    box.querySelector('#sl-btn-speak-word').onclick = () => {
      if (curSpellCancel) curSpellCancel();
      speak(cleanWord(v.w));
    };

    if (hasTTS) {
      box.querySelector('#sl-btn-speak-slow').onclick = () => {
        if (curSpellCancel) curSpellCancel();
        speakSlow(cleanWord(v.w));
      };

      box.querySelector('#sl-btn-speak-spell').onclick = () => {
        if (curSpellCancel) curSpellCancel();
        usedSpellHint = true;
        let hintBadge = box.querySelector('#sl-hint-used-badge');
        if (!hintBadge) {
          const spellBtn = box.querySelector('#sl-btn-speak-spell');
          if (spellBtn) {
            spellBtn.insertAdjacentHTML('afterend', ' <span class="sl-hint-used-badge" id="sl-hint-used-badge">Hint used</span>');
          }
        }
        spellLetters(target, (activeIdx) => {
          if (boxes && boxes.highlightBox) boxes.highlightBox(activeIdx);
        });
      };
    }

    box.querySelector('#sl-btn-check').onclick = () => {
      const val = boxes.getValue();
      if (val) handleWordSubmission(val);
      else boxes.focus();
    };
  }

  function handleWordSubmission(inputVal) {
    if (curSpellCancel) curSpellCancel();
    const v = sessionWords[curWordIdx];
    const target = v.target;
    const isOk = isSpellAnswerCorrect(v.w, inputVal);

    if (isOk) {
      if (usedSpellHint) {
        saveSpellWordResult(t.id, target, false, null);
        store.addReviewWord(v, t.id, 'spell');
        mistakes.push({ v, target, typo: '(hint)' });
        currentStep = 'check';
        renderCorrectCheck(inputVal, true);
      } else {
        score++;
        saveSpellWordResult(t.id, target, true, null);
        currentStep = 'check';
        renderCorrectCheck(inputVal, false);
      }
    } else {
      mistakes.push({ v, target, typo: inputVal });
      saveSpellWordResult(t.id, target, false, inputVal);
      store.addReviewWord(v, t.id, 'spell');
      currentStep = 'check';
      renderIncorrectCheck(inputVal);
    }
  }

  function renderCorrectCheck(inputVal, withHint = false) {
    const v = sessionWords[curWordIdx];
    const target = v.target;
    speak(target);

    box.innerHTML = `<div class="card sl-card">
      <div class="qprog"><i style="width:${((curWordIdx + 1) / sessionWords.length) * 100}%"></i></div>
      ${renderStepper('check')}
      <div class="row between">
        <span class="eyebrow">Word ${curWordIdx + 1}/${sessionWords.length} · Correct ${score}</span>
        ${v.pos ? `<span class="pos">${esc(v.pos)}</span>` : ''}
      </div>

      <div style="text-align:center;margin:16px 0">
        ${withHint ? `
          <div class="fb" style="font-size:1.25rem;font-weight:600;color:var(--muted)">Correct — with hint</div>
          <h2 class="sl-target" style="font-size:2rem;color:var(--ink);margin:10px 0">${esc(target)}</h2>
        ` : `
          <div class="fb ok" style="font-size:1.35rem;font-weight:700">✓ Correct</div>
          <h2 class="sl-target" style="font-size:2rem;color:var(--ok,#10b981);margin:10px 0">${esc(target)}</h2>
        `}
        <div class="vi">${esc(formatVi(v.vi, v.pos))}</div>
      </div>

      <div class="row" style="justify-content:center;margin-top:16px">
        <button class="btn primary" id="sl-btn-next-word" type="button">Next Word →</button>
      </div>
    </div>`;

    const nextBtn = box.querySelector('#sl-btn-next-word');
    nextBtn.focus();
    nextBtn.onclick = () => {
      curWordIdx++;
      if (curWordIdx < sessionWords.length) {
        currentStep = 'write';
        renderWriteStep();
      } else {
        currentStep = 'log';
        renderLogStep();
      }
    };
  }

  function renderIncorrectCheck(inputVal) {
    const v = sessionWords[curWordIdx];
    const target = v.target;
    const diff = alignDiff(inputVal, target);
    const mistakeIndices = getTargetMistakeIndices(diff);
    let retypeRound = 1;

    function drawRetypeUI() {
      box.innerHTML = `<div class="card sl-card">
        <div class="qprog"><i style="width:${(curWordIdx / sessionWords.length) * 100}%"></i></div>
        ${renderStepper('check')}
        <div class="row between">
          <span class="eyebrow">Word ${curWordIdx + 1}/${sessionWords.length} · Correct ${score}</span>
          ${v.pos ? `<span class="pos">${esc(v.pos)}</span>` : ''}
        </div>

        <div style="text-align:center;margin-top:6px">
          <div class="fb no" style="font-weight:600">Incorrect spelling</div>
        </div>

        ${retypeRound === 1 ? `
          <div class="sl-diff-row" aria-label="Spelling comparison">
            ${diff.map(d => {
              if (d.type === 'ok') return `<div class="sl-diff-item ok"><span class="sl-diff-char">${esc(d.ch)}</span></div>`;
              if (d.type === 'wrong') return `<div class="sl-diff-item wrong"><span class="sl-diff-char">${esc(d.ch)}</span><span class="sl-diff-sub">${esc(d.correctCh)}</span></div>`;
              if (d.type === 'missing') return `<div class="sl-diff-item missing"><span class="sl-diff-char">${esc(d.correctCh)}</span><span class="sl-diff-sub">missing</span></div>`;
              return `<div class="sl-diff-item extra"><span class="sl-diff-char">${esc(d.ch)}</span><span class="sl-diff-sub">extra</span></div>`;
            }).join('')}
          </div>

          <div class="sl-diff-legend">
            <span class="sl-leg-item ok"><i class="sl-dot ok"></i> Correct</span>
            <span class="sl-leg-item wrong"><i class="sl-dot wrong"></i> Wrong (correct below)</span>
            <span class="sl-leg-item missing"><i class="sl-dot missing"></i> Missing letter</span>
            <span class="sl-leg-item extra"><i class="sl-dot extra"></i> Extra letter</span>
          </div>
        ` : ''}

        <div class="sl-retype-box">
          <div class="sl-retype-counter">Retype ${retypeRound}/3</div>
          ${retypeRound === 1 ? `
            <div class="sl-retype-target" aria-label="Target with mistake spots underlined">
              ${target.split('').map((c, i) => mistakeIndices.has(i) ? `<span class="sl-char-mistake">${c === ' ' ? '&nbsp;' : esc(c)}</span>` : `<span>${c === ' ' ? '&nbsp;' : esc(c)}</span>`).join('')}
            </div>
            <p class="hint" style="margin:2px 0">Notice the underlined letters you missed, then retype the word.</p>
          ` : `
            <p class="hint" style="margin:4px 0">Word covered — type it from memory.</p>
          `}

          <div id="sl-retype-mount" style="width:100%;display:flex;justify-content:center;margin:8px 0"></div>

          <div class="row" style="justify-content:center;width:100%;margin-top:6px">
            <button class="btn primary" type="button" id="sl-btn-retype-submit">Check</button>
          </div>
          <div class="fb" id="sl-retype-fb" style="min-height:22px"></div>
        </div>
      </div>`;

      const retypeMount = box.querySelector('#sl-retype-mount');
      const rFb = box.querySelector('#sl-retype-fb');

      function handleRetype(val) {
        if (!val) return;
        if (isSpellAnswerCorrect(v.w, val)) {
          if (retypeRound < 3) {
            retypeRound++;
            drawRetypeUI();
          } else {
            speak(target);
            const rBox = box.querySelector('.sl-retype-box');
            rBox.innerHTML = `
              <div class="fb ok" style="font-size:1.15rem;font-weight:700">✓ Retype 3/3 completed! Well done.</div>
              <div class="row" style="margin-top:8px">
                <button class="btn primary" id="sl-btn-next-word" type="button">Next Word →</button>
              </div>
            `;
            const nBtn = box.querySelector('#sl-btn-next-word');
            nBtn.focus();
            nBtn.onclick = () => {
              curWordIdx++;
              if (curWordIdx < sessionWords.length) {
                currentStep = 'write';
                renderWriteStep();
              } else {
                currentStep = 'log';
                renderLogStep();
              }
            };
          }
        } else {
          rBoxes.wrapper.classList.add('no');
          rFb.className = 'fb no';
          rFb.textContent = 'Incorrect, try typing again.';
          setTimeout(() => {
            rBoxes.wrapper.classList.remove('no');
            rBoxes.clear();
            rBoxes.focus();
          }, 600);
        }
      }

      const rBoxes = mountLetterBoxes(retypeMount, target, {
        ghost: new Set(),
        onSubmit: (val) => handleRetype(val)
      });
      rBoxes.focus();

      box.querySelector('#sl-btn-retype-submit').onclick = () => {
        const val = rBoxes.getValue();
        if (val) handleRetype(val);
        else rBoxes.focus();
      };
    }

    drawRetypeUI();
  }

  function renderLogStep() {
    const spellPct = Math.round((score / sessionWords.length) * 100);
    if (typeof recordHomeworkCompletion === 'function') {
      recordHomeworkCompletion('vocab_spell', String(t.id), spellPct);
    }
    box.innerHTML = `<div class="card sl-card">
      <div class="qprog"><i style="width:100%"></i></div>
      ${renderStepper('log')}
      <div class="eyebrow" style="text-align:center">Session Completed</div>
      <div class="big" style="text-align:center;font-size:2.8rem;margin:8px 0">${score}/${sessionWords.length}</div>
      <p class="hint" style="text-align:center">${score === sessionWords.length ? 'Perfect spelling! All words spelled correctly on first try.' : `You mastered ${score} of ${sessionWords.length} words on the first try.`}</p>

      ${mistakes.length ? `
        <div class="sl-summary-mistakes">
          <b>Words missed in this batch (saved to Saved Vocabulary):</b>
          <div class="sl-mistakes-table">
            ${mistakes.map(m => `
              <div class="sl-mistake-row">
                <span class="sl-typo-text">${esc(m.typo)}</span>
                <span class="op to" aria-hidden="true">→</span>
                <span class="sl-right-text">${esc(m.target)}</span>
                <span class="vi" style="margin-left:auto;color:var(--muted);font-size:0.85rem">${esc(formatVi(m.v.vi, m.v.pos))}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="row" style="margin-top:18px;gap:12px;justify-content:center">
        <button class="btn primary" id="sl-btn-next-batch" type="button">Next batch</button>
        <button class="btn ghost" id="sl-btn-back-start" type="button">Back to start</button>
      </div>
    </div>`;

    box.querySelector('#sl-btn-next-batch').onclick = () => {
      const freshLog = getSpellLog(t.id);
      const freshWords = pool.map(v => ({ ...v, target: getSpellTarget(v.w) }));
      const pNew = freshWords.filter(v => !freshLog.words[v.target]?.seen);
      const pWrong = freshWords.filter(v => (freshLog.words[v.target]?.wrong || 0) >= 2);
      let selectedPool = activeSource === 'new' ? pNew : (activeSource === 'wrong' ? pWrong : freshWords);
      if (!selectedPool.length) selectedPool = freshWords;
      sessionWords = shuffle(selectedPool).slice(0, Math.min(activeCount, selectedPool.length));
      curWordIdx = 0;
      score = 0;
      mistakes = [];
      currentStep = 'write';
      renderWriteStep();
    };

    box.querySelector('#sl-btn-back-start').onclick = () => {
      renderStart();
    };
  }

  function renderStart() {
    const curLog = getSpellLog(t.id);
    const pNew = wordsWithTarget.filter(v => !curLog.words[v.target]?.seen);
    const pWrong = wordsWithTarget.filter(v => (curLog.words[v.target]?.wrong || 0) >= 2);
    const pRandom = wordsWithTarget;

    const newCount = pNew.length;
    const wrongCount = pWrong.length;
    const randomCount = pRandom.length;

    if (activeSource === 'new' && newCount === 0) activeSource = wrongCount ? 'wrong' : 'random';
    if (activeSource === 'wrong' && wrongCount === 0) activeSource = newCount ? 'new' : 'random';

    const mistakeEntries = Object.entries(curLog.words || {})
      .filter(([w, data]) => (data.wrong || 0) > 0)
      .sort((a, b) => (b[1].wrong || 0) - (a[1].wrong || 0));

    box.innerHTML = `<div class="card sl-card sl-start-card">
      <div class="eyebrow">Spelling Lab</div>
      <h2 class="sl-title">Master English Spelling</h2>
      <p class="hint sl-subtitle">3-step practice: Listen &amp; Write → Check → Log</p>
      
      <div class="sl-section">
        <label class="sl-label">Word Source</label>
        <div class="seg sl-seg" id="sl-source-seg">
          <button type="button" data-src="new" ${newCount === 0 ? 'disabled' : ''} class="${activeSource === 'new' ? 'active' : ''}" aria-pressed="${activeSource === 'new'}">New (${newCount})</button>
          <button type="button" data-src="wrong" ${wrongCount === 0 ? 'disabled' : ''} class="${activeSource === 'wrong' ? 'active' : ''}" aria-pressed="${activeSource === 'wrong'}">Often wrong (${wrongCount})</button>
          <button type="button" data-src="random" ${randomCount === 0 ? 'disabled' : ''} class="${activeSource === 'random' ? 'active' : ''}" aria-pressed="${activeSource === 'random'}">Random (${randomCount})</button>
        </div>
      </div>

      <div class="sl-section">
        <label class="sl-label">Number of Words</label>
        <div class="seg sl-seg" id="sl-count-seg">
          <button type="button" data-cnt="5" class="${activeCount === 5 ? 'active' : ''}" aria-pressed="${activeCount === 5}">5 words</button>
          <button type="button" data-cnt="7" class="${activeCount === 7 ? 'active' : ''}" aria-pressed="${activeCount === 7}">7 words</button>
        </div>
      </div>

      <details class="sl-mistake-log-details" ${mistakeEntries.length ? 'open' : ''}>
        <summary class="sl-mistake-summary">
          <span>Mistake log (this topic)</span>
          <span class="sl-badge">${mistakeEntries.length} ${mistakeEntries.length === 1 ? 'word' : 'words'}</span>
        </summary>
        <div class="sl-mistake-log-content">
          ${mistakeEntries.length ? `
            <div class="sl-mistakes-table">
              ${mistakeEntries.map(([word, data]) => `
                <div class="sl-mistake-row">
                  <span class="sl-typo-text" title="Last mistake">${esc(data.lastWrong && data.lastWrong[0] ? data.lastWrong[0] : '—')}</span>
                  <span class="op to" aria-hidden="true">→</span>
                  <span class="sl-right-text" title="Correct word">${esc(word)}</span>
                  <span class="sl-wrong-badge">${data.wrong} ${data.wrong === 1 ? 'mistake' : 'mistakes'}</span>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="empty" style="padding:12px;font-size:0.9rem">No recorded mistakes yet in this topic.</div>
          `}
        </div>
      </details>

      <div class="row sl-start-actions">
        <button class="btn primary sl-btn-start" id="sl-start-btn">Start</button>
      </div>
    </div>`;

    box.querySelectorAll('#sl-source-seg button:not([disabled])').forEach(btn => {
      btn.onclick = () => {
        activeSource = btn.dataset.src;
        renderStart();
      };
    });

    box.querySelectorAll('#sl-count-seg button').forEach(btn => {
      btn.onclick = () => {
        activeCount = parseInt(btn.dataset.cnt, 10) || 5;
        renderStart();
      };
    });

    const startBtn = box.querySelector('#sl-start-btn');
    if (startBtn) {
      startBtn.onclick = () => {
        let selectedPool = activeSource === 'new' ? pNew : (activeSource === 'wrong' ? pWrong : pRandom);
        if (!selectedPool.length) selectedPool = pRandom;
        sessionWords = shuffle(selectedPool).slice(0, Math.min(activeCount, selectedPool.length));
        curWordIdx = 0;
        score = 0;
        mistakes = [];
        currentStep = 'write';
        renderWriteStep();
      };
    }
  }

  renderStart();
}

// ---------- PART 2 ----------
const OPS = { '=':['eq','='], '->':['to','→'], '→':['to','→'], '~':['sim','≈'], '><':['vs','≠'] };