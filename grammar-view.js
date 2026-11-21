// grammar-view.js - Giao diện 13 Chuyên đề Ngữ pháp TOEIC từ 02._FULL NGỮ PHÁP.docx.pdf
import { GRAMMAR_TOPICS } from './grammar-data.js';

let appStore = null;
let appEsc = null;
let appSpeak = null;
let curTopicId = 'tenses';
let curFilter = 'all'; // 'all' | 'unanswered' | 'answered'
const grammarState = {};

export function initGrammarView(context) {
  appStore = context.store;
  appEsc = context.esc;
  appSpeak = context.speak;
}

export function getGrammarTopicState(topicId) {
  const key = String(topicId);
  if (!grammarState[key]) {
    const saved = appStore ? appStore.get('grammar_ex:' + key, null) : null;
    grammarState[key] = (saved && typeof saved === 'object') ? saved : { answers: {}, notes: {}, updatedAt: Date.now() };
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
    badge.textContent = '✓ Đã tự động lưu ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);

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
    <div class="card" style="margin-bottom:16px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(124,58,237,0.12);color:#7C3AED;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:700;margin-bottom:6px">
            <span>📚</span><span>BỘ BÀI TẬP NGỮ PHÁP TOEIC TOÀN DIỆN</span>
          </div>
          <h1 style="font-size:24px;margin:2px 0 6px">Ngữ pháp TOEIC Trọng điểm</h1>
          <p class="hint" style="margin:0;font-size:13.5px">
            13 Chuyên đề · 974 câu trắc nghiệm bám sát ETS TOEIC (Lưu tiến độ & Đồng bộ để Thầy quản lý)
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="grammar-autosave-badge" style="font-size:12px;color:var(--muted);font-weight:600">⚡ Sẵn sàng lưu tự động</span>
        </div>
      </div>

      <!-- Topic Selector Carousel / Grid -->
      <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line)">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px;color:var(--muted)">13 CHUYÊN ĐỀ NGỮ PHÁP:</div>
        <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px">
          ${GRAMMAR_TOPICS.map(t => {
            const st = getGrammarTopicState(t.id);
            const ansNum = Object.keys(st.answers || {}).length;
            const isFinished = ansNum >= t.questions.length && t.questions.length > 0;
            const isActive = t.id === currentTopic.id;
            return `
              <button class="btn ${isActive ? 'primary' : 'ghost'} btn-select-topic" data-tid="${t.id}" style="font-size:12.5px;padding:7px 12px;border-radius:8px;white-space:nowrap;display:inline-flex;align-items:center;gap:6px">
                <span>${t.icon}</span>
                <span>${esc(t.title.split('(')[0].trim())}</span>
                <span class="badge" style="background:${isActive ? 'rgba(255,255,255,0.25)' : 'var(--sunk)'};color:${isActive ? '#FFF' : 'var(--muted)'};font-size:11px">
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
          <h2 style="margin:0 0 4px;font-size:18px">${currentTopic.icon} ${esc(currentTopic.title)}</h2>
          <div class="hint" style="font-size:13px">${esc(currentTopic.desc)}</div>
        </div>

        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <!-- Filter buttons -->
          <div style="display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden">
            <button class="btn ${curFilter === 'all' ? 'primary' : 'ghost'} btn-filter" data-f="all" style="font-size:12px;padding:4px 10px;border-radius:0">Tất cả (${totalQuestions})</button>
            <button class="btn ${curFilter === 'unanswered' ? 'primary' : 'ghost'} btn-filter" data-f="unanswered" style="font-size:12px;padding:4px 10px;border-radius:0">Chưa làm (${totalQuestions - answeredCount})</button>
            <button class="btn ${curFilter === 'answered' ? 'primary' : 'ghost'} btn-filter" data-f="answered" style="font-size:12px;padding:4px 10px;border-radius:0">Đã làm (${answeredCount})</button>
          </div>

          <!-- Progress stats -->
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:13px;font-weight:700">${answeredCount}/${totalQuestions} câu</span>
            <div style="width:80px;height:7px;background:var(--sunk);border-radius:4px;overflow:hidden">
              <div style="width:${progressPct}%;height:100%;background:#7C3AED;transition:width 0.2s"></div>
            </div>
            ${gradedCount > 0 ? `<span style="font-size:12px;color:#059669;font-weight:700">✓ ${correctCount}/${gradedCount} đúng</span>` : ''}
          </div>

          <button class="btn ghost btn-reset-topic" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Làm lại</button>
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
      if (confirm(`Bạn có chắc muốn xóa bài làm của chuyên đề "${currentTopic.title}" để làm lại?`)) {
        tState.answers = {};
        if (appStore) appStore.set('grammar_ex:' + currentTopic.id, tState);
        renderGrammar(box);
      }
    };
  }

  // Render question cards
  const qListContainer = box.querySelector('#grammar-questions-list');
  renderQuestionsList(qListContainer, currentTopic);
}

function renderQuestionsList(container, topic) {
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
      <div class="card" style="text-align:center;padding:36px">
        <div style="font-size:32px;margin-bottom:8px">🎉</div>
        <div style="font-weight:700;font-size:16px;margin-bottom:4px">Không có câu hỏi nào trong mục này</div>
        <div class="hint">Bạn có thể chọn bộ lọc "Tất cả" hoặc chuyển sang chuyên đề tiếp theo!</div>
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
    const formattedStem = esc(q.stem).replace(/(----+|____+|[._]{4,})/g, '<span style="border-bottom:2px dashed #7C3AED;padding:0 16px;color:#7C3AED;font-weight:700">____</span>');

    return `
      <div class="card q-card" id="qcard-${esc(q.id)}" style="padding:16px 18px;border:1px solid ${selectedOpt ? (isCorrect ? 'var(--good)' : (isWrong ? 'var(--bad)' : 'var(--line)')) : 'var(--line)'};background:var(--surface)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-weight:800;font-size:14px;background:var(--sunk);padding:3px 8px;border-radius:6px;color:var(--ink)">
              Câu ${q.num}
            </span>
            ${isCorrect ? `<span style="font-size:12px;color:var(--good);font-weight:700">✓ Chính xác</span>` : ''}
            ${isWrong ? `<span style="font-size:12px;color:var(--bad);font-weight:700">✕ Chưa chính xác, hãy chọn lại!</span>` : ''}
          </div>
          <button class="btn icon-btn btn-speak-q" data-stem="${esc(q.stem)}" title="Nghe câu hỏi" aria-label="Nghe câu" style="padding:4px 7px">🔊</button>
        </div>

        <!-- Question Stem -->
        <div style="font-size:15px;line-height:1.6;font-weight:600;margin-bottom:14px;color:var(--ink)">
          ${formattedStem}
        </div>

        <!-- 4 Options Grid -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:8px">
          ${['A', 'B', 'C', 'D'].map(optKey => {
            const optVal = q.options[optKey] || '';
            if (!optVal) return '';

            const isThisSelected = selectedOpt === optKey;

            let btnStyle = 'background:var(--bg);border:1px solid var(--line);color:var(--ink)';
            let iconMark = `<span style="font-weight:800;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--sunk);margin-right:8px">${optKey}</span>`;

            if (selectedOpt) {
              if (hasAnswerKey) {
                // CHỈ hiện xanh khi chính bạn chọn ĐÚNG đáp án!
                if (isCorrect && isThisSelected) {
                  btnStyle = 'background:rgba(5,150,105,0.15);border:1.5px solid var(--good);color:var(--good);font-weight:700';
                  iconMark = `<span style="font-weight:800;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--good);color:#FFF;margin-right:8px">✓</span>`;
                } else if (isThisSelected && isWrong) {
                  // Chỉ đánh dấu nút bạn vừa chọn sai là màu đỏ, KHÔNG hiện đáp án đúng để bạn tự chọn lại
                  btnStyle = 'background:rgba(220,38,38,0.12);border:1.5px solid var(--bad);color:var(--bad);font-weight:700';
                  iconMark = `<span style="font-weight:800;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--bad);color:#FFF;margin-right:8px">✕</span>`;
                }
              } else {
                if (isThisSelected) {
                  btnStyle = 'background:#7C3AED;border:1.5px solid #7C3AED;color:#FFFFFF;font-weight:700';
                  iconMark = `<span style="font-weight:800;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:rgba(255,255,255,0.25);color:#FFF;margin-right:8px">✓</span>`;
                }
              }
            }

            return `
              <button class="btn btn-grammar-opt" data-qid="${esc(q.id)}" data-opt="${optKey}" style="text-align:left;padding:10px 12px;border-radius:8px;display:flex;align-items:center;cursor:pointer;font-size:14px;transition:all 0.15s;${btnStyle}">
                ${iconMark}
                <span style="flex:1">${esc(optVal)}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation if available (CHỈ hiện khi bạn đã trả lời đúng) -->
        ${(isCorrect && q.explanation) ? `
          <div style="margin-top:12px;padding:8px 12px;background:rgba(245,158,11,0.08);border-left:3px solid #F59E0B;border-radius:4px;font-size:13px;color:var(--ink)">
            <span style="font-weight:700;color:#D97706">💡 Lưu ý từ vựng / Ngữ pháp:</span> ${esc(q.explanation)}
          </div>
        ` : ''}

        <!-- User Note Field (Dòng để tự viết Note cho câu này) -->
        <div style="margin-top:12px;display:flex;align-items:center;gap:8px">
          <span style="font-size:12.5px;color:var(--muted);white-space:nowrap;font-weight:600">📝 Note:</span>
          <input type="text" class="grammar-user-note" data-qid="${esc(q.id)}" value="${esc(notes[q.id] || '')}" placeholder="Viết ghi chú cá nhân của bạn cho câu này (tự động lưu)..." style="flex:1;padding:6px 10px;border-radius:6px;border:1px dashed var(--line);background:var(--bg);color:var(--ink);font-size:13px;outline:none" />
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
      // Re-render questions list to update active card states
      renderQuestionsList(container, topic);
    };
  });

  // Attach Note typing auto-save
  container.querySelectorAll('.grammar-user-note').forEach(input => {
    let noteTimer = null;
    input.oninput = () => {
      const qId = input.dataset.qid;
      if (!tState.notes) tState.notes = {};
      tState.notes[qId] = input.value;
      clearTimeout(noteTimer);
      noteTimer = setTimeout(() => {
        saveGrammarTopicAnswer(topic.id);
      }, 400);
    };
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
