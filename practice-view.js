// practice-view.js - Giao diện Reflex Translation & Drills từ 01._Practice.pdf
import { PRACTICE_UNITS, PRACTICE_PARAGRAPHS, PRACTICE_TENSES } from './practice-data.js?v=38';

let appStore = null;
let appEsc = null;
let appSpeak = null;
let appConfirmModal = null;
let appShowToast = null;
let curTab = 'units'; // 'units' | 'paragraphs' | 'tenses'
let curUnitIdx = 0;
let curParaIdx = 0;
const practiceExState = {};

export function initPracticeView(context) {
  appStore = context.store;
  appEsc = context.esc;
  appSpeak = context.speak;
  appConfirmModal = context.confirmModal;
  appShowToast = context.showToast;
}

export function resetPracticeExState() {
  Object.keys(practiceExState).forEach(k => delete practiceExState[k]);
}

export function getPracticeExState(exId) {
  const key = String(exId);
  const saved = appStore ? appStore.get('practice_ex:' + key, null) : null;
  const savedObj = (saved && typeof saved === 'object') ? saved : null;

  if (!practiceExState[key]) {
    practiceExState[key] = savedObj || { answers: {}, checked: {}, eval: {}, updatedAt: Date.now() };
    if (!practiceExState[key].answers) practiceExState[key].answers = {};
    if (!practiceExState[key].checked) practiceExState[key].checked = {};
    if (!practiceExState[key].eval) practiceExState[key].eval = {};
  } else if (savedObj && savedObj.updatedAt && savedObj.updatedAt > (practiceExState[key].updatedAt || 0)) {
    practiceExState[key] = savedObj;
    if (!practiceExState[key].answers) practiceExState[key].answers = {};
    if (!practiceExState[key].checked) practiceExState[key].checked = {};
    if (!practiceExState[key].eval) practiceExState[key].eval = {};
  }
  return practiceExState[key];
}

export function savePracticeExState(exId) {
  const key = String(exId);
  const state = getPracticeExState(key);
  state.updatedAt = Date.now();
  if (appStore) {
    appStore.set('practice_ex:' + key, state);
  }
  const badge = document.querySelector('#practice-autosave-badge');
  if (badge) {
    badge.textContent = '✓ Auto-saved at ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    badge.style.color = 'var(--good)';
  }
}

// Danh sách các nhóm từ đồng nghĩa / tương đương hay gặp trong TOEIC & dịch thuật phản xạ
const TOEIC_SYN_GROUPS = [
  ['price', 'cost', 'rate', 'pricing', 'charge', 'amount'],
  ['additional', 'extra', 'supplementary', 'further', 'more', 'added'],
  ['charges', 'charge', 'fees', 'fee', 'costs', 'cost', 'surcharges', 'surcharge', 'expenses', 'expense'],
  ['include', 'includes', 'included', 'contain', 'contains', 'cover', 'covers', 'involve', 'involves', 'comprise', 'comprises'],
  ['cancel', 'cancelled', 'canceled', 'cancels', 'call off', 'called off'],
  ['purchase', 'purchased', 'purchases', 'buy', 'bought', 'buys', 'order', 'ordered'],
  ['furniture', 'furnishings', 'household items', 'interior items'],
  ['meeting', 'meetings', 'conference', 'session', 'briefing', 'appointment'],
  ['register', 'registers', 'registered', 'sign up', 'signs up', 'signed up', 'enroll', 'enrolled'],
  ['account', 'accounts', 'profile'],
  ['online', 'on internet', 'via internet', 'on web'],
  ['deliver', 'delivers', 'delivered', 'ship', 'ships', 'shipped', 'send', 'sent', 'transport'],
  ['delivery', 'deliveries', 'shipment', 'shipments', 'shipping'],
  ['before', 'prior to', 'no later than', 'by', 'at the latest by', 'not later than'],
  ['annual', 'yearly', 'every year', 'per year'],
  ['growth', 'increase', 'rise', 'expansion'],
  ['revenue', 'revenues', 'income', 'turnover', 'earnings', 'sales'],
  ['confirm', 'confirms', 'confirmed', 'verify', 'verifies', 'verified', 'acknowledge'],
  ['submit', 'submits', 'submitted', 'hand in', 'hands in', 'turn in', 'send in', 'present'],
  ['financial', 'finance', 'fiscal'],
  ['report', 'reports', 'statement', 'statements'],
  ['start', 'starts', 'started', 'begin', 'begins', 'began', 'commence', 'commences'],
  ['finish', 'finishes', 'finished', 'complete', 'completes', 'completed', 'end', 'ends'],
  ['project', 'projects', 'plan', 'plans', 'program', 'scheme'],
  ['customer', 'customers', 'client', 'clients', 'buyer', 'patron'],
  ['feedback', 'review', 'reviews', 'opinion', 'comments'],
  ['vacant', 'open', 'available', 'unfilled'],
  ['position', 'positions', 'job', 'jobs', 'post', 'role', 'vacancy'],
  ['require', 'requires', 'required', 'need', 'needs', 'demands'],
  ['experience', 'experiences', 'skills', 'background', 'qualifications'],
  ['discount', 'discounts', 'sale', 'reduction', 'deduction'],
  ['notice', 'announcement', 'notification', 'alert'],
  ['delay', 'delayed', 'postpone', 'postponed', 'put off']
];

const STOPWORDS_SET = new Set(['the', 'a', 'an', 'some', 'any', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'by']);

function normEnText(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\bdoesn't\b/g, 'does not')
    .replace(/\bdon't\b/g, 'do not')
    .replace(/\bdidn't\b/g, 'did not')
    .replace(/\bwon't\b/g, 'will not')
    .replace(/\bcan't\b/g, 'cannot')
    .replace(/\bcouldn't\b/g, 'could not')
    .replace(/\bwouldn't\b/g, 'would not')
    .replace(/\bshouldn't\b/g, 'should not')
    .replace(/\bisn't\b/g, 'is not')
    .replace(/\baren't\b/g, 'are not')
    .replace(/\bwasn't\b/g, 'was not')
    .replace(/\bweren't\b/g, 'were not')
    .replace(/\bit's\b/g, 'it is')
    .replace(/\bthat's\b/g, 'that is')
    .replace(/\bthere's\b/g, 'there is')
    .replace(/\bwhat's\b/g, 'what is')
    .replace(/\blet's\b/g, 'let us')
    .replace(/\b'll\b/g, ' will')
    .replace(/\b've\b/g, ' have')
    .replace(/\b're\b/g, ' are')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isWordSynonymOrStem(w1, w2) {
  if (w1 === w2) return true;
  const s1 = w1.replace(/(?:ing|ed|es|s)$/, '');
  const s2 = w2.replace(/(?:ing|ed|es|s)$/, '');
  if (s1.length >= 3 && s1 === s2) return true;
  for (const group of TOEIC_SYN_GROUPS) {
    if (group.includes(w1) && group.includes(w2)) return true;
    if (s1.length >= 3 && s2.length >= 3 && group.some(x => x.startsWith(s1)) && group.some(x => x.startsWith(s2))) {
      return true;
    }
  }
  return false;
}

// Dịch ngược câu người dùng sang tiếng Việt để đối chiếu độ tương đồng nghĩa
async function fetchBackTranslation(enText) {
  try {
    const gUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' + encodeURIComponent(enText);
    const gr = await fetch(gUrl);
    if (gr.ok) {
      const gd = await gr.json();
      if (gd && gd[0] && gd[0][0] && gd[0][0][0]) {
        return gd[0].map(x => x[0]).join('').trim();
      }
    }
  } catch (e) {}
  return "";
}

async function evaluateTranslation(userText, refText, viPrompt) {
  const userTrim = (userText || '').trim();
  if (!userTrim) {
    return {
      score: 0,
      verdict: 'empty',
      verdictText: 'No translation entered',
      feedback: 'Please enter your English translation.',
      userMeaning: '',
      synonymsFound: []
    };
  }

  const nu = normEnText(userTrim);
  const nr = normEnText(refText);

  // 1. Khớp nguyên văn chuẩn xác 100%
  if (nu === nr) {
    return {
      score: 100,
      verdict: 'correct',
      verdictText: '✓ Exact match',
      feedback: 'Excellent! Your translation perfectly matches the reference answer.',
      userMeaning: viPrompt,
      synonymsFound: []
    };
  }

  const uWords = nu.split(' ').filter(w => w && !STOPWORDS_SET.has(w));
  const rWords = nr.split(' ').filter(w => w && !STOPWORDS_SET.has(w));

  let matchedCount = 0;
  const synonymsFound = [];
  const usedUserIdx = new Set();

  rWords.forEach(rw => {
    for (let i = 0; i < uWords.length; i++) {
      if (usedUserIdx.has(i)) continue;
      const uw = uWords[i];
      if (isWordSynonymOrStem(rw, uw)) {
        usedUserIdx.add(i);
        matchedCount += 1;
        if (rw !== uw) {
          synonymsFound.push({ user: uw, ref: rw });
        }
        break;
      }
    }
  });

  const tokenScore = Math.min(100, Math.round((matchedCount / Math.max(1, rWords.length)) * 100));

  // 2. Dịch ngược qua Google Translate để kiểm tra độ tương đồng nghĩa tiếng Việt
  const userMeaning = await fetchBackTranslation(userTrim);
  let viOverlapScore = 0;
  if (userMeaning && viPrompt) {
    const viNorm = s => String(s || '').toLowerCase().replace(/[^a-z0-9à-ỹ\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const promptWords = viNorm(viPrompt).split(' ').filter(w => w.length > 1);
    const meaningWords = viNorm(userMeaning).split(' ').filter(w => w.length > 1);
    let hitCount = 0;
    promptWords.forEach(pw => {
      if (meaningWords.includes(pw)) hitCount += 1;
    });
    viOverlapScore = Math.min(100, Math.round((hitCount / Math.max(1, promptWords.length)) * 100));
  }

  const finalScore = Math.max(tokenScore, Math.round(tokenScore * 0.6 + viOverlapScore * 0.4));

  let verdict = 'wrong';
  let verdictText = '✕ Needs revision';
  let feedback = 'The translation does not closely match the prompt. Review the reference answer below.';

  if (finalScore >= 75 || (matchedCount === rWords.length && rWords.length > 0)) {
    verdict = 'correct';
    verdictText = '✓ Meaning matched';
    if (synonymsFound.length > 0) {
      feedback = 'Outstanding! Your translation accurately conveys the meaning with natural vocabulary.';
    } else {
      feedback = 'Great job! Your translation accurately conveys the target sentence meaning.';
    }
  } else if (finalScore >= 50) {
    verdict = 'partial';
    verdictText = '~ Close attempt';
    feedback = 'You captured the core idea. Review the reference answer below to refine vocabulary and structure.';
  }

  return {
    score: finalScore,
    verdict,
    verdictText,
    feedback,
    userMeaning,
    synonymsFound
  };
}

function buildCheckAnswerHtml(evalResult, refText, userVal) {
  const esc = appEsc || (s => String(s ?? ''));
  if (!userVal) {
    return `
      <div style="background:var(--sunk);border:1px solid var(--line);border-radius:8px;padding:12px 14px;font-size:13.5px">
        <div style="color:var(--muted);margin-bottom:8px;font-size:13px">
          Please enter your English translation or review the reference answer below:
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-weight:700;color:#059669">REFERENCE ANSWER:</span>
          ${refText ? `<button class="btn practice-speak-btn btn-speak-ref" data-say="${esc(refText)}" title="Listen to reference" style="height:26px !important;padding:2px 8px !important;font-size:11.5px !important">Listen</button>` : ''}
        </div>
        <div style="font-size:15px;font-weight:700;color:var(--ink)">
          ${esc(refText || 'Reference answer being updated')}
        </div>
      </div>
    `;
  }

  const { score, verdict, verdictText, feedback, userMeaning, synonymsFound } = evalResult;

  let bannerBg = 'rgba(5,150,105,0.08)';
  let bannerBorder = 'rgba(5,150,105,0.3)';
  let bannerColor = '#059669';
  let bannerIcon = '✓';

  if (verdict === 'partial') {
    bannerBg = 'rgba(245,158,11,0.08)';
    bannerBorder = 'rgba(245,158,11,0.3)';
    bannerColor = '#D97706';
    bannerIcon = '~';
  } else if (verdict === 'wrong') {
    bannerBg = 'rgba(239,68,68,0.08)';
    bannerBorder = 'rgba(239,68,68,0.3)';
    bannerColor = '#DC2626';
    bannerIcon = '✕';
  }

  return `
    <div style="border:1.5px solid ${bannerBorder};background:var(--surface);border-radius:10px;padding:12px 14px;font-size:13.5px">
      <!-- 1. Evaluation Banner -->
      <div style="display:flex;align-items:flex-start;gap:10px;background:${bannerBg};border-radius:8px;padding:10px 12px;margin-bottom:10px">
        <span style="font-size:20px;font-weight:800;color:${bannerColor};line-height:1">${bannerIcon}</span>
        <div style="flex:1">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
            <span style="font-size:14.5px;font-weight:800;color:${bannerColor}">
              ${esc(verdictText)} · <span style="font-size:13px">${score}% Match</span>
            </span>
          </div>
          <div style="font-size:12.5px;color:var(--ink);margin-top:3px;line-height:1.4">
            ${esc(feedback)}
          </div>
        </div>
      </div>

      <!-- 2. Matched Synonyms -->
      ${synonymsFound && synonymsFound.length ? `
        <div style="background:rgba(37,99,235,0.06);border:1px solid rgba(37,99,235,0.2);border-radius:6px;padding:6px 10px;margin-bottom:10px;font-size:12px">
          <b style="color:#2563EB">Matched Synonyms:</b>
          ${synonymsFound.map(p => `<span style="display:inline-block;margin-left:6px;padding:1px 6px;background:var(--bg);border-radius:4px;border:1px solid var(--line);font-weight:600;color:var(--ink)">${esc(p.user)} ⇄ ${esc(p.ref)}</span>`).join('')}
        </div>
      ` : ''}

      <!-- 3. Parallel Comparison -->
      <div style="background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
        <div style="margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">
            <span style="font-size:12px;font-weight:700;color:#059669">REFERENCE ANSWER:</span>
            ${refText ? `<button class="btn practice-speak-btn btn-speak-ref" data-say="${esc(refText)}" title="Listen to reference" style="height:24px !important;padding:2px 8px !important;font-size:11.5px !important">Listen</button>` : ''}
          </div>
          <div style="font-size:15px;font-weight:700;color:var(--ink);line-height:1.4">
            ${esc(refText || 'Reference answer being updated')}
          </div>
        </div>

        <div style="border-top:1px dashed var(--line);padding-top:8px">
          <span style="font-size:12px;font-weight:700;color:var(--muted)">YOUR INPUT:</span>
          <div style="font-size:14.5px;font-weight:600;color:var(--ink);line-height:1.4;margin-top:2px">
            "${esc(userVal)}"
          </div>
          ${userMeaning ? `
            <div style="font-size:12px;color:var(--muted);margin-top:3px">
              Vietnamese meaning of your input: <b style="color:var(--ink)">"${esc(userMeaning)}"</b>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Helper to translate Vietnamese prompt to English if reference is missing
async function fetchSuggestedTranslation(viText) {
  try {
    const gUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=' + encodeURIComponent(viText);
    const gr = await fetch(gUrl);
    if (gr.ok) {
      const gd = await gr.json();
      if (gd && gd[0] && gd[0][0] && gd[0][0][0]) {
        return gd[0].map(x => x[0]).join('').trim();
      }
    }
  } catch (e) {}
  return "";
}

export function renderPractice(box) {
  box.innerHTML = `
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(5,150,105,0.12);color:#059669;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:700;margin-bottom:6px">
            <span>PRACTICE WORKBOOK</span>
          </div>
          <h1 style="font-size:24px;margin:2px 0 6px">Reflex Translation & Drills</h1>
          <p class="hint" style="margin:0;font-size:13.5px">
            16 Unit Drills · 15 Real Passages · 30 Tense Drills with Voice & Real-time Evaluation
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="practice-autosave-badge" style="font-size:12px;color:var(--muted);font-weight:600">Auto-save active</span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div style="display:flex;gap:8px;margin-top:16px;border-bottom:1px solid var(--line);padding-bottom:12px;overflow-x:auto">
        <button class="btn ${curTab === 'units' ? 'primary' : 'ghost'}" id="btn-ptab-units" style="font-size:13px;white-space:nowrap">
          16 Unit Drills (${PRACTICE_UNITS.length})
        </button>
        <button class="btn ${curTab === 'paragraphs' ? 'primary' : 'ghost'}" id="btn-ptab-paras" style="font-size:13px;white-space:nowrap">
          15 Real Passages (${PRACTICE_PARAGRAPHS.length})
        </button>
        <button class="btn ${curTab === 'tenses' ? 'primary' : 'ghost'}" id="btn-ptab-tenses" style="font-size:13px;white-space:nowrap">
          30 Tense Drills (${PRACTICE_TENSES.length})
        </button>
      </div>
    </div>

    <div id="practice-content-area"></div>
  `;

  // Attach tab switcher
  box.querySelector('#btn-ptab-units').onclick = () => { curTab = 'units'; renderPractice(box); };
  box.querySelector('#btn-ptab-paras').onclick = () => { curTab = 'paragraphs'; renderPractice(box); };
  box.querySelector('#btn-ptab-tenses').onclick = () => { curTab = 'tenses'; renderPractice(box); };

  const contentArea = box.querySelector('#practice-content-area');
  if (curTab === 'units') {
    renderUnitsSection(contentArea);
  } else if (curTab === 'paragraphs') {
    renderParasSection(contentArea);
  } else if (curTab === 'tenses') {
    renderTensesSection(contentArea);
  }
}

// -------------------------------------------------------------
// 1. RENDER 16 BÀI TẬP THEO UNIT
// -------------------------------------------------------------
function renderUnitsSection(container) {
  const esc = appEsc || (s => String(s ?? ''));
  const currentUnit = PRACTICE_UNITS[curUnitIdx] || PRACTICE_UNITS[0];
  const uState = getPracticeExState(currentUnit.id);
  const userAnswers = uState.answers || {};
  const checkedMap = uState.checked || {};

  const answeredCount = currentUnit.items.filter(it => userAnswers[it.id] && String(userAnswers[it.id]).trim().length > 0).length;
  const progressPct = Math.round((answeredCount / currentUnit.items.length) * 100);

  container.innerHTML = `
    <!-- Unit Selector Pills -->
    <div class="card" style="margin-bottom:14px;padding:12px 14px">
      <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:var(--muted)">SELECT UNIT:</div>
      <div class="practice-pills-scroll" style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:6px;scrollbar-width:none">
        ${PRACTICE_UNITS.map((u, idx) => {
          const st = getPracticeExState(u.id);
          const ansCount = u.items.filter(it => (st.answers || {})[it.id] && String((st.answers || {})[it.id]).trim().length > 0).length;
          const isDone = ansCount === u.items.length;
          return `
            <button class="btn ${idx === curUnitIdx ? 'primary' : 'ghost'} btn-select-unit" data-idx="${idx}" style="font-size:12px;padding:6px 12px;border-radius:6px;flex-shrink:0;white-space:nowrap">
              ${isDone ? '✓ ' : ''}${esc(u.unitTag)}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Active Unit Card -->
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
        <div>
          <h2 style="margin:0 0 4px;font-size:19px">${esc(currentUnit.title)}</h2>
          <div class="hint" style="font-size:13px">Translate each sentence into English using the target vocabulary</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span id="unit-answered-count" style="font-size:13px;font-weight:600">${answeredCount} / ${currentUnit.items.length} questions</span>
          <div style="width:100px;height:7px;background:var(--sunk);border-radius:4px;overflow:hidden">
            <div id="unit-progress-bar" style="width:${progressPct}%;height:100%;background:#059669;transition:width 0.2s"></div>
          </div>
          <button class="btn ghost btn-clear-unit" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Reset Unit</button>
        </div>
      </div>

      <!-- List of translation questions -->
      <div style="display:flex;flex-direction:column;gap:14px">
        ${currentUnit.items.map(it => {
          const val = userAnswers[it.id] || '';
          const isChecked = Boolean(checkedMap[it.id]);
          const prevEval = uState.eval && uState.eval[it.id];
          const refText = it.ref || '';
          const recSlotId = `slot-prac-u-${currentUnit.id}-${it.id}`;

          let borderStyle = '1px solid var(--line)';
          let bgStyle = 'var(--bg)';
          if (prevEval && val) {
            if (prevEval.verdict === 'correct') {
              borderStyle = '1.5px solid #059669';
              bgStyle = 'rgba(5,150,105,0.03)';
            } else if (prevEval.verdict === 'partial') {
              borderStyle = '1.5px solid #D97706';
              bgStyle = 'rgba(245,158,11,0.03)';
            } else if (prevEval.verdict === 'wrong') {
              borderStyle = '1.5px solid #DC2626';
              bgStyle = 'rgba(239,68,68,0.03)';
            }
          }

          return `
            <div class="practice-item-card" style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <!-- Question Header -->
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:8px;flex-wrap:wrap">
                <div style="font-weight:700;font-size:14.5px;color:var(--ink);display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap">
                  <span style="color:#059669">${it.id}.</span>
                  <span>${esc(it.vi)}</span>
                  <span id="badge-item-${it.id}" class="item-status-badge">
                    ${prevEval && val ? (prevEval.verdict === 'correct' ? `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>` : (prevEval.verdict === 'partial' ? `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>` : `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`)) : ''}
                  </span>
                </div>

                <!-- Action Controls -->
                <div class="practice-actions-row" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  ${val ? `<button class="btn practice-speak-btn btn-speak-item" data-id="${it.id}" title="Listen to your translation" aria-label="Listen">Listen</button>` : ''}
                  
                  <!-- Voice Recording Button -->
                  <button class="btn rec-btn practice-rec-btn" data-rec-text="" data-rec-id="prac-u-${currentUnit.id}-${it.id}" title="Record your speech in English">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Record</span>
                  </button>

                  <!-- Check Answer Button -->
                  <button class="btn practice-check-btn btn-check-item" data-id="${it.id}" data-vi="${esc(it.vi)}" data-ref="${esc(refText)}">
                    ${isChecked ? 'Hide Answer' : 'Check Answer'}
                  </button>
                </div>
              </div>

              <!-- English Input -->
              <div>
                <input type="text" class="practice-input" data-item="${it.id}" value="${esc(val)}" placeholder="Type your English translation..." style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:6px;border:${borderStyle};background:${bgStyle};color:var(--ink);font-size:14px;outline:none;transition:border-color 0.15s,background 0.15s" />
              </div>

              <!-- Voice Recording Evaluation Slot -->
              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>

              <!-- Answer Check Box -->
              <div id="check-box-${it.id}" class="practice-check-box" style="margin-top:10px;display:${isChecked ? 'block' : 'none'}">
                ${isChecked && prevEval ? buildCheckAnswerHtml(prevEval, refText, val) : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach Unit selector events
  container.querySelectorAll('.btn-select-unit').forEach(btn => {
    btn.onclick = () => {
      curUnitIdx = Number(btn.dataset.idx);
      renderUnitsSection(container);
    };
  });

  const activeUnitPill = container.querySelector('.btn-select-unit.primary');
  if (activeUnitPill && activeUnitPill.scrollIntoView) {
    try { activeUnitPill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch(e){}
  }


function updateUnitStatsUI(container, currentUnit) {
  if (!container || !currentUnit) return;
  const uState = getPracticeExState(currentUnit.id);
  const userAnswers = uState.answers || {};
  const answeredCount = currentUnit.items.filter(it => userAnswers[it.id] && String(userAnswers[it.id]).trim().length > 0).length;
  const progressPct = Math.round((answeredCount / currentUnit.items.length) * 100);
  const isDone = answeredCount === currentUnit.items.length;

  const countEl = container.querySelector('#unit-answered-count');
  if (countEl) countEl.textContent = `${answeredCount} / ${currentUnit.items.length} questions`;
  const progEl = container.querySelector('#unit-progress-bar');
  if (progEl) progEl.style.width = `${progressPct}%`;

  const btnPill = container.querySelector(`.btn-select-unit[data-idx="${curUnitIdx}"]`);
  if (btnPill) {
    btnPill.textContent = (isDone ? '✓ ' : '') + currentUnit.unitTag;
  }
}

  // Attach Input auto-save events
  container.querySelectorAll('.practice-input').forEach(input => {
    let debounceTimer = null;
    input.oninput = () => {
      const itemId = Number(input.dataset.item);
      uState.answers[itemId] = input.value;
      input.style.borderColor = 'var(--line)';
      input.style.background = 'var(--bg)';
      const b = container.querySelector(`#badge-item-${itemId}`);
      if (b) b.innerHTML = '';
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        savePracticeExState(currentUnit.id);
      }, 400);
    };
    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        const next = container.querySelector(`.practice-input[data-item="${Number(input.dataset.item) + 1}"]`);
        if (next) next.focus();
      }
    };
  });

  // Speak event
  container.querySelectorAll('.btn-speak-item').forEach(btn => {
    btn.onclick = () => {
      const itemId = Number(btn.dataset.id);
      const val = uState.answers[itemId];
      if (val && appSpeak) appSpeak(val);
    };
  });

  // Check Answer Event
  container.querySelectorAll('.btn-check-item').forEach(btn => {
    btn.onclick = async () => {
      const itemId = Number(btn.dataset.id);
      const viText = btn.dataset.vi;
      let ref = btn.dataset.ref;
      const chkBox = container.querySelector('#check-box-' + itemId);
      if (!chkBox) return;

      const willOpen = chkBox.style.display === 'none';
      if (!willOpen) {
        chkBox.style.display = 'none';
        btn.textContent = 'Check Answer';
        uState.checked[itemId] = false;
        savePracticeExState(currentUnit.id);
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:10px 14px;background:var(--sunk);border-radius:8px">Analyzing and evaluating translation...</div>';
      btn.textContent = 'Hide Answer';
      uState.checked[itemId] = true;

      if (!ref) {
        ref = await fetchSuggestedTranslation(viText);
      }

      const userVal = (uState.answers[itemId] || '').trim();
      const evalRes = await evaluateTranslation(userVal, ref, viText);
      uState.eval = uState.eval || {};
      uState.eval[itemId] = evalRes;
      savePracticeExState(currentUnit.id);

      // Cập nhật viền input
      const inputEl = container.querySelector(`.practice-input[data-item="${itemId}"]`);
      if (inputEl) {
        if (evalRes.verdict === 'correct') {
          inputEl.style.borderColor = '#059669';
          inputEl.style.background = 'rgba(5,150,105,0.03)';
        } else if (evalRes.verdict === 'partial') {
          inputEl.style.borderColor = '#D97706';
          inputEl.style.background = 'rgba(245,158,11,0.03)';
        } else if (evalRes.verdict === 'wrong') {
          inputEl.style.borderColor = '#DC2626';
          inputEl.style.background = 'rgba(239,68,68,0.03)';
        } else {
          inputEl.style.borderColor = 'var(--line)';
          inputEl.style.background = 'var(--bg)';
        }
      }

      // Cập nhật thẻ trạng thái
      const badgeEl = container.querySelector(`#badge-item-${itemId}`);
      if (badgeEl) {
        if (evalRes.verdict === 'correct') {
          badgeEl.innerHTML = `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>`;
        } else if (evalRes.verdict === 'partial') {
          badgeEl.innerHTML = `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>`;
        } else if (evalRes.verdict === 'wrong') {
          badgeEl.innerHTML = `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`;
        } else {
          badgeEl.innerHTML = '';
        }
      }

      chkBox.innerHTML = buildCheckAnswerHtml(evalRes, ref, userVal);

      const speakRefBtn = chkBox.querySelector('.btn-speak-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear unit
  const clearBtn = container.querySelector('.btn-clear-unit');
  if (clearBtn) {
    clearBtn.onclick = async () => {
      const ok = appConfirmModal ? await appConfirmModal({
        title: 'Reset Unit?',
        message: 'Are you sure you want to reset all answers for ' + currentUnit.title + '?',
        confirmText: 'Reset',
        cancelText: 'Cancel',
        danger: true
      }) : true;
      if (ok) {
        uState.answers = {};
        uState.checked = {};
        savePracticeExState(currentUnit.id);
        renderUnitsSection(container);
        if (appShowToast) appShowToast('Reset answers for ' + currentUnit.unitTag);
      }
    };
  }
}

// -------------------------------------------------------------
// 2. RENDER 15 ĐOẠN VĂN THỰC TẾ
// -------------------------------------------------------------
function renderParasSection(container) {
  const esc = appEsc || (s => String(s ?? ''));
  const currentPara = PRACTICE_PARAGRAPHS[curParaIdx] || PRACTICE_PARAGRAPHS[0];
  const pState = getPracticeExState(currentPara.id);
  const userAnswers = pState.answers || {};
  const checkedMap = pState.checked || {};

  container.innerHTML = `
    <!-- Paragraph Selector Pills -->
    <div class="card" style="margin-bottom:14px;padding:12px 14px">
      <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:var(--muted)">SELECT PASSAGE:</div>
      <div class="practice-pills-scroll" style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:6px;scrollbar-width:none">
        ${PRACTICE_PARAGRAPHS.map((p, idx) => {
          const st = getPracticeExState(p.id);
          const hasAns = Object.values(st.answers || {}).some(v => v && String(v).trim().length > 0);
          return `
            <button class="btn ${idx === curParaIdx ? 'primary' : 'ghost'} btn-select-para" data-idx="${idx}" style="font-size:12px;padding:6px 12px;border-radius:6px;flex-shrink:0;white-space:nowrap">
              ${hasAns ? '✓ ' : ''}Passage ${idx + 1}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Active Paragraph Card -->
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
        <div>
          <h2 style="margin:0 0 4px;font-size:19px">${esc(currentPara.title)}</h2>
          <div class="hint" style="font-size:13px">Authentic Passages, Emails & Dialogues — Translate each section into English</div>
        </div>
        <button class="btn ghost btn-clear-para" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Reset Passage</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px">
        ${currentPara.segments.map(seg => {
          const val = userAnswers[seg.id] || '';
          const isChecked = Boolean(checkedMap[seg.id]);
          const prevEval = pState.eval && pState.eval[seg.id];
          const recSlotId = `slot-prac-p-${currentPara.id}-${seg.id}`;

          let borderStyle = '1px solid var(--line)';
          let bgStyle = 'var(--bg)';
          if (prevEval && val) {
            if (prevEval.verdict === 'correct') {
              borderStyle = '1.5px solid #059669';
              bgStyle = 'rgba(5,150,105,0.03)';
            } else if (prevEval.verdict === 'partial') {
              borderStyle = '1.5px solid #D97706';
              bgStyle = 'rgba(245,158,11,0.03)';
            } else if (prevEval.verdict === 'wrong') {
              borderStyle = '1.5px solid #DC2626';
              bgStyle = 'rgba(239,68,68,0.03)';
            }
          }

          return `
            <div style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px">
                <div style="font-weight:700;font-size:13.5px;color:#059669;display:inline-flex;align-items:center;gap:6px">
                  <span>Part ${seg.id}</span>
                  <span id="badge-para-${seg.id}" class="item-status-badge">
                    ${prevEval && val ? (prevEval.verdict === 'correct' ? `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>` : (prevEval.verdict === 'partial' ? `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>` : `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`)) : ''}
                  </span>
                </div>
                <div class="practice-actions-row" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  ${val ? `<button class="btn practice-speak-btn btn-speak-seg" data-id="${seg.id}" title="Listen to your translation">Listen</button>` : ''}
                  
                  <!-- Voice Recording -->
                  <button class="btn rec-btn practice-rec-btn" data-rec-text="" data-rec-id="prac-p-${currentPara.id}-${seg.id}" title="Record your speech in English">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Record</span>
                  </button>

                  <button class="btn practice-check-btn btn-check-para-seg" data-seg="${seg.id}" data-vi="${esc(seg.vi)}">
                    ${isChecked ? 'Hide Answer' : 'Check Answer'}
                  </button>
                </div>
              </div>

              <div style="font-size:14px;line-height:1.6;color:var(--ink);background:var(--sunk);padding:10px 12px;border-radius:6px;margin-bottom:10px;white-space:pre-wrap">
                ${esc(seg.vi)}
              </div>
              <textarea class="para-input" data-seg="${seg.id}" rows="3" placeholder="Type English translation for this section..." style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:6px;border:${borderStyle};background:${bgStyle};color:var(--ink);font-size:14px;outline:none;resize:vertical;font-family:inherit;transition:border-color 0.15s,background 0.15s">${esc(val)}</textarea>

              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>
              <div id="check-para-box-${seg.id}" class="practice-check-box" style="margin-top:8px;display:${isChecked ? 'block' : 'none'}">
                ${isChecked && prevEval ? buildCheckAnswerHtml(prevEval, '', val) : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach selector events
  container.querySelectorAll('.btn-select-para').forEach(btn => {
    btn.onclick = () => {
      curParaIdx = Number(btn.dataset.idx);
      renderParasSection(container);
    };
  });

  const activeParaPill = container.querySelector('.btn-select-para.primary');
  if (activeParaPill && activeParaPill.scrollIntoView) {
    try { activeParaPill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch(e){}
  }

  // Attach Textarea auto-save events
  container.querySelectorAll('.para-input').forEach(txt => {
    let debounceTimer = null;
    txt.oninput = () => {
      const segId = Number(txt.dataset.seg);
      pState.answers[segId] = txt.value;
      txt.style.borderColor = 'var(--line)';
      txt.style.background = 'var(--bg)';
      const b = container.querySelector(`#badge-para-${segId}`);
      if (b) b.innerHTML = '';
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        savePracticeExState(currentPara.id);
      }, 500);
    };
  });

  // Speak event
  container.querySelectorAll('.btn-speak-seg').forEach(btn => {
    btn.onclick = () => {
      const segId = Number(btn.dataset.id);
      const val = pState.answers[segId];
      if (val && appSpeak) appSpeak(val);
    };
  });

  // Check Answer Event
  container.querySelectorAll('.btn-check-para-seg').forEach(btn => {
    btn.onclick = async () => {
      const segId = Number(btn.dataset.seg);
      const viText = btn.dataset.vi;
      const chkBox = container.querySelector('#check-para-box-' + segId);
      if (!chkBox) return;

      const willOpen = chkBox.style.display === 'none';
      if (!willOpen) {
        chkBox.style.display = 'none';
        btn.textContent = 'Check Answer';
        pState.checked[segId] = false;
        savePracticeExState(currentPara.id);
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:10px 14px;background:var(--sunk);border-radius:8px">Analyzing and evaluating translation...</div>';
      btn.textContent = 'Hide Answer';
      pState.checked[segId] = true;

      const ref = await fetchSuggestedTranslation(viText);
      const userVal = (pState.answers[segId] || '').trim();
      const evalRes = await evaluateTranslation(userVal, ref, viText);
      pState.eval = pState.eval || {};
      pState.eval[segId] = evalRes;
      savePracticeExState(currentPara.id);

      const txtEl = container.querySelector(`.para-input[data-seg="${segId}"]`);
      if (txtEl) {
        if (evalRes.verdict === 'correct') {
          txtEl.style.borderColor = '#059669';
          txtEl.style.background = 'rgba(5,150,105,0.03)';
        } else if (evalRes.verdict === 'partial') {
          txtEl.style.borderColor = '#D97706';
          txtEl.style.background = 'rgba(245,158,11,0.03)';
        } else if (evalRes.verdict === 'wrong') {
          txtEl.style.borderColor = '#DC2626';
          txtEl.style.background = 'rgba(239,68,68,0.03)';
        } else {
          txtEl.style.borderColor = 'var(--line)';
          txtEl.style.background = 'var(--bg)';
        }
      }

      const badgeEl = container.querySelector(`#badge-para-${segId}`);
      if (badgeEl) {
        if (evalRes.verdict === 'correct') {
          badgeEl.innerHTML = `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>`;
        } else if (evalRes.verdict === 'partial') {
          badgeEl.innerHTML = `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>`;
        } else if (evalRes.verdict === 'wrong') {
          badgeEl.innerHTML = `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`;
        } else {
          badgeEl.innerHTML = '';
        }
      }

      chkBox.innerHTML = buildCheckAnswerHtml(evalRes, ref, userVal);

      const speakRefBtn = chkBox.querySelector('.btn-speak-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear paragraph
  const clearBtn = container.querySelector('.btn-clear-para');
  if (clearBtn) {
    clearBtn.onclick = async () => {
      const ok = appConfirmModal ? await appConfirmModal({
        title: 'Reset Passage?',
        message: 'Are you sure you want to reset ' + currentPara.title + '?',
        confirmText: 'Reset',
        cancelText: 'Cancel',
        danger: true
      }) : true;
      if (ok) {
        pState.answers = {};
        pState.checked = {};
        savePracticeExState(currentPara.id);
        renderParasSection(container);
        if (appShowToast) appShowToast('Reset passage answers');
      }
    };
  }
}

// -------------------------------------------------------------
// 3. RENDER 30 CÂU LUYỆN THÌ
// -------------------------------------------------------------
function renderTensesSection(container) {
  const esc = appEsc || (s => String(s ?? ''));
  const tState = getPracticeExState('practice_tenses_30');
  const userAnswers = tState.answers || {};
  const checkedMap = tState.checked || {};

  const answeredCount = PRACTICE_TENSES.filter(it => userAnswers[it.id] && String(userAnswers[it.id]).trim().length > 0).length;
  const progressPct = Math.round((answeredCount / PRACTICE_TENSES.length) * 100);

  container.innerHTML = `
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
        <div>
          <h2 style="margin:0 0 4px;font-size:19px">30 Tense & Structure Drills</h2>
          <div class="hint" style="font-size:13px">Reflex drills across key tenses: Present, Past, Future, and Perfect aspects</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span id="tenses-answered-count" style="font-size:13px;font-weight:600">${answeredCount} / ${PRACTICE_TENSES.length} questions</span>
          <div style="width:100px;height:7px;background:var(--sunk);border-radius:4px;overflow:hidden">
            <div id="tenses-progress-bar" style="width:${progressPct}%;height:100%;background:#059669;transition:width 0.2s"></div>
          </div>
          <button class="btn ghost btn-clear-tenses" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Reset Unit</button>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px">
        ${PRACTICE_TENSES.map(it => {
          const val = userAnswers[it.id] || '';
          const isChecked = Boolean(checkedMap[it.id]);
          const prevEval = tState.eval && tState.eval[it.id];
          const recSlotId = `slot-prac-t-${it.id}`;

          let borderStyle = '1px solid var(--line)';
          let bgStyle = 'var(--bg)';
          if (prevEval && val) {
            if (prevEval.verdict === 'correct') {
              borderStyle = '1.5px solid #059669';
              bgStyle = 'rgba(5,150,105,0.03)';
            } else if (prevEval.verdict === 'partial') {
              borderStyle = '1.5px solid #D97706';
              bgStyle = 'rgba(245,158,11,0.03)';
            } else if (prevEval.verdict === 'wrong') {
              borderStyle = '1.5px solid #DC2626';
              bgStyle = 'rgba(239,68,68,0.03)';
            }
          }

          return `
            <div style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:8px;flex-wrap:wrap">
                <div style="font-weight:700;font-size:14px;color:var(--ink);display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap">
                  <span style="color:#059669">${it.id}.</span>
                  <span>${esc(it.vi)}</span>
                  <span id="badge-tense-${it.id}" class="item-status-badge">
                    ${prevEval && val ? (prevEval.verdict === 'correct' ? `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>` : (prevEval.verdict === 'partial' ? `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>` : `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`)) : ''}
                  </span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  ${val ? `<button class="btn practice-speak-btn btn-speak-tense" data-id="${it.id}" title="Listen to your translation" aria-label="Listen">Listen</button>` : ''}
                  
                  <button class="btn rec-btn practice-rec-btn" data-rec-text="" data-rec-id="prac-t-${it.id}" title="Record your speech in English">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Record</span>
                  </button>

                  <button class="btn practice-check-btn btn-check-tense" data-id="${it.id}" data-vi="${esc(it.vi)}">
                    ${isChecked ? 'Hide Answer' : 'Check Answer'}
                  </button>
                </div>
              </div>
              <input type="text" class="tense-input" data-item="${it.id}" value="${esc(val)}" placeholder="Type English translation..." style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:6px;border:${borderStyle};background:${bgStyle};color:var(--ink);font-size:14px;outline:none;transition:border-color 0.15s,background 0.15s" />

              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>
              <div id="check-tense-box-${it.id}" class="practice-check-box" style="margin-top:8px;display:${isChecked ? 'block' : 'none'}">
                ${isChecked && prevEval ? buildCheckAnswerHtml(prevEval, '', val) : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Input auto-save events
  container.querySelectorAll('.tense-input').forEach(input => {
    let debounceTimer = null;
    input.oninput = () => {
      const itemId = Number(input.dataset.item);
      tState.answers[itemId] = input.value;
      input.style.borderColor = 'var(--line)';
      input.style.background = 'var(--bg)';
      const b = container.querySelector(`#badge-tense-${itemId}`);
      if (b) b.innerHTML = '';
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        savePracticeExState('practice_tenses_30');
      }, 400);
    };
    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        const next = container.querySelector(`.tense-input[data-item="${Number(input.dataset.item) + 1}"]`);
        if (next) next.focus();
      }
    };
  });

  // Speak event
  container.querySelectorAll('.btn-speak-tense').forEach(btn => {
    btn.onclick = () => {
      const itemId = Number(btn.dataset.id);
      const val = tState.answers[itemId];
      if (val && appSpeak) appSpeak(val);
    };
  });

  // Check Answer Event
  container.querySelectorAll('.btn-check-tense').forEach(btn => {
    btn.onclick = async () => {
      const itemId = Number(btn.dataset.id);
      const viText = btn.dataset.vi;
      const chkBox = container.querySelector('#check-tense-box-' + itemId);
      if (!chkBox) return;

      const willOpen = chkBox.style.display === 'none';
      if (!willOpen) {
        chkBox.style.display = 'none';
        btn.textContent = 'Check Answer';
        tState.checked[itemId] = false;
        savePracticeExState('practice_tenses_30');
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:10px 14px;background:var(--sunk);border-radius:8px">Analyzing and evaluating translation...</div>';
      btn.textContent = 'Hide Answer';
      tState.checked[itemId] = true;

      const ref = await fetchSuggestedTranslation(viText);
      const userVal = (tState.answers[itemId] || '').trim();
      const evalRes = await evaluateTranslation(userVal, ref, viText);
      tState.eval = tState.eval || {};
      tState.eval[itemId] = evalRes;
      savePracticeExState('practice_tenses_30');

      const inputEl = container.querySelector(`.tense-input[data-item="${itemId}"]`);
      if (inputEl) {
        if (evalRes.verdict === 'correct') {
          inputEl.style.borderColor = '#059669';
          inputEl.style.background = 'rgba(5,150,105,0.03)';
        } else if (evalRes.verdict === 'partial') {
          inputEl.style.borderColor = '#D97706';
          inputEl.style.background = 'rgba(245,158,11,0.03)';
        } else if (evalRes.verdict === 'wrong') {
          inputEl.style.borderColor = '#DC2626';
          inputEl.style.background = 'rgba(239,68,68,0.03)';
        } else {
          inputEl.style.borderColor = 'var(--line)';
          inputEl.style.background = 'var(--bg)';
        }
      }

      const badgeEl = container.querySelector(`#badge-tense-${itemId}`);
      if (badgeEl) {
        if (evalRes.verdict === 'correct') {
          badgeEl.innerHTML = `<span style="background:rgba(5,150,105,0.15);color:#059669;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✓ Correct</span>`;
        } else if (evalRes.verdict === 'partial') {
          badgeEl.innerHTML = `<span style="background:rgba(245,158,11,0.15);color:#D97706;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">~ Close</span>`;
        } else if (evalRes.verdict === 'wrong') {
          badgeEl.innerHTML = `<span style="background:rgba(239,68,68,0.15);color:#DC2626;padding:2px 8px;border-radius:12px;font-size:11.5px;font-weight:700">✕ Needs Revision</span>`;
        } else {
          badgeEl.innerHTML = '';
        }
      }

      chkBox.innerHTML = buildCheckAnswerHtml(evalRes, ref, userVal);

      const speakRefBtn = chkBox.querySelector('.btn-speak-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear
  const clearBtn = container.querySelector('.btn-clear-tenses');
  if (clearBtn) {
    clearBtn.onclick = async () => {
      const ok = appConfirmModal ? await appConfirmModal({
        title: 'Reset Tense Drills?',
        message: 'Are you sure you want to reset all 30 tense drills?',
        confirmText: 'Reset',
        cancelText: 'Cancel',
        danger: true
      }) : true;
      if (ok) {
        tState.answers = {};
        tState.checked = {};
        savePracticeExState('practice_tenses_30');
        renderTensesSection(container);
        if (appShowToast) appShowToast('Reset all 30 tense drills');
      }
    };
  }
}
