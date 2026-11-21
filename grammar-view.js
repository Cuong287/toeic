// grammar-view.js - Core TOEIC Grammar Module (13 Topics)
import { GRAMMAR_TOPICS } from './grammar-data.js?v=38';

let appStore = null;
let appEsc = null;
let appSpeak = null;
let curTopicId = 'tenses';
let curFilter = 'all'; // 'all' | 'unanswered' | 'answered'
const grammarState = {};

export function resetGrammarTopicState() {
  Object.keys(grammarState).forEach(k => delete grammarState[k]);
}

export function initGrammarView(context) {
  appStore = context.store;
  appEsc = context.esc;
  appSpeak = context.speak;
}

export function getGrammarTopicState(topicId) {
  const key = String(topicId);
  const saved = appStore ? appStore.get('grammar_ex:' + key, null) : null;
  const savedObj = (saved && typeof saved === 'object') ? saved : null;

  if (!grammarState[key]) {
    grammarState[key] = savedObj || { answers: {}, notes: {}, updatedAt: Date.now() };
    if (!grammarState[key].notes) grammarState[key].notes = {};
    if (!grammarState[key].answers) grammarState[key].answers = {};
  } else if (savedObj && savedObj.updatedAt && savedObj.updatedAt > (grammarState[key].updatedAt || 0)) {
    grammarState[key] = savedObj;
    if (!grammarState[key].notes) grammarState[key].notes = {};
    if (!grammarState[key].answers) grammarState[key].answers = {};
  }
  return grammarState[key];
}

export function saveGrammarTopicAnswer(topicId, qId, val) {
  const key = String(topicId);
  const state = getGrammarTopicState(key);
  if (qId && val !== undefined) {
    state.answers[qId] = val;
  }
  state.updatedAt = Date.now();
  if (appStore) {
    appStore.set('grammar_ex:' + key, state);
  }
  const badge = document.querySelector('#grammar-autosave-badge');
  if (badge) {
    badge.textContent = '✓ Auto-saved at ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    badge.style.color = 'var(--good)';
  }
}

export function renderGrammar(box) {
  const esc = appEsc || (s => String(s ?? ''));
  const currentTopic = GRAMMAR_TOPICS.find(t => t.id === curTopicId) || GRAMMAR_TOPICS[0];
  const tState = getGrammarTopicState(currentTopic.id);
  const answers = tState.answers || {};

  // Calculate statistics for active topic
  const totalQuestions = currentTopic.questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  // Correct count for questions that have known keys
  let correctCount = 0;
  let gradedCount = 0;
  currentTopic.questions.forEach(q => {
    if (q.answer && answers[q.id]) {
      gradedCount++;
      if (answers[q.id] === q.answer) correctCount++;
    }
  });

  box.innerHTML = `
    <!-- Top Header -->
    <div class="card" style="margin-bottom:16px;padding:20px 24px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="display:inline-flex;align-items:center;gap:6px;background:var(--accent-soft);color:var(--accent);padding:4px 10px;border-radius:6px;font-size:11.5px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:8px">
            COMPREHENSIVE TOEIC GRAMMAR
          </div>
          <h1 style="font-size:22px;font-weight:800;margin:0 0 6px;letter-spacing:-0.01em;color:var(--ink)">Core TOEIC Grammar</h1>
          <p class="hint" style="margin:0;font-size:13.5px;color:var(--muted)">
            13 Topics · 974 ETS TOEIC aligned practice questions with instant grading and notes
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="grammar-autosave-badge" style="font-size:12px;color:var(--muted);font-weight:600">Auto-save active</span>
        </div>
      </div>

      <!-- Topic Selector Carousel / Grid -->
      <div style="margin-top:18px;padding-top:14px;border-top:1px solid var(--line)">
        <div style="font-weight:700;font-size:12px;margin-bottom:10px;color:var(--muted);letter-spacing:0.05em;text-transform:uppercase">13 GRAMMAR TOPICS:</div>
        <div class="practice-pills-scroll" style="display:flex;gap:8px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:8px;scrollbar-width:none">
          ${GRAMMAR_TOPICS.map(t => {
            const st = getGrammarTopicState(t.id);
            const ansNum = Object.keys(st.answers || {}).length;
            const isFinished = ansNum >= t.questions.length && t.questions.length > 0;
            const isActive = t.id === currentTopic.id;
            return `
              <button class="btn ${isActive ? 'primary' : 'ghost'} btn-select-topic" data-tid="${t.id}" style="font-size:12.5px;padding:7px 12px;border-radius:6px;white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:6px">
                <span>${esc(t.title.split('(')[0].trim())}</span>
                <span class="badge" style="background:${isActive ? 'rgba(255,255,255,0.22)' : 'var(--sunk)'};color:${isActive ? '#FFF' : 'var(--muted)'};font-size:11px">
                  ${isFinished ? '✓ ' : ''}${ansNum}/${t.questions.length}
                </span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Active Topic Action Bar -->
    <div class="card" style="margin-bottom:16px;padding:14px 18px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <h2 style="margin:0 0 4px;font-size:17px;font-weight:700;color:var(--ink)">${esc(currentTopic.title)}</h2>
          <div class="hint" style="font-size:13px;color:var(--muted)">${esc(currentTopic.desc)}</div>
        </div>

        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <!-- Filter buttons -->
          <div style="display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden">
            <button class="btn ${curFilter === 'all' ? 'primary' : 'ghost'} btn-filter" id="grammar-filter-all" data-f="all" style="font-size:12px;padding:4px 10px;border-radius:0">All (${totalQuestions})</button>
            <button class="btn ${curFilter === 'unanswered' ? 'primary' : 'ghost'} btn-filter" id="grammar-filter-unanswered" data-f="unanswered" style="font-size:12px;padding:4px 10px;border-radius:0">Unanswered (${totalQuestions - answeredCount})</button>
            <button class="btn ${curFilter === 'answered' ? 'primary' : 'ghost'} btn-filter" id="grammar-filter-answered" data-f="answered" style="font-size:12px;padding:4px 10px;border-radius:0">Answered (${answeredCount})</button>
          </div>

          <!-- Progress stats -->
          <div style="display:flex;align-items:center;gap:8px">
            <span id="grammar-answered-count" style="font-size:13px;font-weight:700;color:var(--ink)">${answeredCount}/${totalQuestions} completed</span>
            <div style="width:80px;height:6px;background:var(--sunk);border-radius:3px;overflow:hidden">
              <div id="grammar-progress-bar" style="width:${progressPct}%;height:100%;background:var(--accent);transition:width 0.2s"></div>
            </div>
            ${gradedCount > 0 ? `<span style="font-size:12px;color:var(--good);font-weight:700">✓ ${correctCount}/${gradedCount} correct</span>` : ''}
          </div>

          <button class="btn ghost btn-reset-topic" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Reset Topic</button>
        </div>
      </div>
    </div>

    <!-- Questions Container -->
    <div id="grammar-questions-list" style="display:flex;flex-direction:column;gap:14px"></div>
  `;

  // Attach Topic selector events
  box.querySelectorAll('.btn-select-topic').forEach(btn => {
    btn.onclick = () => {
      curTopicId = btn.dataset.tid;
      renderGrammar(box);
    };
  });

  const activeTopicPill = box.querySelector('.btn-select-topic.primary');
  if (activeTopicPill && activeTopicPill.scrollIntoView) {
    try { activeTopicPill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch(e){}
  }

  // Attach Filter events
  box.querySelectorAll('.btn-filter').forEach(btn => {
    btn.onclick = () => {
      curFilter = btn.dataset.f;
      renderGrammar(box);
    };
  });

  // Reset Topic
  const resetBtn = box.querySelector('.btn-reset-topic');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm(`Are you sure you want to reset all answers for "${currentTopic.title}"?`)) {
        tState.answers = {};
        if (appStore) appStore.set('grammar_ex:' + currentTopic.id, tState);
        renderGrammar(box);
      }
    };
  }

  // Render question cards
  const qListContainer = box.querySelector('#grammar-questions-list');
  renderQuestionsList(qListContainer, currentTopic, box);
}


function updateGrammarStatsUI(box, topic) {
  if (!box || !topic) return;
  const tState = getGrammarTopicState(topic.id);
  const answers = tState.answers || {};
  const totalQuestions = topic.questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const isFinished = answeredCount >= totalQuestions && totalQuestions > 0;

  let correctCount = 0;
  let gradedCount = 0;
  topic.questions.forEach(q => {
    if (q.answer && answers[q.id]) {
      gradedCount++;
      if (answers[q.id] === q.answer) correctCount++;
    }
  });

  const countEl = box.querySelector('#grammar-answered-count');
  if (countEl) countEl.textContent = `${answeredCount}/${totalQuestions} completed`;

  const progEl = box.querySelector('#grammar-progress-bar');
  if (progEl) progEl.style.width = `${progressPct}%`;

  const corrEl = box.querySelector('#grammar-correct-badge');
  if (corrEl) {
    if (gradedCount > 0) {
      corrEl.textContent = `✓ ${correctCount}/${gradedCount} correct`;
      corrEl.style.display = 'inline';
    } else {
      corrEl.style.display = 'none';
    }
  }

  const fAll = box.querySelector('#grammar-filter-all');
  if (fAll) fAll.textContent = `All (${totalQuestions})`;
  const fUnans = box.querySelector('#grammar-filter-unanswered');
  if (fUnans) fUnans.textContent = `Unanswered (${totalQuestions - answeredCount})`;
  const fAns = box.querySelector('#grammar-filter-answered');
  if (fAns) fAns.textContent = `Answered (${answeredCount})`;

  const topicBadge = box.querySelector(`.btn-select-topic[data-tid="${topic.id}"] .badge`);
  if (topicBadge) {
    topicBadge.textContent = `${isFinished ? '✓ ' : ''}${answeredCount}/${totalQuestions}`;
  }
}

function renderQuestionsList(container, topic, box) {
  const esc = appEsc || (s => String(s ?? ''));
  const tState = getGrammarTopicState(topic.id);
  const answers = tState.answers || {};
  const notes = tState.notes || {};

  // Filter questions
  let displayQuestions = topic.questions;
  if (curFilter === 'unanswered') {
    displayQuestions = topic.questions.filter(q => !answers[q.id]);
  } else if (curFilter === 'answered') {
    displayQuestions = topic.questions.filter(q => answers[q.id]);
  }

  if (displayQuestions.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align:center;padding:40px 20px">
        <div style="font-weight:700;font-size:15px;margin-bottom:4px;color:var(--ink)">No questions found in this filter</div>
        <div class="hint" style="color:var(--muted);font-size:13px">Select 'All' or switch to another topic.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = displayQuestions.map(q => {
    const selectedOpt = answers[q.id] || null;
    const hasAnswerKey = Boolean(q.answer);
    const isCorrect = hasAnswerKey && selectedOpt === q.answer;
    const isWrong = hasAnswerKey && selectedOpt && selectedOpt !== q.answer;

    // Highlight blank lines in stem
    const formattedStem = esc(q.stem).replace(/(----+|____+|[._]{4,})/g, '<span style="border-bottom:2px dashed var(--accent);padding:0 14px;color:var(--accent);font-weight:700">____</span>');

    return `
      <div class="card q-card" id="qcard-${esc(q.id)}" style="padding:16px 18px;border:1px solid ${selectedOpt ? (isCorrect ? 'var(--good)' : (isWrong ? 'var(--bad)' : 'var(--line)')) : 'var(--line)'};background:var(--surface);border-radius:8px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-weight:700;font-size:13px;background:var(--sunk);padding:2px 8px;border-radius:4px;color:var(--ink)">
              Question ${q.num}
            </span>
            ${isCorrect ? `<span style="font-size:12px;color:var(--good);font-weight:700">✓ Correct</span>` : ''}
            ${isWrong ? `<span style="font-size:12px;color:var(--bad);font-weight:700">✕ Incorrect, try again!</span>` : ''}
          </div>
          <button class="btn icon-btn btn-speak-q" data-stem="${esc(q.stem)}" title="Listen to question" aria-label="Listen" style="padding:4px 8px;display:inline-flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          </button>
        </div>

        <!-- Question Stem -->
        <div style="font-size:15px;line-height:1.6;font-weight:600;margin-bottom:14px;color:var(--ink)">
          ${formattedStem}
        </div>

        <!-- 4 Options Grid -->
        <div class="grammar-options-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:8px">
          ${['A', 'B', 'C', 'D'].map(optKey => {
            const optVal = q.options[optKey] || '';
            if (!optVal) return '';

            const isThisSelected = selectedOpt === optKey;

            let btnStyle = 'background:var(--bg);border:1px solid var(--line);color:var(--ink)';
            let iconMark = `<span style="font-weight:700;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--sunk);margin-right:8px;font-size:12px">${optKey}</span>`;

            if (selectedOpt) {
              if (hasAnswerKey) {
                if (isCorrect && isThisSelected) {
                  btnStyle = 'background:var(--good-soft);border:1.5px solid var(--good);color:var(--good);font-weight:700';
                  iconMark = `<span style="font-weight:700;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--good);color:#FFF;margin-right:8px;font-size:12px">✓</span>`;
                } else if (isThisSelected && isWrong) {
                  btnStyle = 'background:var(--bad-soft);border:1.5px solid var(--bad);color:var(--bad);font-weight:700';
                  iconMark = `<span style="font-weight:700;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--bad);color:#FFF;margin-right:8px;font-size:12px">✕</span>`;
                }
              } else {
                if (isThisSelected) {
                  btnStyle = 'background:var(--accent);border:1.5px solid var(--accent);color:#FFFFFF;font-weight:700';
                  iconMark = `<span style="font-weight:700;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:rgba(255,255,255,0.25);color:#FFF;margin-right:8px;font-size:12px">✓</span>`;
                }
              }
            }

            return `
              <button class="btn btn-grammar-opt" data-qid="${esc(q.id)}" data-opt="${optKey}" style="text-align:left;padding:9px 12px;border-radius:6px;display:flex;align-items:center;cursor:pointer;font-size:13.5px;transition:all 0.15s;${btnStyle}">
                ${iconMark}
                <span style="flex:1">${esc(optVal)}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation if available (Only shown when answered correctly) -->
        ${(isCorrect && q.explanation) ? `
          <div style="margin-top:12px;padding:8px 12px;background:var(--warn-soft);border-left:3px solid var(--warn);border-radius:4px;font-size:13px;color:var(--ink)">
            <span style="font-weight:700;color:var(--warn)">Grammar Note:</span> ${esc(q.explanation)}
          </div>
        ` : ''}

        <!-- User Note Field -->
        <div style="margin-top:12px;display:flex;align-items:center;gap:8px">
          <span style="font-size:12px;color:var(--muted);white-space:nowrap;font-weight:600">Note:</span>
          <input type="text" class="grammar-user-note" data-qid="${esc(q.id)}" value="${esc(notes[q.id] || '')}" placeholder="Add personal notes for this question (auto-saved)..." style="flex:1;padding:6px 10px;border-radius:6px;border:1px dashed var(--line);background:var(--bg);color:var(--ink);font-size:13px;outline:none" />
        </div>
      </div>
    `;
  }).join('');

  // Attach option selection click events
  container.querySelectorAll('.btn-grammar-opt').forEach(btn => {
    btn.onclick = () => {
      const qId = btn.dataset.qid;
      const opt = btn.dataset.opt;
      saveGrammarTopicAnswer(topic.id, qId, opt);
      updateGrammarStatsUI(box, topic);
      // Re-render questions list to update active card states
      renderQuestionsList(container, topic, box);
    };
  });

  // Attach Note typing auto-save
  container.querySelectorAll('.grammar-user-note').forEach(input => {
    let noteTimer = null;
    const saveNote = () => {
      const qId = input.dataset.qid;
      if (!tState.notes) tState.notes = {};
      tState.notes[qId] = input.value;
      saveGrammarTopicAnswer(topic.id);
    };
    input.oninput = () => {
      const qId = input.dataset.qid;
      if (!tState.notes) tState.notes = {};
      tState.notes[qId] = input.value;
      clearTimeout(noteTimer);
      noteTimer = setTimeout(saveNote, 300);
    };
    input.onblur = saveNote;
    input.onchange = saveNote;
  });

  // Attach Speak events
  container.querySelectorAll('.btn-speak-q').forEach(btn => {
    btn.onclick = () => {
      const stem = btn.dataset.stem;
      if (stem && appSpeak) {
        // Clean blanks for smoother TTS
        const cleanForTts = stem.replace(/(----+|____+|[._]{4,})/g, 'blank');
        appSpeak(cleanForTts);
      }
    };
  });
}
