// part1-view.js - Giao diện Luyện từ vựng Part 1 qua tranh ảnh (Picture Description & ETS Drill)
import { PART1_TOPICS } from './part1-data.js?v=47';

let appStore = null;
let appEsc = null;
let appSpeak = null;
let appConfirmModal = null;
let appShowToast = null;
let appRecorderManager = null;
let appGoTo = null;

let curTopicIdx = 0;
let curSceneIdx = 0;
let showLabels = true;
let curMode = 'describe'; // 'describe' | 'drill'
let activeHotspotId = null;

// Drill state per scene: { [sceneId]: { selected: null, isSubmitted: false, isPlayingAll: false } }
const drillState = {};

// User description state per scene: { [sceneId]: string }
const userDescState = {};

export function initPart1View(context) {
  appStore = context.store || null;
  appEsc = context.esc || ((s) => (s == null ? '' : String(s)));
  appSpeak = context.speak || window.speak || null;
  appConfirmModal = context.confirmModal || null;
  appShowToast = context.showToast || null;
  appRecorderManager = context.RecorderManager || window.RecorderManager || null;
  appGoTo = context.goTo || null;

  // Restore saved state from localStorage if available
  try {
    if (appStore) {
      const savedTopic = appStore.get('part1_cur_topic', 0);
      if (typeof savedTopic === 'number' && savedTopic >= 0 && savedTopic < PART1_TOPICS.length) {
        curTopicIdx = savedTopic;
      }
      const savedScene = appStore.get('part1_cur_scene', 0);
      if (typeof savedScene === 'number') curSceneIdx = savedScene;
      const savedMode = appStore.get('part1_cur_mode', 'describe');
      if (savedMode === 'describe' || savedMode === 'drill') curMode = savedMode;
    }
  } catch (e) {
    console.warn('Part 1 state restore error:', e);
  }
}

function stemWord(w) {
  if (!w || w.length <= 3) return (w || '').toLowerCase();
  return w.toLowerCase()
    .replace(/(?:ingly|edly|able|ible|tion|sion|ment|ness|less)$/i, '')
    .replace(/(?:ing|ly|ed|es|al|ive|er|or|est)$/i, '')
    .replace(/s$/i, '')
    .replace(/(.)\1$/i, '$1');
}

function isKeywordUsedInText(kwWord, text) {
  if (!text || !kwWord) return false;
  const kwLower = kwWord.toLowerCase();
  const kwStem = stemWord(kwLower);
  const textWords = text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(Boolean);

  return textWords.some((tw) => {
    if (tw === kwLower) return true;
    if (tw.startsWith(kwLower) || kwLower.startsWith(tw)) {
      if (Math.abs(tw.length - kwLower.length) <= 3) return true;
    }
    const twStem = stemWord(tw);
    return twStem === kwStem && twStem.length >= 3;
  });
}

function analyzeUserDescription(userText, targetKeywords) {
  if (!userText || !userText.trim()) {
    return {
      score: 0,
      matchedKeywords: [],
      missingKeywords: targetKeywords.map((k) => k.word),
      hasPresentContinuous: false,
      hasPreposition: false,
      tips: ['Type or use the microphone to describe the photo.']
    };
  }

  const cleanText = userText.trim();
  const matchedKeywords = [];
  const missingKeywords = [];

  targetKeywords.forEach((kw) => {
    if (isKeywordUsedInText(kw.word, cleanText)) {
      matchedKeywords.push(kw.word);
    } else {
      missingKeywords.push(kw.word);
    }
  });

  // Check common Part 1 grammatical structures
  const hasPresentContinuous = /\b(is|are|am)\s+\w+ing\b/i.test(cleanText) || /\b(has|have)\s+been\s+\w+(?:ed|en|t)\b/i.test(cleanText);
  const hasPreposition = /\b(on|at|in|under|next to|beside|in front of|across|behind|near|against)\b/i.test(cleanText);
  const hasSubject = /\b(a|the|some|there|man|woman|worker|colleague|person|people|he|she|they|monitor|laptop|desk|drawer)\b/i.test(cleanText);

  // Score calculation:
  // - Target keywords: up to 55 points (at least 2-3 keywords get full)
  // - Present Continuous/Passive: 25 points
  // - Prepositional phrase: 15 points
  // - Good length (> 5 words): 5 points
  let score = 0;
  const kwRatio = Math.min(1, matchedKeywords.length / Math.min(3, targetKeywords.length));
  score += Math.round(kwRatio * 55);

  if (hasPresentContinuous) score += 25;
  if (hasPreposition) score += 15;
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;
  if (wordCount >= 6) score += 5;

  score = Math.min(100, Math.max(0, score));

  const tips = [];
  if (matchedKeywords.length === 0) {
    tips.push(`Include at least one target keyword such as: <b>${missingKeywords.slice(0, 3).join(', ')}</b>.`);
  } else if (missingKeywords.length > 0 && matchedKeywords.length < 3) {
    tips.push(`Good start! Try adding <b>${missingKeywords.slice(0, 2).join(', ')}</b> for a richer description.`);
  }

  if (!hasPresentContinuous) {
    tips.push('Use Present Continuous (e.g., <i>is typing, is pointing, is reaching</i>) or Passive voice for TOEIC Part 1.');
  }

  if (!hasPreposition) {
    tips.push('Add a prepositional phrase of location (e.g., <i>at the desk, on the screen, in the drawer</i>) to boost your score.');
  }

  if (score >= 90) {
    tips.unshift('Excellent! Your description matches ETS TOEIC Part 1 style.');
  } else if (score >= 70) {
    tips.unshift('Great job! Your description captures the key details of the photo.');
  }

  return {
    score,
    matchedKeywords,
    missingKeywords,
    hasPresentContinuous,
    hasPreposition,
    tips
  };
}

let isPlayingSequentialDrill = false;
let drillTimeoutList = [];

function stopSequentialDrill() {
  isPlayingSequentialDrill = false;
  drillTimeoutList.forEach((t) => clearTimeout(t));
  drillTimeoutList = [];
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } catch (e) {}
}

function getSceneDrillContext(currentScene) {
  const allDrills = currentScene.drills || (currentScene.drill ? [currentScene.drill] : []);
  if (!drillState[currentScene.id]) {
    drillState[currentScene.id] = {
      subIdx: 0,
      bySub: {},
      selected: null,
      isSubmitted: false,
      isPlayingAll: false
    };
  }
  const scDrillState = drillState[currentScene.id];
  if (scDrillState.subIdx == null) scDrillState.subIdx = 0;
  if (!scDrillState.bySub) scDrillState.bySub = {};
  const activeDrillIdx = Math.min(scDrillState.subIdx, Math.max(0, allDrills.length - 1));
  if (!scDrillState.bySub[activeDrillIdx]) {
    scDrillState.bySub[activeDrillIdx] = {
      selected: scDrillState.selected || null,
      isSubmitted: scDrillState.isSubmitted || false
    };
  }
  const activeDrill = allDrills[activeDrillIdx] || currentScene.drill;
  const curDrillState = scDrillState.bySub[activeDrillIdx];
  return { allDrills, scDrillState, activeDrillIdx, activeDrill, curDrillState };
}

export function renderPart1(container) {
  if (!container) return;
  stopSequentialDrill();

  if (curTopicIdx < 0 || curTopicIdx >= PART1_TOPICS.length) curTopicIdx = 0;
  const topic = PART1_TOPICS[curTopicIdx] || PART1_TOPICS[0];
  const scenes = topic.scenes || [];
  if (curSceneIdx < 0 || curSceneIdx >= scenes.length) curSceneIdx = 0;
  const currentScene = scenes[curSceneIdx] || scenes[0];
  const { allDrills, scDrillState, activeDrillIdx, activeDrill, curDrillState } = getSceneDrillContext(currentScene);

  const currentDesc = userDescState[currentScene.id] || '';
  const analysis = analyzeUserDescription(currentDesc, currentScene.keywords || []);

  container.innerHTML = `
    <div class="part1-wrapper">
      <!-- Top Hero Header -->
      <header class="part1-header">
        <div class="part1-header-badge">
          <span class="p1-badge-chip">ETS PART 1</span>
          <span class="p1-badge-sub">Picture Description & Listening Drills</span>
        </div>
        <h1 class="part1-title">${appEsc(topic.title)}</h1>
        <p class="part1-desc">${appEsc(topic.desc)}</p>
      </header>

      <!-- Topic Selector Tabs / Pills (5 Topics) -->
      <nav class="part1-topic-nav" aria-label="Part 1 Topics">
        ${PART1_TOPICS.map((top, tIdx) => {
          const isActive = tIdx === curTopicIdx;
          const completedCount = (top.scenes || []).filter((sc) => {
            const dList = sc.drills || (sc.drill ? [sc.drill] : []);
            const sState = drillState[sc.id];
            if (!sState) return false;
            return dList.some((d, dIdx) => sState.bySub && sState.bySub[dIdx] && sState.bySub[dIdx].selected === d.correct) || (sState.selected && sc.drill && sState.selected === sc.drill.correct);
          }).length;
          return `
            <button class="part1-topic-pill ${isActive ? 'is-active' : ''}" data-topic-idx="${tIdx}">
              <span class="topic-pill-title">${appEsc(top.title.split('(')[0].trim())}</span>
              ${completedCount > 0 ? `<span class="topic-pill-done" title="${completedCount} scenes completed">✓ ${completedCount}/${top.scenes.length}</span>` : `<span class="topic-pill-badge">${top.scenes ? top.scenes.length : 0} scenes</span>`}
            </button>
          `;
        }).join('')}
      </nav>

      <!-- Scene Navigation Tabs -->
      <nav class="part1-scene-tabs" aria-label="Part 1 Scenes">
        ${scenes.map((sc, idx) => {
          const scDrills = sc.drills || (sc.drill ? [sc.drill] : []);
          const scState = drillState[sc.id];
          const isDone = scState && ((scDrills.some((d, dIdx) => scState.bySub && scState.bySub[dIdx] && scState.bySub[dIdx].selected === d.correct)) || (scState.selected && sc.drill && scState.selected === sc.drill.correct));
          const isActive = idx === curSceneIdx;
          return `
            <button class="part1-scene-tab ${isActive ? 'is-active' : ''}" data-scene-idx="${idx}">
              <span class="tab-num">0${idx + 1}</span>
              <span class="tab-name">${appEsc(sc.titleEn || sc.title)}</span>
              ${isDone ? '<span class="tab-check" title="ETS Drill Solved">✓</span>' : ''}
            </button>
          `;
        }).join('')}
      </nav>

      <!-- Main Interactive Content Grid -->
      <div class="part1-grid">
        <!-- Left Column: Picture & Interactive Hotspots -->
        <section class="part1-canvas-col">
          <div class="part1-canvas-card">
            <!-- Canvas Toolbar -->
            <div class="part1-canvas-bar">
              <div class="part1-canvas-info">
                <span class="part1-scene-tag">${appEsc(currentScene.title)}</span>
                <span class="part1-scene-sub">${appEsc(currentScene.subTitle || '')}</span>
              </div>
              <div class="part1-canvas-actions">
                <button class="part1-btn-toggle-labels ${showLabels ? 'active' : ''}" id="btn-toggle-labels" title="Toggle vocabulary labels on photo">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  <span>${showLabels ? 'Hide Labels' : 'Show Labels'}</span>
                </button>
              </div>
            </div>

            <!-- Picture SVG Container with Hotspots -->
            <div class="part1-picture-box" id="part1-picture-box">
              <div class="part1-svg-viewport">
                ${currentScene.svg}
              </div>

              <!-- Hotspot Layer -->
              <div class="part1-hotspots-layer ${showLabels ? 'show-labels' : ''}">
                ${(currentScene.hotspots || []).map((hs) => {
                  const kw = (currentScene.keywords || []).find((k) => k.id === hs.wordId);
                  const isKwUsed = kw && isKeywordUsedInText(kw.word, currentDesc);
                  const isActive = activeHotspotId === hs.id;
                  return `
                    <div class="part1-hotspot ${isActive ? 'is-active' : ''} ${isKwUsed ? 'is-used' : ''}"
                         style="left:${hs.x}%; top:${hs.y}%;"
                         data-hs-id="${hs.id}"
                         data-word-id="${hs.wordId}"
                         title="${appEsc(hs.label)}">
                      <span class="hs-pin"></span>
                      <span class="hs-pulse"></span>
                      <span class="hs-label">${appEsc(hs.label)}</span>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Hotspot Popover Card (When clicked) -->
              <div class="part1-hotspot-popover" id="part1-hotspot-popover" hidden>
                <div class="popover-content" id="popover-content"></div>
                <button class="popover-close" id="popover-close" aria-label="Close details">✕</button>
              </div>
            </div>

            <!-- Target Keywords Bar -->
            <div class="part1-keywords-container">
              <div class="part1-kw-header">
                <span class="kw-title">Target Keywords:</span>
                <span class="kw-hint">Click a word to hear pronunciation</span>
              </div>
              <div class="part1-kw-chips">
                ${(currentScene.keywords || []).map((kw) => {
                  const isUsed = isKeywordUsedInText(kw.word, currentDesc);
                  return `
                    <div class="part1-kw-chip ${isUsed ? 'is-used' : ''}" data-word="${appEsc(kw.word)}" data-kw-id="${kw.id}">
                      <button class="kw-audio-btn" data-say="${appEsc(kw.word)}" title="Listen">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
                      </button>
                      <span class="kw-text">${appEsc(kw.word)}</span>
                      <span class="kw-pos">(${appEsc(kw.pos)})</span>
                      <span class="kw-vi">${appEsc(kw.vi)}</span>
                      ${isUsed ? '<span class="kw-check" title="Used in your description">✓</span>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- Right Column: Interactive Practice Modes -->
        <section class="part1-practice-col">
          <!-- Mode Tabs -->
          <div class="part1-mode-tabs">
            <button class="part1-mode-tab ${curMode === 'describe' ? 'is-active' : ''}" data-mode="describe">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span>Mode 1: Describe Photo</span>
            </button>
            <button class="part1-mode-tab ${curMode === 'drill' ? 'is-active' : ''}" data-mode="drill">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              <span>Mode 2: ETS 4-Option Drill</span>
              ${curDrillState.isSubmitted ? '<span class="badge-mini-done">✓</span>' : ''}
            </button>
          </div>

          <!-- Mode 1: Describe Picture Container -->
          <div class="part1-mode-panel ${curMode === 'describe' ? 'is-active' : ''}" id="panel-mode-describe">
            <div class="part1-card">
              <div class="part1-card-head">
                <div class="head-title">
                  <span>Describe the Photo in English</span>
                </div>
                <div class="head-score-badge ${analysis.score >= 80 ? 'good' : (analysis.score >= 50 ? 'fair' : '')}">
                  <span class="score-num">${analysis.score}</span>
                  <span class="score-label">/ 100 pts</span>
                </div>
              </div>

              <p class="part1-card-sub">
                ${appEsc(currentScene.describeChallenge.instructions)}
              </p>

              <!-- Target Keywords Checklist -->
              <div class="part1-desc-keywords-box">
                <span class="desc-kw-label">Target Keywords:</span>
                <div class="desc-kw-tags">
                  ${currentScene.describeChallenge.targetKeywords.map((target) => {
                    const isUsed = isKeywordUsedInText(target, currentDesc);
                    return `
                      <span class="target-kw-tag ${isUsed ? 'is-matched' : ''}">
                        ${isUsed ? '✓' : '○'} ${appEsc(target)}
                      </span>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Input & Micro Area -->
              <div class="part1-input-area">
                <textarea
                  id="part1-desc-input"
                  class="part1-desc-input"
                  data-rec="part1-scene-${currentScene.id}"
                  placeholder="e.g. A woman is sitting at her desk and typing on a laptop..."
                  rows="3">${appEsc(currentDesc)}</textarea>

                <div class="part1-input-actions">
                  <!-- Micro recording button for speech input -->
                  <button
                    class="rec-btn part1-voice-btn"
                    data-rec-id="part1-scene-${currentScene.id}"
                    data-rec-text=""
                    title="Speak your description in English">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Speak</span>
                  </button>

                  <button class="part1-clear-btn" id="btn-clear-desc" title="Clear input">
                    Clear
                  </button>

                  <button class="part1-speak-input-btn" id="btn-speak-user-desc" title="Listen to your description">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
                    <span>Listen</span>
                  </button>
                </div>

                <!-- Recorder Slot for Recording Status/Player -->
                <div class="rec-slot part1-rec-slot" id="slot-part1-scene-${currentScene.id}" style="display:none"></div>
              </div>

              <!-- Realtime Analysis Feedback Card -->
              <div class="part1-feedback-card ${analysis.score >= 80 ? 'is-good' : ''}">
                <div class="fb-progress-bar">
                  <div class="fb-progress-fill" style="width: ${analysis.score}%"></div>
                </div>
                <div class="fb-tips-list">
                  ${analysis.tips.map((t) => `<div class="fb-tip-item">${t}</div>`).join('')}
                </div>
              </div>

              <!-- Model Answers Accordion -->
              <details class="part1-model-answers-accordion">
                <summary class="model-answers-summary">
                  <span class="sum-title">Model Answers (ETS Band 100%)</span>
                  <span class="sum-arrow">▾</span>
                </summary>
                <div class="model-answers-list">
                  ${(currentScene.describeChallenge.modelAnswers || []).map((ans, idx) => `
                    <div class="model-answer-item">
                      <div class="model-ans-top">
                        <span class="model-ans-badge">Sample ${idx + 1} (${ans.score}%)</span>
                        <button class="kw-audio-btn model-say-btn" data-say="${appEsc(ans.en)}" title="Listen to sample">
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
                          <span>Listen</span>
                        </button>
                        <button class="model-use-btn" data-copy="${appEsc(ans.en)}" title="Copy to input">
                          Use This
                        </button>
                      </div>
                      <div class="model-ans-en">${appEsc(ans.en)}</div>
                      <div class="model-ans-vi">${appEsc(ans.vi)}</div>
                    </div>
                  `).join('')}
                </div>
              </details>
            </div>
          </div>

          <!-- Mode 2: ETS 4-Option Drill Container -->
          <div class="part1-mode-panel ${curMode === 'drill' ? 'is-active' : ''}" id="panel-mode-drill">
            <div class="part1-card part1-drill-card">
              <div class="part1-card-head">
                <div class="head-title">
                  <span>ETS 4-Option Listening Drill</span>
                </div>
                <div class="head-badge-ets">ETS DRILL</div>
              </div>

              ${allDrills.length > 1 ? `
                <div class="part1-drill-nav" style="display:inline-flex;gap:4px;background:var(--sunk);padding:3px;border-radius:8px;margin-bottom:12px">
                  ${allDrills.map((d, dIdx) => {
                    const isDActive = dIdx === activeDrillIdx;
                    const isSubDone = scDrillState.bySub && scDrillState.bySub[dIdx] && scDrillState.bySub[dIdx].selected === d.correct;
                    return `
                      <button class="part1-subdrill-btn ${isDActive ? 'is-active' : ''}" data-sub-drill="${dIdx}" style="border:0;background:${isDActive ? 'var(--surface)' : 'none'};color:${isDActive ? 'var(--accent)' : 'var(--muted)'};padding:6px 14px;border-radius:6px;font-weight:700;font-size:13px;cursor:pointer">
                        Q${dIdx + 1}${isSubDone ? ' ✓' : ''}
                      </button>
                    `;
                  }).join('')}
                </div>
              ` : ''}

              <p class="part1-card-sub">
                ${appEsc(activeDrill.question)}
              </p>

              <!-- Audio Player Toolbar -->
              <div class="part1-audio-master-bar">
                <button class="part1-play-all-btn ${isPlayingSequentialDrill ? 'is-playing' : ''}" id="btn-play-all-drill">
                  ${isPlayingSequentialDrill ? `
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    <span>Playing A–D... [Stop]</span>
                  ` : `
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    <span>Play All 4 Options (ETS Simulation)</span>
                  `}
                </button>
                <span class="audio-hint">2.5s pause between options (ETS timing)</span>
              </div>

              <!-- 4 Options Cards -->
              <div class="part1-options-list">
                ${activeDrill.options.map((opt) => {
                  const isChosen = curDrillState.selected === opt.id;
                  const isSubmitted = curDrillState.isSubmitted;
                  let cardClass = '';
                  if (isSubmitted) {
                    if (opt.isCorrect) cardClass = 'is-correct';
                    else if (isChosen && !opt.isCorrect) cardClass = 'is-wrong';
                  } else if (isChosen) {
                    cardClass = 'is-selected';
                  }

                  return `
                    <div class="part1-option-item ${cardClass}" data-opt-id="${opt.id}" id="part1-opt-${opt.id}">
                      <div class="opt-left">
                        <button class="opt-choice-btn" data-select-opt="${opt.id}" title="Select option ${opt.id}">
                          <span class="opt-letter">${opt.id}</span>
                        </button>
                        <button class="opt-sound-btn" data-say="${appEsc(opt.text)}" title="Listen to option (${opt.id})">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
                          <span>Listen (${opt.id})</span>
                        </button>
                      </div>

                      <div class="opt-body">
                        <div class="opt-text ${isSubmitted ? 'revealed' : 'blur-hint'}">
                          ${isSubmitted ? appEsc(opt.text) : '<i>Option ' + opt.id + ' (Listen or submit to reveal transcript)</i>'}
                        </div>

                        ${isSubmitted ? `
                          <div class="opt-vi">${appEsc(opt.vi)}</div>
                          <div class="opt-trap-badge ${opt.isCorrect ? 'trap-correct' : 'trap-wrong'}">
                            ${opt.isCorrect ? '✓ ' : '✕ '}${appEsc(opt.trapType)}
                          </div>
                          <div class="opt-explanation">
                            ${appEsc(opt.explanation)}
                          </div>
                        ` : ''}
                      </div>

                      <div class="opt-status-icon">
                        ${isSubmitted && opt.isCorrect ? '<span class="status-correct">✓</span>' : ''}
                        ${isSubmitted && isChosen && !opt.isCorrect ? '<span class="status-wrong">✕</span>' : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Submit / Reset Action Bar -->
              <div class="part1-drill-actions">
                ${!curDrillState.isSubmitted ? `
                  <button class="part1-btn-submit-drill ${curDrillState.selected ? '' : 'is-disabled'}" id="btn-submit-drill">
                    Check Answer
                  </button>
                ` : `
                  <div class="drill-result-banner ${curDrillState.selected === activeDrill.correct ? 'banner-correct' : 'banner-wrong'}">
                    ${curDrillState.selected === activeDrill.correct ? `
                      <div class="res-title">Correct! Answer: (${activeDrill.correct})</div>
                      <div class="res-sub">You identified the actual action and avoided the ETS traps.</div>
                    ` : `
                      <div class="res-title">Incorrect. Correct answer: (${activeDrill.correct})</div>
                      <div class="res-sub">Review the trap analysis above to recognize common ETS distractors.</div>
                    `}
                  </div>
                  <button class="part1-btn-retry-drill" id="btn-retry-drill">
                    Retry
                  </button>
                `}
              </div>

              <!-- ETS Strategic Tips Box -->
              <div class="part1-strategy-card">
                <div class="strategy-head">
                  <span class="strategy-title">ETS Part 1 Strategy Tip</span>
                </div>
                <div class="strategy-content">
                  <p><b>Being + V3 Trap:</b> If no person is actively performing the action in the photo, any option with <code>is/are being + V3</code> is <b>always incorrect</b>.</p>
                  <p style="margin-top:6px"><b>Action vs. Object Trap:</b> ETS often pairs real objects in the photo (e.g., <i>mug, lamp, shelf</i>) with wrong verbs (e.g., <i>drinking, adjusting, assembling</i>). Always check the subject's hands and gaze.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;

  bindPart1Events(container, currentScene);
}

function bindPart1Events(container, currentScene) {
  const { scDrillState, activeDrill, curDrillState } = getSceneDrillContext(currentScene);

  // 0. Topic Selector Tabs / Pills
  container.querySelectorAll('.part1-topic-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.topicIdx, 10);
      if (!isNaN(idx) && idx !== curTopicIdx) {
        curTopicIdx = idx;
        curSceneIdx = 0;
        activeHotspotId = null;
        stopSequentialDrill();
        if (appStore) {
          try {
            appStore.set('part1_cur_topic', curTopicIdx);
            appStore.set('part1_cur_scene', 0);
          } catch (e) {}
        }
        renderPart1(container);
      }
    });
  });

  // 1. Scene Navigation Tabs
  container.querySelectorAll('.part1-scene-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.sceneIdx, 10);
      if (!isNaN(idx) && idx !== curSceneIdx) {
        curSceneIdx = idx;
        activeHotspotId = null;
        if (appStore) {
          try { appStore.set('part1_cur_scene', curSceneIdx); } catch (e) {}
        }
        renderPart1(container);
      }
    });
  });

  // 2. Toggle Keyword Labels on Picture
  const toggleBtn = container.querySelector('#btn-toggle-labels');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      showLabels = !showLabels;
      const layer = container.querySelector('.part1-hotspots-layer');
      if (layer) layer.classList.toggle('show-labels', showLabels);
      toggleBtn.classList.toggle('active', showLabels);
      const span = toggleBtn.querySelector('span');
      if (span) span.textContent = showLabels ? 'Hide Labels' : 'Show Labels';
    });
  }

  // 3. Hotspot Clicks
  const popover = container.querySelector('#part1-hotspot-popover');
  const popoverContent = container.querySelector('#popover-content');
  const popoverClose = container.querySelector('#popover-close');

  container.querySelectorAll('.part1-hotspot').forEach((hsEl) => {
    hsEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const hsId = hsEl.dataset.hsId;
      const wordId = hsEl.dataset.wordId;
      activeHotspotId = hsId;

      // Highlight active hotspot
      container.querySelectorAll('.part1-hotspot').forEach((h) => h.classList.remove('is-active'));
      hsEl.classList.add('is-active');

      // Highlight keyword in chips
      container.querySelectorAll('.part1-kw-chip').forEach((c) => {
        c.classList.toggle('is-highlighted', c.dataset.kwId === wordId);
      });

      const kw = (currentScene.keywords || []).find((k) => k.id === wordId);
      if (kw) {
        // Speak word pronunciation
        if (appSpeak) appSpeak(kw.word);

        if (popover && popoverContent) {
          popoverContent.innerHTML = `
            <div class="pop-header">
              <span class="pop-word">${appEsc(kw.word)}</span>
              <span class="pop-pos">(${appEsc(kw.pos)})</span>
              <span class="pop-ipa">${appEsc(kw.ipa)}</span>
              <button class="pop-audio-btn" data-say="${appEsc(kw.word)}" title="Listen" aria-label="Listen">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
              </button>
            </div>
            <div class="pop-vi">${appEsc(kw.vi)}</div>
            <div class="pop-example"><b>Ex:</b> "${appEsc(kw.example)}"</div>
            ${kw.collocations && kw.collocations.length ? `
              <div class="pop-collocations">
                <b>Collocations:</b> ${kw.collocations.map((c) => `<span class="colloc-tag">${appEsc(c)}</span>`).join(' ')}
              </div>
            ` : ''}
          `;
          popover.hidden = false;

          const popAudioBtn = popover.querySelector('.pop-audio-btn');
          if (popAudioBtn) {
            popAudioBtn.onclick = () => { if (appSpeak) appSpeak(kw.word); };
          }
        }
      }
    });
  });

  if (popoverClose) {
    popoverClose.addEventListener('click', () => {
      if (popover) popover.hidden = true;
      activeHotspotId = null;
      container.querySelectorAll('.part1-hotspot').forEach((h) => h.classList.remove('is-active'));
    });
  }

  // 4. Keyword Chips Audio & Click
  container.querySelectorAll('.part1-kw-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const word = chip.dataset.word;
      if (word && appSpeak) appSpeak(word);
    });
  });

  // 5. Global data-say pronunciation buttons
  container.querySelectorAll('[data-say]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-say');
      if (text && appSpeak) appSpeak(text);
    });
  });

  // 6. Mode Switcher (Describe vs Drill)
  container.querySelectorAll('.part1-mode-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.mode;
      if (mode && mode !== curMode) {
        curMode = mode;
        if (appStore) {
          try { appStore.set('part1_cur_mode', curMode); } catch (e) {}
        }
        renderPart1(container);
      }
    });
  });

  // 7. Describe Input Area
  const descInput = container.querySelector('#part1-desc-input');
  if (descInput) {
    descInput.addEventListener('input', () => {
      userDescState[currentScene.id] = descInput.value;
      updateRealtimeAnalysisUI(container, currentScene, descInput.value);
    });
  }

  const clearBtn = container.querySelector('#btn-clear-desc');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (descInput) {
        descInput.value = '';
        userDescState[currentScene.id] = '';
        updateRealtimeAnalysisUI(container, currentScene, '');
        descInput.focus();
      }
    });
  }

  const speakUserBtn = container.querySelector('#btn-speak-user-desc');
  if (speakUserBtn) {
    speakUserBtn.addEventListener('click', () => {
      const text = descInput ? descInput.value.trim() : '';
      if (!text) {
        if (appShowToast) appShowToast('Please type or speak a description first.');
        return;
      }
      if (appSpeak) appSpeak(text);
    });
  }

  // 8. Copy Model Answer to Input
  container.querySelectorAll('.model-use-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const copyText = btn.getAttribute('data-copy');
      if (copyText && descInput) {
        descInput.value = copyText;
        userDescState[currentScene.id] = copyText;
        updateRealtimeAnalysisUI(container, currentScene, copyText);
        descInput.focus();
        if (appShowToast) appShowToast('Sample answer copied to input.');
      }
    });
  });

  // 9. Drill Option Selection & Submission
  container.querySelectorAll('[data-sub-drill]').forEach((btn) => {
    btn.addEventListener('click', () => {
      scDrillState.subIdx = Number(btn.getAttribute('data-sub-drill')) || 0;
      stopSequentialDrill();
      renderPart1(container);
    });
  });

  container.querySelectorAll('[data-select-opt]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (curDrillState.isSubmitted) return;
      const optId = btn.getAttribute('data-select-opt');
      curDrillState.selected = optId;
      scDrillState.selected = optId;

      container.querySelectorAll('.part1-option-item').forEach((item) => {
        item.classList.toggle('is-selected', item.dataset.optId === optId);
      });

      const submitBtn = container.querySelector('#btn-submit-drill');
      if (submitBtn) submitBtn.classList.remove('is-disabled');
    });
  });

  const submitDrillBtn = container.querySelector('#btn-submit-drill');
  if (submitDrillBtn) {
    submitDrillBtn.addEventListener('click', () => {
      if (!curDrillState.selected) {
        if (appShowToast) appShowToast('Please select an option (A, B, C, or D) first.');
        return;
      }
      curDrillState.isSubmitted = true;
      scDrillState.selected = curDrillState.selected;
      scDrillState.isSubmitted = true;
      stopSequentialDrill();
      renderPart1(container);
    });
  }

  const retryDrillBtn = container.querySelector('#btn-retry-drill');
  if (retryDrillBtn) {
    retryDrillBtn.addEventListener('click', () => {
      curDrillState.selected = null;
      curDrillState.isSubmitted = false;
      scDrillState.selected = null;
      scDrillState.isSubmitted = false;
      stopSequentialDrill();
      renderPart1(container);
    });
  }

  // 10. Play All Drill Audio (Sequential Simulation)
  const playAllBtn = container.querySelector('#btn-play-all-drill');
  if (playAllBtn) {
    playAllBtn.addEventListener('click', () => {
      if (isPlayingSequentialDrill) {
        stopSequentialDrill();
        renderPart1(container);
        return;
      }

      const options = activeDrill.options || [];
      if (!options.length) return;

      isPlayingSequentialDrill = true;
      playAllBtn.classList.add('is-playing');
      const span = playAllBtn.querySelector('span');
      if (span) span.textContent = 'Playing A–D... [Stop]';

      let idx = 0;
      function playNext() {
        if (!isPlayingSequentialDrill || idx >= options.length) {
          stopSequentialDrill();
          const btn = container.querySelector('#btn-play-all-drill');
          if (btn) {
            btn.classList.remove('is-playing');
            const s = btn.querySelector('span');
            if (s) s.textContent = 'Play All 4 Options (ETS Simulation)';
          }
          container.querySelectorAll('.part1-option-item').forEach((item) => item.classList.remove('is-speaking-now'));
          return;
        }

        const opt = options[idx];
        container.querySelectorAll('.part1-option-item').forEach((item) => {
          item.classList.toggle('is-speaking-now', item.dataset.optId === opt.id);
        });

        const phrase = `Option ${opt.id}. ${opt.text}`;
        if (appSpeak) {
          appSpeak(phrase, () => {
            if (!isPlayingSequentialDrill) return;
            idx++;
            // 2.5 seconds pause between options, exactly like official ETS exam
            const t = setTimeout(playNext, 2500);
            drillTimeoutList.push(t);
          });
        } else {
          idx++;
          const t = setTimeout(playNext, 3000);
          drillTimeoutList.push(t);
        }
      }

      playNext();
    });
  }
}

function updateRealtimeAnalysisUI(container, currentScene, text) {
  const analysis = analyzeUserDescription(text, currentScene.keywords || []);

  // Update Score Badge
  const scoreNum = container.querySelector('.score-num');
  if (scoreNum) scoreNum.textContent = analysis.score;
  const scoreBadge = container.querySelector('.head-score-badge');
  if (scoreBadge) {
    scoreBadge.className = `head-score-badge ${analysis.score >= 80 ? 'good' : (analysis.score >= 50 ? 'fair' : '')}`;
  }

  // Update Progress Bar
  const progressFill = container.querySelector('.fb-progress-fill');
  if (progressFill) progressFill.style.width = `${analysis.score}%`;

  // Update Tips
  const tipsList = container.querySelector('.fb-tips-list');
  if (tipsList) {
    tipsList.innerHTML = analysis.tips.map((t) => `<div class="fb-tip-item">${t}</div>`).join('');
  }

  // Update Target Checklist Tags
  container.querySelectorAll('.target-kw-tag').forEach((tag) => {
    const rawWord = tag.textContent.replace(/^[✓○\s]+/, '').trim();
    const isMatched = isKeywordUsedInText(rawWord, text);
    tag.classList.toggle('is-matched', isMatched);
    tag.innerHTML = `${isMatched ? '✓' : '○'} ${appEsc(rawWord)}`;
  });

  // Update Keyword Chips on Left
  container.querySelectorAll('.part1-kw-chip').forEach((chip) => {
    const word = chip.dataset.word;
    const isUsed = isKeywordUsedInText(word, text);
    chip.classList.toggle('is-used', isUsed);
    let check = chip.querySelector('.kw-check');
    if (isUsed && !check) {
      const c = document.createElement('span');
      c.className = 'kw-check';
      c.title = 'Used in your description';
      c.textContent = '✓';
      chip.appendChild(c);
    } else if (!isUsed && check) {
      check.remove();
    }
  });

  // Update Hotspot circles
  container.querySelectorAll('.part1-hotspot').forEach((hs) => {
    const wordId = hs.dataset.wordId;
    const kw = (currentScene.keywords || []).find((k) => k.id === wordId);
    if (kw) {
      const isUsed = isKeywordUsedInText(kw.word, text);
      hs.classList.toggle('is-used', isUsed);
    }
  });
}
