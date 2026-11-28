// ets-view.js - Official ETS 2026 Computer-Based TOEIC (CBT) Exam Engine

import {
  loadTestContent as defaultLoadTestContent,
  ETS_PART_DIRECTIONS as defaultPartDirections,
} from './ets-data.js?v=55';

const HISTORY_KEY = 'ets2026_history';
const VOLUME_KEY = 'ets2026_volume';
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
let etsLoadContent = defaultLoadTestContent;
let etsPartDirections = defaultPartDirections;

// View & session state
let activeBox = null;
let curView = 'catalog'; // 'catalog' | 'setup' | 'exam' | 'review' | 'results'
let selectedTestId = null;

const setupState = {
  examMode: 'practice', // 'real' | 'practice'
  scope: 'full', // 'full' | 'listening' | 'reading' | 'parts'
  selectedParts: new Set([1, 2, 3, 4, 5, 6, 7]),
  timerMode: 'standard', // 'standard' | 'untimed' | 'custom'
  customMinutes: 30,
};

let session = null;
let lastAttempt = null;
let globalVolume = 0.85;

// Active media / timer / overlay references
let timerInterval = null;
let activeAudio = null;
let activeAudioBarEl = null;
let autoAdvanceTimeout = null;
let lightboxEl = null;
let lightboxKeyHandler = null;
let examKeyHandler = null;
let pendingAutoPlay = false;
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
  volume: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  strike: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="12" x2="20" y2="12"/><path d="M16 6c-.5-1.5-2-2.5-4-2.5-2.5 0-4 1.3-4 3 0 1.4.8 2.2 2.5 2.7"/><path d="M8 18c.6 1.5 2.2 2.5 4.2 2.5 2.6 0 4.3-1.3 4.3-3.2 0-1.1-.5-2-1.5-2.6"/></svg>',
  highlighter: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>',
};

export function initEtsView(ctx = {}) {
  appStore = ctx.store || null;
  if (typeof ctx.esc === 'function') appEsc = ctx.esc;
  if (typeof ctx.showToast === 'function') appShowToast = ctx.showToast;
  if (typeof ctx.confirmModal === 'function') appConfirmModal = ctx.confirmModal;
  if (Array.isArray(ctx.ETS_TESTS)) etsTests = ctx.ETS_TESTS;
  if (Array.isArray(ctx.ETS_PARTS) && ctx.ETS_PARTS.length) etsParts = ctx.ETS_PARTS;
  if (typeof ctx.calcEtsScore === 'function') etsCalcScore = ctx.calcEtsScore;
  if (typeof ctx.loadTestContent === 'function') etsLoadContent = ctx.loadTestContent;
  if (ctx.ETS_PART_DIRECTIONS && typeof ctx.ETS_PART_DIRECTIONS === 'object') {
    etsPartDirections = ctx.ETS_PART_DIRECTIONS;
  }
  globalVolume = loadSavedVolume();
}

// ============================================================================
// Helpers
// ============================================================================

function esc(v) {
  return appEsc(v);
}

function loadSavedVolume() {
  let v = 0.85;
  try {
    if (appStore) {
      const stored = appStore.get(VOLUME_KEY, null);
      if (stored !== null && Number.isFinite(Number(stored))) v = Number(stored);
    } else if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(VOLUME_KEY);
      if (raw !== null && Number.isFinite(Number(raw))) v = Number(raw);
    }
  } catch {}
  return Math.max(0, Math.min(1, v));
}

function saveVolume(val) {
  const clamped = Math.max(0, Math.min(1, Number(val)));
  globalVolume = Number.isFinite(clamped) ? clamped : 0.85;
  try {
    if (appStore) appStore.set(VOLUME_KEY, globalVolume);
    else if (typeof localStorage !== 'undefined') localStorage.setItem(VOLUME_KEY, String(globalVolume));
  } catch {}
  if (activeAudio) {
    try {
      activeAudio.volume = globalVolume;
    } catch {}
  }
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
  const { examMode, scope, selectedParts, timerMode, customMinutes } = setupState;

  if (examMode === 'real') {
    const partIds = [1, 2, 3, 4, 5, 6, 7];
    const questionList = Array.from({ length: 200 }, (_, i) => i + 1);
    return {
      examMode: 'real',
      mode: 'real',
      partIds,
      questionList,
      minutes: 120,
      timerMode: 'standard',
      modeLabel: 'Real Exam (IIG/ETS)',
    };
  }

  let partIds = [];
  if (scope === 'full') partIds = [1, 2, 3, 4, 5, 6, 7];
  else if (scope === 'listening') partIds = [1, 2, 3, 4];
  else if (scope === 'reading') partIds = [5, 6, 7];
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
  if (timerMode === 'untimed') {
    minutes = 0;
  } else if (timerMode === 'custom') {
    minutes = Math.max(1, Math.min(300, Math.round(Number(customMinutes) || 30)));
  } else if (scope === 'full') {
    minutes = 120;
  } else if (scope === 'listening') {
    minutes = 45;
  } else if (scope === 'reading') {
    minutes = 75;
  } else {
    minutes = partIds.reduce((sum, pid) => sum + (PART_STANDARD_MINUTES[pid] || 10), 0);
  }

  let modeLabel = 'Practice · Full Test';
  if (scope === 'listening') modeLabel = 'Practice · Listening';
  else if (scope === 'reading') modeLabel = 'Practice · Reading';
  else if (scope === 'parts') {
    modeLabel = partIds.length === 1 ? `Practice · Part ${partIds[0]}` : `Practice · Parts ${partIds.join(', ')}`;
  }

  return { examMode: 'practice', mode: scope, partIds, questionList, minutes, timerMode, modeLabel };
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

function getPageGroupKey(page) {
  const g = (page.groups || [])[0];
  if (!g) return '';
  return g.qFrom === g.qTo ? String(g.qFrom) : `${g.qFrom}-${g.qTo}`;
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
  if (zoom === '125') return 'width:125%;max-width:none;';
  if (zoom === '150') return 'width:150%;max-width:none;';
  return 'width:100%;max-width:100%;';
}

function setFocusMode(enabled) {
  if (typeof document === 'undefined' || !document.body) return;
  document.body.classList.toggle('ets-focus-mode', Boolean(enabled));
}

function isOptionStruck(q, opt) {
  if (!session || !session.struck) return false;
  const set = session.struck[q];
  return Boolean(set && set.has(opt));
}

function toggleOptionStruck(q, opt) {
  if (!session) return false;
  if (!session.struck) session.struck = {};
  if (!session.struck[q]) session.struck[q] = new Set();
  const set = session.struck[q];
  if (set.has(opt)) {
    set.delete(opt);
    return false;
  }
  set.add(opt);
  return true;
}

// ============================================================================
// Digitized Content Accessors (Flexible Schema Normalizers)
// ============================================================================

function getQuestionData(content, q) {
  if (!content || !content.questions) return null;
  return content.questions[q] || content.questions[String(q)] || null;
}

function getOptionText(qData, opt) {
  if (!qData) return '';
  if (qData.options) {
    if (Array.isArray(qData.options)) {
      const idx = ['A', 'B', 'C', 'D'].indexOf(opt);
      return idx >= 0 && qData.options[idx] != null ? String(qData.options[idx]) : '';
    }
    if (typeof qData.options === 'object') {
      return qData.options[opt] != null ? String(qData.options[opt]) : '';
    }
  }
  if (qData[opt] != null) return String(qData[opt]);
  return '';
}

function getQuestionStem(qData) {
  if (!qData) return '';
  return String(qData.stem || qData.question || qData.text || qData.prompt || '').trim();
}

function getPassageData(content, page, groupKey) {
  if (!content || !content.passages) return null;
  const raw = content.passages[groupKey] || content.passages[page.id] || null;
  if (!raw) return null;
  if (Array.isArray(raw)) return { intro: '', docs: raw };
  if (Array.isArray(raw.docs)) return { intro: raw.intro || raw.instruction || '', docs: raw.docs };
  if (Array.isArray(raw.documents)) return { intro: raw.intro || raw.instruction || '', docs: raw.documents };
  return { intro: raw.intro || raw.instruction || '', docs: [raw] };
}

function getGraphicImages(content, groupKey) {
  if (!content || !content.graphics || !groupKey) return [];
  const raw = content.graphics[groupKey];
  if (!raw) return [];
  if (typeof raw === 'string') return [{ src: raw, caption: '' }];
  if (Array.isArray(raw)) {
    return raw
      .map((item) => (typeof item === 'string' ? { src: item, caption: '' } : { src: item.src || item.image || '', caption: item.caption || item.alt || '' }))
      .filter((x) => x.src);
  }
  if (typeof raw === 'object') {
    const src = raw.src || raw.image || '';
    return src ? [{ src, caption: raw.caption || raw.alt || '' }] : [];
  }
  return [];
}

function getTranscriptData(content, key) {
  if (!content || !content.transcripts || !key) return null;
  return content.transcripts[key] || content.transcripts[String(key)] || null;
}

// ============================================================================
// Cleanup: Audio, Timer, Lightbox, Detach Observer
// ============================================================================

function clearAutoAdvance() {
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
}

function stopAllAudio() {
  clearAutoAdvance();
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

function unbindExamKeyboard() {
  if (examKeyHandler) {
    document.removeEventListener('keydown', examKeyHandler);
    examKeyHandler = null;
  }
}

function cleanupAll(removeFocus = true) {
  stopTimer();
  stopAllAudio();
  closeLightbox();
  unbindExamKeyboard();
  pendingAutoPlay = false;
  if (removeFocus) setFocusMode(false);
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
      cleanupAll(true);
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
      cleanupAll(true);
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
  if (session.timerHidden) {
    if (textEl) textEl.textContent = '--:--';
    timerEl.classList.add('is-hidden-time');
    timerEl.classList.remove('is-warn', 'is-danger');
    return;
  }
  timerEl.classList.remove('is-hidden-time');
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

async function startNewSession(test, { examMode = 'practice', mode, modeLabel, questionList, minutes, timerMode }) {
  cleanupAll(true);
  const sortedQs = [...new Set(questionList)].sort((a, b) => a - b);
  const questionSet = new Set(sortedQs);
  const pages = filterPagesForQuestions(test, questionSet);

  if (!pages.length || !sortedQs.length) {
    appShowToast('No questions available for this selection.');
    return;
  }

  let content = null;
  try {
    content = await etsLoadContent(test);
  } catch {
    content = null;
  }

  const isRealExam = examMode === 'real';
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  session = {
    testId: test.id,
    examMode: isRealExam ? 'real' : 'practice',
    isRealExam,
    mode,
    modeLabel,
    content,
    questionSet,
    questionList: sortedQs,
    pages,
    pageIdx: 0,
    answers: {},
    flags: new Set(),
    struck: {},
    timerMode,
    timeLimitSec: timerMode === 'untimed' ? 0 : minutes * 60,
    remainingSec: timerMode === 'untimed' ? 0 : minutes * 60,
    elapsedSec: 0,
    timerHidden: false,
    paused: false,
    startedAt: Date.now(),
    zoom: 'fit',
    audioSpeed: 1.0,
    autoNextAudio: true,
    paletteOpen: isDesktop,
    reviewFilter: 'all',
    seenDirections: new Set(),
    pendingDirectionsPart: isRealExam ? pages[0].part : null,
    audioPlayedTabs: new Set(),
    transcriptOpen: new Set(),
    activeDocIdx: 0,
  };

  curView = 'exam';
  renderCurrent();
  startTimer();
}

async function openReviewForAttempt(attempt) {
  const test = getTestById(attempt.testId);
  if (!test || test.status !== 'ready') {
    appShowToast('Exam data for this attempt is not available.');
    return;
  }
  cleanupAll(true);
  const qList =
    Array.isArray(attempt.questionList) && attempt.questionList.length
      ? [...attempt.questionList].sort((a, b) => a - b)
      : Array.from({ length: 200 }, (_, i) => i + 1);
  const questionSet = new Set(qList);
  const pages = filterPagesForQuestions(test, questionSet);

  let content = null;
  try {
    content = await etsLoadContent(test);
  } catch {
    content = null;
  }

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  lastAttempt = attempt;
  selectedTestId = test.id;
  session = {
    testId: test.id,
    examMode: 'practice',
    isRealExam: false,
    mode: attempt.mode || 'full',
    modeLabel: attempt.modeLabel || 'Review',
    content,
    questionSet,
    questionList: qList,
    pages,
    pageIdx: 0,
    answers: { ...(attempt.answers || {}) },
    flags: new Set(Array.isArray(attempt.flags) ? attempt.flags : []),
    struck: {},
    timerMode: 'untimed',
    timeLimitSec: 0,
    remainingSec: 0,
    elapsedSec: attempt.elapsedSec || 0,
    timerHidden: false,
    paused: false,
    startedAt: Date.now(),
    zoom: 'fit',
    audioSpeed: 1.0,
    autoNextAudio: true,
    paletteOpen: isDesktop,
    reviewFilter: 'all',
    seenDirections: new Set([1, 2, 3, 4, 5, 6, 7]),
    pendingDirectionsPart: null,
    audioPlayedTabs: new Set(),
    transcriptOpen: new Set(),
    activeDocIdx: 0,
  };

  curView = 'review';
  renderCurrent();
}

function openResultsForAttempt(attempt) {
  cleanupAll(true);
  lastAttempt = attempt;
  selectedTestId = attempt.testId;
  curView = 'results';
  renderCurrent();
}

function finalizeExam() {
  if (!session) return;
  const test = getTestById(session.testId);
  if (!test) return;

  cleanupAll(true);

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
    cleanupAll(true);
  }
  activeBox = box;
  ensureDetachWatcher(box);
  renderCurrent();
}

function renderCurrent() {
  if (!activeBox) return;
  if (!activeBox.isConnected) {
    cleanupAll(true);
    return;
  }

  stopAllAudio();
  closeLightbox();
  unbindExamKeyboard();

  if (curView === 'setup') {
    setFocusMode(false);
    const test = getTestById(selectedTestId);
    if (!test || test.status !== 'ready') {
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    renderSetup(activeBox, test);
  } else if (curView === 'exam' || curView === 'review') {
    if (!session) {
      setFocusMode(false);
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    setFocusMode(true);
    renderExamRoom(activeBox);
  } else if (curView === 'results') {
    setFocusMode(false);
    if (!lastAttempt) {
      curView = 'catalog';
      renderCatalog(activeBox);
      return;
    }
    renderResults(activeBox, lastAttempt);
  } else {
    setFocusMode(false);
    renderCatalog(activeBox);
  }
}

// ============================================================================
// View 1: Test Catalog
// ============================================================================

function renderCatalog(box) {
  stopTimer();
  setFocusMode(false);
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

      const cbtBadgeHtml = test.digitized
        ? '<span class="ets-cbt-badge">CBT Text</span>'
        : '';

      let scoreBadgeHtml = '<span class="ets-test-badge">Ready</span>';
      if (stats.bestScaled !== null) {
        scoreBadgeHtml = `<span class="ets-test-badge" style="background:var(--good-soft);color:var(--good)">Best: ${stats.bestScaled} / 990</span>`;
      } else if (stats.bestAccuracy !== null) {
        scoreBadgeHtml = `<span class="ets-test-badge">Best: ${stats.bestAccuracy}%</span>`;
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
            <div class="row" style="gap:6px">
              ${cbtBadgeHtml}
              ${scoreBadgeHtml}
            </div>
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
          <p class="hint">200 questions · 120 minutes · Computer-Based TOEIC (CBT) &amp; ETS scaled scoring (10–990)</p>
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
  setFocusMode(false);
  const history = getHistory().filter((a) => a && a.testId === test.id);
  const sel = getSetupSelection();
  const isReal = setupState.examMode === 'real';

  const examModeButtons = [
    { id: 'real', label: 'Real Exam (IIG/ETS)' },
    { id: 'practice', label: 'Practice Mode' },
  ]
    .map((m) => {
      const on = setupState.examMode === m.id;
      return `
        <button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-exam-mode="${m.id}">
          ${esc(m.label)}
        </button>
      `;
    })
    .join('');

  const realExamInfoHtml = `
    <div class="ets-mode-info">
      <div style="font-weight:700;font-size:14px;color:var(--ink)">Authentic Computer-Based TOEIC Simulation</div>
      <ul style="margin:6px 0 0;padding-left:18px;font-size:13px;color:var(--muted);display:flex;flex-direction:column;gap:4px">
        <li>Full 200 questions in 120 minutes (Listening Parts 1–4 followed by Reading Parts 5–7).</li>
        <li>Listening audio plays automatically once per question or group (no pause, rewind, or speed change) and advances automatically when finished.</li>
        <li>Part Directions screen appears before each Part; full-screen Focus Mode hides site navigation.</li>
      </ul>
    </div>
  `;

  const scopeButtons = [
    { id: 'full', label: 'Full Test (200 Qs)' },
    { id: 'listening', label: 'Listening (100 Qs)' },
    { id: 'reading', label: 'Reading (100 Qs)' },
    { id: 'parts', label: 'Practice by Parts' },
  ]
    .map((m) => {
      const on = setupState.scope === m.id;
      return `
        <button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" data-setup-scope="${m.id}">
          ${esc(m.label)}
        </button>
      `;
    })
    .join('');

  const partsPickerHtml =
    setupState.scope === 'parts'
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
    `
      : '';

  const practiceConfigHtml = `
    <div style="display:flex;flex-direction:column;gap:8px">
      <span style="font-size:13px;font-weight:700;color:var(--ink)">Section &amp; Scope</span>
      <div class="seg">
        ${scopeButtons}
      </div>
    </div>

    ${partsPickerHtml}

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
  `;

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
        <div class="row between" style="align-items:flex-start">
          <div>
            <div class="eyebrow">EXAM CONFIGURATION</div>
            <h1 style="margin:4px 0 4px;font-size:22px;font-weight:800">${esc(test.title)}</h1>
            <p class="hint" style="margin:0">Choose strict IIG/ETS Real Exam simulation or flexible Practice Mode.</p>
          </div>
          ${test.digitized ? '<span class="ets-cbt-badge">CBT Text</span>' : ''}
        </div>

        <div style="display:flex;flex-direction:column;gap:8px">
          <span style="font-size:13px;font-weight:700;color:var(--ink)">Exam Mode</span>
          <div class="seg">
            ${examModeButtons}
          </div>
        </div>

        ${isReal ? realExamInfoHtml : practiceConfigHtml}

        <div class="row between" style="padding-top:12px;border-top:1px solid var(--line)">
          <div class="row" style="gap:6px">
            <strong>${sel.questionList.length} questions</strong>
            <span class="hint" id="ets-setup-time-summary">· ${esc(timeSummary)} · ${esc(sel.modeLabel)}</span>
          </div>
          <button type="button" class="btn primary" id="ets-start-exam" ${canStart ? '' : 'disabled'}>
            ${isReal ? 'Begin Real Exam' : 'Start Practice'}
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

  box.querySelectorAll('[data-exam-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setupState.examMode = btn.getAttribute('data-exam-mode');
      renderCurrent();
    });
  });

  box.querySelectorAll('[data-setup-scope]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setupState.scope = btn.getAttribute('data-setup-scope');
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
      examMode: currentSel.examMode,
      mode: currentSel.mode,
      modeLabel: currentSel.modeLabel,
      questionList: currentSel.questionList,
      minutes: currentSel.minutes,
      timerMode: currentSel.timerMode,
    });
  });

  bindAttemptRowActions(box, history);
}

// ============================================================================
// Digitized Document & Transcript Renderers
// ============================================================================

function formatInlinePassageText(rawText, partId, content) {
  let html = esc(String(rawText || ''));
  // Bold markdown **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  if (partId === 6) {
    // Part 6 blanks: [131]..[146]
    html = html.replace(/\[(\d{3})\]/g, (_, qStr) => {
      const qNum = Number(qStr);
      return renderPart6BlankPill(qNum, content);
    });
  } else if (partId === 7) {
    // Part 7 sentence insertion markers: [1]..[4]
    html = html.replace(/\[([1-4])\]/g, '<span class="ets-ins-marker">[$1]</span>');
  }

  return html;
}

function getBlankPillText(qNum, content) {
  const ans = session && session.answers ? session.answers[qNum] : '';
  if (!ans) return `[${qNum}]`;
  const qData = getQuestionData(content, qNum);
  const optText = getOptionText(qData, ans);
  if (optText && optText.length <= 28) {
    return `${qNum}. (${ans}) ${optText}`;
  }
  return `${qNum}. (${ans})`;
}

function renderPart6BlankPill(qNum, content) {
  const ans = session && session.answers ? session.answers[qNum] : '';
  const filledClass = ans ? 'is-filled' : '';
  const label = getBlankPillText(qNum, content);
  return `<button type="button" class="ets-blank-pill ${filledClass}" data-blank-q="${qNum}" title="Jump to Question ${qNum}">${esc(label)}</button>`;
}

function renderDocParagraphs(body, partId, content) {
  if (!body) return '';
  let paras = [];
  if (Array.isArray(body)) {
    paras = body.map((p) => String(p || '')).filter(Boolean);
  } else {
    paras = String(body)
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);
  }
  return paras
    .map((p) => {
      const linesHtml = p
        .split('\n')
        .map((line) => formatInlinePassageText(line, partId, content))
        .join('<br />');
      return `<p class="ets-doc-p">${linesHtml}</p>`;
    })
    .join('');
}

function renderDocTable(tableObj, partId, content) {
  if (!tableObj) return '';
  const headers = Array.isArray(tableObj.headers)
    ? tableObj.headers
    : Array.isArray(tableObj.columns)
    ? tableObj.columns
    : [];
  const rows = Array.isArray(tableObj.rows) ? tableObj.rows : Array.isArray(tableObj) ? tableObj : [];
  if (!headers.length && !rows.length) return '';

  const theadHtml = headers.length
    ? `<thead><tr>${headers.map((h) => `<th>${formatInlinePassageText(h, partId, content)}</th>`).join('')}</tr></thead>`
    : '';
  const tbodyHtml = rows.length
    ? `<tbody>${rows
        .map(
          (r) =>
            `<tr>${(Array.isArray(r) ? r : [r])
              .map((cell) => `<td>${formatInlinePassageText(cell, partId, content)}</td>`)
              .join('')}</tr>`
        )
        .join('')}</tbody>`
    : '';

  return `<div class="ets-doc-table-wrap"><table class="ets-doc-table">${theadHtml}${tbodyHtml}</table></div>`;
}

function renderDocCard(doc, idx, totalDocs, partId, content) {
  if (!doc) return '';
  const docType = String(doc.type || 'article').toLowerCase();
  const docTypeSlug = docType.replace(/\s+/g, '-');
  const typeLabel = doc.label || doc.docLabel || (totalDocs > 1 ? `Passage ${idx + 1}` : '');

  // Header metadata (for email, memo, letter, form, invoice, etc.)
  const rawHeaders = doc.headers || doc.meta || null;
  let headersHtml = '';
  if (rawHeaders) {
    let entries = [];
    if (Array.isArray(rawHeaders)) {
      entries = rawHeaders.map((item) =>
        Array.isArray(item)
          ? [item[0], item[1]]
          : [item.label || item.key || '', item.value || '']
      );
    } else if (typeof rawHeaders === 'object') {
      entries = Object.entries(rawHeaders);
    }
    entries = entries.filter(([k, v]) => k || v);
    if (entries.length) {
      headersHtml = `
        <table class="ets-email-headers">
          <tbody>
            ${entries
              .map(
                ([k, v]) => `
              <tr>
                <th>${esc(k)}</th>
                <td>${formatInlinePassageText(v, partId, content)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `;
    }
  }

  // Chat / Text-message chain
  let chatHtml = '';
  if (Array.isArray(doc.messages) && doc.messages.length) {
    chatHtml = `
      <div class="ets-chat-list">
        ${doc.messages
          .map(
            (m) => `
          <div class="ets-chat-msg">
            <div class="ets-chat-meta">
              <strong class="ets-chat-sender">${esc(m.sender || m.name || '')}</strong>
              ${m.time ? `<span class="ets-chat-time">${esc(m.time)}</span>` : ''}
            </div>
            <div class="ets-chat-text">${formatInlinePassageText(m.text || m.message || '', partId, content)}</div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  // Tables (single or multiple)
  let tablesHtml = '';
  if (doc.table) tablesHtml += renderDocTable(doc.table, partId, content);
  if (Array.isArray(doc.tables)) {
    tablesHtml += doc.tables.map((t) => renderDocTable(t, partId, content)).join('');
  }
  if (docType === 'table' && !doc.table && (doc.headers || doc.rows)) {
    tablesHtml += renderDocTable({ headers: doc.columns || doc.tableHeaders, rows: doc.rows }, partId, content);
  }

  const urlHtml = doc.url
    ? `<div class="ets-doc-url">${esc(doc.url)}</div>`
    : '';
  const titleHtml = doc.title || doc.heading
    ? `<h3 class="ets-doc-title">${formatInlinePassageText(doc.title || doc.heading, partId, content)}</h3>`
    : '';
  const subtitleHtml = doc.subtitle
    ? `<div class="ets-doc-subtitle">${formatInlinePassageText(doc.subtitle, partId, content)}</div>`
    : '';

  const bodyHtml = renderDocParagraphs(doc.body || doc.paragraphs || doc.text, partId, content);
  const bodyAfterHtml = doc.bodyAfterTable
    ? renderDocParagraphs(doc.bodyAfterTable, partId, content)
    : '';
  const footerHtml = doc.footer || doc.note || doc.signature
    ? `<div class="ets-doc-footer">${renderDocParagraphs(doc.footer || doc.note || doc.signature, partId, content)}</div>`
    : '';

  const imgHtml = doc.image
    ? `<div class="ets-doc-img-wrap"><img class="ets-page-img" src="${esc(doc.image)}" alt="${esc(doc.title || 'Passage graphic')}" data-lightbox-src="${esc(doc.image)}" /></div>`
    : '';

  return `
    <article class="ets-doc-card is-type-${esc(docTypeSlug)}" id="ets-doc-${idx}">
      ${typeLabel ? `<div class="ets-doc-type">${esc(typeLabel)}</div>` : ''}
      ${urlHtml}
      ${titleHtml}
      ${subtitleHtml}
      ${headersHtml}
      ${chatHtml}
      ${bodyHtml}
      ${tablesHtml}
      ${bodyAfterHtml}
      ${imgHtml}
      ${footerHtml}
    </article>
  `;
}

function renderReviewTranscript(partId, key, test, qNum, content) {
  const tr = getTranscriptData(content, key);
  if (!tr) return '';

  // Part 1: 4 statements (A)-(D), highlight official key
  if (partId === 1) {
    const officialKey = getOfficialKey(test, qNum);
    let rowsHtml = '';
    if (typeof tr === 'string') {
      rowsHtml = `<div class="ets-transcript-text">${esc(tr).replace(/\n/g, '<br />')}</div>`;
    } else {
      const map = tr.statements || tr.options || tr;
      rowsHtml = ['A', 'B', 'C', 'D']
        .map((opt) => {
          const line = map[opt];
          if (!line) return '';
          const isKey = opt === officialKey;
          return `<div class="ets-transcript-line ${isKey ? 'is-correct' : ''}"><strong>(${opt})</strong> ${esc(line)}</div>`;
        })
        .join('');
    }
    return `
      <div class="ets-transcript-box">
        <div class="ets-transcript-head"><strong>Audio Transcript · Question ${qNum}</strong></div>
        <div class="ets-transcript-body">${rowsHtml}</div>
      </div>
    `;
  }

  // Part 2: Question + (A)/(B)/(C), highlight official key
  if (partId === 2) {
    const officialKey = getOfficialKey(test, qNum);
    let bodyHtml = '';
    if (typeof tr === 'string') {
      bodyHtml = `<div class="ets-transcript-text">${esc(tr).replace(/\n/g, '<br />')}</div>`;
    } else {
      const qLine = tr.q || tr.question || tr.prompt || '';
      const map = tr.options || tr.responses || tr;
      const qHtml = qLine ? `<div class="ets-transcript-q"><strong>Question:</strong> ${esc(qLine)}</div>` : '';
      const optsHtml = ['A', 'B', 'C']
        .map((opt) => {
          const line = map[opt];
          if (!line) return '';
          const isKey = opt === officialKey;
          return `<div class="ets-transcript-line ${isKey ? 'is-correct' : ''}"><strong>(${opt})</strong> ${esc(line)}</div>`;
        })
        .join('');
      bodyHtml = qHtml + optsHtml;
    }
    return `
      <div class="ets-transcript-box">
        <div class="ets-transcript-head"><strong>Audio Transcript · Question ${qNum}</strong></div>
        <div class="ets-transcript-body">${bodyHtml}</div>
      </div>
    `;
  }

  // Part 3 & 4: Collapsible transcript formatted by speaker lines
  const isOpen = session && session.transcriptOpen && session.transcriptOpen.has(key);
  let linesHtml = '';
  if (typeof tr === 'string') {
    linesHtml = tr
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line) => formatSpeakerLine(line))
      .join('');
  } else if (Array.isArray(tr)) {
    linesHtml = tr
      .map((item) => {
        if (typeof item === 'string') return formatSpeakerLine(item);
        const sp = item.speaker ? `<strong>${esc(item.speaker)}:</strong> ` : '';
        return `<div class="ets-transcript-line">${sp}${esc(item.text || '')}</div>`;
      })
      .join('');
  } else if (typeof tr === 'object') {
    if (Array.isArray(tr.lines)) {
      linesHtml = tr.lines
        .map((item) =>
          typeof item === 'string'
            ? formatSpeakerLine(item)
            : `<div class="ets-transcript-line">${item.speaker ? `<strong>${esc(item.speaker)}:</strong> ` : ''}${esc(item.text || '')}</div>`
        )
        .join('');
    } else if (tr.text) {
      linesHtml = String(tr.text)
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .map((line) => formatSpeakerLine(line))
        .join('');
    }
  }

  return `
    <div class="ets-transcript-box ${isOpen ? 'is-open' : ''}" data-transcript-box="${esc(key)}">
      <div class="ets-transcript-head">
        <strong>Audio Transcript · Questions ${esc(key)}</strong>
        <button type="button" class="btn ghost" data-toggle-transcript="${esc(key)}" style="padding:3px 8px;font-size:12.5px">
          ${isOpen ? 'Hide Transcript' : 'Show Transcript'}
        </button>
      </div>
      <div class="ets-transcript-body" ${isOpen ? '' : 'hidden'}>
        ${linesHtml}
      </div>
    </div>
  `;
}

function formatSpeakerLine(line) {
  const m = line.match(/^([A-Za-z][A-Za-z0-9\s\-]{0,20}):\s*(.+)$/);
  if (m) {
    return `<div class="ets-transcript-line"><strong>${esc(m[1])}:</strong> ${esc(m[2])}</div>`;
  }
  return `<div class="ets-transcript-line">${esc(line)}</div>`;
}

// ============================================================================
// Digitized Question Card (CBT Radio Options + Strikethrough + Flag)
// ============================================================================

function renderDigitizedQuestionCard(q, partId, test, isReview, qData) {
  const options = getOptionsForPart(partId);
  const userAns = session.answers[q] || '';
  const isFlagged = session.flags.has(q);
  const key = getOfficialKey(test, q);
  const stemRaw = getQuestionStem(qData);

  let stemHtml = '';
  if (stemRaw) {
    let formattedStem = esc(stemRaw);
    if (partId === 5) {
      const chosenText = userAns ? getOptionText(qData, userAns) : '';
      const blankContent = chosenText ? esc(chosenText) : '________';
      const blankClass = chosenText ? 'ets-q-blank is-filled' : 'ets-q-blank';
      formattedStem = formattedStem.replace(/_{3,}/g, `<span class="${blankClass}" data-p5-blank="${q}">${blankContent}</span>`);
    }
    stemHtml = `<div class="ets-q-prompt">${formattedStem}</div>`;
  }

  let reviewStatusHtml = '';
  if (isReview) {
    if (!userAns) {
      reviewStatusHtml = `<span class="ets-q-status is-skip">Skipped · Key: ${esc(key)}</span>`;
    } else if (userAns === key) {
      reviewStatusHtml = `<span class="ets-q-status is-good">Correct</span>`;
    } else {
      reviewStatusHtml = `<span class="ets-q-status is-bad">Your: ${esc(userAns)} · Key: ${esc(key)}</span>`;
    }
  }

  const optsHtml = options
    .map((opt) => {
      const optText = getOptionText(qData, opt);
      const struck = !isReview && isOptionStruck(q, opt);
      const classes = ['ets-opt-card'];
      if (isReview) {
        if (opt === key) classes.push('is-correct');
        if (userAns === opt && opt !== key) classes.push('is-wrong');
      } else {
        if (userAns === opt) classes.push('is-selected');
        if (struck) classes.push('is-struck');
      }

      const displayText = optText ? esc(optText) : `Option ${opt}`;

      return `
        <div
          class="${classes.join(' ')}"
          role="radio"
          tabindex="${isReview ? '-1' : '0'}"
          aria-checked="${userAns === opt}"
          data-opt-card-q="${q}"
          data-opt="${opt}"
        >
          <span class="ets-opt-letter">${opt}</span>
          <span class="ets-opt-text">${displayText}</span>
          ${
            !isReview
              ? `<button
                  type="button"
                  class="ets-strike-btn ${struck ? 'is-active' : ''}"
                  data-strike-q="${q}"
                  data-strike-opt="${opt}"
                  title="Strike out option (or right-click)"
                  aria-label="Strike out option ${opt}"
                >${SVG.strike}</button>`
              : ''
          }
        </div>
      `;
    })
    .join('');

  return `
    <div class="ets-q-card ${partId === 5 ? 'ets-p5-card' : ''}" id="ets-q-${q}" data-q-card="${q}">
      <div class="ets-q-head">
        <div class="row" style="gap:8px">
          <span class="ets-q-num">Question ${q}</span>
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
      ${stemHtml}
      <div class="ets-opt-list" role="radiogroup" aria-label="Question ${q} choices">
        ${optsHtml}
      </div>
    </div>
  `;
}

// ============================================================================
// View 3: Exam Room (CBT Exam & Review)
// ============================================================================

function renderExamRoom(box) {
  const test = getTestById(session.testId);
  if (!test) {
    curView = 'catalog';
    renderCatalog(box);
    return;
  }

  const isReview = curView === 'review';
  const isRealExam = Boolean(session.isRealExam && !isReview);
  const page = session.pages[session.pageIdx] || session.pages[0];
  const partMeta = getPartMeta(page.part) || { id: page.part, section: page.part <= 4 ? 'L' : 'R', name: `Part ${page.part}`, title: '' };
  const isListeningPart = partMeta.section === 'L';
  const isRealListening = isRealExam && isListeningPart;

  const hasImages = Array.isArray(page.images) && page.images.length > 0;
  const pageQuestions = getPageQuestions(page, session.questionSet);
  const pageQSet = new Set(pageQuestions);
  const groupKey = getPageGroupKey(page);
  const content = session.content;

  const showDirections = isRealExam && session.pendingDirectionsPart === page.part;

  const activePartIds = [...new Set(session.pages.map((p) => p.part))];
  const answeredCount = session.questionList.reduce(
    (sum, q) => sum + (session.answers[q] ? 1 : 0),
    0
  );
  const totalCount = session.questionList.length;

  const allowPause = !isReview && !isRealExam;

  const timerText = session.timerHidden
    ? '--:--'
    : isReview
    ? `Time ${formatTimer(session.elapsedSec)}`
    : session.timerMode === 'untimed'
    ? formatTimer(session.elapsedSec)
    : formatTimer(session.remainingSec);

  const timerClass =
    !isReview && !session.timerHidden && session.timerMode !== 'untimed'
      ? session.remainingSec <= 120
        ? 'is-danger'
        : session.remainingSec <= 600
        ? 'is-warn'
        : ''
      : '';

  // Part jump pills: locked to current section in Real Exam Mode
  const partPillsHtml = activePartIds
    .map((pid) => {
      const on = page.part === pid;
      let locked = false;
      if (isRealExam) {
        if (isListeningPart) locked = true; // Cannot jump during Listening
        else if (pid <= 4) locked = true; // Cannot go back to Listening from Reading
      }
      return `<button type="button" class="${on ? 'active' : ''}" aria-pressed="${on}" aria-label="Part ${pid}" title="Part ${pid}" data-jump-part="${pid}" ${locked ? 'disabled' : ''}>P${pid}</button>`;
    })
    .join('');

  // Audio Bar renderer (Real Exam strict vs Practice/Review full)
  const renderAudioBar = (audioSrc, gIdx) => {
    if (isRealExam) {
      const alreadyPlayed = session.audioPlayedTabs.has(page.id);
      return `
        <div class="ets-audio-bar is-cbt-locked" data-audio-src="${esc(audioSrc)}" data-audio-idx="${gIdx}" data-cbt-strict="1">
          <button type="button" class="btn primary ets-cbt-audio-start" data-cbt-start-audio ${alreadyPlayed ? 'hidden' : ''} style="display:none;padding:4px 10px;font-size:12px">
            ${SVG.play} <span>Start Audio</span>
          </button>
          <span class="ets-audio-status" data-audio-status>${alreadyPlayed ? 'Audio completed' : 'Playing audio...'}</span>
          <div class="ets-audio-progress-track">
            <div class="ets-audio-progress-fill" data-audio-fill style="width:${alreadyPlayed ? '100%' : '0%'}"></div>
          </div>
          <span class="ets-audio-time" data-audio-time>0:00 / 0:00</span>
        </div>
      `;
    }
    return `
      <div class="ets-audio-bar" data-audio-src="${esc(audioSrc)}" data-audio-idx="${gIdx}">
        <button type="button" class="ets-audio-play" data-audio-toggle aria-label="Play audio">
          ${SVG.play}
        </button>
        <button type="button" data-audio-seek="-5" title="Back 5 seconds">-5s</button>
        <button type="button" data-audio-seek="5" title="Forward 5 seconds">+5s</button>
        <input type="range" data-audio-range min="0" max="1000" value="0" aria-label="Audio progress" />
        <span class="ets-audio-time" data-audio-time>0:00 / 0:00</span>
        <button type="button" data-audio-speed title="Playback speed">${session.audioSpeed.toFixed(1)}x</button>
      </div>
    `;
  };

  // Determine whether current tab uses digitized CBT rendering or WebP fallback
  let stageHtml = '';
  let showZoomControls = false;

  if (showDirections) {
    const dirText = etsPartDirections[page.part] || '';
    stageHtml = `
      <div class="ets-directions-card">
        <div class="eyebrow">${isListeningPart ? 'SECTION I · LISTENING' : 'SECTION II · READING'}</div>
        <h2 style="margin:6px 0 10px;font-size:22px;font-weight:800">Part ${page.part}: ${esc(partMeta.title)}</h2>
        <p class="ets-directions-text">${esc(dirText)}</p>
        ${
          isListeningPart
            ? '<p class="hint" style="margin:0 0 16px">Listening audio will play automatically once per question or group and advance to the next screen when finished.</p>'
            : '<p class="hint" style="margin:0 0 16px">You may navigate freely among Reading questions (Parts 5–7) and flag items for review.</p>'
        }
        <div class="ets-directions-actions">
          <button type="button" class="btn primary" id="ets-dir-continue">Continue &rarr;</button>
        </div>
      </div>
    `;
  } else if (page.part === 1) {
    // Part 1: Big cropped photo + CBT radio options (A)-(D) + Review transcript
    const q = pageQuestions[0];
    const firstGroup = (page.groups || [])[0] || {};
    const audioHtml = firstGroup.audio ? renderAudioBar(firstGroup.audio, 0) : '';
    const cardHtml = q != null ? renderDigitizedQuestionCard(q, 1, test, isReview, null) : '';
    const transcriptHtml = isReview && q != null ? renderReviewTranscript(1, q, test, q, content) : '';
    stageHtml = `
      <div class="ets-photo-stage">
        <div class="ets-photo-frame">
          <img
            class="ets-page-img ets-photo-img"
            src="${esc(page.images[0])}"
            alt="${esc(page.label || 'Part 1 Question')}"
            loading="eager"
            data-lightbox-idx="0"
            title="Click to enlarge"
          />
        </div>
        <div class="ets-photo-controls" style="display:flex;flex-direction:column;gap:12px">
          ${audioHtml}
          ${cardHtml}
          ${transcriptHtml}
        </div>
      </div>
    `;
  } else if (page.part === 2) {
    // Part 2: Focused CBT card + (A)-(C) + Review transcript
    const q = pageQuestions[0];
    const firstGroup = (page.groups || [])[0] || {};
    const audioHtml = firstGroup.audio ? renderAudioBar(firstGroup.audio, 0) : '';
    const cardHtml = q != null ? renderDigitizedQuestionCard(q, 2, test, isReview, null) : '';
    const transcriptHtml = isReview && q != null ? renderReviewTranscript(2, q, test, q, content) : '';
    stageHtml = `
      <div class="ets-audio-only-stage">
        <div class="ets-questions-card ets-audio-focus-card">
          <div class="row between" style="padding-bottom:8px;border-bottom:1px solid var(--line)">
            <div class="row" style="gap:8px">
              <strong style="font-size:16px">Question ${q} of 31</strong>
              <span class="hint">Part 2 · Question-Response</span>
            </div>
            ${
              !isRealExam
                ? `<label class="row" style="gap:6px;font-size:12.5px;font-weight:600;cursor:pointer">
                    <input type="checkbox" id="ets-autonext-chk" ${session.autoNextAudio ? 'checked' : ''} style="accent-color:var(--accent)" />
                    <span>Auto-Next</span>
                  </label>`
                : ''
            }
          </div>
          ${audioHtml}
          ${cardHtml}
          ${transcriptHtml}
        </div>
      </div>
    `;
  } else if ((page.part === 3 || page.part === 4) && pageQuestions.length > 0 && pageQuestions.every((q) => Boolean(getQuestionData(content, q)))) {
    // Part 3 & 4 Digitized CBT
    const firstGroup = (page.groups || [])[0] || {};
    const audioHtml = firstGroup.audio ? renderAudioBar(firstGroup.audio, 0) : '';
    const graphics = getGraphicImages(content, groupKey);
    const qCardsHtml = pageQuestions
      .map((q) => renderDigitizedQuestionCard(q, page.part, test, isReview, getQuestionData(content, q)))
      .join('');
    const transcriptHtml = isReview ? renderReviewTranscript(page.part, groupKey, test, null, content) : '';

    if (graphics.length > 0) {
      const graphicHtml = graphics
        .map(
          (g) => `
          <div class="ets-doc-card">
            <img
              class="ets-page-img"
              src="${esc(g.src)}"
              alt="${esc(g.caption || page.label)}"
              loading="eager"
              data-lightbox-src="${esc(g.src)}"
              title="Click to enlarge"
            />
            ${g.caption ? `<div class="hint" style="margin-top:6px;text-align:center">${esc(g.caption)}</div>` : ''}
          </div>
        `
        )
        .join('');
      stageHtml = `
        <div class="ets-cbt-split">
          <div class="ets-doc-pane">
            ${graphicHtml}
          </div>
          <div class="ets-q-pane">
            ${audioHtml}
            ${qCardsHtml}
            ${transcriptHtml}
          </div>
        </div>
      `;
    } else {
      stageHtml = `
        <div class="ets-cbt-single-col">
          ${audioHtml}
          ${qCardsHtml}
          ${transcriptHtml}
        </div>
      `;
    }
  } else if (page.part === 5 && pageQuestions.length === 1 && getQuestionData(content, pageQuestions[0])) {
    // Part 5 Digitized CBT
    const q = pageQuestions[0];
    const qData = getQuestionData(content, q);
    stageHtml = `
      <div class="ets-cbt-single-col">
        ${renderDigitizedQuestionCard(q, 5, test, isReview, qData)}
      </div>
    `;
  } else if ((page.part === 6 || page.part === 7) && getPassageData(content, page, groupKey) && pageQuestions.every((q) => Boolean(getQuestionData(content, q)))) {
    // Part 6 & 7 Digitized CBT 2-column split
    const passage = getPassageData(content, page, groupKey);
    const docs = passage.docs || [];
    const docTabsHtml =
      docs.length > 1
        ? `
        <div class="seg seg-sm" role="tablist" aria-label="Jump to passage">
          ${docs
            .map(
              (d, i) =>
                `<button type="button" class="${i === 0 ? 'active' : ''}" data-jump-doc="${i}">Passage ${i + 1}</button>`
            )
            .join('')}
        </div>
      `
        : '';

    const toolbarHtml = `
      <div class="ets-doc-toolbar">
        <div class="row" style="gap:6px">${docTabsHtml}</div>
        <div class="row" style="gap:6px">
          <button type="button" class="btn ghost" id="ets-hl-apply" title="Select text in passage then click Highlight" style="padding:4px 8px;font-size:12px">
            ${SVG.highlighter} <span>Highlight</span>
          </button>
          <button type="button" class="btn ghost" id="ets-hl-clear" title="Clear highlights" style="padding:4px 8px;font-size:12px">
            Clear Highlights
          </button>
        </div>
      </div>
    `;

    const introHtml = passage.intro
      ? `<div class="ets-doc-intro">${esc(passage.intro)}</div>`
      : '';

    const docsHtml = docs
      .map((doc, idx) => renderDocCard(doc, idx, docs.length, page.part, content))
      .join('');

    const qCardsHtml = pageQuestions
      .map((q) => renderDigitizedQuestionCard(q, page.part, test, isReview, getQuestionData(content, q)))
      .join('');

    stageHtml = `
      <div class="ets-cbt-split">
        <div class="ets-doc-pane" id="ets-doc-pane">
          ${toolbarHtml}
          ${introHtml}
          <div class="ets-doc-stack">
            ${docsHtml}
          </div>
        </div>
        <div class="ets-q-pane" id="ets-q-pane">
          ${qCardsHtml}
        </div>
      </div>
    `;
  } else {
    // Fallback to WebP page image renderer (Tests 02-10 or if content module unavailable)
    showZoomControls = hasImages;
    const imgStyle = getZoomImgStyle(session.zoom);
    const groupsHtml = (page.groups || [])
      .map((group, gIdx) => {
        const qs = [];
        for (let q = group.qFrom; q <= group.qTo; q++) {
          if (session.questionSet.has(q)) qs.push(q);
        }
        if (!qs.length) return '';

        const groupLabel =
          qs.length > 1 ? `Questions ${qs[0]}–${qs[qs.length - 1]}` : `Question ${qs[0]}`;

        const audioHtml = group.audio ? renderAudioBar(group.audio, gIdx) : '';
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

    const imagesHtml = `
      <div class="ets-page-viewer" id="ets-page-viewer" style="overflow-x:${session.zoom === 'fit' ? 'visible' : 'auto'}">
        ${(page.images || [])
          .map(
            (src, idx) => `
          <img
            class="ets-page-img"
            src="${esc(src)}"
            alt="${esc(page.label || `Tab ${session.pageIdx + 1}`)} (${idx + 1})"
            loading="eager"
            style="${imgStyle}"
            data-lightbox-idx="${idx}"
            title="Click to enlarge"
          />
        `
          )
          .join('')}
      </div>
    `;

    stageHtml = `
      <div class="ets-split">
        ${imagesHtml}
        <div class="ets-answer-pane" style="display:flex;flex-direction:column;gap:12px">
          ${groupsHtml}
        </div>
      </div>
    `;
  }

  const paletteHtml = renderPaletteContent(test, isReview, pageQSet);
  const isFirstPage = session.pageIdx <= 0;
  const isLastPage = session.pageIdx >= session.pages.length - 1;
  const prevLocked = isFirstPage || isRealListening || (isRealExam && page.part === 5 && session.pages[session.pageIdx - 1]?.part <= 4);
  const nextLocked = isRealListening && !showDirections;
  const tabPositionLabel = `${page.label || `Part ${page.part}`} · Tab ${session.pageIdx + 1} / ${session.pages.length}`;

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
    <div class="ets-exam-shell">
      <div class="ets-wrap">
        <div class="ets-exam-bar ets-cbt-bar">
          <div class="ets-exam-bar-left">
            <span class="ets-exam-title">${esc(test.title)}</span>
            <span class="ets-test-badge ets-part-badge">Part ${page.part} · ${esc(partMeta.title)}</span>
            <div class="seg seg-sm" role="navigation" aria-label="Jump to part">
              ${partPillsHtml}
            </div>
          </div>

          <div class="ets-exam-bar-right">
            <label class="ets-vol-wrap" title="Audio volume">
              <span class="ets-vol-icon">${SVG.volume}</span>
              <input type="range" id="ets-vol" class="ets-vol-slider" min="0" max="1" step="0.05" value="${globalVolume.toFixed(2)}" aria-label="Audio volume" />
            </label>
            <div class="ets-timer ${timerClass} ${session.timerHidden ? 'is-hidden-time' : ''}" aria-label="Exam timer">
              ${SVG.clock}
              <span data-timer-val>${esc(timerText)}</span>
              ${
                !isReview
                  ? `<button type="button" class="ets-timer-toggle" id="ets-timer-toggle" title="${session.timerHidden ? 'Show timer' : 'Hide timer'}">${session.timerHidden ? 'Show' : 'Hide'}</button>`
                  : ''
              }
            </div>
            ${
              allowPause
                ? `<button type="button" class="btn ghost" id="ets-pause-toggle">${session.paused ? 'Resume' : 'Pause'}</button>`
                : ''
            }
            <span class="hint" id="ets-progress-text" style="font-weight:700;font-variant-numeric:tabular-nums">${answeredCount}/${totalCount}</span>
            <button type="button" class="btn ghost ets-cbt-palette-btn" id="ets-palette-toggle" aria-expanded="${session.paletteOpen}" aria-label="Toggle Questions">
              ${SVG.grid}
              <span>Questions</span>
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

        <div class="ets-workspace ${session.paletteOpen ? '' : 'is-palette-hidden'}" id="ets-workspace">
          <main class="ets-main-pane">
            <div class="row between">
              <div class="row" style="gap:10px">
                <strong style="font-size:15.5px">${esc(page.label || `Part ${page.part}`)}</strong>
                <span class="hint">Tab ${session.pageIdx + 1} / ${session.pages.length}</span>
                ${isRealExam ? '<span class="ets-test-badge">Real Exam</span>' : ''}
              </div>
              <div class="row" style="gap:10px">
                ${
                  showZoomControls
                    ? `
                  <div class="seg seg-sm" id="ets-zoom-seg" role="group" aria-label="Image zoom">
                    ${[
                      { id: 'fit', label: 'Fit' },
                      { id: '125', label: '125%' },
                      { id: '150', label: '150%' },
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

            ${stageHtml}

            ${
              !showDirections
                ? `
              <div class="ets-tab-footer row between" style="padding-top:6px">
                <button type="button" class="btn ghost" id="ets-prev-page" ${prevLocked ? 'disabled' : ''}>
                  &larr; Previous
                </button>
                <span class="hint">${esc(tabPositionLabel)}</span>
                ${
                  isLastPage
                    ? isReview
                      ? `<button type="button" class="btn primary" id="ets-last-results">Back to Results</button>`
                      : `<button type="button" class="btn primary" id="ets-last-submit">Submit Exam</button>`
                    : `<button type="button" class="btn primary" id="ets-next-page" ${nextLocked ? 'disabled' : ''}>Next &rarr;</button>`
                }
              </div>
            `
                : ''
            }
          </main>

          <aside class="ets-palette-pane ${session.paletteOpen ? 'is-open' : ''}" id="ets-palette-pane" aria-label="Questions">
            <div class="ets-palette-head">
              <strong style="font-size:13px">Questions</strong>
              <button type="button" class="btn ghost" id="ets-palette-close" aria-label="Close navigator" style="padding:4px 6px;min-height:auto">
                ${SVG.close}
              </button>
            </div>
            ${
              isReview
                ? `
              <div class="seg" id="ets-review-filter">
                ${[
                  { id: 'all', label: 'All' },
                  { id: 'incorrect', label: 'Wrong' },
                  { id: 'flagged', label: 'Flag' },
                  { id: 'skipped', label: 'Skip' },
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
            <div id="ets-palette-body" style="display:flex;flex-direction:column;gap:8px">
              ${paletteHtml}
            </div>
          </aside>
        </div>
      </div>
    </div>
  `;

  bindExamRoomEvents(box, test, page, isReview, isRealExam, showDirections, pageQuestions);
}

// Legacy bubble row (used for WebP fallback tests)
function renderQuestionRow(q, partId, test, isReview) {
  const options = getOptionsForPart(partId);
  const userAns = session.answers[q] || '';
  const isFlagged = session.flags.has(q);
  const key = getOfficialKey(test, q);

  const bubblesHtml = options
    .map((opt) => {
      const struck = !isReview && isOptionStruck(q, opt);
      const classes = ['ets-bubble'];
      if (isReview) {
        if (opt === key) classes.push('is-correct');
        if (userAns === opt && opt !== key) classes.push('is-wrong');
      } else {
        if (userAns === opt) classes.push('is-selected');
        if (struck) classes.push('is-struck');
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
  const isRealExam = Boolean(session.isRealExam && !isReview);
  const curPage = session.pages[session.pageIdx] || session.pages[0];
  const isListeningNow = curPage && curPage.part <= 4;
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

    const partLocked = isRealExam && (isListeningNow || part.id <= 4);

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

        return `<button type="button" class="${classes.join(' ')}" data-palette-q="${q}" ${partLocked ? 'disabled' : ''}>${q}</button>`;
      })
      .join('');

    sections.push(`
      <div style="display:flex;flex-direction:column;gap:4px">
        <span class="ets-palette-part-title">P${part.id}</span>
        <div class="ets-palette-grid">${btnsHtml}</div>
      </div>
    `);
  });

  if (!sections.length) {
    return `<p class="hint" style="margin:6px 0">No questions match this filter.</p>`;
  }
  return sections.join('');
}

// ============================================================================
// In-Place Answer, Flag, Strikethrough, and Highlight Helpers
// ============================================================================

function selectAnswer(box, q, opt) {
  if (!session || curView !== 'exam') return;
  if (session.paused) {
    appShowToast('Resume the exam to record answers.');
    return;
  }

  session.answers[q] = opt;

  // Update digitized option cards
  const card = box.querySelector(`[data-q-card="${q}"]`);
  if (card) {
    card.querySelectorAll('[data-opt-card-q]').forEach((el) => {
      const isSel = el.getAttribute('data-opt') === opt;
      el.classList.toggle('is-selected', isSel);
      el.setAttribute('aria-checked', String(isSel));
    });
  }

  // Update legacy bubbles
  const row = box.querySelector(`[data-q-row="${q}"]`);
  if (row) {
    row.querySelectorAll('.ets-bubble').forEach((b) => {
      const isSel = b.getAttribute('data-opt') === opt;
      b.classList.toggle('is-selected', isSel);
      b.setAttribute('aria-pressed', String(isSel));
    });
  }

  // Update Part 5 blank in-place
  const p5Blank = box.querySelector(`[data-p5-blank="${q}"]`);
  if (p5Blank) {
    const qData = getQuestionData(session.content, q);
    const optText = getOptionText(qData, opt);
    p5Blank.textContent = optText || `(${opt})`;
    p5Blank.classList.add('is-filled');
  }

  // Update Part 6 blank pill in-place
  const p6Pill = box.querySelector(`[data-blank-q="${q}"]`);
  if (p6Pill) {
    p6Pill.textContent = getBlankPillText(q, session.content);
    p6Pill.classList.add('is-filled');
  }

  // Update palette button
  const palBtn = box.querySelector(`[data-palette-q="${q}"]`);
  if (palBtn) palBtn.classList.add('is-answered');

  // Update answered counter
  const progEl = box.querySelector('#ets-progress-text');
  if (progEl) {
    const answeredCount = session.questionList.reduce(
      (sum, qn) => sum + (session.answers[qn] ? 1 : 0),
      0
    );
    progEl.textContent = `${answeredCount}/${session.questionList.length}`;
  }
}

function toggleFlag(box, q) {
  if (!session) return;
  const nowFlagged = !session.flags.has(q);
  if (nowFlagged) session.flags.add(q);
  else session.flags.delete(q);

  const btn = box.querySelector(`[data-flag-q="${q}"]`);
  if (btn) {
    btn.classList.toggle('is-flagged', nowFlagged);
    btn.setAttribute('aria-pressed', String(nowFlagged));
    btn.setAttribute('aria-label', `${nowFlagged ? 'Remove flag' : 'Flag question'} ${q}`);
    btn.innerHTML = nowFlagged ? SVG.flagFilled : SVG.flag;
  }

  const palBtn = box.querySelector(`[data-palette-q="${q}"]`);
  if (palBtn) palBtn.classList.toggle('is-flagged', nowFlagged);
}

function applyPassageHighlight(docPane) {
  if (!docPane || typeof window === 'undefined' || !window.getSelection) return;
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) {
    appShowToast('Select text in the passage first to highlight.');
    return;
  }
  const range = sel.getRangeAt(0);
  if (!docPane.contains(range.commonAncestorContainer)) {
    appShowToast('Select text inside the passage pane.');
    return;
  }
  try {
    const mark = document.createElement('mark');
    mark.className = 'ets-hl';
    range.surroundContents(mark);
    sel.removeAllRanges();
  } catch {
    // Fallback when selection spans multiple elements: extract and wrap text cleanly
    try {
      const frag = range.extractContents();
      const mark = document.createElement('mark');
      mark.className = 'ets-hl';
      mark.appendChild(frag);
      range.insertNode(mark);
      sel.removeAllRanges();
    } catch {
      appShowToast('Could not highlight across that selection.');
    }
  }
}

function clearPassageHighlights(docPane) {
  if (!docPane) return;
  const marks = Array.from(docPane.querySelectorAll('mark.ets-hl'));
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
  });
}

function navigateToPage(box, targetIdx, triggerAutoPlay = false) {
  if (!session || targetIdx < 0 || targetIdx >= session.pages.length) return;
  const nextPage = session.pages[targetIdx];
  session.pageIdx = targetIdx;
  if (session.isRealExam && curView === 'exam' && !session.seenDirections.has(nextPage.part)) {
    session.pendingDirectionsPart = nextPage.part;
    pendingAutoPlay = false;
  } else {
    session.pendingDirectionsPart = null;
    pendingAutoPlay = triggerAutoPlay;
  }
  renderCurrent();
  scrollMainTop(box);
}

// ============================================================================
// Exam Room Event Binding
// ============================================================================

function bindExamRoomEvents(box, test, page, isReview, isRealExam, showDirections, pageQuestions) {
  // Directions Continue button (Real Exam Mode)
  box.querySelector('#ets-dir-continue')?.addEventListener('click', () => {
    session.seenDirections.add(page.part);
    session.pendingDirectionsPart = null;
    const isListening = page.part <= 4;
    pendingAutoPlay = isListening;
    renderCurrent();
  });

  // Global Volume slider
  const volInput = box.querySelector('#ets-vol');
  if (volInput) {
    volInput.addEventListener('input', () => {
      saveVolume(volInput.value);
    });
  }

  // Timer Hide/Show toggle
  const timerToggle = box.querySelector('#ets-timer-toggle');
  if (timerToggle) {
    timerToggle.addEventListener('click', () => {
      session.timerHidden = !session.timerHidden;
      timerToggle.textContent = session.timerHidden ? 'Show' : 'Hide';
      timerToggle.setAttribute('title', session.timerHidden ? 'Show timer' : 'Hide timer');
      updateTimerDisplay();
    });
  }

  // Part jump pills
  box.querySelectorAll('[data-jump-part]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const targetPart = Number(btn.getAttribute('data-jump-part'));
      const idx = session.pages.findIndex((p) => p.part === targetPart);
      if (idx >= 0 && idx !== session.pageIdx) {
        navigateToPage(box, idx, false);
      }
    });
  });

  // Pause / Resume (Practice Mode only)
  const togglePause = () => {
    session.paused = !session.paused;
    if (session.paused) stopAllAudio();
    renderCurrent();
  };
  box.querySelector('#ets-pause-toggle')?.addEventListener('click', togglePause);
  box.querySelector('#ets-resume-banner')?.addEventListener('click', togglePause);

  // Questions Palette toggle (works on BOTH desktop and mobile)
  const setPaletteOpen = (open) => {
    session.paletteOpen = open;
    box.querySelector('#ets-palette-pane')?.classList.toggle('is-open', open);
    box.querySelector('#ets-workspace')?.classList.toggle('is-palette-hidden', !open);
    box.querySelector('#ets-palette-toggle')?.setAttribute('aria-expanded', String(open));
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
    cleanupAll(true);
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
    cleanupAll(true);
    session = null;
    curView = 'catalog';
    renderCurrent();
  });

  // Page navigation
  box.querySelector('#ets-prev-page')?.addEventListener('click', () => {
    if (session.pageIdx > 0) {
      navigateToPage(box, session.pageIdx - 1, false);
    }
  });
  box.querySelector('#ets-next-page')?.addEventListener('click', () => {
    if (session.pageIdx < session.pages.length - 1) {
      navigateToPage(box, session.pageIdx + 1, false);
    }
  });

  // Auto-Next Audio toggle (Part 2 Practice)
  const autoNextChk = box.querySelector('#ets-autonext-chk');
  if (autoNextChk) {
    autoNextChk.addEventListener('change', () => {
      session.autoNextAudio = autoNextChk.checked;
    });
  }

  // Zoom controls (WebP fallback)
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
      const directSrc = img.getAttribute('data-lightbox-src');
      if (directSrc) {
        openLightbox([directSrc], 0, page.label || '');
        return;
      }
      const idx = Number(img.getAttribute('data-lightbox-idx')) || 0;
      openLightbox(page.images || [], idx, page.label || '');
    });
  });

  // Part 6 interactive blank pills -> scroll & highlight question in right pane
  box.querySelectorAll('[data-blank-q]').forEach((pill) => {
    pill.addEventListener('click', () => {
      const q = Number(pill.getAttribute('data-blank-q'));
      const qEl = box.querySelector(`#ets-q-${q}`);
      if (qEl) {
        qEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        qEl.classList.add('is-current');
        setTimeout(() => qEl.classList.remove('is-current'), 1000);
      }
    });
  });

  // Part 7 multi-passage quick jump tabs
  box.querySelectorAll('[data-jump-doc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-jump-doc'));
      const docEl = box.querySelector(`#ets-doc-${idx}`);
      if (docEl) {
        docEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      box.querySelectorAll('[data-jump-doc]').forEach((b) => {
        b.classList.toggle('active', Number(b.getAttribute('data-jump-doc')) === idx);
      });
    });
  });

  // Passage Highlight & Clear buttons
  const docPane = box.querySelector('#ets-doc-pane');
  box.querySelector('#ets-hl-apply')?.addEventListener('click', () => applyPassageHighlight(docPane));
  box.querySelector('#ets-hl-clear')?.addEventListener('click', () => clearPassageHighlights(docPane));

  // Collapsible Transcript toggles (Review Mode Part 3 & 4)
  box.querySelectorAll('[data-toggle-transcript]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-toggle-transcript');
      const boxEl = box.querySelector(`[data-transcript-box="${key}"]`);
      const bodyEl = boxEl?.querySelector('.ets-transcript-body');
      const nowOpen = !session.transcriptOpen.has(key);
      if (nowOpen) session.transcriptOpen.add(key);
      else session.transcriptOpen.delete(key);
      if (boxEl) boxEl.classList.toggle('is-open', nowOpen);
      if (bodyEl) bodyEl.hidden = !nowOpen;
      btn.textContent = nowOpen ? 'Hide Transcript' : 'Show Transcript';
    });
  });

  // Digitized Option Cards (click, keyboard Enter/Space, right-click strikethrough, strike button)
  if (!isReview) {
    box.querySelectorAll('[data-opt-card-q]').forEach((el) => {
      const q = Number(el.getAttribute('data-opt-card-q'));
      const opt = el.getAttribute('data-opt');

      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-strike-q]')) return;
        selectAnswer(box, q, opt);
      });

      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAnswer(box, q, opt);
        }
      });

      el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const struck = toggleOptionStruck(q, opt);
        el.classList.toggle('is-struck', struck);
        const sBtn = el.querySelector('[data-strike-q]');
        if (sBtn) sBtn.classList.toggle('is-active', struck);
      });
    });

    box.querySelectorAll('[data-strike-q]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const q = Number(btn.getAttribute('data-strike-q'));
        const opt = btn.getAttribute('data-strike-opt');
        const struck = toggleOptionStruck(q, opt);
        btn.classList.toggle('is-active', struck);
        const cardEl = btn.closest('[data-opt-card-q]');
        if (cardEl) cardEl.classList.toggle('is-struck', struck);
      });
    });

    // Legacy bubbles (WebP fallback)
    box.querySelectorAll('.ets-bubble').forEach((btn) => {
      const q = Number(btn.getAttribute('data-q'));
      const opt = btn.getAttribute('data-opt');
      btn.addEventListener('click', () => selectAnswer(box, q, opt));
      btn.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const struck = toggleOptionStruck(q, opt);
        btn.classList.toggle('is-struck', struck);
      });
    });
  }

  // Flag buttons
  box.querySelectorAll('[data-flag-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const q = Number(btn.getAttribute('data-flag-q'));
      toggleFlag(box, q);
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
  if (!showDirections) {
    bindAudioBars(box, page, isRealExam);
  }

  // Keyboard shortcuts
  unbindExamKeyboard();
  examKeyHandler = (e) => {
    if (lightboxEl || !session || (curView !== 'exam' && curView !== 'review')) return;
    if (showDirections) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    const active = document.activeElement;
    const tag = active ? active.tagName : '';
    if (
      tag === 'INPUT' ||
      tag === 'TEXTAREA' ||
      tag === 'SELECT' ||
      tag === 'BUTTON' ||
      (active && active.isContentEditable)
    ) {
      return;
    }

    const keyUpper = e.key.toUpperCase();
    const isSingleQ = pageQuestions.length === 1;

    // A/B/C/D or 1/2/3/4 on single-question tabs (Parts 1, 2, 5)
    if (!isReview && isSingleQ) {
      const mapNum = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
      const chosen = mapNum[e.key] || (['A', 'B', 'C', 'D'].includes(keyUpper) ? keyUpper : null);
      if (chosen) {
        const allowed = getOptionsForPart(page.part);
        if (allowed.includes(chosen)) {
          e.preventDefault();
          selectAnswer(box, pageQuestions[0], chosen);
          return;
        }
      }
    }

    // F toggles Flag on single-question tabs
    if (keyUpper === 'F' && isSingleQ) {
      e.preventDefault();
      toggleFlag(box, pageQuestions[0]);
      return;
    }

    // ArrowLeft / ArrowRight navigation (disabled during Real Exam Listening)
    const isRealListening = isRealExam && page.part <= 4;
    if (isRealListening) return;

    if (e.key === 'ArrowLeft' && session.pageIdx > 0) {
      const prevPage = session.pages[session.pageIdx - 1];
      if (isRealExam && page.part === 5 && prevPage && prevPage.part <= 4) return;
      e.preventDefault();
      navigateToPage(box, session.pageIdx - 1, false);
    } else if (e.key === 'ArrowRight' && session.pageIdx < session.pages.length - 1) {
      e.preventDefault();
      navigateToPage(box, session.pageIdx + 1, false);
    }
  };
  document.addEventListener('keydown', examKeyHandler);
}

function bindPaletteJumpButtons(box, setPaletteOpen) {
  box.querySelectorAll('[data-palette-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const targetQ = Number(btn.getAttribute('data-palette-q'));
      const targetPageIdx = session.pages.findIndex((p) =>
        (p.groups || []).some((g) => targetQ >= g.qFrom && targetQ <= g.qTo)
      );
      if (targetPageIdx < 0) return;

      if (typeof window !== 'undefined' && window.innerWidth < 1024 && session.paletteOpen) {
        setPaletteOpen(false);
      }

      if (targetPageIdx !== session.pageIdx) {
        navigateToPage(box, targetPageIdx, false);
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
// Inline Audio Player (Strict CBT Auto-Play vs Full Practice Controls)
// ============================================================================

function bindAudioBars(box, page, isRealExam) {
  const bars = Array.from(box.querySelectorAll('.ets-audio-bar'));
  if (!bars.length) return;

  const audioMap = new WeakMap();

  const getOrCreateAudio = (bar) => {
    let audio = audioMap.get(bar);
    if (audio) return audio;

    const src = bar.getAttribute('data-audio-src');
    audio = new Audio();
    audio.preload = 'metadata';
    audio.src = src;
    audio.volume = globalVolume;
    audio.playbackRate = isRealExam ? 1.0 : session ? session.audioSpeed : 1.0;

    const toggleBtn = bar.querySelector('[data-audio-toggle]');
    const range = bar.querySelector('[data-audio-range]');
    const fillEl = bar.querySelector('[data-audio-fill]');
    const statusEl = bar.querySelector('[data-audio-status]');
    const startBtn = bar.querySelector('[data-cbt-start-audio]');
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
      if (fillEl && dur > 0) {
        fillEl.style.width = `${Math.min(100, Math.round((cur / dur) * 100))}%`;
      }
    };

    audio.addEventListener('loadedmetadata', syncTime);
    audio.addEventListener('timeupdate', syncTime);

    audio.addEventListener('play', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.pause;
        toggleBtn.setAttribute('aria-label', 'Pause audio');
      }
      if (statusEl) statusEl.textContent = 'Playing audio...';
      if (startBtn) startBtn.style.display = 'none';
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
      if (fillEl) fillEl.style.width = '100%';
      if (statusEl) statusEl.textContent = 'Audio completed';
      if (activeAudio === audio) {
        activeAudio = null;
        activeAudioBarEl = null;
      }

      // Real Exam Mode: mark played once & auto-advance to next tab
      if (isRealExam && session && !session.paused) {
        session.audioPlayedTabs.add(page.id);
        if (session.pageIdx + 1 < session.pages.length) {
          clearAutoAdvance();
          autoAdvanceTimeout = setTimeout(() => {
            if (!session || curView !== 'exam' || !activeBox || !activeBox.isConnected) return;
            const nextPage = session.pages[session.pageIdx + 1];
            const nextIsListening = nextPage && nextPage.part <= 4;
            navigateToPage(box, session.pageIdx + 1, nextIsListening);
          }, 600);
        }
        return;
      }

      // Practice Mode Part 2 Auto-Next Audio
      if (!isRealExam && page.part === 2 && session && session.autoNextAudio && !session.paused) {
        const curIdx = bars.indexOf(bar);
        const nextBar = curIdx >= 0 ? bars[curIdx + 1] : null;
        if (nextBar && nextBar.isConnected) {
          nextBar.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const nextToggle = nextBar.querySelector('[data-audio-toggle]');
          if (nextToggle) nextToggle.click();
        } else if (session.pageIdx + 1 < session.pages.length) {
          const nextPage = session.pages[session.pageIdx + 1];
          if (nextPage && nextPage.part === 2) {
            navigateToPage(box, session.pageIdx + 1, true);
          }
        }
      }
    });

    audio.addEventListener('error', () => {
      if (toggleBtn) {
        toggleBtn.innerHTML = SVG.play;
        toggleBtn.setAttribute('aria-label', 'Play audio');
      }
      if (statusEl) statusEl.textContent = 'Audio unavailable';
      if (isRealExam) {
        // Unlock Next button so user is never trapped if audio file fails
        const nextBtn = box.querySelector('#ets-next-page');
        if (nextBtn) nextBtn.disabled = false;
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

  // Real Exam Mode strict single-play auto-start
  if (isRealExam) {
    const bar = bars[0];
    const startBtn = bar.querySelector('[data-cbt-start-audio]');
    const statusEl = bar.querySelector('[data-audio-status]');

    const attemptStrictPlay = () => {
      if (session.audioPlayedTabs.has(page.id)) return;
      const audio = getOrCreateAudio(bar);
      if (activeAudio && activeAudio !== audio) stopAllAudio();
      audio.volume = globalVolume;
      audio.playbackRate = 1.0;
      activeAudio = audio;
      activeAudioBarEl = bar;
      const p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          if (statusEl) statusEl.textContent = 'Click Start Audio to begin';
          if (startBtn) startBtn.style.display = 'inline-flex';
        });
      }
    };

    startBtn?.addEventListener('click', attemptStrictPlay);

    if (!session.audioPlayedTabs.has(page.id)) {
      pendingAutoPlay = false;
      requestAnimationFrame(() => {
        if (bar.isConnected) attemptStrictPlay();
      });
    }
    return;
  }

  // Practice / Review Mode full controls
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
        audio.volume = globalVolume;
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

  if (pendingAutoPlay) {
    pendingAutoPlay = false;
    if (bars.length > 0 && (!session || !session.paused)) {
      const firstToggle = bars[0].querySelector('[data-audio-toggle]');
      if (firstToggle) {
        requestAnimationFrame(() => {
          if (firstToggle.isConnected) firstToggle.click();
        });
      }
    }
  }
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
  setFocusMode(false);
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
      examMode: 'practice',
      mode: 'retry',
      modeLabel: `Retry (${retryQs.length} Qs)`,
      questionList: retryQs,
      minutes: 0,
      timerMode: 'untimed',
    });
  });
}
