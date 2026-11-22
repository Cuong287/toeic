// pronunciation-view.js - Pronunciation Module (50 Cambridge Units, IPA, Minimal Pairs, Rules)
import { IPA_DATA, MINIMAL_PAIRS, PRONUN_UNITS } from './pronunciation-data.js?v=40';

let store = null;
let esc = s => s;
let speak = null;
let showToast = null;
let confirmModal = null;
let openModal = null;
let closeModal = null;
let S = null;
let goTo = null;

let curPronunTab = 'ipa';
let curIpaFilter = 'all';
let curSelectedIpaId = 'i_long';
let curSelectedPairId = 'pair_1';
let curSelectedSection = 'A';
let currentCambridgeAudio = null;
let currentCambridgeTrackKey = null;

const MIC_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>';

export function initPronunciationView(context) {
  if (!context) return;
  store = context.store || store;
  esc = context.esc || esc;
  speak = context.speak || speak;
  showToast = context.showToast || showToast;
  confirmModal = context.confirmModal || confirmModal;
  openModal = context.openModal || openModal;
  closeModal = context.closeModal || closeModal;
  S = context.S || S;
  goTo = context.goTo || goTo;
}

export function playCambridgeTrack(cdNum, trackName, label, btnEl, playerContainerId) {
  const trackKey = `cd${cdNum}_${trackName}`;
  const audioPath = `audio/pronun/cd${cdNum}/${trackName}`;
  const pContainer = playerContainerId ? document.getElementById(playerContainerId) : null;

  if (currentCambridgeAudio && currentCambridgeTrackKey === trackKey) {
    if (!currentCambridgeAudio.paused) {
      currentCambridgeAudio.pause();
      if (btnEl) btnEl.innerHTML = `Original Audio (${label || trackName})`;
      return;
    } else {
      currentCambridgeAudio.play();
      if (btnEl) btnEl.innerHTML = `Pause (${label || trackName})`;
      return;
    }
  }

  if (currentCambridgeAudio) {
    currentCambridgeAudio.pause();
    currentCambridgeAudio = null;
    document.querySelectorAll('.cambridge-play-btn').forEach(b => {
      if (b.dataset.origLabel) b.innerHTML = b.dataset.origLabel;
    });
  }

  const audio = new Audio(audioPath);
  currentCambridgeAudio = audio;
  currentCambridgeTrackKey = trackKey;

  if (btnEl) {
    if (!btnEl.dataset.origLabel) btnEl.dataset.origLabel = btnEl.innerHTML;
    btnEl.innerHTML = `Loading audio...`;
  }

  audio.play().then(() => {
    if (btnEl) btnEl.innerHTML = `Pause (${label || trackName})`;
  }).catch(err => {
    console.error('Lỗi phát Cambridge audio:', err);
    if (btnEl) btnEl.innerHTML = btnEl.dataset.origLabel || `Original Audio`;
    showToast(`Audio file ${audioPath} not found. Please ensure it is located in web/audio/pronun/cd${cdNum}/`);
  });

  audio.ontimeupdate = () => {
    if (pContainer) {
      const cur = audio.currentTime;
      const dur = audio.duration || 0;
      const timeEl = pContainer.querySelector('.cambridge-time-text');
      const seekEl = pContainer.querySelector('.cambridge-seek-bar');
      if (timeEl) {
        const fmt = s => Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2, '0');
        timeEl.textContent = `${fmt(cur)} / ${fmt(dur)}`;
      }
      if (seekEl && dur > 0) {
        seekEl.value = (cur / dur) * 100;
      }
    }
  };

  audio.onseeked = () => {
    if (audio.ontimeupdate) audio.ontimeupdate();
  };

  audio.onended = () => {
    if (btnEl) btnEl.innerHTML = btnEl.dataset.origLabel || `Original Audio (${label || trackName})`;
    if (pContainer) {
      const timeEl = pContainer.querySelector('.cambridge-time-text');
      const seekEl = pContainer.querySelector('.cambridge-seek-bar');
      const dur = audio.duration || 0;
      const fmt = s => Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2, '0');
      if (timeEl) timeEl.textContent = `0:00 / ${fmt(dur)}`;
      if (seekEl) seekEl.value = 0;
    }
    audio.currentTime = 0;
  };
}

export function seekCambridgeTrack(percent) {
  if (currentCambridgeAudio && currentCambridgeAudio.duration) {
    currentCambridgeAudio.currentTime = (Number(percent) / 100) * currentCambridgeAudio.duration;
    if (currentCambridgeAudio.ontimeupdate) currentCambridgeAudio.ontimeupdate();
  }
}

export function skipCambridgeTrack(seconds) {
  if (currentCambridgeAudio) {
    currentCambridgeAudio.currentTime = Math.max(0, Math.min(currentCambridgeAudio.duration || 999, currentCambridgeAudio.currentTime + Number(seconds)));
    if (currentCambridgeAudio.ontimeupdate) currentCambridgeAudio.ontimeupdate();
  }
}
let currentCambridgeSegmentCode = null;

export function playCambridgeSegment(cdNum, trackName, startSec, endSec, code, btnEl) {
  const audioPath = `audio/pronun/cd${cdNum}/${trackName}`;

  if (currentCambridgeAudio && currentCambridgeSegmentCode === code) {
    if (!currentCambridgeAudio.paused) {
      currentCambridgeAudio.pause();
      if (btnEl) btnEl.classList.remove('playing');
      return;
    } else {
      currentCambridgeAudio.play();
      if (btnEl) btnEl.classList.add('playing');
      return;
    }
  }

  if (currentCambridgeAudio) {
    currentCambridgeAudio.pause();
    document.querySelectorAll('.cambridge-segment-btn').forEach(b => b.classList.remove('playing'));
    document.querySelectorAll('.cambridge-play-btn').forEach(b => {
      if (b.dataset.origLabel) b.innerHTML = b.dataset.origLabel;
    });
  }

  const audio = new Audio(audioPath);
  currentCambridgeAudio = audio;
  currentCambridgeSegmentCode = code;

  audio.currentTime = startSec;
  audio.play().then(() => {
    if (btnEl) btnEl.classList.add('playing');
  }).catch(err => {
    console.error('Audio play error:', err);
    showToast(`Unable to play audio segment ${code} from ${audioPath}`);
  });

  audio.ontimeupdate = () => {
    if (audio.currentTime >= endSec) {
      audio.pause();
      if (btnEl) btnEl.classList.remove('playing');
      currentCambridgeAudio = null;
      currentCambridgeSegmentCode = null;
    }
  };

  audio.onended = () => {
    if (btnEl) btnEl.classList.remove('playing');
    currentCambridgeAudio = null;
    currentCambridgeSegmentCode = null;
  };
}
window.playCambridgeSegment = playCambridgeSegment;

window.playCambridgeTrack = playCambridgeTrack;
window.seekCambridgeTrack = seekCambridgeTrack;
window.skipCambridgeTrack = skipCambridgeTrack;

let curSelectedUnitId = 2;
let curUnitViewMode = 'sections'; // 'sections' (Mục A-B-C-D) | 'exercises' (Bài tập thực hành) | 'ai_speaking' (Luyện nói AI)
let unitExState = {}; // { [unitId]: { [exId]: { answers: {}, checked: false, updatedAt: ms } } }

export function getUnitExState(unitId) {
  const key = String(unitId);
  if (!unitExState[key]) {
    const saved = store.get('pronun_ex:' + key, null);
    unitExState[key] = (saved && typeof saved === 'object') ? saved : {};
  }
  return unitExState[key];
}

export function saveUnitExState(unitId, exId) {
  const key = String(unitId);
  const uState = getUnitExState(key);
  if (exId && uState[exId]) {
    uState[exId].updatedAt = Date.now();
  }
  store.set('pronun_ex:' + key, uState);
  const badge = document.querySelector('#pronun-autosave-badge');
  if (badge) {
    badge.textContent = '✓ Auto-saved at ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    badge.style.color = 'var(--good)';
  }
}
let listenPairsPlayed = {}; // stores randomly played word per drill
let earQuizWord = null;
let earQuizPair = null;

export function renderPronunciation(box) {
  box.innerHTML = `
    <div class="pronun-header">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div style="flex:1;min-width:280px">
          <div style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.05em;background:var(--accent-soft);padding:3px 8px;border-radius:6px;margin-bottom:6px">
            <span>Cambridge English Pronunciation in Use</span>
            <span>·</span>
            <span>Elementary</span>
          </div>
          <h1 style="margin:2px 0 6px;font-size:24px;font-weight:800;letter-spacing:-.02em">Pronunciation & Speaking Lab</h1>
          <p class="hint" style="margin:0;font-size:13.5px;line-height:1.5">
            Master standard English pronunciation: 44 IPA sounds, 14 minimal pairs, 50 Cambridge units, -s/-ed inflections, and real-time voice recognition.
          </p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <a href="./docs/English-Pronunciation-In-Use-Elementary.pdf" target="_blank" class="btn" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px;padding:8px 12px;font-size:13px;border-radius:8px" title="View Cambridge Reference PDF">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            <span>Cambridge PDF</span>
          </a>
        </div>
      </div>

      <div class="seg" id="pronun-tabs" style="margin-top:18px;display:flex;gap:4px;overflow-x:auto;padding-bottom:4px">
        <button class="${curPronunTab === 'ipa' ? 'active' : ''}" data-tab="ipa">IPA Chart (44 Sounds)</button>
        <button class="${curPronunTab === 'pairs' ? 'active' : ''}" data-tab="pairs">Minimal Pairs</button>
        <button class="${curPronunTab === 'units' ? 'active' : ''}" data-tab="units">50 Units (1 - 50)</button>
        <button class="${curPronunTab === 'rules' ? 'active' : ''}" data-tab="rules">Rules (-s & -ed)</button>
      </div>
    </div>

    <div id="pronun-content"></div>
  `;

  box.querySelectorAll('#pronun-tabs button').forEach(btn => {
    btn.onclick = () => {
      box.querySelectorAll('#pronun-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      curPronunTab = btn.dataset.tab;
      renderPronunSubTab(box.querySelector('#pronun-content'));
    };
  });

  renderPronunSubTab(box.querySelector('#pronun-content'));
}

function renderPronunSubTab(container) {
  if (!container) return;
  if (curPronunTab === 'ipa') renderIpaTab(container);
  else if (curPronunTab === 'pairs') renderPairsTab(container);
  else if (curPronunTab === 'units') renderUnitsTab(container);
  else if (curPronunTab === 'rules') renderRulesTab(container);
}

// --------------------------------------------------------------------------
// 1. SUB-TAB: IPA 44 SOUNDS
// --------------------------------------------------------------------------
function renderIpaTab(container) {
  const filtered = IPA_DATA.filter(it => {
    if (curIpaFilter === 'all') return true;
    if (curIpaFilter === 'monophthong') return it.type === 'vowel' && (it.sub === 'short' || it.sub === 'long');
    if (curIpaFilter === 'diphthong') return it.sub === 'diphthong';
    if (curIpaFilter === 'voiceless') return it.sub === 'voiceless';
    if (curIpaFilter === 'voiced') return it.sub === 'voiced';
    return true;
  });

  const curIpa = IPA_DATA.find(it => it.id === curSelectedIpaId) || IPA_DATA[0];

  container.innerHTML = `
    <div class="ipa-filter-bar">
      <button class="btn ${curIpaFilter === 'all' ? 'primary' : 'ghost'}" data-f="all">All (44 Sounds)</button>
      <button class="btn ${curIpaFilter === 'monophthong' ? 'primary' : 'ghost'}" data-f="monophthong">Monophthongs (12)</button>
      <button class="btn ${curIpaFilter === 'diphthong' ? 'primary' : 'ghost'}" data-f="diphthong">Diphthongs (8)</button>
      <button class="btn ${curIpaFilter === 'voiceless' ? 'primary' : 'ghost'}" data-f="voiceless">Voiceless Consonants (9)</button>
      <button class="btn ${curIpaFilter === 'voiced' ? 'primary' : 'ghost'}" data-f="voiced">Voiced Consonants (15)</button>
    </div>

    <div style="font-size:14px;font-weight:700;margin:16px 0 10px">Select an IPA sound below for details and pronunciation drills:</div>
    <div class="ipa-grid">
      ${filtered.map(it => `
        <div class="ipa-card ${it.id === curIpa.id ? 'active' : ''}" data-id="${it.id}">
          <div class="ipa-sym">${esc(it.ipa)}</div>
          <div class="ipa-sample">${esc(it.sample)}</div>
          <div class="ipa-name">${esc(it.name)}</div>
        </div>
      `).join('')}
    </div>

    <div class="ipa-detail-box" id="ipa-detail-view" style="margin-top:20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:14px;border-bottom:1px solid var(--line);padding-bottom:14px">
        <div style="display:flex;align-items:center;gap:16px">
          <div style="font-size:38px;font-weight:800;color:var(--accent);min-width:65px;text-align:center;background:var(--sunk);border:1.5px solid var(--accent);border-radius:12px;padding:6px 12px">${esc(curIpa.ipa)}</div>
          <div>
            <div style="font-size:17px;font-weight:700">${esc(curIpa.name)}</div>
            <div style="font-size:12.5px;color:var(--muted);margin-top:2px">Sample Word: <b style="color:var(--accent)">${esc(curIpa.sample)}</b></div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="btn" id="btn-spk-sample" aria-label="Play sample ${esc(curIpa.sample)}" style="display:inline-flex;align-items:center;gap:6px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            <span>Listen Sample</span>
          </button>
          <button class="icon-btn rec-btn" data-rec-text="${esc(curIpa.sample)}" data-rec-id="ipa-main-${curIpa.id}" title="Practice sample word ${esc(curIpa.sample)}" aria-label="Record sample ${esc(curIpa.sample)}" style="width:40px;height:40px">
            ${MIC_ICON}
          </button>
        </div>
      </div>

      <div style="margin-top:12px">
        <div style="font-size:13.5px;font-weight:600;color:var(--ink);margin-bottom:4px">Articulation & Pronunciation Guide:</div>
        <div style="font-size:14px;line-height:1.6;color:var(--ink);background:var(--sunk);padding:10px 14px;border-radius:8px">${esc(curIpa.guide)}</div>
      </div>

      <div style="margin-top:16px">
        <div style="font-size:13.5px;font-weight:700;margin-bottom:8px">Practice words for sound ${esc(curIpa.ipa)}:</div>
        <div class="pronun-word-grid">
          ${curIpa.words.map((w, idx) => `
            <div class="pronun-word-card">
              <div class="pronun-word-card-top">
                <div>
                  <div style="font-size:15px;font-weight:700">${esc(w)}</div>
                  <div style="font-size:12px;color:var(--muted)">${esc(curIpa.ipa)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:6px">
                  <button class="icon-btn" onclick="speak('${esc(w)}')" title="Listen to pronunciation" aria-label="Play ${esc(w)}" style="width:34px;height:34px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                  <button class="icon-btn rec-btn" data-rec-text="${esc(w)}" data-rec-id="ipa-w-${curIpa.id}-${idx}" title="Practice speaking ${esc(w)}" aria-label="Record ${esc(w)}" style="width:34px;height:34px">
                    ${MIC_ICON}
                  </button>
                </div>
              </div>
              <div id="slot-ipa-w-${curIpa.id}-${idx}" class="rec-slot" style="width:100%"></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div id="slot-ipa-main-${curIpa.id}" class="rec-slot" style="margin-top:8px"></div>
    </div>
  `;

  container.querySelector('#btn-spk-sample').onclick = () => speak(curIpa.sample);

  container.querySelectorAll('.ipa-filter-bar button').forEach(b => {
    b.onclick = () => {
      curIpaFilter = b.dataset.f;
      renderIpaTab(container);
    };
  });

  container.querySelectorAll('.ipa-card').forEach(c => {
    c.onclick = () => {
      curSelectedIpaId = c.dataset.id;
      renderIpaTab(container);
      const detailView = container.querySelector('#ipa-detail-view');
      if (detailView) detailView.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  });
}

// --------------------------------------------------------------------------
// 2. SUB-TAB: MINIMAL PAIRS
// --------------------------------------------------------------------------
function renderPairsTab(container) {
  const curPair = MINIMAL_PAIRS.find(p => p.id === curSelectedPairId) || MINIMAL_PAIRS[0];

  container.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:16px;margin-bottom:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
        <div>
          <label for="pair-select" style="font-size:13px;font-weight:700;display:block;margin-bottom:4px">Select Minimal Pair:</label>
          <select id="pair-select" style="padding:8px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font-size:14px;font-weight:600">
            ${MINIMAL_PAIRS.map(p => `
              <option value="${p.id}" ${p.id === curPair.id ? 'selected' : ''}>${esc(p.pair)} — ${esc(p.desc)}</option>
            `).join('')}
          </select>
        </div>
        <button class="btn primary" id="btn-play-all-pair" style="display:inline-flex;align-items:center;gap:6px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Play All Pairs</span>
        </button>
      </div>
      <div style="margin-top:10px;font-size:13.5px;color:var(--muted)">💡 ${esc(curPair.desc)} (From Cambridge Unit ${curPair.unit} & Appendix E3)</div>
    </div>

    <!-- Ear Training Mini Game -->
    <div class="card" style="margin-bottom:18px;border-left:4px solid var(--accent)">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div>
          <b style="font-size:15px">Ear Training Challenge</b>
          <div class="hint" style="font-size:12.5px;margin-top:2px">Listen to the audio and identify which word was spoken:</div>
        </div>
        <button class="btn" id="btn-new-quiz">New Challenge</button>
      </div>
      <div id="quiz-ear-box" style="margin-top:14px"></div>
    </div>

    <!-- Minimal pairs table -->
    <div class="pair-box">
      <div style="font-size:15px;font-weight:800;margin-bottom:12px">${curPair.items.length} Contrasting Word Pairs:</div>
      ${curPair.items.map((it, idx) => `
        <div class="pair-item-row">
          <!-- Word 1 -->
          <div style="display:flex;align-items:center;justify-content:space-between;background:var(--surface);padding:8px 12px;border-radius:6px;border:1px solid var(--line)">
            <div>
              <div style="font-size:16px;font-weight:800;color:var(--accent)">${esc(it.w1)}</div>
              <div style="font-size:12px;color:var(--muted)">${esc(it.ipa1)} · ${esc(it.vi1)}</div>
            </div>
            <div style="display:flex;gap:4px">
              <button class="icon-btn" onclick="speak('${esc(it.w1)}')" title="Listen to ${esc(it.w1)}" aria-label="Play ${esc(it.w1)}" style="width:34px;height:34px">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
              <button class="icon-btn rec-btn" data-rec-text="${esc(it.w1)}" data-rec-id="pair-${curPair.id}-${idx}-1" title="Practice speaking ${esc(it.w1)}" aria-label="Record ${esc(it.w1)}" style="width:34px;height:34px">
                ${MIC_ICON}
              </button>
            </div>
          </div>

          <!-- Center VS Button -->
          <div style="text-align:center">
            <button class="btn ghost" style="padding:4px 8px;font-size:11.5px;font-weight:700" onclick="playPairCompare('${esc(it.w1)}', '${esc(it.w2)}')" title="Listen to seamless pair comparison">
              A ➜ B
            </button>
          </div>

          <!-- Word 2 -->
          <div style="display:flex;align-items:center;justify-content:space-between;background:var(--surface);padding:8px 12px;border-radius:6px;border:1px solid var(--line)">
            <div>
              <div style="font-size:16px;font-weight:800;color:#059669">${esc(it.w2)}</div>
              <div style="font-size:12px;color:var(--muted)">${esc(it.ipa2)} · ${esc(it.vi2)}</div>
            </div>
            <div style="display:flex;gap:4px">
              <button class="icon-btn" onclick="speak('${esc(it.w2)}')" title="Listen to ${esc(it.w2)}" aria-label="Play ${esc(it.w2)}" style="width:34px;height:34px">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
              <button class="icon-btn rec-btn" data-rec-text="${esc(it.w2)}" data-rec-id="pair-${curPair.id}-${idx}-2" title="Practice speaking ${esc(it.w2)}" aria-label="Record ${esc(it.w2)}" style="width:34px;height:34px">
                ${MIC_ICON}
              </button>
            </div>
          </div>
        </div>
        <div id="slot-pair-${curPair.id}-${idx}-1" class="rec-slot" style="margin-bottom:4px"></div>
        <div id="slot-pair-${curPair.id}-${idx}-2" class="rec-slot" style="margin-bottom:8px"></div>
      `).join('')}
    </div>
  `;

  container.querySelector('#pair-select').onchange = (e) => {
    curSelectedPairId = e.target.value;
    renderPairsTab(container);
  };

  container.querySelector('#btn-play-all-pair').onclick = async () => {
    for (const it of curPair.items) {
      speak(it.w1);
      await new Promise(r => setTimeout(r, 900));
      speak(it.w2);
      await new Promise(r => setTimeout(r, 1200));
    }
  };

  // Ear training quiz logic
  setupEarQuiz(container.querySelector('#quiz-ear-box'), curPair);
  container.querySelector('#btn-new-quiz').onclick = () => setupEarQuiz(container.querySelector('#quiz-ear-box'), curPair);
}

window.playPairCompare = function(w1, w2) {
  speak(w1);
  setTimeout(() => speak(w2), 800);
};

function setupEarQuiz(quizBox, pair) {
  if (!quizBox) return;
  const randItem = pair.items[Math.floor(Math.random() * pair.items.length)];
  const isW1 = Math.random() > 0.5;
  const targetWord = isW1 ? randItem.w1 : randItem.w2;

  quizBox.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <button class="btn primary" id="btn-quiz-spk" style="padding:10px 16px;font-size:14px;font-weight:700">
        Listen to Mystery Word
      </button>
      <div style="display:flex;gap:10px">
        <button class="btn" id="btn-ans-1" style="font-size:15px;font-weight:700;padding:10px 18px">${esc(randItem.w1)}</button>
        <button class="btn" id="btn-ans-2" style="font-size:15px;font-weight:700;padding:10px 18px">${esc(randItem.w2)}</button>
      </div>
    </div>
    <div id="quiz-feedback" style="margin-top:10px;font-weight:600;min-height:24px"></div>
  `;

  quizBox.querySelector('#btn-quiz-spk').onclick = () => speak(targetWord);
  // Auto speak on first load
  setTimeout(() => speak(targetWord), 300);

  function checkAns(selected) {
    const fb = quizBox.querySelector('#quiz-feedback');
    if (selected === targetWord) {
      fb.className = 'fb ok';
      fb.innerHTML = `✓ Correct! The spoken word was <b>${esc(targetWord)}</b> (${isW1 ? esc(randItem.ipa1) : esc(randItem.ipa2)} - ${isW1 ? esc(randItem.vi1) : esc(randItem.vi2)}).`;
    } else {
      fb.className = 'fb no';
      fb.innerHTML = `✕ Incorrect. The audio said <b>${esc(targetWord)}</b>. Click to listen again to compare.`;
    }
  }

  quizBox.querySelector('#btn-ans-1').onclick = () => checkAns(randItem.w1);
  quizBox.querySelector('#btn-ans-2').onclick = () => checkAns(randItem.w2);
}

// --------------------------------------------------------------------------
// 3. SUB-TAB: 50 UNITS (CAMBRIDGE)
// --------------------------------------------------------------------------
function renderUnitsTab(container) {
  const sectionUnits = PRONUN_UNITS.filter(u => u.section === curSelectedSection);
  let curUnit = sectionUnits.find(u => u.id === curSelectedUnitId) || sectionUnits[0] || PRONUN_UNITS[0];

  container.innerHTML = `
    <!-- Top Filter & Unit Selector -->
    <div style="background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:16px;margin-bottom:16px">
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;margin-bottom:12px">
        <button class="btn ${curSelectedSection === 'A' ? 'primary' : 'ghost'}" data-sec="A">Section A: Sounds & Spelling (1-27)</button>
        <button class="btn ${curSelectedSection === 'B' ? 'primary' : 'ghost'}" data-sec="B">Section B: Syllables & Words (28-32)</button>
        <button class="btn ${curSelectedSection === 'C' ? 'primary' : 'ghost'}" data-sec="C">Section C: Phrases & Sentences (33-43)</button>
        <button class="btn ${curSelectedSection === 'D' ? 'primary' : 'ghost'}" data-sec="D">Section D: Conversation (44-50)</button>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
        <div style="flex:1;min-width:260px">
          <label for="unit-select" style="font-size:12.5px;font-weight:700;display:block;margin-bottom:4px">Select Unit:</label>
          <select id="unit-select" style="width:100%;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font-size:14px;font-weight:700">
            ${sectionUnits.map(u => `
              <option value="${u.id}" ${u.id === curUnit.id ? 'selected' : ''}>Unit ${String(u.id).padStart(2, '0')}: ${esc(u.title)} (${esc(u.sound)})</option>
            `).join('')}
          </select>
        </div>
      </div>
    </div>

    <!-- Unit Header & Mode Switcher -->
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:14px">
        <div>
          <div class="eyebrow" style="color:var(--accent);font-weight:700">Unit ${curUnit.id} · ${esc(curUnit.sectionName)}</div>
          <h2 style="margin:4px 0 2px;font-size:22px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <span>${esc(curUnit.title)}</span>
            <span style="font-size:15px;font-weight:800;color:#E11D48;background:rgba(225,29,72,0.1);padding:4px 10px;border-radius:6px">${esc(curUnit.sound)}</span>
          </h2>
          <div style="font-size:13.5px;color:var(--muted)">${esc(curUnit.subtitle)}</div>
        </div>

        <!-- Mode switcher tab buttons -->
        <div style="display:flex;gap:6px;background:var(--sunk);padding:4px;border-radius:10px;border:1px solid var(--line);flex-wrap:wrap">
          <button class="btn ${curUnitViewMode === 'sections' ? 'primary' : 'ghost'} unit-mode-btn" data-mode="sections" style="padding:7px 12px;font-size:13px;font-weight:700">
            Lessons (Sections A-D)
          </button>
          <button class="btn ${curUnitViewMode === 'exercises' ? 'primary' : 'ghost'} unit-mode-btn" data-mode="exercises" style="padding:7px 12px;font-size:13px;font-weight:700">
            Exercises (${curUnit.exercises ? curUnit.exercises.length : 'Practice'})
          </button>
          <button class="btn ${curUnitViewMode === 'ai_speaking' ? 'primary' : 'ghost'} unit-mode-btn" data-mode="ai_speaking" style="padding:7px 12px;font-size:13px;font-weight:700">
            Speaking Practice
          </button>
        </div>
      </div>

      <!-- Main Unit Content Area -->
      <div id="unit-main-content"></div>
    </div>
  `;

  // Attach section filter & unit dropdown
  container.querySelectorAll('[data-sec]').forEach(b => {
    b.onclick = () => {
      curSelectedSection = b.dataset.sec;
      const firstInSec = PRONUN_UNITS.find(u => u.section === curSelectedSection);
      if (firstInSec) curSelectedUnitId = firstInSec.id;
      renderUnitsTab(container);
    };
  });

  container.querySelector('#unit-select').onchange = (e) => {
    curSelectedUnitId = Number(e.target.value);
    renderUnitsTab(container);
  };

  container.querySelectorAll('.unit-mode-btn').forEach(b => {
    b.onclick = () => {
      curUnitViewMode = b.dataset.mode;
      renderUnitsTab(container);
    };
  });

  const contentBox = container.querySelector('#unit-main-content');
  if (curUnitViewMode === 'sections') {
    renderUnitSections(curUnit, contentBox, container);
  } else if (curUnitViewMode === 'exercises') {
    renderUnitExercises(curUnit, contentBox, container);
  } else {
    renderUnitAiSpeaking(curUnit, contentBox);
  }
}

// --------------------------------------------------------------------------
// 3.1. RENDER UNIT SECTIONS (MỤC A, B, C, D THEO SÁCH CAMBRIDGE)
// --------------------------------------------------------------------------
function renderUnitSections(u, box, container) {
  if (u.sections && u.sections.length > 0) {
    box.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:18px">
        ${u.sections.map((sec, secIdx) => `
          <div class="unit-sec-card">
            <!-- Section Header -->
            <div class="unit-sec-header">
              <div class="unit-sec-badge">${esc(sec.letter)}</div>
              <div style="flex:1">
                <h3 class="unit-sec-title">${esc(sec.title)}</h3>
                ${sec.commonRule ? `
                  <div style="font-size:13.5px;color:var(--muted);margin-top:4px;display:flex;align-items:center;flex-wrap:wrap;gap:6px">
                    ${sec.ruleSegment ? `
                      <button type="button" class="cambridge-segment-btn"
                        onclick="playCambridgeSegment(${sec.ruleSegment.cd}, '${esc(sec.ruleSegment.track)}', ${sec.ruleSegment.start}, ${sec.ruleSegment.end}, '${esc(sec.ruleSegment.code)}', this)"
                        title="Listen to ${esc(sec.ruleSegment.code)} (Original audio)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(sec.ruleSegment.code)}
                      </button>
                    ` : ''}
                    <span>${esc(sec.commonRule)}</span>
                  </div>
                ` : ''}
              </div>
              ${sec.targetSound ? `
                <div style="display:flex;align-items:center;gap:6px">
                  <button class="btn" onclick="speak('${esc(sec.targetWord || sec.targetSound)}')" style="display:inline-flex;align-items:center;gap:4px;padding:5px 10px;font-size:12.5px" title="Listen to sample sound">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    <span>Listen ${esc(sec.targetSound)}</span>
                  </button>
                  <button class="btn rec-btn" data-rec-text="${esc(sec.targetWord || sec.targetSound)}" data-rec-id="sec-${u.id}-${sec.letter}" style="padding:5px 10px;font-size:12.5px" title="Practice speaking this sound">
                    ${MIC_ICON}
                    <span>Speak</span>
                  </button>
                </div>
              ` : ''}
            </div>

            <!-- Cambridge Official CD Audio Player Bar (Full Track) -->
            ${(sec.audio && (sec.letter === 'A' || sec.letter === 'C')) ? `
              <div class="cambridge-player-bar" id="cambridge-player-${u.id}-${sec.letter}">
                <div class="cambridge-tag">
                  <span class="cambridge-tag-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(sec.audio.code)}</span>
                  <span style="font-size:13.5px">${esc(sec.audio.label || `CD${sec.audio.cd} ${sec.audio.track}`)}</span>
                </div>
                <div class="cambridge-audio-ctrls">
                  <button class="btn primary cambridge-play-btn"
                    onclick="playCambridgeTrack(${sec.audio.cd}, '${esc(sec.audio.track)}', '${esc(sec.audio.code)}', this, 'cambridge-player-${u.id}-${sec.letter}')"
                    style="font-size:12.5px;padding:5px 12px;font-weight:700">
                    Original Audio (${esc(sec.audio.code)})
                  </button>
                  <button class="btn ghost" onclick="skipCambridgeTrack(-5)" title="Rewind 5s" style="padding:5px 8px;font-size:12px">⏪ 5s</button>
                  <button class="btn ghost" onclick="skipCambridgeTrack(5)" title="Forward 5s" style="padding:5px 8px;font-size:12px">⏩ 5s</button>
                  <span class="cambridge-time-text">0:00 / 0:00</span>
                  <input type="range" class="cambridge-seek-bar" min="0" max="100" value="0" oninput="seekCambridgeTrack(this.value)" />
                </div>
              </div>
            ` : ''}

            <!-- Target sound slot if user records -->
            ${sec.targetSound ? `<div id="slot-sec-${u.id}-${sec.letter}" class="rec-slot" style="margin-bottom:12px"></div>` : ''}

            <!-- How to make sound: 2-column layout (Guide text + Diagram) with Segment Button -->
            ${sec.diagram ? `
              <div class="unit-mouth-grid" style="margin-bottom:16px">
                <div style="font-size:14px;line-height:1.6">
                  <div style="color:var(--ink);font-weight:600;margin-bottom:8px;display:flex;align-items:flex-start;gap:6px">
                    ${sec.audioSegment ? `
                      <button type="button" class="cambridge-segment-btn" style="flex-shrink:0;margin-top:2px"
                        onclick="playCambridgeSegment(${sec.audioSegment.cd}, '${esc(sec.audioSegment.track)}', ${sec.audioSegment.start}, ${sec.audioSegment.end}, '${esc(sec.audioSegment.code)}', this)"
                        title="Listen to ${esc(sec.audioSegment.code)} (Target Sound & Articulation)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(sec.audioSegment.code)}
                      </button>
                    ` : ''}
                    <span>${esc(sec.guideEn)}</span>
                  </div>
                  <div style="background:var(--sunk);border-left:3px solid #E11D48;padding:10px 12px;border-radius:6px;font-size:13.5px;color:var(--muted)">
                    <strong>Articulation Guide:</strong> ${esc(sec.guideVi)}
                  </div>
                </div>
                <div class="unit-mouth-box">
                  <img src="${esc(sec.diagram)}" alt="Articulation ${esc(sec.targetSound)}" />
                  <div class="unit-mouth-desc">${esc(sec.diagramDesc || '')}</div>
                </div>
              </div>
            ` : (sec.guideEn ? `
              <div style="background:var(--sunk);padding:12px 14px;border-radius:8px;font-size:14px;line-height:1.6;margin-bottom:14px">
                <div style="font-weight:600;color:var(--ink);margin-bottom:4px;display:flex;align-items:center;gap:6px">
                  ${sec.audioSegment ? `
                    <button type="button" class="cambridge-segment-btn"
                      onclick="playCambridgeSegment(${sec.audioSegment.cd}, '${esc(sec.audioSegment.track)}', ${sec.audioSegment.start}, ${sec.audioSegment.end}, '${esc(sec.audioSegment.code)}', this)"
                      title="Listen to ${esc(sec.audioSegment.code)}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(sec.audioSegment.code)}
                    </button>
                  ` : ''}
                  <span>${esc(sec.guideEn)}</span>
                </div>
                ${sec.guideVi ? `<div style="font-size:13px;color:var(--muted)">💡 ${esc(sec.guideVi)}</div>` : ''}
              </div>
            ` : '')}

            <!-- Word Groups (if any) with Segment Button -->
            ${sec.groups && sec.groups.length > 0 ? `
              <div style="margin-top:14px">
                <div style="font-size:13px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:8px">
                  ${sec.otherWordsSegment ? `
                    <button type="button" class="cambridge-segment-btn"
                      onclick="playCambridgeSegment(${sec.otherWordsSegment.cd}, '${esc(sec.otherWordsSegment.track)}', ${sec.otherWordsSegment.start}, ${sec.otherWordsSegment.end}, '${esc(sec.otherWordsSegment.code)}', this)"
                      title="Listen to ${esc(sec.otherWordsSegment.code)}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(sec.otherWordsSegment.code)}
                    </button>
                  ` : ''}
                  <span>Spelling & Word Examples:</span>
                </div>
                <div style="display:flex;flex-direction:column;gap:10px">
                  ${sec.groups.map((grp, gIdx) => `
                    <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
                      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                        <span style="font-weight:800;font-size:13.5px;color:var(--ink)">Spelling: ${esc(grp.pattern)}</span>
                        ${grp.badge ? `<span style="font-size:11px;font-weight:700;color:#E11D48;background:rgba(225,29,72,0.1);padding:2px 8px;border-radius:12px">${esc(grp.badge)}</span>` : ''}
                      </div>
                      <div style="display:flex;flex-wrap:wrap;gap:8px">
                        ${grp.words.map((w, wIdx) => `
                          <div style="display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:4px 8px">
                            <span style="font-weight:800;font-size:14px">${esc(w.w)}</span>
                            <span style="font-size:12px;color:var(--muted)">${esc(w.ipa)}</span>
                            <button class="icon-btn" onclick="speak('${esc(w.w)}')" title="Listen to ${esc(w.w)}" aria-label="Play ${esc(w.w)}" style="width:26px;height:26px">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                            </button>
                            <button class="icon-btn rec-btn" data-rec-text="${esc(w.w)}" data-rec-id="u-w-${u.id}-${sec.letter}-${gIdx}-${wIdx}" title="Practice speaking ${esc(w.w)}" aria-label="Record ${esc(w.w)}" style="width:26px;height:26px">
                              ${MIC_ICON}
                            </button>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Sentences or Phrases with Segment Button & Book Illustration -->
            ${sec.sentences && sec.sentences.length > 0 ? `
              <div style="margin-top:16px">
                <div style="font-size:13px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:8px">
                  ${(sec.sentencesSegment || sec.phrasesSegment) ? `
                    <button type="button" class="cambridge-segment-btn"
                      onclick="playCambridgeSegment(${(sec.sentencesSegment||sec.phrasesSegment).cd}, '${esc((sec.sentencesSegment||sec.phrasesSegment).track)}', ${(sec.sentencesSegment||sec.phrasesSegment).start}, ${(sec.sentencesSegment||sec.phrasesSegment).end}, '${esc((sec.sentencesSegment||sec.phrasesSegment).code)}', this)"
                      title="Listen to ${esc((sec.sentencesSegment||sec.phrasesSegment).code)}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc((sec.sentencesSegment||sec.phrasesSegment).code)}
                    </button>
                  ` : ''}
                  <span>${sec.letter === 'D' ? 'Conversation Phrases:' : 'Target Practice Sentences:'}</span>
                </div>
                <div class="${sec.illustration ? 'unit-ex-with-img-grid' : ''}">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    ${sec.sentences.map((sent, sIdx) => {
                      const enText = typeof sent === 'string' ? sent : sent.en;
                      const viText = typeof sent === 'object' ? sent.vi : '';
                      return `
                        <div class="sentence-drill-item">
                          <div class="sentence-top-bar">
                            <div style="flex:1;min-width:200px">
                              <div style="font-size:15px;font-weight:700;color:var(--ink)">${sIdx + 1}. "${esc(enText)}"</div>
                              ${viText ? `<div style="font-size:12.5px;color:var(--muted);margin-top:2px">${esc(viText)}</div>` : ''}
                            </div>
                            <div style="display:flex;gap:6px">
                              <button class="btn" onclick="speak('${esc(enText)}')" style="display:inline-flex;align-items:center;gap:4px;padding:5px 10px;font-size:12px">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                                <span>Listen</span>
                              </button>
                              <button class="btn rec-btn" data-rec-text="${esc(enText)}" data-rec-id="u-s-${u.id}-${sec.letter}-${sIdx}" style="padding:5px 10px;font-size:12px">
                                ${MIC_ICON}
                                <span>Speak</span>
                              </button>
                            </div>
                          </div>
                          <div id="slot-u-s-${u.id}-${sec.letter}-${sIdx}" class="rec-slot"></div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                  ${sec.illustration ? `
                    <div class="unit-ex-illustration-box">
                      <img src="${esc(sec.illustration)}" alt="${esc(sec.illustrationCaption || '')}" />
                      <div class="unit-ex-illustration-caption">${esc(sec.illustrationCaption || 'Cambridge Illustration')}</div>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- Notes with Segment Buttons (A10e, A10f, A10g) -->
            ${sec.notes && sec.notes.length > 0 ? `
              <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">
                ${sec.notes.map(n => `
                  <div class="unit-note-box">
                    <div style="font-weight:800;color:#d97706;margin-bottom:4px;display:flex;align-items:center;gap:6px">
                      ${n.audioSegment ? `
                        <button type="button" class="cambridge-segment-btn"
                          onclick="playCambridgeSegment(${n.audioSegment.cd}, '${esc(n.audioSegment.track)}', ${n.audioSegment.start}, ${n.audioSegment.end}, '${esc(n.audioSegment.code)}', this)"
                          title="Listen to ${esc(n.audioSegment.code)} (Audio note)">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(n.audioSegment.code)}
                        </button>
                      ` : ''}
                      <span>Note: ${esc(n.tag)}:</span>
                    </div>
                    <div style="color:var(--ink)">${esc(n.content)}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}

        <!-- Bottom CTA to Exercises -->
        <div style="background:linear-gradient(135deg, rgba(225,29,72,0.06), rgba(99,102,241,0.06));border:1.5px dashed var(--accent);border-radius:12px;padding:20px;text-align:center">
          <div style="font-size:16px;font-weight:800;margin-bottom:6px">Unit ${u.id} Lessons Completed?</div>
          <div style="font-size:13.5px;color:var(--muted);margin-bottom:12px">Proceed to exercises to complete all practice tasks from the textbook!</div>
          <button class="btn primary" id="btn-jump-exercises" style="padding:10px 24px;font-size:14.5px;font-weight:700">
            Start Unit ${u.id} Exercises →
          </button>
        </div>
      </div>
    `;

    const jumpBtn = box.querySelector('#btn-jump-exercises');
    if (jumpBtn) {
      jumpBtn.onclick = () => {
        curUnitViewMode = 'exercises';
        renderUnitsTab(container);
      };
    }
  } else {
    box.innerHTML = `
      <div style="background:var(--sunk);padding:14px;border-radius:8px;font-size:14px;line-height:1.6;margin-bottom:16px">
        <strong>Pronunciation Rule:</strong> ${esc(u.rule)}
      </div>
      <div style="margin-top:14px">
        <div style="font-size:14px;font-weight:800;margin-bottom:8px">Target Vocabulary:</div>
        <div class="pronun-word-grid">
          ${u.words.map((w, idx) => `
            <div class="pronun-word-card">
              <div class="pronun-word-card-top">
                <div>
                  <div style="font-size:15px;font-weight:800">${esc(w.w)}</div>
                  <div style="font-size:12px;color:var(--muted)">${esc(w.ipa)} · ${esc(w.vi)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:4px">
                  <button class="icon-btn" onclick="speak('${esc(w.w)}')" title="Listen to ${esc(w.w)}" aria-label="Play ${esc(w.w)}" style="width:34px;height:34px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                  <button class="icon-btn rec-btn" data-rec-text="${esc(w.w)}" data-rec-id="u-w-${u.id}-${idx}" title="Practice speaking ${esc(w.w)}" aria-label="Record ${esc(w.w)}" style="width:34px;height:34px">
                    ${MIC_ICON}
                  </button>
                </div>
              </div>
              <div id="slot-u-w-${u.id}-${idx}" class="rec-slot" style="width:100%"></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="margin-top:20px">
        <div style="font-size:14px;font-weight:800;margin-bottom:8px">Practice Sentences:</div>
        <div>
          ${u.sentences.map((sent, idx) => `
            <div class="sentence-drill-item">
              <div class="sentence-top-bar">
                <div style="font-size:15px;font-weight:700;color:var(--ink);flex:1">${idx + 1}. "${esc(sent)}"</div>
                <div style="display:flex;gap:6px">
                  <button class="btn" onclick="speak('${esc(sent)}')" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;font-size:12.5px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    <span>Listen</span>
                  </button>
                  <button class="btn rec-btn" data-rec-text="${esc(sent)}" data-rec-id="u-s-${u.id}-${idx}" style="padding:6px 12px;font-size:12.5px">
                    ${MIC_ICON}
                    <span>Speak</span>
                  </button>
                </div>
              </div>
              <div id="slot-u-s-${u.id}-${idx}" class="rec-slot"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function renderUnitExercises(u, box, container) {
  const uState = getUnitExState(u.id);

  const exList = u.exercises || [];
  if (exList.length === 0) {
    box.innerHTML = `
      <div style="background:var(--sunk);border:1px solid var(--line);border-radius:12px;padding:24px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:8px">Unit Completed</div>
        <div style="font-size:16px;font-weight:800;color:var(--ink)">Unit ${u.id} Practice Exercises</div>
        <div style="font-size:13.5px;color:var(--muted);margin:8px auto 16px;max-width:460px">
          Train ear distinction and practice speaking target vocabulary and sentence patterns from this unit.
        </div>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn primary" onclick="speak('${esc(u.words[0] ? u.words[0].w : 'hello')}')">Listen to Unit Vocabulary</button>
          <button class="btn" onclick="curUnitViewMode='sections';renderUnitsTab(document.querySelector('#pronun-container')||document.body)">Review Lesson</button>
        </div>
      </div>
    `;
    return;
  }

  const completedCount = exList.filter(ex => uState[ex.id] && uState[ex.id].checked).length;
  const pct = Math.round((completedCount / exList.length) * 100);

  box.innerHTML = `
    <!-- Exercise Progress Bar -->
    <div style="background:var(--sunk);border:1px solid var(--line);border-radius:10px;padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
      <div style="flex:1;min-width:200px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;font-size:13px;font-weight:700;margin-bottom:6px">
          <span>Unit ${u.id} Exercises Progress:</span>
          <span style="display:inline-flex;align-items:center;gap:10px">
            <span id="pronun-autosave-badge" style="font-size:11.5px;font-weight:600;color:var(--good)">✓ Auto-saved</span>
            <span style="color:var(--accent)">${completedCount}/${exList.length} completed (${pct}%)</span>
          </span>
        </div>
        <div style="height:8px;background:var(--line);border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:linear-gradient(90deg, #E11D48, #6366F1);border-radius:4px;transition:width 0.3s"></div>
        </div>
      </div>
      <div>
        <button class="btn ghost" id="btn-reset-exercises" style="font-size:12.5px;padding:6px 12px">
          Reset Exercises
        </button>
      </div>
    </div>

    <!-- Render Each Exercise Card -->
    <div style="display:flex;flex-direction:column;gap:22px">
      ${exList.map((ex, exIdx) => renderSingleExercise(u, ex, exIdx, uState)).join('')}
    </div>
  `;

  box.querySelector('#btn-reset-exercises').onclick = async () => {
    const ok = await confirmModal({
      title: 'Reset Unit Exercises?',
      message: 'Are you sure you want to reset all exercise answers for this unit?',
      confirmText: 'Reset',
      cancelText: 'Cancel',
      danger: true
    });
    if (ok) {
      unitExState[String(u.id)] = {};
      store.set('pronun_ex:' + u.id, {});
      renderUnitsTab(container);
      showToast('Reset exercises for Unit ' + u.id);
    }
  };

  bindAllExerciseEvents(u, box, container);
}

// --------------------------------------------------------------------------
// Helper: Render Single Exercise Card
// --------------------------------------------------------------------------
function renderSingleExercise(u, ex, exIdx, uState) {
  const st = uState[ex.id] || { answers: {}, checked: false };

  const exAudioBar = ex.audio ? `
    <div class="cambridge-player-bar" id="cambridge-player-ex-${ex.id}" style="margin-top:10px;margin-bottom:12px">
      <div class="cambridge-tag">
        <span class="cambridge-tag-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:-1.5px;margin-right:3px"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>${esc(ex.audio.code)}</span>
        <span style="font-size:13px">${esc(ex.audio.label || `CD${ex.audio.cd} ${ex.audio.track}`)}</span>
      </div>
      <div class="cambridge-audio-ctrls">
        <button class="btn primary cambridge-play-btn"
          onclick="playCambridgeTrack(${ex.audio.cd}, '${esc(ex.audio.track)}', '${esc(ex.audio.code)}', this, 'cambridge-player-ex-${ex.id}')"
          style="font-size:12px;padding:4px 10px;font-weight:700">
          Original Audio (${esc(ex.audio.code)})
        </button>
        <button class="btn ghost" onclick="skipCambridgeTrack(-5)" title="Rewind 5s" style="padding:4px 6px;font-size:11.5px">⏪ 5s</button>
        <button class="btn ghost" onclick="skipCambridgeTrack(5)" title="Forward 5s" style="padding:4px 6px;font-size:11.5px">⏩ 5s</button>
        <span class="cambridge-time-text">0:00 / 0:00</span>
        <input type="range" class="cambridge-seek-bar" min="0" max="100" value="0" oninput="seekCambridgeTrack(this.value)" />
      </div>
    </div>
  ` : '';

  if (ex.type === 'fill_dialogue') {
    return `
      <div class="unit-ex-card" id="ex-card-${ex.id}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <div>
            <div style="font-size:17px;font-weight:800;color:var(--ink)">${esc(ex.title)}</div>
            <div style="font-size:13.5px;color:var(--muted);margin-top:2px">${esc(ex.instruction)}</div>
          </div>
          ${st.checked ? `<span class="badge" style="background:#10b981;color:#fff;padding:4px 10px;font-weight:700">Completed</span>` : ''}
        </div>

        ${exAudioBar}

        <!-- Word Bank Chips -->
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:6px">
          <div style="font-size:12.5px;font-weight:700;color:var(--muted)">Word Bank (Click word to insert):</div>
          <label style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);cursor:pointer;user-select:none" title="Audio is muted on click during dialogues by default.">
            <input type="checkbox" class="chk-speak-on-fill" data-ex-id="${ex.id}" style="cursor:pointer" />
            <span>Pronounce on select</span>
          </label>
        </div>
        <div class="unit-word-bank">
          ${ex.wordBank.map(w => {
            const isUsed = Object.values(st.answers || {}).some(val => String(val).trim().toLowerCase() === w.trim().toLowerCase());
            return `<button type="button" class="unit-word-chip ${isUsed ? 'used' : ''}" data-word="${esc(w)}" title="Click to insert into blank">${esc(w)}</button>`;
          }).join('')}
        </div>

        <!-- Dialogues List with Book Illustration -->
        <div class="${ex.image ? 'unit-ex-with-img-grid' : ''}">
          <div style="display:flex;flex-direction:column;gap:12px">
            ${ex.dialogues.map((diag, dIdx) => `
              <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px 14px">
                <div style="font-weight:800;font-size:13px;color:var(--muted);margin-bottom:6px">Dialogue ${dIdx + 1}:</div>
                ${diag.lines.map((line, lIdx) => `
                  <div style="font-size:14.5px;line-height:2;margin-bottom:4px">
                    <strong style="color:var(--accent)">${esc(line.speaker)}:</strong>
                    ${line.parts.map((p, pIdx) => {
                      if (typeof p === 'string') return esc(p);
                      const blankKey = `d_${diag.id}_l_${lIdx}_b_${pIdx}`;
                      const val = st.answers[blankKey] || '';
                      const isRight = st.checked && (val.trim().toLowerCase() === p.blank.toLowerCase());
                      const isWrong = st.checked && !isRight;
                      return `
                        <input type="text" class="unit-blank-input ${isRight ? 'correct' : (isWrong ? 'wrong' : '')}"
                          data-blank-key="${blankKey}"
                          data-expected="${esc(p.blank)}"
                          value="${esc(val)}"
                          placeholder="..."
                          autocomplete="off"
                          autocapitalize="none"
                          style="width:${Math.max(90, p.blank.length * 12)}px" />
                        ${isWrong ? `<span style="font-size:12px;font-weight:700;color:#dc2626">(${esc(p.blank)})</span>` : ''}
                      `;
                    }).join('')}
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
          ${ex.image ? `
            <div class="unit-ex-illustration-box">
              <img src="${esc(ex.image)}" alt="${esc(ex.imageAlt || '')}" />
              <div class="unit-ex-illustration-caption">Exercise 2.1 illustration</div>
            </div>
          ` : ''}
        </div>

        <!-- Check Button & Speech Tools -->
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
          <button class="btn primary btn-check-ex" data-ex-id="${ex.id}" style="padding:8px 18px;font-weight:700">
            ${st.checked ? 'Re-check' : 'Check Answers'}
          </button>
          <div style="display:flex;gap:6px">
            <button class="btn ghost" onclick="speak('What shall we do this evening? Let\\'s stay at home and watch TV.')" style="font-size:12.5px">
              Listen Dialogue 1
            </button>
            <button class="btn ghost" onclick="speak('Let me read that email! No, it is a secret!')" style="font-size:12.5px">
              Listen Dialogue 2
            </button>
            <button class="btn ghost" onclick="speak('You know my friend Steve? Yes. Well, he has got a new job. He has joined the police!')" style="font-size:12.5px">
              Listen Dialogue 3
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (ex.type === 'clues') {
    return `
      <div class="unit-ex-card" id="ex-card-${ex.id}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <div>
            <div style="font-size:17px;font-weight:800;color:var(--ink)">${esc(ex.title)}</div>
            <div style="font-size:13.5px;color:var(--muted);margin-top:2px">${esc(ex.instruction)}</div>
          </div>
          ${st.checked ? `<span class="badge" style="background:#10b981;color:#fff;padding:4px 10px;font-weight:700">Checked</span>` : ''}
        </div>

        ${exAudioBar}

        <!-- Clues List with Book Illustration Collage -->
        <div class="${ex.image ? 'unit-ex-with-img-grid' : ''}">
          <div style="display:flex;flex-direction:column;gap:10px">
            ${ex.items.map((it, idx) => {
              const val = st.answers[`clue_${it.id}`] || '';
              const isRight = st.checked && (val.trim().toLowerCase() === it.answer.toLowerCase());
              const isWrong = st.checked && !isRight;
              return `
                <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
                  <div style="flex:1;min-width:260px;font-size:14.5px">
                    <span style="font-weight:800;color:var(--accent)">${it.id}.</span> ${esc(it.clue)}
                    <div id="hint-box-${ex.id}-${it.id}" style="font-size:12px;color:var(--muted);margin-top:2px;display:none">
                      Hint: <strong>${esc(it.hint)}</strong>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;gap:6px">
                    <button type="button" class="btn ghost btn-show-hint" data-hint-id="hint-box-${ex.id}-${it.id}" style="padding:4px 8px;font-size:12px" title="View hint">
                      💡
                    </button>
                    <input type="text" class="unit-blank-input ${isRight ? 'correct' : (isWrong ? 'wrong' : '')}"
                      data-clue-id="${it.id}"
                      data-expected="${esc(it.answer)}"
                      value="${esc(val)}"
                      placeholder="Type word..."
                      style="width:110px" />
                    <button class="icon-btn" onclick="speak('${esc(it.answer)}')" title="Listen to word" style="width:30px;height:30px">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                    ${isWrong ? `<span style="font-size:12px;font-weight:700;color:#dc2626">(${esc(it.answer)})</span>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          ${ex.image ? `
            <div class="unit-ex-illustration-box">
              <img src="${esc(ex.image)}" alt="${esc(ex.imageAlt || '')}" />
              <div class="unit-ex-illustration-caption">Cambridge illustration hint</div>
            </div>
          ` : ''}
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between">
          <button class="btn primary btn-check-clues" data-ex-id="${ex.id}" style="padding:8px 18px;font-weight:700">
            ${st.checked ? 'Re-check' : 'Check Answers'}
          </button>
        </div>
      </div>
    `;
  }

  if (ex.type === 'sort_sounds') {
    const words = ex.words;
    return `
      <div class="unit-ex-card" id="ex-card-${ex.id}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <div>
            <div style="font-size:17px;font-weight:800;color:var(--ink)">${esc(ex.title)}</div>
            <div style="font-size:13.5px;color:var(--muted);margin-top:2px">${esc(ex.instruction)}</div>
          </div>
          ${st.checked ? `<span class="badge" style="background:#10b981;color:#fff;padding:4px 10px;font-weight:700">Checked</span>` : ''}
        </div>

        ${exAudioBar}

        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:8px;margin-bottom:16px">
          ${words.map((w, idx) => {
            const userChoice = st.answers[w.w] || '';
            const isChecked = st.checked;
            let statusClass = '';
            if (isChecked) {
              if (w.target === 'both') {
                statusClass = (userChoice === 'i_long' || userChoice === 'i_short') ? 'correct' : 'wrong';
              } else {
                statusClass = (userChoice === w.target) ? 'correct' : 'wrong';
              }
            }
            return `
              <div style="background:var(--sunk);border:1px solid ${statusClass === 'correct' ? '#10b981' : (statusClass === 'wrong' ? '#ef4444' : 'var(--line)')};border-radius:8px;padding:8px 10px;display:flex;align-items:center;justify-content:space-between">
                <div>
                  <span style="font-weight:800;font-size:14px">${esc(w.w)}</span>
                  <span style="font-size:11.5px;color:var(--muted);margin-left:4px">${esc(w.ipa)}</span>
                  <button class="icon-btn" onclick="speak('${esc(w.w)}')" style="width:22px;height:22px;display:inline-flex;vertical-align:middle;margin-left:2px" title="Nghe">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                </div>
                <div style="display:flex;gap:4px">
                  <button type="button" class="btn ${userChoice === 'i_long' ? 'primary' : 'ghost'} btn-sort-choice"
                    data-word="${esc(w.w)}" data-choice="i_long" style="padding:3px 7px;font-size:11.5px;font-weight:700">
                    /iː/
                  </button>
                  <button type="button" class="btn ${userChoice === 'i_short' ? 'primary' : 'ghost'} btn-sort-choice"
                    data-word="${esc(w.w)}" data-choice="i_short" style="padding:3px 7px;font-size:11.5px;font-weight:700">
                    /ɪ/
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${st.checked ? `
          <div class="unit-note-box" style="margin-bottom:14px">
            <strong>Cambridge Detailed Explanation:</strong><br/>
            - <strong>/iː/ sound (8 words):</strong> green, meet, people, pizza, please, repeat (syllable 2), tea, three.<br/>
            - <strong>/ɪ/ sound (9 words):</strong> big, busy, dinner, give, in, listen, office, repeat (syllable 1), six.<br/>
            <em>Note: <strong>repeat /rɪˈpiːt/</strong> contains both sounds (/ɪ/ initial and /iː/ final)!</em>
          </div>
        ` : ''}

        <div>
          <button class="btn primary btn-check-sort" data-ex-id="${ex.id}" style="padding:8px 18px;font-weight:700">
            ${st.checked ? 'Re-check' : 'Check Classification'}
          </button>
        </div>
      </div>
    `;
  }

  if (ex.type === 'match_sentences') {
    const pairs = ex.pairs;
    return `
      <div class="unit-ex-card" id="ex-card-${ex.id}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <div>
            <div style="font-size:17px;font-weight:800;color:var(--ink)">${esc(ex.title)}</div>
            <div style="font-size:13.5px;color:var(--muted);margin-top:2px">${esc(ex.instruction)}</div>
          </div>
          ${st.checked ? `<span class="badge" style="background:#10b981;color:#fff;padding:4px 10px;font-weight:700">Checked</span>` : ''}
        </div>

        ${exAudioBar}

        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
          ${pairs.map((p, idx) => {
            const userChoice = st.answers[`match_${p.id}`] || '';
            const isRight = st.checked && (userChoice === p.end);
            const isWrong = st.checked && !isRight;
            return `
              <div style="background:var(--sunk);border:1px solid ${isRight ? '#10b981' : (isWrong ? '#ef4444' : 'var(--line)')};border-radius:8px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
                <div style="font-size:14.5px;font-weight:700;color:var(--ink);flex:1;min-width:200px">
                  ${idx + 1}. ${esc(p.start)} ...
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  <select class="match-select" data-pair-id="${p.id}" style="padding:6px 10px;border-radius:6px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13.5px;font-weight:600">
                    <option value="">-- Select ending --</option>
                    ${pairs.map(opt => `
                      <option value="${esc(opt.end)}" ${userChoice === opt.end ? 'selected' : ''}>${esc(opt.end)}</option>
                    `).join('')}
                  </select>
                  ${isRight ? `
                    <button class="btn" onclick="speak('${esc(p.full)}')" style="display:inline-flex;align-items:center;gap:4px;padding:5px 8px;font-size:12px" title="Listen to complete sentence">
                      Listen
                    </button>
                    <button class="btn rec-btn" data-rec-text="${esc(p.full)}" data-rec-id="match-${p.id}" style="padding:5px 8px;font-size:12px" title="Practice speaking this sentence">
                      ${MIC_ICON}
                    </button>
                  ` : ''}
                  ${isWrong ? `<span style="font-size:12px;font-weight:700;color:#dc2626">Correct: "${esc(p.end)}"</span>` : ''}
                </div>
                ${isRight ? `<div id="slot-match-${p.id}" class="rec-slot" style="width:100%"></div>` : ''}
              </div>
            `;
          }).join('')}
        </div>

        <div>
          <button class="btn primary btn-check-match" data-ex-id="${ex.id}" style="padding:8px 18px;font-weight:700">
            ${st.checked ? 'Re-check' : 'Check Matching'}
          </button>
        </div>
      </div>
    `;
  }

  if (ex.type === 'listen_pairs') {
    const drills = ex.drills;
    return `
      <div class="unit-ex-card" id="ex-card-${ex.id}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <div>
            <div style="font-size:17px;font-weight:800;color:var(--ink)">${esc(ex.title)}</div>
            <div style="font-size:13.5px;color:var(--muted);margin-top:2px">${esc(ex.instruction)}</div>
          </div>
          ${st.checked ? `<span class="badge" style="background:#10b981;color:#fff;padding:4px 10px;font-weight:700">Completed</span>` : ''}
        </div>

        ${exAudioBar}

        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px">
          ${drills.map((drill, idx) => {
            const playedWord = listenPairsPlayed[`${u.id}_${ex.id}_${drill.id}`] || drill.correct;
            const userChoice = st.answers[`drill_${drill.id}`] || '';
            const isRight = st.checked && (userChoice === playedWord);
            const isWrong = st.checked && !isRight;
            return `
              <div style="background:var(--sunk);border:1px solid ${isRight ? '#10b981' : (isWrong ? '#ef4444' : 'var(--line)')};border-radius:8px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="font-weight:800;font-size:14px;color:var(--accent)">Sentence ${idx + 1}:</span>
                  <button type="button" class="btn primary btn-play-pair"
                    data-drill-key="${u.id}_${ex.id}_${drill.id}"
                    data-word-a="${esc(drill.pair[0])}"
                    data-word-b="${esc(drill.pair[1])}"
                    style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;font-size:13px;font-weight:700">
                    Listen to word
                  </button>
                  <span style="font-size:12px;color:var(--muted)">(${esc(drill.pairName)})</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${drill.pair.map(word => `
                    <button type="button" class="btn ${userChoice === word ? 'primary' : 'ghost'} btn-choose-pair-word"
                      data-drill-id="${drill.id}"
                      data-word="${esc(word)}"
                      style="font-size:14px;font-weight:800;padding:6px 14px;min-width:70px">
                      ${esc(word)}
                    </button>
                  `).join('')}
                  ${isRight ? `<span style="color:#059669;font-weight:800;font-size:13px">✓ Correct</span>` : ''}
                  ${isWrong ? `<span style="color:#dc2626;font-weight:700;font-size:12.5px">✗ Audio said: "${esc(playedWord)}"</span>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div>
          <button class="btn primary btn-check-pairs" data-ex-id="${ex.id}" style="padding:8px 18px;font-weight:700">
            ${st.checked ? 'Re-check' : 'Check Answers'}
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="unit-ex-card">
      <div style="font-size:16px;font-weight:800;margin-bottom:4px">${esc(ex.title)}</div>
      <div style="font-size:13.5px;color:var(--muted);margin-bottom:12px">${esc(ex.instruction)}</div>
      ${exAudioBar}
      <div style="background:var(--sunk);padding:12px;border-radius:8px;font-size:13.5px">
        Interactive practice exercise being loaded for ${esc(ex.type)}.
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Helper: Bind Event Listeners for All Exercises
// --------------------------------------------------------------------------
function bindAllExerciseEvents(u, box, container) {
  const uState = getUnitExState(u.id);

  // Helper to sync used chips state in word bank
  function syncWordBankUsed(cardEl, exId) {
    if (!cardEl) return;
    const answers = uState[exId] ? uState[exId].answers || {} : {};
    const usedWords = Object.values(answers).map(v => String(v).trim().toLowerCase()).filter(Boolean);
    cardEl.querySelectorAll('.unit-word-chip').forEach(c => {
      const cw = (c.dataset.word || '').trim().toLowerCase();
      if (usedWords.includes(cw)) {
        c.classList.add('used');
      } else {
        c.classList.remove('used');
      }
    });
  }

  // 1. Fill Dialogue Events (Ex 2.1)
  box.querySelectorAll('.unit-word-chip').forEach(chip => {
    chip.onclick = () => {
      const w = chip.dataset.word;
      const exCard = chip.closest('.unit-ex-card');
      const exId = exCard ? exCard.id.replace('ex-card-', '') : '2.1';
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };

      const inputs = exCard ? exCard.querySelectorAll('.unit-blank-input') : box.querySelectorAll('.unit-blank-input');
      let targetInput = Array.from(inputs).find(inp => document.activeElement === inp);
      if (!targetInput) {
        targetInput = Array.from(inputs).find(inp => !inp.value);
      }
      if (targetInput) {
        targetInput.value = w;
        const key = targetInput.dataset.blankKey;
        if (key) {
          uState[exId].answers[key] = w;
          saveUnitExState(u.id, exId);
        }

        // Tự động chuyển con trỏ sang ô trống kế tiếp để người dùng điền liền mạch khi nghe
        const inpsArr = Array.from(inputs);
        const nextBlank = inpsArr.find(inp => !inp.value && inp !== targetInput);
        if (nextBlank) {
          nextBlank.focus();
        }

        // Cập nhật trạng thái 'used' (gạch ngang mờ) cho các từ đã điền trong Word bank
        syncWordBankUsed(exCard, exId);

        // Mặc định KHÔNG phát âm từ khi chọn để không chèn lên đoạn hội thoại khi đang nghe.
        // Chỉ phát âm từ nếu người dùng chủ động tích chọn checkbox VÀ không có audio hội thoại nào đang phát.
        const chk = exCard ? exCard.querySelector('.chk-speak-on-fill') : null;
        const isAudioBusy = (currentCambridgeAudio && !currentCambridgeAudio.paused) ||
                            (ttsAudioPlayer && !ttsAudioPlayer.paused) ||
                            (window.speechSynthesis && window.speechSynthesis.speaking);
        if (chk && chk.checked && !isAudioBusy) {
          speak(w);
        }
      }
    };
  });

  box.querySelectorAll('.unit-blank-input').forEach(inp => {
    inp.oninput = () => {
      const key = inp.dataset.blankKey || (inp.dataset.clueId ? `clue_${inp.dataset.clueId}` : null);
      if (key) {
        const exCard = inp.closest('.unit-ex-card');
        const exId = exCard.id.replace('ex-card-', '');
        if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
        uState[exId].answers[key] = inp.value;
        saveUnitExState(u.id, exId);
        syncWordBankUsed(exCard, exId);
      }
    };
  });

  box.querySelectorAll('.btn-check-ex').forEach(b => {
    b.onclick = () => {
      const exId = b.dataset.exId;
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].checked = true;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });

  // 2. Clues Events (Ex 2.2)
  box.querySelectorAll('.btn-show-hint').forEach(b => {
    b.onclick = () => {
      const hintBox = document.getElementById(b.dataset.hintId);
      if (hintBox) {
        hintBox.style.display = (hintBox.style.display === 'none' || !hintBox.style.display) ? 'block' : 'none';
      }
    };
  });

  box.querySelectorAll('.btn-check-clues').forEach(b => {
    b.onclick = () => {
      const exId = b.dataset.exId;
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].checked = true;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });

  // 3. Sort Sounds Events (Ex 2.3)
  box.querySelectorAll('.btn-sort-choice').forEach(b => {
    b.onclick = () => {
      const word = b.dataset.word;
      const choice = b.dataset.choice;
      const exCard = b.closest('.unit-ex-card');
      const exId = exCard.id.replace('ex-card-', '');
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].answers[word] = choice;
      saveUnitExState(u.id, exId);
      const isAudioBusy = (currentCambridgeAudio && !currentCambridgeAudio.paused) ||
                          (ttsAudioPlayer && !ttsAudioPlayer.paused) ||
                          (window.speechSynthesis && window.speechSynthesis.speaking);
      if (!isAudioBusy) {
        speak(word);
      }
      renderUnitsTab(container);
    };
  });

  box.querySelectorAll('.btn-check-sort').forEach(b => {
    b.onclick = () => {
      const exId = b.dataset.exId;
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].checked = true;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });

  // 4. Match Sentences Events (Ex 2.4)
  box.querySelectorAll('.match-select').forEach(sel => {
    sel.onchange = () => {
      const pairId = sel.dataset.pairId;
      const exCard = sel.closest('.unit-ex-card');
      const exId = exCard.id.replace('ex-card-', '');
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].answers[`match_${pairId}`] = sel.value;
      saveUnitExState(u.id, exId);
    };
  });

  box.querySelectorAll('.btn-check-match').forEach(b => {
    b.onclick = () => {
      const exId = b.dataset.exId;
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].checked = true;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });

  // 5. Listen Pairs Events (Ex 2.5)
  box.querySelectorAll('.btn-play-pair').forEach(b => {
    b.onclick = () => {
      const key = b.dataset.drillKey;
      const wordA = b.dataset.wordA;
      const wordB = b.dataset.wordB;
      const chosenWord = Math.random() < 0.5 ? wordA : wordB;
      listenPairsPlayed[key] = chosenWord;
      speak(chosenWord);
    };
  });

  box.querySelectorAll('.btn-choose-pair-word').forEach(b => {
    b.onclick = () => {
      const drillId = b.dataset.drillId;
      const word = b.dataset.word;
      const exCard = b.closest('.unit-ex-card');
      const exId = exCard.id.replace('ex-card-', '');
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].answers[`drill_${drillId}`] = word;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });

  box.querySelectorAll('.btn-check-pairs').forEach(b => {
    b.onclick = () => {
      const exId = b.dataset.exId;
      if (!uState[exId]) uState[exId] = { answers: {}, checked: false };
      uState[exId].checked = true;
      saveUnitExState(u.id, exId);
      renderUnitsTab(container);
    };
  });
}

function renderUnitAiSpeaking(u, box) {
  const allSentences = [];
  if (u.sections) {
    u.sections.forEach(sec => {
      if (sec.sentences) {
        sec.sentences.forEach(s => allSentences.push(s));
      }
    });
  }
  if (allSentences.length === 0 && u.sentences) {
    u.sentences.forEach(s => allSentences.push(s));
  }

  box.innerHTML = `
    <div style="background:var(--sunk);border:1px solid var(--line);border-radius:10px;padding:14px 16px;margin-bottom:18px">
      <div style="font-size:15px;font-weight:800;color:var(--ink);margin-bottom:4px">Cambridge Speaking Lab · Unit ${u.id}</div>
      <div style="font-size:13.5px;color:var(--muted)">
        Multi-alternative speech recognition with live audio visualizer analyzes word-level pronunciation in real time.
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      ${allSentences.map((sent, idx) => {
        const en = typeof sent === 'string' ? sent : sent.en;
        const vi = typeof sent === 'object' ? sent.vi : '';
        return `
          <div class="sentence-drill-item" style="padding:14px 16px">
            <div class="sentence-top-bar">
              <div style="flex:1;min-width:220px">
                <div style="font-size:16px;font-weight:800;color:var(--ink)">${idx + 1}. "${esc(en)}"</div>
                ${vi ? `<div style="font-size:13px;color:var(--muted);margin-top:2px">${esc(vi)}</div>` : ''}
              </div>
              <div style="display:flex;gap:6px">
                <button class="btn" onclick="speak('${esc(en)}')" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;font-size:13px">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  <span>Native Audio</span>
                </button>
                <button class="btn rec-btn primary" data-rec-text="${esc(en)}" data-rec-id="ai-spk-${u.id}-${idx}" style="padding:6px 14px;font-size:13px;font-weight:700">
                  ${MIC_ICON}
                  <span>Record & Assess</span>
                </button>
              </div>
            </div>
            <div id="slot-ai-spk-${u.id}-${idx}" class="rec-slot" style="margin-top:8px"></div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderRulesTab(container) {
  const sWords = [
    { w: "boxes", ipa: "/ˈbɒksɪz/", group: "iz", note: "sau x (/ks/) -> /ɪz/" },
    { w: "watches", ipa: "/ˈwɒtʃɪz/", group: "iz", note: "sau ch (/tʃ/) -> /ɪz/" },
    { w: "finishes", ipa: "/ˈfɪnɪʃɪz/", group: "iz", note: "sau sh (/ʃ/) -> /ɪz/" },
    { w: "buses", ipa: "/ˈbʌsɪz/", group: "iz", note: "sau s (/s/) -> /ɪz/" },
    { w: "stops", ipa: "/stɒps/", group: "s", note: "after voiceless /p/ -> /s/" },
    { w: "cats", ipa: "/kæts/", group: "s", note: "after voiceless /t/ -> /s/" },
    { w: "books", ipa: "/bʊks/", group: "s", note: "after voiceless /k/ -> /s/" },
    { w: "laughs", ipa: "/lɑːfs/", group: "s", note: "sau gh (/f/) -> /s/" },
    { w: "days", ipa: "/deɪz/", group: "z", note: "after vowel -> /z/" },
    { w: "dogs", ipa: "/dɒɡz/", group: "z", note: "after voiced /g/ -> /z/" },
    { w: "friends", ipa: "/frendz/", group: "z", note: "after voiced /d/ -> /z/" },
    { w: "calls", ipa: "/kɔːlz/", group: "z", note: "after voiced /l/ -> /z/" }
  ];

  const edWords = [
    { w: "waited", ipa: "/ˈweɪtɪd/", group: "id", note: "after /t/ -> /ɪd/ (adds 1 syllable)" },
    { w: "needed", ipa: "/ˈniːdɪd/", group: "id", note: "after /d/ -> /ɪd/ (adds 1 syllable)" },
    { w: "decided", ipa: "/dɪˈsaɪdɪd/", group: "id", note: "after /d/ -> /ɪd/ (adds 1 syllable)" },
    { w: "invited", ipa: "/ɪnˈvaɪtɪd/", group: "id", note: "after /t/ -> /ɪd/ (adds 1 syllable)" },
    { w: "looked", ipa: "/lʊkt/", group: "t", note: "after voiceless /k/ -> /t/" },
    { w: "watched", ipa: "/wɒtʃt/", group: "t", note: "after voiceless /tʃ/ -> /t/" },
    { w: "stopped", ipa: "/stɒpt/", group: "t", note: "after voiceless /p/ -> /t/" },
    { w: "washed", ipa: "/wɒʃt/", group: "t", note: "after voiceless /ʃ/ -> /t/" },
    { w: "lived", ipa: "/lɪvd/", group: "d", note: "after voiced /v/ -> /d/" },
    { w: "played", ipa: "/pleɪd/", group: "d", note: "sau nguyên âm -> /d/" },
    { w: "explained", ipa: "/ɪkˈspleɪnd/", group: "d", note: "after voiced /n/ -> /d/" },
    { w: "called", ipa: "/kɔːld/", group: "d", note: "sau l (hữu thanh) -> /d/" }
  ];

  container.innerHTML = `
    <!-- Section S Ending -->
    <div class="card" style="margin-bottom:20px;border-top:4px solid var(--accent)">
      <div class="eyebrow" style="color:var(--accent);font-weight:700">Unit 42 · Cambridge</div>
      <h2 style="margin:4px 0 8px;font-size:20px">Rule 1: Pronouncing -s / -es Endings</h2>
      <p class="hint" style="margin:0 0 14px;line-height:1.5">
        Applies to plural nouns, 3rd person singular present verbs, and possessive forms ('s).
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:12px;margin-bottom:16px">
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:var(--accent);font-size:16px">1. Pronounced as /ɪz/ (adds a syllable)</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">When ending with sibilant sounds: <b>/s, z, ʃ, ʒ, tʃ, dʒ/</b> (letters: s, x, z, ch, sh, ce, ge).</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>boxes, watches, finishes, roses</i></div>
        </div>
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:#DC2626;font-size:16px">2. Pronounced as /s/</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">When ending with voiceless consonant sounds: <b>/p, t, k, f, θ/</b>.</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>stops, cats, books, laughs, months</i></div>
        </div>
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:#059669;font-size:16px">3. Pronounced as /z/</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">When ending with remaining voiced consonant sounds and vowels: <b>/b, d, g, v, ð, m, n, ŋ, l, r/</b>.</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>days, dogs, friends, rooms, plays</i></div>
        </div>
      </div>

      <div style="font-size:14px;font-weight:700;margin-bottom:8px">Practice words with -s/-es endings:</div>
      <div class="pronun-word-grid">
        ${sWords.map((item, idx) => `
          <div class="pronun-word-card">
            <div class="pronun-word-card-top">
              <div>
                <div style="font-size:15px;font-weight:800">${esc(item.w)}</div>
                <div style="font-size:12px;color:var(--muted)">${esc(item.ipa)} · ${esc(item.note)}</div>
              </div>
              <div style="display:flex;gap:4px">
                <button class="icon-btn" onclick="speak('${esc(item.w)}')" title="Listen to ${esc(item.w)}" aria-label="Play ${esc(item.w)}" style="width:34px;height:34px">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                </button>
                <button class="icon-btn rec-btn" data-rec-text="${esc(item.w)}" data-rec-id="rule-s-${idx}" title="Practice speaking ${esc(item.w)}" aria-label="Record ${esc(item.w)}" style="width:34px;height:34px">
                  ${MIC_ICON}
                </button>
              </div>
            </div>
            <div id="slot-rule-s-${idx}" class="rec-slot" style="width:100%"></div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section ED Ending -->
    <div class="card" style="border-top:4px solid #059669">
      <div class="eyebrow" style="color:#059669;font-weight:700">Unit 43 · Cambridge</div>
      <h2 style="margin:4px 0 8px;font-size:20px">Rule 2: Pronouncing Past Tense -ed Endings</h2>
      <p class="hint" style="margin:0 0 14px;line-height:1.5">
        Applies to regular verbs in past simple and past participle.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:12px;margin-bottom:16px">
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:var(--accent);font-size:16px">1. Pronounced as /ɪd/ (adds 1 syllable)</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">ONLY when ending with sound <b>/t/</b> or <b>/d/</b>.</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>waited, needed, decided, invited</i></div>
        </div>
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:#DC2626;font-size:16px">2. Pronounced as /t/</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">When ending with voiceless sounds: <b>/p, k, f, s, ʃ, tʃ/</b>.</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>looked, watched, stopped, washed, laughed</i></div>
        </div>
        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px">
          <div style="font-weight:800;color:#059669;font-size:16px">3. Pronounced as /d/</div>
          <div style="font-size:12.5px;margin:4px 0;color:var(--muted)">When ending with other voiced sounds and vowels: <b>/b, g, v, z, m, n, l, r.../</b>.</div>
          <div style="font-size:12px;color:var(--ink)">Examples: <i>lived, played, opened, explained, called</i></div>
        </div>
      </div>

      <div style="font-size:14px;font-weight:700;margin-bottom:8px">Practice words with -ed endings:</div>
      <div class="pronun-word-grid">
        ${edWords.map((item, idx) => `
          <div class="pronun-word-card">
            <div class="pronun-word-card-top">
              <div>
                <div style="font-size:15px;font-weight:800">${esc(item.w)}</div>
                <div style="font-size:12px;color:var(--muted)">${esc(item.ipa)} · ${esc(item.note)}</div>
              </div>
              <div style="display:flex;gap:4px">
                <button class="icon-btn" onclick="speak('${esc(item.w)}')" title="Listen to ${esc(item.w)}" aria-label="Play ${esc(item.w)}" style="width:34px;height:34px">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                </button>
                <button class="icon-btn rec-btn" data-rec-text="${esc(item.w)}" data-rec-id="rule-ed-${idx}" title="Practice speaking ${esc(item.w)}" aria-label="Record ${esc(item.w)}" style="width:34px;height:34px">
                  ${MIC_ICON}
                </button>
              </div>
            </div>
            <div id="slot-rule-ed-${idx}" class="rec-slot" style="width:100%"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ---------- NEW PAGE: LEADERBOARD ----------
async function renderLeaderboard(box) {
  box.innerHTML = `
    <div class="thead" style="margin-bottom:18px">
      <div class="eyebrow">ACADEMIC RANKINGS</div>
      <h1 style="font-size:26px;font-weight:800">Learner Leaderboard</h1>
      <div class="meta">
        <span>Top 50 learners with verified assessment scores</span>
        <span class="hint">Assessment scores verified through online active-recall testing</span>
      </div>
    </div>
    <div id="lb-content">
      <div class="card" style="text-align:center;padding:32px">
        <div class="hint">Loading leaderboard...</div>
      </div>
    </div>`;

  const cBox = box.querySelector('#lb-content');
  if (!isConfigured || !fbDb || !firestoreModules) {
    cBox.innerHTML = `
      <div class="card" style="text-align:center;padding:32px">
        <div style="font-weight:600;margin-bottom:6px">Leaderboard Not Configured</div>
        <p class="hint">Leaderboard requires Firebase cloud configuration. See FIREBASE_SETUP.md for details.</p>
      </div>`;
    return;
  }

  try {
    const lbRef = firestoreModules.collection(fbDb, 'leaderboard');
    // Truy vấn trực tiếp leaderboard, không cần Firestore Index
    const snap = await firestoreModules.getDocs(lbRef);

    if (snap.empty) {
      cBox.innerHTML = `
        <div class="card" style="text-align:center;padding:32px">
          
          <div style="font-weight:600;margin-bottom:6px">No learners on the leaderboard yet</div>
          <p class="hint">Sign in and complete quizzes to be the first learner on the board!</p>
        </div>`;
      return;
    }

    const items = snap.docs.map(doc => doc.data());
    items.sort((a, b) => (b.totalBest - a.totalBest) || ((b.completedCount || 0) - (a.completedCount || 0)));

    const rows = [];
    let rank = 1;
    items.forEach(d => {
      const isMe = currentUser && currentUser.uid === d.uid;
      let rankHtml = String(rank);
      if (rank === 1) rankHtml = '<span class="lb-rank lb-gold">1</span>';
      else if (rank === 2) rankHtml = '<span class="lb-rank lb-silver">2</span>';
      else if (rank === 3) rankHtml = '<span class="lb-rank lb-bronze">3</span>';
      else rankHtml = `<span class="lb-rank">${rank}</span>`;

      const avatar = d.photoURL
        ? `<img class="lb-avatar" src="${esc(d.photoURL)}" alt="Avatar">`
        : `<div class="lb-avatar">${esc((d.displayName || 'U')[0].toUpperCase())}</div>`;

      rows.push(`
        <tr class="lb-row ${isMe ? 'me' : ''}">
          <td style="width:48px;text-align:center">${rankHtml}</td>
          <td>
            <div class="lb-user-cell">
              ${avatar}
              <div>
                <div style="font-weight:700">${esc(d.displayName || 'Learner')}${isMe ? ' <span style="font-size:11px;background:var(--accent);color:var(--accent-ink);padding:2px 6px;border-radius:4px">You</span>' : ''}</div>
                <div style="font-size:12px;color:var(--muted)">Completed ${d.completedCount || 0}/45 topics</div>
              </div>
            </div>
          </td>
          <td style="text-align:right">
            <div class="lb-score">${d.totalBest || 0}</div>
            <div style="font-size:11px;color:var(--muted)">points</div>
          </td>
        </tr>
      `);
      rank++;
    });

    cBox.innerHTML = `
      <table class="lb-table">
        <thead>
          <tr>
            <th style="text-align:center;width:48px">Rank</th>
            <th>Learner</th>
            <th style="text-align:right">Verified Score</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join('')}
        </tbody>
      </table>`;
  } catch (err) {
    console.error('Lỗi tải leaderboard:', err);
    cBox.innerHTML = `<div class="card"><div class="fb no">Unable to load leaderboard: ${esc(err.message)}</div></div>`;
  }
}

// ---------- NEW PAGE: PROFILE ----------
async function renderProfile(box) {
  if (!currentUser) {
    box.innerHTML = `
      <div class="card" style="text-align:center;padding:40px">
        <h2 style="margin:0 0 10px">Learner Profile</h2>
        <p class="hint" style="margin-bottom:16px">You are not signed in. Sign in to sync your progress across devices and participate in the leaderboard.</p>
        <button class="btn primary" id="btn-login-profile">Sign In</button>
      </div>`;
    box.querySelector('#btn-login-profile').onclick = () => openAuthModal('login');
    return;
  }

  let profileData = {};
  let teacherNoteData = null;
  try {
    const [userDoc, noteDoc] = await Promise.all([
      firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', currentUser.uid)).catch(() => null),
      firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', currentUser.uid, 'meta', 'teacher_note')).catch(() => null)
    ]);
    if (userDoc && userDoc.exists()) profileData = userDoc.data();
    if (noteDoc && noteDoc.exists()) teacherNoteData = noteDoc.data();
  } catch (e) {}

  let completedCount = 0;
  let attemptedCount = 0;
  let totalScore = 0;
  let scoreCount = 0;

  TOPICS.forEach(t => {
    const best = store.get('best:' + t.id, null);
    const completedManual = store.get('completedManual:' + t.id, false);
    const isCompleted = completedManual || (best != null && best >= 80);
    if (isCompleted) completedCount++;
    if (best != null) {
      attemptedCount++;
      totalScore += best;
      scoreCount++;
    } else {
      let hasAns = false;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith(`toeic45:${currentUser.uid}:tr:${t.id}:`) || k.startsWith(`toeic45:${currentUser.uid}:g-${t.id}-`))) {
          hasAns = true;
          break;
        }
      }
      if (hasAns) attemptedCount++;
    }
  });

  const avgScore = scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0;
  const isHidden = Boolean(profileData.hidden);

  const avatar = currentUser.photoURL
    ? `<img style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:2px solid var(--accent)" src="${esc(currentUser.photoURL)}" alt="Avatar">`
    : `<div style="width:68px;height:68px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;border:2px solid var(--line)">${esc((currentUser.displayName || currentUser.email || 'U')[0].toUpperCase())}</div>`;

  box.innerHTML = `
    <div class="thead" style="margin-bottom:18px">
      <div class="eyebrow">Account</div>
      <h1 style="font-size:26px;font-weight:800">Learner Profile</h1>
    </div>

    
    <!-- Thẻ trạng thái đồng bộ đa thiết bị -->
    <div class="card" style="margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;background:var(--sunk);border:1.5px solid var(--line)">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:10px;background:var(--surface);display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;color:var(--accent)"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></div>
        <div>
          <div style="font-weight:700;font-size:15px">Multi-Device Cloud Sync</div>
          <div style="font-size:13px;color:var(--muted)">Your learning progress and quiz scores sync in real-time via cloud backup.</div>
        </div>
      </div>
      <button class="btn primary" id="btn-profile-sync" style="display:inline-flex;align-items:center;gap:8px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
        <span>Sync with Cloud Now</span>
      </button>
    </div>

    <div class="card" style="display:flex;gap:18px;align-items:center;margin-bottom:18px">
      ${avatar}
      <div style="flex:1;min-width:0">
        <h2 style="margin:0 0 4px;font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(currentUser.displayName || 'Learner')}</h2>
        <div style="color:var(--muted);font-size:13.5px;margin-bottom:6px">${esc(currentUser.email || '')}</div>
        <div>
          ${currentUser.emailVerified
            ? '<span style="font-size:12px;color:var(--good);background:var(--good-soft);padding:3px 8px;border-radius:6px;font-weight:600">✓ Email verified</span>'
            : '<span style="font-size:12px;color:var(--warn);background:var(--warn-soft);padding:3px 8px;border-radius:6px;font-weight:600">Unverified email</span> <button class="btn ghost" id="btn-resend-verify" style="font-size:12px;padding:2px 6px">Resend</button>'}
          ${isTeacherUser ? `<span style="margin-left:6px;font-size:12px;color:#fff;background:#2563EB;padding:3px 8px;border-radius:6px;font-weight:700">${isAdminUser ? 'Admin' : 'Instructor'}</span>` : ''}
        </div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:6px">
          UID: <code style="user-select:all;background:var(--sunk);padding:2px 6px;border-radius:4px">${esc(currentUser.uid)}</code>
        </div>
      </div>
    </div>

    ${teacherNoteData && teacherNoteData.note ? `
      <div class="card" style="margin-bottom:18px;background:rgba(37,99,235,0.06);border:1.5px solid rgba(37,99,235,0.3)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <div style="font-weight:800;font-size:14.5px;color:#2563EB">Instructor Feedback</div>
          <div style="font-size:12px;color:var(--muted)">${teacherNoteData.authorName ? esc(teacherNoteData.authorName) + ' · ' : ''}${teacherNoteData.updatedAt && teacherNoteData.updatedAt.toDate ? teacherNoteData.updatedAt.toDate().toLocaleDateString('vi-VN') : ''}</div>
        </div>
        <div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(teacherNoteData.note)}</div>
      </div>
    ` : ''}

    <div class="stat-grid">
      <div class="stat-card">
        <div class="val">${completedCount} <span style="font-size:16px;font-weight:500;color:var(--muted)">/ ${TOPICS.length}</span></div>
        <div class="lbl">Topics Completed</div>
      </div>
      <div class="stat-card">
        <div class="val">${attemptedCount} <span style="font-size:16px;font-weight:500;color:var(--muted)">/ ${TOPICS.length}</span></div>
        <div class="lbl">Topics Studied</div>
      </div>
      <div class="stat-card">
        <div class="val">${avgScore}%</div>
        <div class="lbl">Avg Quiz Score</div>
      </div>
      <div class="stat-card">
        <div class="val">${totalScore}</div>
        <div class="lbl">Total Quiz Points</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:18px">
      <h3 style="margin:0 0 10px;font-size:17px">Privacy & Leaderboard Visibility</h3>
      <div class="row between">
        <div>
          <div style="font-weight:600">Show on Public Leaderboard</div>
          <div class="hint">Display your name and test scores on the public leaderboard.</div>
        </div>
        <label style="position:relative;display:inline-block;width:48px;height:26px">
          <input type="checkbox" id="toggle-lb-vis" ${!isHidden ? 'checked' : ''} style="opacity:0;width:0;height:0">
          <span style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:${!isHidden?'var(--good)':'var(--muted)'};border-radius:34px;transition:.2s">
            <span style="position:absolute;content:'';height:20px;width:20px;left:${!isHidden?'24px':'4px'};bottom:3px;background:white;border-radius:50%;transition:.2s"></span>
          </span>
        </label>
      </div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 10px;font-size:17px">Session Management</h3>
      <div class="row between">
        <div class="hint">Sign out of your session on this device.</div>
        <button class="btn" id="btn-logout" style="color:var(--bad);border-color:var(--bad)">Sign Out</button>
      </div>
    </div>`;

  const resendBtn = box.querySelector('#btn-resend-verify');
  if (resendBtn) {
    resendBtn.onclick = async () => {
      try {
        await authModules.sendEmailVerification(currentUser);
        showToast('✓ Verification email sent. Please check your inbox!');
      } catch (err) {
        showToast('Error sending email: ' + formatFirebaseError(err));
      }
    };
  }

  const toggleVis = box.querySelector('#toggle-lb-vis');
  if (toggleVis) {
    toggleVis.onchange = async () => {
      const show = toggleVis.checked;
      toggleVis.disabled = true;
      try {
        await firestoreModules.setDoc(firestoreModules.doc(fbDb, 'users', currentUser.uid), {
          hidden: !show,
          updatedAt: firestoreModules.serverTimestamp()
        }, { merge: true });
        if (!show) {
          await firestoreModules.deleteDoc(firestoreModules.doc(fbDb, 'leaderboard', currentUser.uid));
        } else {
          await syncLeaderboardFromClient(currentUser.uid);
        }
        showToast(show ? '✓ Leaderboard visibility enabled.' : 'Account hidden from leaderboard.');
      } catch (err) {
        showToast('Error updating profile: ' + formatFirebaseError(err));
        toggleVis.checked = !show;
      } finally {
        toggleVis.disabled = false;
        renderProfile(box);
      }
    };
  }

  // Render danh sách file ghi âm
  const recHistBox = box.querySelector('#rec-history-list');
  const btnDownloadAll = box.querySelector('#btn-download-all-rec');
  if (recHistBox) {
    RecorderManager.getAllRecordings().then(list => {
      if (!list.length) {
        recHistBox.innerHTML = '<div class="hint" style="text-align:center;padding:12px">No voice recordings yet. Click the microphone icon in any lesson to practice speaking!</div>';
        if (btnDownloadAll) btnDownloadAll.style.display = 'none';
        return;
      }
      recHistBox.innerHTML = list.map(item => {
        const dateStr = new Date(item.createdAt).toLocaleDateString('vi-VN') + ' ' + new Date(item.createdAt).toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
        const url = URL.createObjectURL(item.blob);
        return `
          <div class="rec-history-item">
            <div class="rec-info">
              <b>${esc(item.targetText || 'Audio Recording')}</b>
              <span class="hint" style="font-size:12px">${dateStr} · ${item.duration}s ${item.assessment && item.assessment.score ? `· Score: ${item.assessment.score}%` : ''}</span>
            </div>
            <div style="display:flex;gap:6px;align-items:center">
              <audio src="${url}" controls style="height:32px;max-width:180px"></audio>
              <a class="rec-download-btn" href="${url}" download="${item.fileName || 'TOEIC_VoiceRecord.webm'}" title="Download recording">Download</a>
            </div>
          </div>
        `;
      }).join('');
      if (btnDownloadAll) {
        btnDownloadAll.onclick = () => RecorderManager.downloadAllRecordings();
      }
    });
  }

  box.querySelector('#btn-profile-sync').onclick = manualSyncCloud;
    box.querySelector('#btn-logout').onclick = () => {
    openModal(`
      <div class="modal-backdrop">
        <div class="modal-box">
          <h3 style="margin:0 0 10px;font-size:18px">Confirm Sign Out</h3>
          <p class="hint" style="margin:0 0 16px">Are you sure you want to sign out of <b>${esc(currentUser.displayName || currentUser.email)}</b>?</p>
          <div style="margin-bottom:18px">
            <label style="display:flex;align-items:center;gap:8px;font-size:13.5px;cursor:pointer">
              <input type="checkbox" id="chk-clear-local">
              Clear local cached data for this account on this device
            </label>
          </div>
          <div class="row between">
            <button class="btn ghost" id="btn-cancel-logout">Cancel</button>
            <button class="btn primary" id="btn-confirm-logout" style="background:var(--bad);border-color:var(--bad)">Sign Out</button>
          </div>
        </div>
      </div>
    `);

    $('#btn-cancel-logout').onclick = closeModal;
    $('#btn-confirm-logout').onclick = async () => {
      const clearLocal = $('#chk-clear-local').checked;
      if (clearLocal) {
        const prefix = `toeic45:${currentUser.uid}:`;
        const toDel = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(prefix)) toDel.push(k);
        }
        toDel.forEach(k => localStorage.removeItem(k));
      }
      await authModules.signOut(fbAuth);
      closeModal();
      location.hash = '#t1-p1';
    };
  };
}


export { IPA_DATA, MINIMAL_PAIRS, PRONUN_UNITS };
