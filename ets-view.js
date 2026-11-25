// ets-view.js - Official ETS 2026 TOEIC Mock Exam Experience

const HISTORY_KEY = 'ets2026_history';
const MAX_HISTORY = 20;
const AUDIO_SPEEDS = [0.8, 1.0, 1.2];

const DEFAULT_PARTS = [
  { id: 1, section: 'L', name: 'Part 1', title: 'Photographs', from: 1, to: 6, count: 6, options: ['A', 'B', 'C', 'D'] },
  { id: 2, section: 'L', name: 'Part 2', title: 'Question-Response', from: 7, to: 31, count: 25, options: ['A', 'B', 'C'] },
  { id: 3, section: 'L', name: 'Part 3', title: 'Conversations', from: 32, to: 70, count: 39, options: ['A', 'B', 'C', 'D'] },
  { id: 4, section: 'L', name: 'Part 4', title: 'Short Talks', from: 71, to: 100, count: 30, options: ['A', 'B', 'C', 'D'] },
  { id: 5, section: 'R', name: 'Part 5', title: 'Incomplete Sentences', from: 101, to: 130, count: 30, options: ['A', 'B', 'C', 'D'] },
  { id: 6, section: 'R', name: 'Part 6', title: 'Text Completion', from: 131, to: 146, count: 16, options: ['A', 'B', 'C', 'D'] },
  { id: 7, section: 'R', name: 'Part 7', title: 'Reading Comprehension', from: 147, to: 200, count: 54, options: ['A', 'B', 'C', 'D'] },
];

const PART_STANDARD_MINUTES = {
  1: 5,
  2: 10,
  3: 17,
  4: 13,
  5: 15,
  6: 12,
  7: 48,
};

// Injected context
let appStore = null;
let appEsc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
let appShowToast = () => {};
let appConfirmModal = null;
let etsTests = [];
let etsParts = DEFAULT_PARTS;
let etsCalcScore = null;

// View & session state
let activeBox = null;
let curView = 'catalog'; // 'catalog' | 'setup' | 'exam' | 'review' | 'results'
let selectedTestId = null;

const setupState = {
  mode: 'full', // 'full' | 'listening' | 'reading' | 'parts'
  selectedParts: new Set([1, 2, 3, 4, 5, 6, 7]),
  timerMode: 'standard', // 'standard' | 'untimed' | 'custom'
  customMinutes: 30,
};

let session = null;
let lastAttempt = null;

// Active media / timer / overlay references
let timerInterval = null;
let activeAudio = null;
let activeAudioBarEl = null;
let lightboxEl = null;
let lightboxKeyHandler = null;
let detachObserver = null;

// Inline SVG icons (zero decorative emojis)
const SVG = {
  play: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  pause: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
  flag: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  flagFilled: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  grid: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
};

export function initEtsView(ctx = {}) {
  appStore = ctx.store || null;
  if (typeof ctx.esc === 'function') appEsc = ctx.esc;
  if (typeof ctx.showToast === 'function') appShowToast = ctx.showToast;
  if (typeof ctx.confirmModal === 'function') appConfirmModal = ctx.confirmModal;
  if (Array.isArray(ctx.ETS_TESTS)) etsTests = ctx.ETS_TESTS;
  if (Array.isArray(ctx.ETS_PARTS) && ctx.ETS_PARTS.length) etsParts = ctx.ETS_PARTS;
  if (typeof ctx.calcEtsScore === 'function') etsCalcScore = ctx.calcEtsScore;
}

// ============================================================================
// Helpers
// ============================================================================

function esc(v) {
  return appEsc(v);
}

async function askConfirm(opts) {
  if (typeof appConfirmModal === 'function') {
    return await appConfirmModal(opts);
  }
  return window.confirm(opts.message || opts.title || 'Are you sure?');
}

function getHistory() {
  if (!appStore) return [];
  const raw = appStore.get(HISTORY_KEY, []);
  return Array.isArray(raw) ? raw : [];
}

function saveAttemptToHistory(attempt) {
  if (!appStore) return;
  const list = getHistory().filter((item) => item && item.id !== attempt.id);
  list.unshift(attempt);
  appStore.set(HISTORY_KEY, list.slice(0, MAX_HISTORY));
}

function getTestById(id) {
  return etsTests.find((t) => t.id === id) || null;
}

function getPartMeta(partId) {
  return etsParts.find((p) => p.id === partId) || DEFAULT_PARTS.find((p) => p.id === partId);
}

function getOptionsForPart(partId) {
  const meta = getPartMeta(partId);
  if (meta && Array.isArray(meta.options) && meta.options.length) return meta.options;
  return partId === 2 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
}

function getOfficialKey(test, qNum) {
  if (!test || !test.answers) return '';
  return test.answers[String(qNum)] || test.answers[qNum] || '';
}

function computeScaledScore(lcCorrect, rcCorrect) {
  if (typeof etsCalcScore === 'function') {
    const res = etsCalcScore(lcCorrect, rcCorrect);
    if (res && typeof res === 'object') {
      const lc = Number(res.lc ?? res.listening ?? 5);
      const rc = Number(res.rc ?? res.reading ?? 5);
      const total = Number(res.total ?? lc + rc);
      return { lc, rc, total };
    }
  }
  const lc = Math.min(495, Math.max(5, Math.round(lcCorrect * 5)));
  const rc = Math.min(495, Math.max(5, Math.round(rcCorrect * 5)));
  return { lc, rc, total: lc + rc };
}

function formatTimer(totalSec) {
  const s = Math.max(0, Math.floor(Number(totalSec) || 0));
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  if (hrs > 0) return `${hrs}:${pad(mins)}:${pad(secs)}`;
  return `${pad(mins)}:${pad(secs)}`;
}

function formatAudioTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatAttemptDate(isoStr) {
  try {
    const d = new Date(isoStr);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

function getSetupSelection() {
  const { mode, selectedParts, timerMode, customMinutes } = setupState;
  let partIds = [];
  if (mode === 'full') partIds = [1, 2, 3, 4, 5, 6, 7];
  else if (mode === 'listening') partIds = [1, 2, 3, 4];
  else if (mode === 'reading') partIds = [5, 6, 7];
  else {
    partIds = etsParts.map((p) => p.id).filter((id) => selectedParts.has(id));
  }

  const questionList = [];
  partIds.forEach((pid) => {
    const meta = getPartMeta(pid);
    if (!meta) return;
    for (let q = meta.from; q <= meta.to; q++) questionList.push(q);
  });

  let minutes = 0;
  let effectiveTimerMode = 'standard';
  if (mode === 'full') {
    minutes = 120;
  } else if (mode === 'listening') {
    minutes = 45;
  } else if (mode === 'reading') {
    minutes = 75;
  } else {
    effectiveTimerMode = timerMode;
    if (timerMode === 'untimed') {
      minutes = 0;
    } else if (timerMode === 'custom') {
      minutes = Math.max(1, Math.min(300, Math.round(Number(customMinutes) || 30)));
    } else {
      minutes = partIds.reduce((sum, pid) => sum + (PART_STANDARD_MINUTES[pid] || 10), 0);
    }
  }

  let modeLabel = 'Full Test';
  if (mode === 'listening') modeLabel = 'Listening';
  else if (mode === 'reading') modeLabel = 'Reading';
  else if (mode === 'parts') {
    modeLabel = partIds.length === 1 ? `Part ${partIds[0]}` : `Practice (Parts ${partIds.join(', ')})`;
  }

  return { partIds, questionList, minutes, timerMode: effectiveTimerMode, modeLabel };
}

function filterPagesForQuestions(test, questionSet) {
  if (!test || !Array.isArray(test.pages)) return [];
  return test.pages.filter((page) =>
    (page.groups || []).some((g) => {
      for (let q = g.qFrom; q <= g.qTo; q++) {
        if (questionSet.has(q)) return true;
      }
      return false;
    })
  );
}

function getPageQuestions(page, questionSet) {
  const qs = [];
  (page.groups || []).forEach((g) => {
    for (let q = g.qFrom; q <= g.qTo; q++) {
      if (questionSet.has(q)) qs.push(q);
    }
  });
  return qs;
}

function getTestStatsFromHistory(testId, history) {
  const attempts = history.filter((a) => a && a.testId === testId);
  let bestScaled = null;
  let bestAccuracy = null;
  attempts.forEach((a) => {
    if (a.isFullTest && typeof a.totalScaled === 'number') {
      if (bestScaled === null || a.totalScaled > bestScaled) bestScaled = a.totalScaled;
    }
    if (typeof a.accuracy === 'number') {
      if (bestAccuracy === null || a.accuracy > bestAccuracy) bestAccuracy = a.accuracy;
    }
  });
  return { count: attempts.length, bestScaled, bestAccuracy, attempts };
}

function getZoomImgStyle(zoom) {
  if (zoom === '100') return 'width:auto;max-width:none;';
  if (zoom === '130') return 'width:130%;max-width:none;';
  return 'width:100%;max-width:100%;';
}

// ============================================================================
// Cleanup: Audio, Timer, Lightbox, Detach Observer
// ============================================================================

function stopAllAudio() {
  if (activeAudio) {
    try {
      activeAudio.pause();
    } catch {}
    activeAudio = null;
  }
  if (activeAudioBarEl) {
    const btn = activeAudioBarEl.querySelector('[data-audio-toggle]');
    if (btn) {
      btn.innerHTML = SVG.play;
      btn.setAttribute('aria-label', 'Play audio');
    }
    activeAudioBarEl = null;
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function closeLightbox() {
  if (lightboxKeyHandler) {
    document.removeEventListener('keydown', lightboxKeyHandler);
    lightboxKeyHandler = null;
  }
  if (lightboxEl && lightboxEl.parentNode) {
    lightboxEl.parentNode.removeChild(lightboxEl);
  }
  lightboxEl = null;
}

function cleanupAll() {
  stopTimer();
  stopAllAudio();
  closeLightbox();
}

function ensureDetachWatcher(box) {
  if (detachObserver) {
    detachObserver.disconnect();
    detachObserver = null;
  }
  if (!box || typeof MutationObserver === 'undefined') return;
  const parent = box.parentNode || document.body;
  detachObserver = new MutationObserver(() => {
    if (!activeBox || !activeBox.isConnected) {
      cleanupAll();
      if (detachObserver) {
        detachObserver.disconnect();
        detachObserver = null;
      }
    }
  });
  detachObserver.observe(parent, { childList: true, subtree: true });
}

function startTimer() {
  stopTimer();
  if (curView !== 'exam' || !session) return;

  timerInterval = setInterval(() => {
    if (!activeBox || !activeBox.isConnected) {
      cleanupAll();
      return;
    }
    if (curView !== 'exam' || !session) {
      stopTimer();
      return;
    }
    if (session.paused) return;

    session.elapsedSec += 1;

    if (session.timerMode !== 'untimed' && session.timeLimitSec > 0) {
      session.remainingSec = Math.max(0, session.remainingSec - 1);
      updateTimerDisplay();
      if (session.remainingSec <= 0) {
        stopTimer();
        stopAllAudio();
        appShowToast('Time is up. Submitting your exam...');
        finalizeExam();
      }
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  if (!activeBox || !session) return;
  const timerEl = activeBox.querySelector('.ets-timer');
  if (!timerEl) return;
  const textEl = timerEl.querySelector('[data-timer-val]');
  if (session.timerMode === 'untimed') {
    if (textEl) textEl.textContent = formatTimer(session.elapsedSec);
    timerEl.classList.remove('is-warn', 'is-danger');
  } else {
    if (textEl) textEl.textContent = formatTimer(session.remainingSec);
    timerEl.classList.toggle('is-warn', session.remainingSec > 120 && session.remainingSec <= 600);
    timerEl.classList.toggle('is-danger', session.remainingSec <= 120);
  }
}

// ============================================================================
// Session Lifecycle
// ============================================================================

function startNewSession(test, { mode, modeLabel, questionList, minutes, timerMode }) {
  cleanupAll();
  const sortedQs = [...new Set(questionList)].sort((a, b) => a - b);
  const questionSet = new Set(sortedQs);
  const pages = filterPagesForQuestions(test, questionSet);

  if (!pages.length || !sortedQs.length) {
    appShowToast('No questions available for this selection.');
    return;
  }

  session = {
    testId: test.id,
    mode,
    modeLabel,
    questionSet,
    questionList: sortedQs,
    pages,
    pageIdx: 0,
    answers: {},
    flags: new Set(),
    timerMode,
    timeLimitSec: timerMode === 'untimed' ? 0 : minutes * 60,
    remainingSec: timerMode === 'untimed' ? 0 : minutes * 60,
    elapsedSec: 0,
    paused: false,
    startedAt: Date.now(),
    zoom: 'fit',
    audioSpeed: 1.0,
    autoNextAudio: true,
    paletteOpen: false,
    reviewFilter: 'all',
  };

  curView = 'exam';
  renderCurrent();
  startTimer();
}

function openReviewForAttempt(attempt) {
  const test = getTestById(attempt.testId);
  if (!test || test.status !== 'ready') {
    appShowToast('Exam data for this attempt is not available.');
    return;
  }
  cleanupAll();
  const qList =
    Array.isArray(attempt.questionList) && attempt.questionList.length
      ? [...attempt.questionList].sort((a, b) => a - b)
      : Array.from({ length: 200 }, (_, i) => i + 1);
  const questionSet = new Set(qList);
  const pages = filterPagesForQuestions(test, questionSet);

  lastAttempt = attempt;
  selectedTestId = test.id;
  session = {
    testId: test.id,
    mode: attempt.mode || 'full',
    modeLabel: attempt.modeLabel || 'Review',
    questionSet,
    questionList: qList,
    pages,
    pageIdx: 0,
    answers: { ...(attempt.answers || {}) },
    flags: new Set(Array.isArray(attempt.flags) ? attempt.flags : []),
    timerMode: 'untimed',
    timeLimitSec: 0,
    remainingSec: 0,
    elapsedSec: attempt.elapsedSec || 0,
    paused: false,
    startedAt: Date.now(),
    zoom: 'fit',
    audioSpeed: 1.0,
    autoNextAudio: true,
    paletteOpen: false,
    reviewFilter: 'all',
  };

  curView = 'review';
  renderCurrent();
}

function openResultsForAttempt(attempt) {
  cleanupAll();
  lastAttempt = attempt;
  selectedTestId = attempt.testId;
  curView = 'results';
  renderCurrent();
}

function finalizeExam() {
  if (!session) return;
  const test = getTestById(session.testId);
  if (!test) return;

  cleanupAll();

  let lcTotal = 0;
  let lcCorrect = 0;
  let rcTotal = 0;
  let rcCorrect = 0;

  session.questionList.forEach((q) => {
    const key = getOfficialKey(test, q);
    const ans = session.answers[q] || '';
    const isRight = Boolean(key && ans && ans === key);
    if (q <= 100) {
      lcTotal += 1;
      if (isRight) lcCorrect += 1;
    } else {
      rcTotal += 1;
      if (isRight) rcCorrect += 1;
    }
  });

  const totalQuestions = session.questionList.length;
  const totalCorrect = lcCorrect + rcCorrect;
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const isFullTest = lcTotal === 100 && rcTotal === 100;
  const lcNorm = lcTotal > 0 ? Math.round((lcCorrect / lcTotal) * 100) : 0;
  const rcNorm = rcTotal > 0 ? Math.round((rcCorrect / rcTotal) * 100) : 0;
  const scaled = computeScaledScore(
    lcTotal === 100 ? lcCorrect : lcNorm,
    rcTotal === 100 ? rcCorrect : rcNorm
  );

  const attempt = {
    id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    testId: test.id,
    testTitle: test.title,
    mode: session.mode,
    modeLabel: session.modeLabel,
    date: new Date().toISOString(),
    questionList: [...session.questionList],
    answers: { ...session.answers },
    flags: Array.from(session.flags),
    elapsedSec: session.elapsedSec,
    totalQuestions,
    totalCorrect,
    accuracy,
    lcTotal,
    lcCorrect,
    rcTotal,
    rcCorrect,
    lcScaled: lcTotal > 0 ? scaled.lc : null,
    rcScaled: rcTotal > 0 ? scaled.rc : null,
    totalScaled: isFullTest ? scaled.total : null,
    isFullTest,
  };

  saveAttemptToHistory(attempt);
  lastAttempt = attempt;
  curView = 'results';
  renderCurrent();
}

function computePartBreakdown(attempt, test) {
  const qSet = new Set(attempt.questionList || []);
  const rows = [];
  etsParts.forEach((part) => {
    let total = 0;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    for (let q = part.from; q <= part.to; q++) {
      if (!qSet.has(q)) continue;
      total += 1;
      const ans = attempt.answers ? attempt.answers[q] : '';
      const key = getOfficialKey(test, q);
      if (!ans) skipped += 1;
      else if (key && ans === key) correct += 1;
      else wrong += 1;
    }
    if (total > 0) {
      rows.push({
        partId: part.id,
        name: part.name,
        title: part.title,
        section: part.section,
        total,
        correct,
        wrong,
        skipped,
        accuracy: Math.round((correct / total) * 100),
      });
    }
  });
  return rows;
}

function getRetryQuestions(attempt, test) {
  const flagSet = new Set(Array.isArray(attempt.flags) ? attempt.flags : []);
  const qs = [];
  (attempt.questionList || []).forEach((q) => {
    const ans = attempt.answers ? attempt.answers[q] : '';
    const key = getOfficialKey(test, q);
    const isRight = Boolean(key && ans && ans === key);
    if (!isRight || flagSet.has(q)) qs.push(q);
  });
  return qs;
}

// ============================================================================
// Main Entry & Render Router
// ============================================================================

export function renderEts(box) {
  if (!box) return;
  if (activeBox && activeBox !== box) {
    cleanupAll();
  }
  activeBox = box;
  ensureDetachWatcher(box);
  renderCurrent();
}

function renderCurrent() {
  if (!activeBox) return;
  if (!activeBox.isConnected) {
    cleanupAll();
    return;
  }

  stopAllAudio();
  closeLightbox();

  if (curView === 'setup') {
    const test = getTestById(selectedTestId);
    if (!test || test.status !== 'ready') {
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    renderSetup(activeBox, test);
  } else if (curView === 'exam' || curView === 'review') {
    if (!session) {
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    renderExamRoom(activeBox);
  } else if (curView === 'results') {
    if (!lastAttempt) {
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    renderResults(activeBox, lastAttempt);
  } else {
    renderCatalog(activeBox);
  }
}

// ============================================================================
// View 1: Test Catalog
// ============================================================================

function renderCatalog(box) {
  stopTimer();
  const history = getHistory();

  const cardsHtml = etsTests
    .map((test) => {
      const isReady = test.status === 'ready';
      const stats = getTestStatsFromHistory(test.id, history);
      const qCount = test.questionsCount || 200;
      const dur = test.durationMin || 120;

      if (!isReady) {
        return `
          <article class="ets-test-card is-soon">
            <div class="ets-test-top">
              <h3 class="ets-test-title">${esc(test.title)}</h3>
              <span class="ets-test-badge">Coming Soon</span>
            </div>
            <div class="ets-test-meta">
              <span>${qCount} Qs · ${dur} min</span>
            </div>
          </article>
        `;
      }

      let badgeHtml = '<span class="ets-test-badge">Ready</span>';
      if (stats.bestScaled !== null) {
        badgeHtml = `<span class="ets-test-badge" style="background:var(--good-soft);color:var(--good)">Best: ${stats.bestScaled} / 990</span>`;
      } else if (stats.bestAccuracy !== null) {
        badgeHtml = `<span class="ets-test-badge">Best: ${stats.bestAccuracy}%</span>`;
      }

      const attemptLabel =
        stats.count === 0
          ? 'Not attempted'
          : stats.count === 1
          ? '1 attempt'
          : `${stats.count} attempts`;

      return `
        <article class="ets-test-card">
          <div class="ets-test-top">
            <h3 class="ets-test-title">${esc(test.title)}</h3>
            ${badgeHtml}
          </div>
          <div class="ets-test-meta">
            <span>${qCount} Qs · ${dur} min</span>
            <span>${esc(attemptLabel)}</span>
          </div>
          <div class="ets-test-actions">
            <button type="button" class="btn primary" data-open-test="${esc(test.id)}">Open Test</button>
          </div>
        </article>
      `;
    })
    .join('');

  const recentHtml = history.length
    ? `
      <section class="card" style="padding:18px;display:flex;flex-direction:column;gap:12px">
        <div class="row between">
          <div>
            <div class="eyebrow">HISTORY</div>
            <h2 style="margin:2px 0 0;font-size:17px">Recent Attempts</h2>
          </div>
          <span class="hint">${history.length} saved</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${history.slice(0, 10).map((att) => renderAttemptRow(att, true)).join('')}
        </div>
      </section>
    `
    : '';

  box.innerHTML = `
    <div class="ets-wrap">
      <header class="ets-header">
        <div>
          <div class="eyebrow">ETS 2026 PRACTICE TESTS</div>
          <h1>Official TOEIC Mock Exams</h1>
          <p class="hint">200 questions · 120 minutes · ETS scaled scoring (10–990)</p>
        </div>
      </header>
      <div class="ets-catalog-grid">
        ${cardsHtml}
      </div>
      ${recentHtml}
    </div>
  `;

  box.querySelectorAll('[data-open-test]').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedTestId = btn.getAttribute('data-open-test');
      curView = 'setup';
      renderCurrent();
    });
  });

  bindAttemptRowActions(box, history);
}

function renderAttemptRow(att, showTestTitle) {
  const scoreBadge =
    att.isFullTest && typeof att.totalScaled === 'number'
      ? `<span class="ets-test-badge" style="background:var(--good-soft);color:var(--good)">${att.totalScaled} / 990</span>`
      : `<span class="ets-test-badge">${att.totalCorrect} / ${att.totalQuestions} (${att.accuracy}%)</span>`;

  return `
    <div class="row between" style="padding:10px 12px;border-radius:var(--r-sm);background:var(--sunk);border:1px solid var(--line)">
      <div style="display:flex;flex-direction:column;gap:3px">
        <div class="row" style="gap:8px">
          <strong>${esc(showTestTitle ? att.testTitle || att.testId : att.modeLabel || 'Attempt')}</strong>
          ${showTestTitle ? `<span class="hint">${esc(att.modeLabel || 'Practice')}</span>` : ''}
          ${scoreBadge}
        </div>
        <span class="hint">
          ${esc(formatAttemptDate(att.date))} · ${att.totalCorrect}/${att.totalQuestions} correct (${att.accuracy}%) · Time ${formatTimer(att.elapsedSec || 0)}
        </span>
      </div>
      <div class="row" style="gap:6px">
        <button type="button" class="btn ghost" data-att-results="${esc(att.id)}">Results</button>
        <button type="button" class="btn" data-att-review="${esc(att.id)}">Review</button>
      </div>
    </div>
  `;
}

function bindAttemptRowActions(container, history) {
  const byId = new Map(history.map((a) => [a.id, a]));
  container.querySelectorAll('[data-att-results]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const att = byId.get(btn.getAttribute('data-att-results'));
      if (att) openResultsForAttempt(att);
    });
  });
  container.querySelectorAll('[data-att-review]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const att = byId.get(btn.getAttribute('data-att-review'));
      if (att) openReviewForAttempt(att);
    });
  });
}

// ============================================================================
// View 2: Test Setup
// ============================================================================

function renderSetup(box, test) {
  stopTimer();
  const history = getHistory().filter((a) => a && a.testId === test.id);
  const sel = getSetupSelection();

  const modeButtons = [
    { id: 'full', label: 'Full Test (200 Qs)' },
    { id: 'listening', label: 'Listening (100 Qs)' },
    { id: 'reading', label: 'Reading (100 Qs)' },
    { id: 'parts', label: 'Practice by Parts' },
  ]
    .map((m) => {
      const on = setupState.mode === m.id;
      return `
        <button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-setup-mode="${m.id}">
          ${esc(m.label)}
        </button>
      `;
    })
    .join('');

  const partsConfigHtml =
    setupState.mode === 'parts'
      ? `
      <div style="display:flex;flex-direction:column;gap:8px">
        <div class="row between">
          <span style="font-size:13px;font-weight:700;color:var(--ink)">Select Parts</span>
          <div class="row" style="gap:6px">
            <button type="button" class="btn ghost" data-parts-preset="listening">Listening</button>
            <button type="button" class="btn ghost" data-parts-preset="reading">Reading</button>
            <button type="button" class="btn ghost" data-parts-preset="all">All</button>
          </div>
        </div>
        <div class="ets-part-picks">
          ${etsParts
            .map((p) => {
              const checked = setupState.selectedParts.has(p.id);
              return `
                <label class="ets-part-pick ${checked ? 'is-checked' : ''}">
                  <input type="checkbox" data-toggle-part="${p.id}" ${checked ? 'checked' : ''} />
                  <span style="display:flex;flex-direction:column;gap:2px">
                    <strong style="font-size:13.5px">${esc(p.name)} (${p.count})</strong>
                    <span class="hint" style="font-size:12px">${esc(p.title)}</span>
                  </span>
                </label>
              `;
            })
            .join('')}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        <span style="font-size:13px;font-weight:700;color:var(--ink)">Timer</span>
        <div class="row" style="gap:10px">
          <div class="seg">
            ${['standard', 'untimed', 'custom']
              .map((tm) => {
                const on = setupState.timerMode === tm;
                const label = tm === 'standard' ? 'Standard' : tm === 'untimed' ? 'Untimed' : 'Custom';
                return `<button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-timer-mode="${tm}">${label}</button>`;
              })
              .join('')}
          </div>
          ${
            setupState.timerMode === 'custom'
              ? `
            <label class="row" style="gap:6px;font-size:13px;font-weight:600">
              <input
                type="number"
                id="ets-custom-min-input"
                min="1"
                max="300"
                value="${setupState.customMinutes}"
                style="width:74px;padding:6px 8px;border:1px solid var(--line);border-radius:var(--r-sm);background:var(--surface);color:var(--ink);font-weight:700"
              />
              <span class="hint">minutes</span>
            </label>
          `
              : ''
          }
        </div>
      </div>
    `
      : '';

  const timeSummary = sel.timerMode === 'untimed' ? 'Untimed' : `${sel.minutes} minutes`;
  const canStart = sel.questionList.length > 0;

  const recentHtml = history.length
    ? `
      <section class="card" style="padding:18px;display:flex;flex-direction:column;gap:12px">
        <div>
          <div class="eyebrow">PAST SESSIONS</div>
          <h2 style="margin:2px 0 0;font-size:17px">Recent Attempts for This Test</h2>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${history.slice(0, 8).map((att) => renderAttemptRow(att, false)).join('')}
        </div>
      </section>
    `
    : '';

  box.innerHTML = `
    <div class="ets-wrap">
      <div>
        <button type="button" class="btn ghost" id="ets-back-catalog">&larr; Back to Tests</button>
      </div>

      <section class="ets-setup-card">
        <div>
          <div class="eyebrow">EXAM CONFIGURATION</div>
          <h1 style="margin:4px 0 4px;font-size:22px;font-weight:800">${esc(test.title)}</h1>
          <p class="hint" style="margin:0">Choose full simulation mode or customize specific Listening and Reading parts.</p>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px">
          <span style="font-size:13px;font-weight:700;color:var(--ink)">Mode</span>
          <div class="seg">
            ${modeButtons}
          </div>
        </div>

        ${partsConfigHtml}

        <div class="row between" style="padding-top:12px;border-top:1px solid var(--line)">
          <div class="row" style="gap:6px">
            <strong>${sel.questionList.length} questions</strong>
            <span class="hint" id="ets-setup-time-summary">· ${esc(timeSummary)} · ${esc(sel.modeLabel)}</span>
          </div>
          <button type="button" class="btn primary" id="ets-start-exam" ${canStart ? '' : 'disabled'}>
            Start Exam
          </button>
        </div>
      </section>

      ${recentHtml}
    </div>
  `;

  box.querySelector('#ets-back-catalog')?.addEventListener('click', () => {
    curView = 'catalog';
    renderCurrent();
  });

  box.querySelectorAll('[data-setup-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setupState.mode = btn.getAttribute('data-setup-mode');
      renderCurrent();
    });
  });

  box.querySelectorAll('[data-toggle-part]').forEach((chk) => {
    chk.addEventListener('change', () => {
      const pid = Number(chk.getAttribute('data-toggle-part'));
      if (chk.checked) setupState.selectedParts.add(pid);
      else setupState.selectedParts.delete(pid);
      renderCurrent();
    });
  });

  box.querySelectorAll('[data-parts-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-parts-preset');
      if (preset === 'listening') setupState.selectedParts = new Set([1, 2, 3, 4]);
      else if (preset === 'reading') setupState.selectedParts = new Set([5, 6, 7]);
      else setupState.selectedParts = new Set([1, 2, 3, 4, 5, 6, 7]);
      renderCurrent();
    });
  });

  box.querySelectorAll('[data-timer-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setupState.timerMode = btn.getAttribute('data-timer-mode');
      renderCurrent();
    });
  });

  const customInput = box.querySelector('#ets-custom-min-input');
  if (customInput) {
    customInput.addEventListener('input', () => {
      const val = Math.max(1, Math.min(300, Number(customInput.value) || 1));
      setupState.customMinutes = val;
      const summaryEl = box.querySelector('#ets-setup-time-summary');
      if (summaryEl) {
        summaryEl.textContent = `· ${val} minutes · ${sel.modeLabel}`;
      }
    });
  }

  box.querySelector('#ets-start-exam')?.addEventListener('click', () => {
    const currentSel = getSetupSelection();
    if (!currentSel.questionList.length) {
      appShowToast('Select at least one part to start.');
      return;
    }
    startNewSession(test, {
      mode: setupState.mode,
      modeLabel: currentSel.modeLabel,
      questionList: currentSel.questionList,
      minutes: currentSel.minutes,
      timerMode: currentSel.timerMode,
    });
  });

  bindAttemptRowActions(box, history);
}

// ============================================================================
// View 3: Exam Room (Exam & Review)
// ============================================================================

function renderExamRoom(box) {
  const test = getTestById(session.testId);
  if (!test) {
    curView = 'catalog';
    renderCatalog(box);
    return;
  }

  const isReview = curView === 'review';
  const page = session.pages[session.pageIdx] || session.pages[0];
  const hasImages = Array.isArray(page.images) && page.images.length > 0;
  const pageQuestions = getPageQuestions(page, session.questionSet);
  const pageQSet = new Set(pageQuestions);

  const activePartIds = [...new Set(session.pages.map((p) => p.part))];
  const answeredCount = session.questionList.reduce(
    (sum, q) => sum + (session.answers[q] ? 1 : 0),
    0
  );
  const totalCount = session.questionList.length;

  const allowPause =
    !isReview &&
    (session.mode === 'parts' || session.mode === 'retry' || session.timerMode === 'untimed' || session.timerMode === 'custom');

  const timerText = isReview
    ? `Time ${formatTimer(session.elapsedSec)}`
    : session.timerMode === 'untimed'
    ? formatTimer(session.elapsedSec)
    : formatTimer(session.remainingSec);

  const timerClass =
    !isReview && session.timerMode !== 'untimed'
      ? session.remainingSec <= 120
        ? 'is-danger'
        : session.remainingSec <= 600
        ? 'is-warn'
        : ''
      : '';

  // Part nav pills
  const partPillsHtml = activePartIds
    .map((pid) => {
      const on = page.part === pid;
      return `<button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-jump-part="${pid}">Part ${pid}</button>`;
    })
    .join('');

  // Images viewer
  const imgStyle = getZoomImgStyle(session.zoom);
  const imagesHtml = hasImages
    ? `
      <div class="ets-page-viewer" id="ets-page-viewer" style="overflow-x:${session.zoom === 'fit' ? 'visible' : 'auto'}">
        ${page.images
          .map(
            (src, idx) => `
          <img
            class="ets-page-img"
            src="${esc(src)}"
            alt="${esc(page.label || `Page ${session.pageIdx + 1}`)} (${idx + 1})"
            loading="eager"
            style="${imgStyle}"
            data-lightbox-idx="${idx}"
          />
        `
          )
          .join('')}
      </div>
    `
    : '';

  // Answer pane groups
  const groupsHtml = (page.groups || [])
    .map((group, gIdx) => {
      const qs = [];
      for (let q = group.qFrom; q <= group.qTo; q++) {
        if (session.questionSet.has(q)) qs.push(q);
      }
      if (!qs.length) return '';

      const groupLabel =
        qs.length > 1 ? `Questions ${qs[0]}–${qs[qs.length - 1]}` : `Question ${qs[0]}`;

      const audioHtml = group.audio
        ? `
        <div class="ets-audio-bar" data-audio-src="${esc(group.audio)}" data-audio-idx="${gIdx}">
          <button type="button" class="ets-audio-play" data-audio-toggle aria-label="Play audio">
            ${SVG.play}
          </button>
          <button type="button" data-audio-seek="-5" title="Back 5 seconds">-5s</button>
          <button type="button" data-audio-seek="5" title="Forward 5 seconds">+5s</button>
          <input type="range" data-audio-range min="0" max="1000" value="0" aria-label="Audio progress" />
          <span class="ets-audio-time" data-audio-time>0:00 / 0:00</span>
          <button type="button" data-audio-speed title="Playback speed">${session.audioSpeed.toFixed(1)}x</button>
        </div>
      `
        : '';

      const rowsHtml = qs
        .map((q) => renderQuestionRow(q, page.part, test, isReview))
        .join('');

      return `
        <div class="ets-questions-card">
          ${qs.length > 1 || group.audio ? `<div class="hint" style="font-weight:700;padding:0 2px 4px">${esc(groupLabel)}</div>` : ''}
          ${audioHtml}
          ${rowsHtml}
        </div>
      `;
    })
    .join('');

  const paletteHtml = renderPaletteContent(test, isReview, pageQSet);
  const isFirstPage = session.pageIdx <= 0;
  const isLastPage = session.pageIdx >= session.pages.length - 1;

  const pauseBannerHtml =
    !isReview && session.paused
      ? `
      <div class="row between" style="padding:10px 14px;border-radius:var(--r);background:var(--warn-soft);border:1px solid var(--warn)">
        <strong style="font-size:13.5px;color:var(--ink)">Exam is paused. Timer and audio are stopped.</strong>
        <button type="button" class="btn primary" id="ets-resume-banner">Resume</button>
      </div>
    `
      : '';

  box.innerHTML = `
    <div class="ets-wrap">
      <div class="ets-exam-bar">
        <div class="ets-exam-bar-left">
          <span class="ets-exam-title">${esc(test.title)}</span>
          <span class="ets-test-badge">${isReview ? 'Review Mode' : esc(session.modeLabel)}</span>
          <div class="seg seg-sm" role="navigation" aria-label="Jump to part">
            ${partPillsHtml}
          </div>
        </div>

        <div class="ets-exam-bar-right">
          <div class="ets-timer ${timerClass}" aria-label="Exam timer">
            ${SVG.clock}
            <span data-timer-val>${esc(timerText)}</span>
          </div>
          ${
            allowPause
              ? `<button type="button" class="btn ghost" id="ets-pause-toggle">${session.paused ? 'Resume' : 'Pause'}</button>`
              : ''
          }
          <span class="hint" id="ets-progress-text" style="font-weight:700;font-variant-numeric:tabular-nums">${answeredCount} / ${totalCount}</span>
          <button type="button" class="btn ghost" id="ets-palette-toggle" aria-label="Toggle Question Navigator">
            ${SVG.grid}
            <span>Palette</span>
          </button>
          ${
            isReview
              ? `<button type="button" class="btn primary" id="ets-back-results">Results</button>`
              : `<button type="button" class="btn primary" id="ets-submit-btn">Submit</button>`
          }
          <button type="button" class="btn ghost" id="ets-exit-btn">Exit</button>
        </div>
      </div>

      ${pauseBannerHtml}

      <div class="ets-workspace">
        <main class="ets-main-pane">
          <div class="row between">
            <div class="row" style="gap:10px">
              <strong style="font-size:16px">${esc(page.label || `Part ${page.part}`)}</strong>
              <span class="hint">Page ${session.pageIdx + 1} of ${session.pages.length}</span>
            </div>
            <div class="row" style="gap:10px">
              ${
                page.part === 2
                  ? `
                <label class="row" style="gap:6px;font-size:13px;font-weight:600;cursor:pointer">
                  <input type="checkbox" id="ets-autonext-chk" ${session.autoNextAudio ? 'checked' : ''} style="accent-color:var(--accent)" />
                  <span>Auto-Next Audio</span>
                </label>
              `
                  : ''
              }
              ${
                hasImages
                  ? `
                <div class="seg seg-sm" id="ets-zoom-seg" role="group" aria-label="Image zoom">
                  ${[
                    { id: 'fit', label: 'Fit' },
                    { id: '100', label: '100%' },
                    { id: '130', label: '130%' },
                  ]
                    .map((z) => {
                      const on = session.zoom === z.id;
                      return `<button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-zoom="${z.id}">${z.label}</button>`;
                    })
                    .join('')}
                </div>
              `
                  : ''
              }
            </div>
          </div>

          <div class="ets-split" ${hasImages ? '' : 'style="grid-template-columns:1fr"'}>
            ${imagesHtml}
            <div class="ets-answer-pane" style="display:flex;flex-direction:column;gap:12px">
              ${groupsHtml}
            </div>
          </div>

          <div class="row between" style="padding-top:4px">
            <button type="button" class="btn ghost" id="ets-prev-page" ${isFirstPage ? 'disabled' : ''}>
              &larr; Previous Page
            </button>
            <span class="hint">Page ${session.pageIdx + 1} / ${session.pages.length}</span>
            ${
              isLastPage
                ? isReview
                  ? `<button type="button" class="btn primary" id="ets-last-results">Back to Results</button>`
                  : `<button type="button" class="btn primary" id="ets-last-submit">Submit Exam</button>`
                : `<button type="button" class="btn primary" id="ets-next-page">Next Page &rarr;</button>`
            }
          </div>
        </main>

        <aside class="ets-palette-pane ${session.paletteOpen ? 'is-open' : ''}" id="ets-palette-pane" aria-label="Question Navigator">
          <div class="ets-palette-head">
            <strong style="font-size:14px">Question Navigator</strong>
            <button type="button" class="btn ghost" id="ets-palette-close" aria-label="Close navigator" style="padding:4px 8px;min-height:auto">
              ${SVG.close}
            </button>
          </div>
          ${
            isReview
              ? `
            <div class="seg seg-sm" id="ets-review-filter">
              ${[
                { id: 'all', label: 'All' },
                { id: 'incorrect', label: 'Incorrect' },
                { id: 'flagged', label: 'Flagged' },
                { id: 'skipped', label: 'Skipped' },
              ]
                .map((f) => {
                  const on = session.reviewFilter === f.id;
                  return `<button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-rfilter="${f.id}">${f.label}</button>`;
                })
                .join('')}
            </div>
          `
              : ''
          }
          <div id="ets-palette-body" style="display:flex;flex-direction:column;gap:12px">
            ${paletteHtml}
          </div>
        </aside>
      </div>
    </div>
  `;

  bindExamRoomEvents(box, test, page, isReview);
}

function renderQuestionRow(q, partId, test, isReview) {
  const options = getOptionsForPart(partId);
  const userAns = session.answers[q] || '';
  const isFlagged = session.flags.has(q);
  const key = getOfficialKey(test, q);

  const bubblesHtml = options
    .map((opt) => {
      const classes = ['ets-bubble'];
      if (isReview) {
        if (opt === key) classes.push('is-correct');
        if (userAns === opt && opt !== key) classes.push('is-wrong');
      } else if (userAns === opt) {
        classes.push('is-selected');
      }
      return `
        <button
          type="button"
          class="${classes.join(' ')}"
          data-q="${q}"
          data-opt="${opt}"
          aria-pressed="${userAns === opt}"
          ${isReview ? 'disabled' : ''}
        >${opt}</button>
      `;
    })
    .join('');

  let reviewStatusHtml = '';
  if (isReview) {
    if (!userAns) {
      reviewStatusHtml = `<span style="font-size:12px;font-weight:700;color:var(--muted);white-space:nowrap">Skipped · Key: ${esc(key)}</span>`;
    } else if (userAns === key) {
      reviewStatusHtml = `<span style="font-size:12px;font-weight:700;color:var(--good);white-space:nowrap">Correct</span>`;
    } else {
      reviewStatusHtml = `<span style="font-size:12px;font-weight:700;color:var(--bad);white-space:nowrap">Your: ${esc(userAns)} · Key: ${esc(key)}</span>`;
    }
  }

  return `
    <div class="ets-q-row" id="ets-q-${q}" data-q-row="${q}">
      <div class="row" style="gap:10px;flex:1;min-width:0">
        <span class="ets-q-num">Q${q}</span>
        <div class="ets-bubbles" role="group" aria-label="Question ${q} choices">
          ${bubblesHtml}
        </div>
        ${reviewStatusHtml}
      </div>
      <button
        type="button"
        class="ets-flag-btn ${isFlagged ? 'is-flagged' : ''}"
        data-flag-q="${q}"
        aria-pressed="${isFlagged}"
        aria-label="${isFlagged ? 'Remove flag' : 'Flag question'} ${q}"
        title="${isFlagged ? 'Remove flag' : 'Flag for review'}"
      >
        ${isFlagged ? SVG.flagFilled : SVG.flag}
      </button>
    </div>
  `;
}

function renderPaletteContent(test, isReview, pageQSet) {
  const sections = [];

  etsParts.forEach((part) => {
    const qs = [];
    for (let q = part.from; q <= part.to; q++) {
      if (!session.questionSet.has(q)) continue;
      if (isReview && session.reviewFilter !== 'all') {
        const userAns = session.answers[q] || '';
        const key = getOfficialKey(test, q);
        if (session.reviewFilter === 'incorrect' && (!userAns || userAns === key)) continue;
        if (session.reviewFilter === 'flagged' && !session.flags.has(q)) continue;
        if (session.reviewFilter === 'skipped' && Boolean(userAns)) continue;
      }
      qs.push(q);
    }

    if (!qs.length) return;

    const btnsHtml = qs
      .map((q) => {
        const userAns = session.answers[q] || '';
        const isFlagged = session.flags.has(q);
        const isCurrent = pageQSet.has(q);
        const classes = ['ets-pal-btn'];
        if (isCurrent) classes.push('is-current');
        if (isFlagged) classes.push('is-flagged');

        if (isReview) {
          const key = getOfficialKey(test, q);
          if (!userAns) classes.push('is-skipped');
          else if (userAns === key) classes.push('is-correct');
          else classes.push('is-wrong');
        } else if (userAns) {
          classes.push('is-answered');
        }

        return `<button type="button" class="${classes.join(' ')}" data-palette-q="${q}">${q}</button>`;
      })
      .join('');

    sections.push(`
      <div style="display:flex;flex-direction:column;gap:6px">
        <span class="hint" style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em">${esc(part.name)}</span>
        <div class="ets-palette-grid">${btnsHtml}</div>
      </div>
    `);
  });

  if (!sections.length) {
    return `<p class="hint" style="margin:6px 0">No questions match this filter.</p>`;
  }
  return sections.join('');
}

function bindExamRoomEvents(box, test, page, isReview) {
  // Part jump pills
  box.querySelectorAll('[data-jump-part]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetPart = Number(btn.getAttribute('data-jump-part'));
      const idx = session.pages.findIndex((p) => p.part === targetPart);
      if (idx >= 0 && idx !== session.pageIdx) {
        session.pageIdx = idx;
        renderCurrent();
        scrollMainTop(box);
      }
    });
  });

  // Pause / Resume
  const togglePause = () => {
    session.paused = !session.paused;
    if (session.paused) stopAllAudio();
    renderCurrent();
  };
  box.querySelector('#ets-pause-toggle')?.addEventListener('click', togglePause);
  box.querySelector('#ets-resume-banner')?.addEventListener('click', togglePause);

  // Mobile palette drawer
  const setPaletteOpen = (open) => {
    session.paletteOpen = open;
    box.querySelector('#ets-palette-pane')?.classList.toggle('is-open', open);
  };
  box.querySelector('#ets-palette-toggle')?.addEventListener('click', () => {
    setPaletteOpen(!session.paletteOpen);
  });
  box.querySelector('#ets-palette-close')?.addEventListener('click', () => setPaletteOpen(false));

  // Submit / Results / Exit
  const handleSubmit = async () => {
    const unanswered = session.questionList.reduce(
      (sum, q) => sum + (session.answers[q] ? 0 : 1),
      0
    );
    const msg =
      unanswered > 0
        ? `You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. Submit exam now?`
        : 'All questions are answered. Submit exam and view your ETS score?';
    const ok = await askConfirm({
      title: 'Submit Exam',
      message: msg,
      confirmText: 'Submit Exam',
      cancelText: 'Continue Exam',
    });
    if (ok) finalizeExam();
  };

  box.querySelector('#ets-submit-btn')?.addEventListener('click', handleSubmit);
  box.querySelector('#ets-last-submit')?.addEventListener('click', handleSubmit);

  const goResults = () => {
    cleanupAll();
    curView = 'results';
    renderCurrent();
  };
  box.querySelector('#ets-back-results')?.addEventListener('click', goResults);
  box.querySelector('#ets-last-results')?.addEventListener('click', goResults);

  box.querySelector('#ets-exit-btn')?.addEventListener('click', async () => {
    if (!isReview) {
      const ok = await askConfirm({
        title: 'Exit Exam',
        message: 'Your current progress will not be saved if you exit now. Leave exam?',
        confirmText: 'Exit Exam',
        cancelText: 'Stay',
        danger: true,
      });
      if (!ok) return;
    }
    cleanupAll();
    session = null;
    curView = 'catalog';
    renderCurrent();
  });

  // Page navigation
  box.querySelector('#ets-prev-page')?.addEventListener('click', () => {
    if (session.pageIdx > 0) {
      session.pageIdx -= 1;
      renderCurrent();
      scrollMainTop(box);
    }
  });
  box.querySelector('#ets-next-page')?.addEventListener('click', () => {
    if (session.pageIdx < session.pages.length - 1) {
      session.pageIdx += 1;
      renderCurrent();
      scrollMainTop(box);
    }
  });

  // Auto-Next Audio toggle (Part 2)
  const autoNextChk = box.querySelector('#ets-autonext-chk');
  if (autoNextChk) {
    autoNextChk.addEventListener('change', () => {
      session.autoNextAudio = autoNextChk.checked;
    });
  }

  // Zoom controls (in-place update)
  const zoomSeg = box.querySelector('#ets-zoom-seg');
  if (zoomSeg) {
    zoomSeg.querySelectorAll('[data-zoom]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const z = btn.getAttribute('data-zoom');
        session.zoom = z;
        const viewer = box.querySelector('#ets-page-viewer');
        if (viewer) {
          viewer.style.overflowX = z === 'fit' ? 'visible' : 'auto';
          const styleStr = getZoomImgStyle(z);
          viewer.querySelectorAll('.ets-page-img').forEach((img) => {
            img.setAttribute('style', styleStr);
          });
        }
        zoomSeg.querySelectorAll('[data-zoom]').forEach((b) => {
          const on = b.getAttribute('data-zoom') === z;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', String(on));
        });
      });
    });
  }

  // Image click -> full-screen zoom lightbox
  box.querySelectorAll('.ets-page-img').forEach((img) => {
    img.addEventListener('click', () => {
      const idx = Number(img.getAttribute('data-lightbox-idx')) || 0;
      openLightbox(page.images || [], idx, page.label || '');
    });
  });

  // Answer bubbles (in-place DOM update so audio never interrupts)
  if (!isReview) {
    box.querySelectorAll('.ets-bubble').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (session.paused) {
          appShowToast('Resume the exam to record answers.');
          return;
        }
        const q = Number(btn.getAttribute('data-q'));
        const opt = btn.getAttribute('data-opt');
        session.answers[q] = opt;

        const row = box.querySelector(`[data-q-row="${q}"]`);
        if (row) {
          row.querySelectorAll('.ets-bubble').forEach((b) => {
            const isSel = b.getAttribute('data-opt') === opt;
            b.classList.toggle('is-selected', isSel);
            b.setAttribute('aria-pressed', String(isSel));
          });
        }

        const palBtn = box.querySelector(`[data-palette-q="${q}"]`);
        if (palBtn) palBtn.classList.add('is-answered');

        const progEl = box.querySelector('#ets-progress-text');
        if (progEl) {
          const answeredCount = session.questionList.reduce(
            (sum, qn) => sum + (session.answers[qn] ? 1 : 0),
            0
          );
          progEl.textContent = `${answeredCount} / ${session.questionList.length}`;
        }
      });
    });
  }

  // Flag buttons (in-place DOM update)
  box.querySelectorAll('[data-flag-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const q = Number(btn.getAttribute('data-flag-q'));
      const nowFlagged = !session.flags.has(q);
      if (nowFlagged) session.flags.add(q);
      else session.flags.delete(q);

      btn.classList.toggle('is-flagged', nowFlagged);
      btn.setAttribute('aria-pressed', String(nowFlagged));
      btn.setAttribute('aria-label', `${nowFlagged ? 'Remove flag' : 'Flag question'} ${q}`);
      btn.innerHTML = nowFlagged ? SVG.flagFilled : SVG.flag;

      const palBtn = box.querySelector(`[data-palette-q="${q}"]`);
      if (palBtn) palBtn.classList.toggle('is-flagged', nowFlagged);
    });
  });

  // Review filter in palette
  const reviewFilterSeg = box.querySelector('#ets-review-filter');
  if (reviewFilterSeg) {
    reviewFilterSeg.querySelectorAll('[data-rfilter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        session.reviewFilter = btn.getAttribute('data-rfilter');
        reviewFilterSeg.querySelectorAll('[data-rfilter]').forEach((b) => {
          const on = b.getAttribute('data-rfilter') === session.reviewFilter;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        const palBody = box.querySelector('#ets-palette-body');
        if (palBody) {
          const pageQSet = new Set(getPageQuestions(page, session.questionSet));
          palBody.innerHTML = renderPaletteContent(test, isReview, pageQSet);
          bindPaletteJumpButtons(box, setPaletteOpen);
        }
      });
    });
  }

  bindPaletteJumpButtons(box, setPaletteOpen);
  bindAudioBars(box, page);
}

function bindPaletteJumpButtons(box, setPaletteOpen) {
  box.querySelectorAll('[data-palette-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetQ = Number(btn.getAttribute('data-palette-q'));
      const targetPageIdx = session.pages.findIndex((p) =>
        (p.groups || []).some((g) => targetQ >= g.qFrom && targetQ <= g.qTo)
      );
      if (targetPageIdx < 0) return;

      if (session.paletteOpen) setPaletteOpen(false);

      if (targetPageIdx !== session.pageIdx) {
        session.pageIdx = targetPageIdx;
        renderCurrent();
      }

      requestAnimationFrame(() => {
        const row = activeBox && activeBox.querySelector(`#ets-q-${targetQ}`);
        if (row) {
          row.scrollIntoView({ behavior: 'smooth', block: 'center' });
          row.classList.add('is-current');
          setTimeout(() => row.classList.remove('is-current'), 1000);
        }
      });
    });
  });
}

function scrollMainTop(box) {
  const topEl = box.querySelector('.ets-exam-bar');
  if (topEl) {
    topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================================
// Inline Audio Player (Strict Single-Audio Playback)
// ============================================================================

function bindAudioBars(box, page) {
  const bars = Array.from(box.querySelectorAll('.ets-audio-bar'));
  const audioMap = new WeakMap();

  const getOrCreateAudio = (bar) => {
    let audio = audioMap.get(bar);
    if (audio) return audio;

    const src = bar.getAttribute('data-audio-src');
    audio = new Audio();
    audio.preload = 'metadata';
    audio.src = src;
    audio.playbackRate = session ? session.audioSpeed : 1.0;

    const toggleBtn = bar.querySelector('[data-audio-toggle]');
    const range = bar.querySelector('[data-audio-range]');
    const timeEl = bar.querySelector('[data-audio-time]');

    const syncTime = () => {
      const cur = audio.currentTime || 0;
      const dur = Number.isFinite(audio.duration) ? audio.duration : 0;
      if (timeEl) {
        timeEl.textContent = `${formatAudioTime(cur)} / ${formatAudioTime(dur)}`;
      }
      if (range && dur > 0) {
        range.value = String(Math.round((cur / dur) * 1000));
      }
    };

    audio.addEventListener('loadedmetadata', syncTime);
    audio.addEventListener('timeupdate', syncTime);

    audio.addEventListener('play', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.pause;
        toggleBtn.setAttribute('aria-label', 'Pause audio');
      }
    });

    audio.addEventListener('pause', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.play;
        toggleBtn.setAttribute('aria-label', 'Play audio');
      }
    });

    audio.addEventListener('ended', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.play;
        toggleBtn.setAttribute('aria-label', 'Play audio');
      }
      if (activeAudio === audio) {
        activeAudio = null;
        activeAudioBarEl = null;
      }

      // Part 2 Auto-Next Audio
      if (page.part === 2 && session && session.autoNextAudio && !session.paused) {
        const curIdx = bars.indexOf(bar);
        const nextBar = curIdx >= 0 ? bars[curIdx + 1] : null;
        if (nextBar && nextBar.isConnected) {
          nextBar.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const nextToggle = nextBar.querySelector('[data-audio-toggle]');
          if (nextToggle) nextToggle.click();
        }
      }
    });

    audio.addEventListener('error', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.play;
        toggleBtn.setAttribute('aria-label', 'Play audio');
      }
      if (activeAudio === audio) {
        activeAudio = null;
        activeAudioBarEl = null;
      }
      appShowToast('Audio track could not be loaded.');
    });

    audioMap.set(bar, audio);
    return audio;
  };

  bars.forEach((bar) => {
    const toggleBtn = bar.querySelector('[data-audio-toggle]');
    const range = bar.querySelector('[data-audio-range]');
    const speedBtn = bar.querySelector('[data-audio-speed]');

    toggleBtn?.addEventListener('click', () => {
      if (curView === 'exam' && session && session.paused) {
        appShowToast('Resume the exam to play audio.');
        return;
      }
      const audio = getOrCreateAudio(bar);
      if (activeAudio && activeAudio !== audio) {
        stopAllAudio();
      }
      if (audio.paused) {
        audio.playbackRate = session ? session.audioSpeed : 1.0;
        activeAudio = audio;
        activeAudioBarEl = bar;
        const p = audio.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            if (toggleBtn) toggleBtn.innerHTML = SVG.play;
          });
        }
      } else {
        audio.pause();
        if (activeAudio === audio) {
          activeAudio = null;
          activeAudioBarEl = null;
        }
      }
    });

    bar.querySelectorAll('[data-audio-seek]').forEach((seekBtn) => {
      seekBtn.addEventListener('click', () => {
        const delta = Number(seekBtn.getAttribute('data-audio-seek')) || 0;
        const audio = getOrCreateAudio(bar);
        const dur = Number.isFinite(audio.duration) ? audio.duration : 0;
        const next = Math.max(
          0,
          Math.min(dur || Number.MAX_SAFE_INTEGER, (audio.currentTime || 0) + delta)
        );
        audio.currentTime = next;
      });
    });

    range?.addEventListener('input', () => {
      const audio = getOrCreateAudio(bar);
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (Number(range.value) / 1000) * audio.duration;
      }
    });

    speedBtn?.addEventListener('click', () => {
      const curSpeed = session ? session.audioSpeed : 1.0;
      const idx = AUDIO_SPEEDS.findIndex((s) => Math.abs(s - curSpeed) < 0.05);
      const nextSpeed = AUDIO_SPEEDS[(idx + 1) % AUDIO_SPEEDS.length];
      if (session) session.audioSpeed = nextSpeed;
      bars.forEach((b) => {
        const sb = b.querySelector('[data-audio-speed]');
        if (sb) sb.textContent = `${nextSpeed.toFixed(1)}x`;
        const a = audioMap.get(b);
        if (a) a.playbackRate = nextSpeed;
      });
    });
  });
}

// ============================================================================
// Full-Screen Image Lightbox
// ============================================================================

function openLightbox(images, startIdx, title) {
  if (!images || !images.length) return;
  closeLightbox();

  let curIdx = Math.max(0, Math.min(images.length - 1, startIdx));

  const overlay = document.createElement('div');
  overlay.className = 'ets-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', title || 'Exam Page Preview');

  const renderInner = () => {
    const multi = images.length > 1;
    overlay.innerHTML = `
      <button type="button" class="ets-lightbox-close" data-lb-close aria-label="Close preview">&times;</button>
      ${
        multi
          ? `
        <div style="position:fixed;bottom:18px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:2001">
          <button type="button" class="btn" data-lb-prev ${curIdx === 0 ? 'disabled' : ''}>&larr; Prev (${curIdx + 1}/${images.length})</button>
          <button type="button" class="btn" data-lb-next ${curIdx === images.length - 1 ? 'disabled' : ''}>Next &rarr;</button>
        </div>
      `
          : ''
      }
      <img src="${esc(images[curIdx])}" alt="${esc(title)}" />
    `;

    overlay.querySelector('[data-lb-close]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
    overlay.querySelector('[data-lb-prev]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (curIdx > 0) {
        curIdx -= 1;
        renderInner();
      }
    });
    overlay.querySelector('[data-lb-next]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (curIdx < images.length - 1) {
        curIdx += 1;
        renderInner();
      }
    });
    overlay.querySelector('img')?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  };

  overlay.addEventListener('click', closeLightbox);
  renderInner();
  document.body.appendChild(overlay);
  lightboxEl = overlay;

  lightboxKeyHandler = (e) => {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft' && curIdx > 0) {
      curIdx -= 1;
      renderInner();
    } else if (e.key === 'ArrowRight' && curIdx < images.length - 1) {
      curIdx += 1;
      renderInner();
    }
  };
  document.addEventListener('keydown', lightboxKeyHandler);
}

// ============================================================================
// View 4: Results Screen
// ============================================================================

function renderResults(box, attempt) {
  stopTimer();
  const test = getTestById(attempt.testId);
  const breakdown = test ? computePartBreakdown(attempt, test) : [];
  const retryQs = test ? getRetryQuestions(attempt, test) : [];

  let ringValue = `${attempt.accuracy}%`;
  let ringSub = `${attempt.totalCorrect} / ${attempt.totalQuestions}`;

  if (attempt.isFullTest && typeof attempt.totalScaled === 'number') {
    ringValue = String(attempt.totalScaled);
    ringSub = 'of 990';
  } else if (attempt.lcTotal === 100 && attempt.rcTotal === 0 && typeof attempt.lcScaled === 'number') {
    ringValue = String(attempt.lcScaled);
    ringSub = 'LC / 495';
  } else if (attempt.rcTotal === 100 && attempt.lcTotal === 0 && typeof attempt.rcScaled === 'number') {
    ringValue = String(attempt.rcScaled);
    ringSub = 'RC / 495';
  }

  const lcBarHtml =
    attempt.lcTotal > 0 && typeof attempt.lcScaled === 'number'
      ? `
      <div class="ets-part-row">
        <div class="ets-part-row-head">
          <span>Listening ${attempt.lcTotal < 100 ? '(Estimated)' : ''}</span>
          <span>${attempt.lcScaled} / 495 · ${attempt.lcCorrect}/${attempt.lcTotal} raw</span>
        </div>
        <div class="ets-bar-track">
          <div class="ets-bar-fill" style="width:${Math.round((attempt.lcScaled / 495) * 100)}%"></div>
        </div>
      </div>
    `
      : '';

  const rcBarHtml =
    attempt.rcTotal > 0 && typeof attempt.rcScaled === 'number'
      ? `
      <div class="ets-part-row">
        <div class="ets-part-row-head">
          <span>Reading ${attempt.rcTotal < 100 ? '(Estimated)' : ''}</span>
          <span>${attempt.rcScaled} / 495 · ${attempt.rcCorrect}/${attempt.rcTotal} raw</span>
        </div>
        <div class="ets-bar-track">
          <div class="ets-bar-fill is-good" style="width:${Math.round((attempt.rcScaled / 495) * 100)}%"></div>
        </div>
      </div>
    `
      : '';

  const breakdownHtml = breakdown
    .map((row) => {
      const fillClass = row.accuracy >= 80 ? 'is-good' : row.accuracy >= 50 ? '' : 'is-warn';
      return `
        <div class="ets-part-row">
          <div class="ets-part-row-head">
            <span>${esc(row.name)}: ${esc(row.title)}</span>
            <span>${row.correct} / ${row.total} (${row.accuracy}%)</span>
          </div>
          <div class="ets-bar-track">
            <div class="ets-bar-fill ${fillClass}" style="width:${row.accuracy}%"></div>
          </div>
        </div>
      `;
    })
    .join('');

  box.innerHTML = `
    <div class="ets-wrap">
      <div>
        <button type="button" class="btn ghost" id="ets-res-back">&larr; Back to Tests</button>
      </div>

      <section class="ets-score-card">
        <div>
          <div class="eyebrow">EXAM RESULTS</div>
          <h1 style="margin:4px 0 2px;font-size:22px;font-weight:800">${esc(attempt.testTitle || 'ETS 2026 Practice Test')}</h1>
          <p class="hint" style="margin:0">${esc(attempt.modeLabel || 'Practice')} · ${esc(formatAttemptDate(attempt.date))}</p>
        </div>

        <div class="ets-score-hero">
          <div class="ets-score-ring">
            <strong>${esc(ringValue)}</strong>
            <span>${esc(ringSub)}</span>
          </div>

          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
            ${lcBarHtml}
            ${rcBarHtml}
            <div class="row" style="gap:18px;padding-top:4px">
              <div>
                <div class="hint">Raw Correct</div>
                <strong style="font-size:15px">${attempt.totalCorrect} / ${attempt.totalQuestions}</strong>
              </div>
              <div>
                <div class="hint">Accuracy</div>
                <strong style="font-size:15px">${attempt.accuracy}%</strong>
              </div>
              <div>
                <div class="hint">Time Taken</div>
                <strong style="font-size:15px">${formatTimer(attempt.elapsedSec || 0)}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="gap:8px;padding-top:6px;border-top:1px solid var(--line)">
          <button type="button" class="btn primary" id="ets-res-review">Review All Answers</button>
          ${
            retryQs.length > 0 && test
              ? `<button type="button" class="btn" id="ets-res-retry">Retry Incorrect &amp; Flagged (${retryQs.length})</button>`
              : ''
          }
          <button type="button" class="btn ghost" id="ets-res-catalog">Back to Tests</button>
        </div>
      </section>

      ${
        breakdown.length
          ? `
        <section class="card" style="padding:18px;display:flex;flex-direction:column;gap:14px">
          <div>
            <div class="eyebrow">PERFORMANCE BY PART</div>
            <h2 style="margin:2px 0 0;font-size:17px">Per-Part Breakdown</h2>
          </div>
          <div class="ets-part-breakdown">
            ${breakdownHtml}
          </div>
        </section>
      `
          : ''
      }
    </div>
  `;

  const goCatalog = () => {
    curView = 'catalog';
    renderCurrent();
  };
  box.querySelector('#ets-res-back')?.addEventListener('click', goCatalog);
  box.querySelector('#ets-res-catalog')?.addEventListener('click', goCatalog);

  box.querySelector('#ets-res-review')?.addEventListener('click', () => {
    openReviewForAttempt(attempt);
  });

  box.querySelector('#ets-res-retry')?.addEventListener('click', () => {
    if (!test || !retryQs.length) return;
    startNewSession(test, {
      mode: 'retry',
      modeLabel: `Retry (${retryQs.length} Qs)`,
      questionList: retryQs,
      minutes: 0,
      timerMode: 'untimed',
    });
  });
}
