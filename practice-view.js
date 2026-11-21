// practice-view.js - Giao diện Luyện dịch phản xạ & Bài tập thực hành từ 01._Practice.pdf
import { PRACTICE_UNITS, PRACTICE_PARAGRAPHS, PRACTICE_TENSES } from './practice-data.js';

let appStore = null;
let appEsc = null;
let appSpeak = null;
let curTab = 'units'; // 'units' | 'paragraphs' | 'tenses'
let curUnitIdx = 0;
let curParaIdx = 0;
const practiceExState = {};

export function initPracticeView(context) {
  appStore = context.store;
  appEsc = context.esc;
  appSpeak = context.speak;
}

export function getPracticeExState(exId) {
  const key = String(exId);
  if (!practiceExState[key]) {
    const saved = appStore ? appStore.get('practice_ex:' + key, null) : null;
    practiceExState[key] = (saved && typeof saved === 'object') ? saved : { answers: {}, checked: {}, updatedAt: Date.now() };
    if (!practiceExState[key].answers) practiceExState[key].answers = {};
    if (!practiceExState[key].checked) practiceExState[key].checked = {};
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
    badge.textContent = '✓ Đã tự động lưu ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    badge.style.color = 'var(--good)';
  }
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
            <span>📝</span><span>TÀI LIỆU LUYỆN TẬP PRACTICE</span>
          </div>
          <h1 style="font-size:24px;margin:2px 0 6px">Luyện dịch phản xạ & Bài tập thực hành</h1>
          <p class="hint" style="margin:0;font-size:13.5px">
            16 Bài tập theo Unit · 15 Đoạn văn thực tế · 30 Câu luyện thì (Hỗ trợ ghi âm đọc câu & Check đáp án từng câu)
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="practice-autosave-badge" style="font-size:12px;color:var(--muted);font-weight:600">⚡ Sẵn sàng lưu tự động</span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div style="display:flex;gap:8px;margin-top:16px;border-bottom:1px solid var(--line);padding-bottom:12px;overflow-x:auto">
        <button class="btn ${curTab === 'units' ? 'primary' : 'ghost'}" id="btn-ptab-units" style="font-size:13px;white-space:nowrap">
          🏷️ 16 Bài tập theo Unit (${PRACTICE_UNITS.length})
        </button>
        <button class="btn ${curTab === 'paragraphs' ? 'primary' : 'ghost'}" id="btn-ptab-paras" style="font-size:13px;white-space:nowrap">
          📄 15 Đoạn văn thực tế (${PRACTICE_PARAGRAPHS.length})
        </button>
        <button class="btn ${curTab === 'tenses' ? 'primary' : 'ghost'}" id="btn-ptab-tenses" style="font-size:13px;white-space:nowrap">
          ⏰ 30 Câu luyện thì (${PRACTICE_TENSES.length})
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
      <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:var(--muted)">CHỌN BÀI TẬP THEO UNIT:</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${PRACTICE_UNITS.map((u, idx) => {
          const st = getPracticeExState(u.id);
          const ansCount = u.items.filter(it => (st.answers || {})[it.id] && String((st.answers || {})[it.id]).trim().length > 0).length;
          const isDone = ansCount === u.items.length;
          return `
            <button class="btn ${idx === curUnitIdx ? 'primary' : 'ghost'} btn-select-unit" data-idx="${idx}" style="font-size:12px;padding:5px 10px;border-radius:6px">
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
          <div class="hint" style="font-size:13px">Dịch các câu sau sang tiếng Anh tương ứng với từ vựng bài học</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span style="font-size:13px;font-weight:600">${answeredCount} / ${currentUnit.items.length} câu</span>
          <div style="width:100px;height:7px;background:var(--sunk);border-radius:4px;overflow:hidden">
            <div style="width:${progressPct}%;height:100%;background:#059669;transition:width 0.2s"></div>
          </div>
          <button class="btn ghost btn-clear-unit" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Xóa bài làm lại</button>
        </div>
      </div>

      <!-- List of translation questions -->
      <div style="display:flex;flex-direction:column;gap:14px">
        ${currentUnit.items.map(it => {
          const val = userAnswers[it.id] || '';
          const isChecked = Boolean(checkedMap[it.id]);
          const refText = it.ref || '';
          const targetRecText = val || refText || it.vi;
          const recSlotId = `slot-prac-u-${currentUnit.id}-${it.id}`;

          return `
            <div class="practice-item-card" style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <!-- Question Header -->
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:8px;flex-wrap:wrap">
                <div style="font-weight:700;font-size:14.5px;color:var(--ink)">
                  <span style="color:#059669;margin-right:6px">${it.id}.</span>
                  <span>${esc(it.vi)}</span>
                </div>

                <!-- Action Controls -->
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                  ${val ? `<button class="btn icon-btn btn-speak-item" data-id="${it.id}" title="Nghe câu bạn đã dịch" aria-label="Nghe câu" style="padding:4px 7px;font-size:12.5px">🔊 Nghe</button>` : ''}
                  
                  <!-- Voice Recording Button -->
                  <button class="btn icon-btn rec-btn" data-rec-text="${esc(targetRecText)}" data-rec-id="prac-u-${currentUnit.id}-${it.id}" title="Ghi âm đọc thử câu dịch này" style="padding:4px 9px;font-size:12px;display:inline-flex;align-items:center;gap:5px;background:rgba(245,158,11,0.12);color:#D97706;border:1px solid rgba(245,158,11,0.3)">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Ghi âm</span>
                  </button>

                  <!-- Check Answer Button -->
                  <button class="btn ghost btn-check-item" data-id="${it.id}" data-vi="${esc(it.vi)}" data-ref="${esc(refText)}" style="padding:4px 9px;font-size:12px;color:#2563EB;border-color:rgba(37,99,235,0.4)">
                    ${isChecked ? 'Ẩn đáp án' : '🔍 Check đáp án'}
                  </button>
                </div>
              </div>

              <!-- English Input -->
              <div>
                <input type="text" class="practice-input" data-item="${it.id}" value="${esc(val)}" placeholder="Gõ câu dịch tiếng Anh..." style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:6px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:14px;outline:none" />
              </div>

              <!-- Voice Recording Evaluation Slot -->
              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>

              <!-- Answer Check Box -->
              <div id="check-box-${it.id}" class="practice-check-box" style="margin-top:10px;display:${isChecked ? 'block' : 'none'}"></div>
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

  // Attach Input auto-save events
  container.querySelectorAll('.practice-input').forEach(input => {
    let debounceTimer = null;
    input.oninput = () => {
      const itemId = Number(input.dataset.item);
      uState.answers[itemId] = input.value;
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
        btn.textContent = '🔍 Check đáp án';
        uState.checked[itemId] = false;
        savePracticeExState(currentUnit.id);
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:6px 10px;background:var(--sunk);border-radius:6px">Đang đối chiếu đáp án…</div>';
      btn.textContent = 'Ẩn đáp án';
      uState.checked[itemId] = true;
      savePracticeExState(currentUnit.id);

      if (!ref) {
        ref = await fetchSuggestedTranslation(viText);
      }

      const userVal = (uState.answers[itemId] || '').trim();
      const hasAnswered = userVal.length > 0;

      chkBox.innerHTML = `
        <div style="background:rgba(5,150,105,0.08);border:1px solid rgba(5,150,105,0.25);border-radius:8px;padding:10px 14px;font-size:13.5px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <span style="font-weight:700;color:#059669">💡 Đáp án chuẩn tham khảo:</span>
            ${ref ? `<button class="btn icon-btn btn-speak-ref" data-say="${esc(ref)}" title="Nghe đáp án mẫu" style="padding:2px 6px;font-size:11.5px">🔊 Nghe mẫu</button>` : ''}
          </div>
          <div style="font-size:14.5px;font-weight:600;color:var(--ink);margin-bottom:6px">
            ${esc(ref || 'Đang cập nhật đáp án mẫu')}
          </div>
          ${hasAnswered ? `
            <div style="font-size:12.5px;color:var(--muted);border-top:1px dashed rgba(5,150,105,0.2);padding-top:6px;margin-top:6px">
              Câu của bạn: <b style="color:var(--ink)">"${esc(userVal)}"</b>
            </div>
          ` : ''}
        </div>
      `;

      const speakRefBtn = chkBox.querySelector('.btn-speak-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear unit
  const clearBtn = container.querySelector('.btn-clear-unit');
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (confirm('Bạn có chắc muốn xóa bài làm của ' + currentUnit.title + ' để làm lại?')) {
        uState.answers = {};
        uState.checked = {};
        savePracticeExState(currentUnit.id);
        renderUnitsSection(container);
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
      <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:var(--muted)">CHỌN BÀI DỊCH ĐOẠN VĂN:</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${PRACTICE_PARAGRAPHS.map((p, idx) => {
          const st = getPracticeExState(p.id);
          const hasAns = Object.values(st.answers || {}).some(v => v && String(v).trim().length > 0);
          return `
            <button class="btn ${idx === curParaIdx ? 'primary' : 'ghost'} btn-select-para" data-idx="${idx}" style="font-size:12px;padding:5px 11px;border-radius:6px">
              ${hasAns ? '✓ ' : ''}Bài ${idx + 1}
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
          <div class="hint" style="font-size:13px">Đoạn văn / Email / Hội thoại thực tế - Dịch từng phần sang tiếng Anh</div>
        </div>
        <button class="btn ghost btn-clear-para" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Xóa đoạn này</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px">
        ${currentPara.segments.map(seg => {
          const val = userAnswers[seg.id] || '';
          const isChecked = Boolean(checkedMap[seg.id]);
          const targetRecText = val || seg.vi;
          const recSlotId = `slot-prac-p-${currentPara.id}-${seg.id}`;

          return `
            <div style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
                <span style="font-weight:700;font-size:13.5px;color:#059669">Phần ${seg.id}</span>
                <div style="display:flex;align-items:center;gap:6px">
                  ${val ? `<button class="btn icon-btn btn-speak-seg" data-id="${seg.id}" title="Nghe phát âm câu đã dịch" style="padding:3px 7px;font-size:12px">🔊 Nghe</button>` : ''}
                  
                  <!-- Voice Recording -->
                  <button class="btn icon-btn rec-btn" data-rec-text="${esc(targetRecText)}" data-rec-id="prac-p-${currentPara.id}-${seg.id}" title="Ghi âm đọc đoạn này" style="padding:3px 8px;font-size:12px;display:inline-flex;align-items:center;gap:4px;background:rgba(245,158,11,0.12);color:#D97706;border:1px solid rgba(245,158,11,0.3)">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Ghi âm</span>
                  </button>

                  <button class="btn ghost btn-check-para-seg" data-seg="${seg.id}" data-vi="${esc(seg.vi)}" style="padding:3px 8px;font-size:12px;color:#2563EB;border-color:rgba(37,99,235,0.4)">
                    ${isChecked ? 'Ẩn đáp án' : '🔍 Check đáp án'}
                  </button>
                </div>
              </div>

              <div style="font-size:14px;line-height:1.6;color:var(--ink);background:var(--sunk);padding:10px 12px;border-radius:6px;margin-bottom:10px;white-space:pre-wrap">
                ${esc(seg.vi)}
              </div>
              <textarea class="para-input" data-seg="${seg.id}" rows="3" placeholder="Nhập bản dịch tiếng Anh cho phần này..." style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:6px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:14px;outline:none;resize:vertical;font-family:inherit">${esc(val)}</textarea>

              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>
              <div id="check-para-box-${seg.id}" class="practice-check-box" style="margin-top:8px;display:${isChecked ? 'block' : 'none'}"></div>
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

  // Attach Textarea auto-save events
  container.querySelectorAll('.para-input').forEach(txt => {
    let debounceTimer = null;
    txt.oninput = () => {
      const segId = Number(txt.dataset.seg);
      pState.answers[segId] = txt.value;
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
        btn.textContent = '🔍 Check đáp án';
        pState.checked[segId] = false;
        savePracticeExState(currentPara.id);
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:6px 10px;background:var(--sunk);border-radius:6px">Đang đối chiếu bản dịch tham khảo…</div>';
      btn.textContent = 'Ẩn đáp án';
      pState.checked[segId] = true;
      savePracticeExState(currentPara.id);

      const ref = await fetchSuggestedTranslation(viText);
      chkBox.innerHTML = `
        <div style="background:rgba(5,150,105,0.08);border:1px solid rgba(5,150,105,0.25);border-radius:8px;padding:10px 14px;font-size:13.5px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <span style="font-weight:700;color:#059669">💡 Bản dịch chuẩn tham khảo:</span>
            ${ref ? `<button class="btn icon-btn btn-speak-para-ref" data-say="${esc(ref)}" title="Nghe mẫu" style="padding:2px 6px;font-size:11.5px">🔊 Nghe mẫu</button>` : ''}
          </div>
          <div style="font-size:14px;line-height:1.6;color:var(--ink)">
            ${esc(ref || 'Đang cập nhật')}
          </div>
        </div>
      `;

      const speakRefBtn = chkBox.querySelector('.btn-speak-para-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear paragraph
  const clearBtn = container.querySelector('.btn-clear-para');
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (confirm('Bạn có chắc muốn xóa bản dịch của ' + currentPara.title + '?')) {
        pState.answers = {};
        pState.checked = {};
        savePracticeExState(currentPara.id);
        renderParasSection(container);
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
          <h2 style="margin:0 0 4px;font-size:19px">⏰ 30 Câu luyện thì & Cấu trúc ngữ pháp</h2>
          <div class="hint" style="font-size:13px">Thực hành phản xạ các thì: Hiện tại, quá khứ, tương lai, hoàn thành</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span style="font-size:13px;font-weight:600">${answeredCount} / ${PRACTICE_TENSES.length} câu</span>
          <div style="width:100px;height:7px;background:var(--sunk);border-radius:4px;overflow:hidden">
            <div style="width:${progressPct}%;height:100%;background:#059669;transition:width 0.2s"></div>
          </div>
          <button class="btn ghost btn-clear-tenses" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Xóa bài làm lại</button>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px">
        ${PRACTICE_TENSES.map(it => {
          const val = userAnswers[it.id] || '';
          const isChecked = Boolean(checkedMap[it.id]);
          const targetRecText = val || it.vi;
          const recSlotId = `slot-prac-t-${it.id}`;

          return `
            <div style="padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface)">
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:8px;flex-wrap:wrap">
                <div style="font-weight:700;font-size:14px;color:var(--ink)">
                  <span style="color:#059669;margin-right:6px">${it.id}.</span>
                  <span>${esc(it.vi)}</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px">
                  ${val ? `<button class="btn icon-btn btn-speak-tense" data-id="${it.id}" title="Nghe phát âm" style="padding:3px 7px;font-size:12px">🔊 Nghe</button>` : ''}
                  
                  <button class="btn icon-btn rec-btn" data-rec-text="${esc(targetRecText)}" data-rec-id="prac-t-${it.id}" title="Ghi âm đọc câu này" style="padding:3px 8px;font-size:12px;display:inline-flex;align-items:center;gap:4px;background:rgba(245,158,11,0.12);color:#D97706;border:1px solid rgba(245,158,11,0.3)">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    <span>Ghi âm</span>
                  </button>

                  <button class="btn ghost btn-check-tense" data-id="${it.id}" data-vi="${esc(it.vi)}" style="padding:3px 8px;font-size:12px;color:#2563EB;border-color:rgba(37,99,235,0.4)">
                    ${isChecked ? 'Ẩn đáp án' : '🔍 Check đáp án'}
                  </button>
                </div>
              </div>
              <input type="text" class="tense-input" data-item="${it.id}" value="${esc(val)}" placeholder="Dịch sang tiếng Anh..." style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:6px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:14px;outline:none" />

              <div id="${recSlotId}" class="rec-slot" style="margin-top:8px"></div>
              <div id="check-tense-box-${it.id}" class="practice-check-box" style="margin-top:8px;display:${isChecked ? 'block' : 'none'}"></div>
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
        btn.textContent = '🔍 Check đáp án';
        tState.checked[itemId] = false;
        savePracticeExState('practice_tenses_30');
        return;
      }

      chkBox.style.display = 'block';
      chkBox.innerHTML = '<div class="hint" style="padding:6px 10px;background:var(--sunk);border-radius:6px">Đang đối chiếu đáp án…</div>';
      btn.textContent = 'Ẩn đáp án';
      tState.checked[itemId] = true;
      savePracticeExState('practice_tenses_30');

      const ref = await fetchSuggestedTranslation(viText);
      chkBox.innerHTML = `
        <div style="background:rgba(5,150,105,0.08);border:1px solid rgba(5,150,105,0.25);border-radius:8px;padding:10px 14px;font-size:13.5px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <span style="font-weight:700;color:#059669">💡 Đáp án chuẩn tham khảo:</span>
            ${ref ? `<button class="btn icon-btn btn-speak-tense-ref" data-say="${esc(ref)}" title="Nghe mẫu" style="padding:2px 6px;font-size:11.5px">🔊 Nghe mẫu</button>` : ''}
          </div>
          <div style="font-size:14.5px;font-weight:600;color:var(--ink)">
            ${esc(ref || 'Đang cập nhật')}
          </div>
        </div>
      `;

      const speakRefBtn = chkBox.querySelector('.btn-speak-tense-ref');
      if (speakRefBtn && appSpeak) {
        speakRefBtn.onclick = () => appSpeak(speakRefBtn.dataset.say);
      }
    };
  });

  // Clear
  const clearBtn = container.querySelector('.btn-clear-tenses');
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (confirm('Bạn có chắc muốn xóa bài làm 30 câu luyện thì để làm lại?')) {
        tState.answers = {};
        tState.checked = {};
        savePracticeExState('practice_tenses_30');
        renderTensesSection(container);
      }
    };
  }
}
