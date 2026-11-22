// homework-service.js - Homework Management & Assignment Logic
let store = null;
let esc = s => (s == null ? '' : String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])));
let splitTitle = t => ({ main: t && t.title ? t.title : 'Topic', sub: '' });
let fbDb = null;
let firestoreModules = null;
let currentUser = null;
let currentUid = 'guest';
let isTeacherUser = false;
let goTo = () => {};
let showToast = () => {};
let TOPICS = [];
let GRAMMAR_TOPICS = [];
let PRACTICE_PARAGRAPHS = [];
let PRACTICE_UNITS = [];
let S = { t: 1, p: 1, sub: 'list' };

export function initHomeworkService(context) {
  if (!context) return;
  store = context.store || store;
  esc = context.esc || esc;
  splitTitle = context.splitTitle || splitTitle;
  fbDb = context.fbDb || fbDb;
  firestoreModules = context.firestoreModules || firestoreModules;
  currentUser = context.currentUser !== undefined ? context.currentUser : currentUser;
  currentUid = context.currentUid || currentUid;
  isTeacherUser = context.isTeacherUser !== undefined ? context.isTeacherUser : isTeacherUser;
  goTo = context.goTo || goTo;
  showToast = context.showToast || showToast;
  TOPICS = context.TOPICS || TOPICS;
  GRAMMAR_TOPICS = context.GRAMMAR_TOPICS || GRAMMAR_TOPICS;
  PRACTICE_PARAGRAPHS = context.PRACTICE_PARAGRAPHS || PRACTICE_PARAGRAPHS;
  PRACTICE_UNITS = context.PRACTICE_UNITS || PRACTICE_UNITS;
  S = context.S || S;
}

export function updateHomeworkUserContext(ctx) {
  if (!ctx) return;
  if (ctx.fbDb !== undefined) fbDb = ctx.fbDb;
  if (ctx.firestoreModules !== undefined) firestoreModules = ctx.firestoreModules;
  if (ctx.currentUser !== undefined) currentUser = ctx.currentUser;
  if (ctx.currentUid !== undefined) currentUid = ctx.currentUid;
  if (ctx.isTeacherUser !== undefined) isTeacherUser = ctx.isTeacherUser;
}

// ---------- Homework Assignment Helpers ----------
export function fmtDue(val) {
  if (!val) return '—';
  const d = new Date(val);
  if (isNaN(d.getTime())) return String(val);
  const time = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false });
  const date = d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return `${time} ${date}`;
}

export function getTypeTagLabel(type) {
  switch (type) {
    case 'vocab_quiz': return 'TOEIC Quiz';
    case 'vocab_spell': return 'Spelling Lab';
    case 'grammar': return 'Ngữ pháp';
    case 'practice_passage': return 'Luyện dịch';
    case 'practice_unit': return 'Phản xạ câu';
    default: return type;
  }
}

export function getHomeworkTargetLabel(type, targetId) {
  if (type === 'vocab_quiz' || type === 'vocab_spell') {
    const t = TOPICS.find(x => x.id === Number(targetId));
    const prefix = type === 'vocab_quiz' ? 'Quiz' : 'Spelling Lab';
    return t ? `Topic ${String(t.id).padStart(2, '0')}: ${splitTitle(t).main} (${prefix})` : `Topic ${targetId} (${prefix})`;
  }
  if (type === 'grammar') {
    const g = GRAMMAR_TOPICS.find(x => x.id === targetId);
    return g ? `Ngữ pháp: ${g.title.split('(')[0].trim()}` : `Ngữ pháp: ${targetId}`;
  }
  if (type === 'practice_passage') {
    const idx = Number(targetId) || 0;
    const p = PRACTICE_PARAGRAPHS[idx];
    return p ? `Đoạn văn ${idx + 1}: ${p.title || ('Passage ' + (idx + 1))}` : `Đoạn văn ${idx + 1}`;
  }
  if (type === 'practice_unit') {
    const idx = Number(targetId) || 0;
    const u = PRACTICE_UNITS[idx];
    return u ? `Unit ${idx + 1}: ${u.title || ('Unit ' + (idx + 1))}` : `Unit ${idx + 1}`;
  }
  return String(targetId);
}

export async function getHomeworkAssignments() {
  let list = [];
  try {
    if (fbDb && firestoreModules) {
      const snap = await firestoreModules.getDocs(firestoreModules.collection(fbDb, 'assignments')).catch(() => null);
      if (snap && !snap.empty) {
        snap.forEach(d => {
          list.push({ id: d.id, ...d.data() });
        });
      }
    }
  } catch (e) {
    console.warn('Lỗi đọc assignments từ Firestore:', e);
  }

  const localList = store.get('assignments_cache', []);
  if (list.length === 0 && localList.length > 0) {
    list = localList;
  } else if (list.length > 0) {
    store.set('assignments_cache', list);
  }

  list.sort((a, b) => {
    const ta = (a.createdAt && a.createdAt.toMillis) ? a.createdAt.toMillis() : (a.createdAt || 0);
    const tb = (b.createdAt && b.createdAt.toMillis) ? b.createdAt.toMillis() : (b.createdAt || 0);
    return tb - ta;
  });
  return list;
}

export async function saveHomeworkAssignment(hwData) {
  const currentList = store.get('assignments_cache', []);
  const idx = currentList.findIndex(x => x.id === hwData.id);
  if (idx >= 0) currentList[idx] = hwData;
  else currentList.unshift(hwData);
  store.set('assignments_cache', currentList);

  if (fbDb && firestoreModules && currentUser && currentUid !== 'guest') {
    try {
      await firestoreModules.setDoc(
        firestoreModules.doc(fbDb, 'assignments', hwData.id),
        {
          ...hwData,
          createdAt: firestoreModules.serverTimestamp ? firestoreModules.serverTimestamp() : Date.now()
        }
      );
    } catch (e) {
      console.warn('Lỗi ghi assignment lên Firestore:', e);
    }
  }
  updateHomeworkBadges();
}

export async function deleteHomeworkAssignment(hwId) {
  const currentList = store.get('assignments_cache', []).filter(x => x.id !== hwId);
  store.set('assignments_cache', currentList);

  if (fbDb && firestoreModules && currentUser && currentUid !== 'guest') {
    try {
      await firestoreModules.deleteDoc(firestoreModules.doc(fbDb, 'assignments', hwId));
    } catch (e) {
      console.warn('Lỗi xóa assignment trên Firestore:', e);
    }
  }
  updateHomeworkBadges();
}

export async function getAssignmentSubmissions(hwId) {
  const subMap = {};
  if (fbDb && firestoreModules) {
    try {
      const snap = await firestoreModules.getDocs(
        firestoreModules.collection(fbDb, 'assignments', hwId, 'submissions')
      ).catch(() => null);
      if (snap) {
        snap.forEach(d => {
          const data = d.data();
          const submittedAt = (data.submittedAt && data.submittedAt.toMillis) ? data.submittedAt.toMillis() : (data.submittedAt || null);
          subMap[d.id] = { ...data, submittedAt };
        });
      }
    } catch (e) {}
  }

  const localSub = store.get('hw_sub_' + hwId, null);
  if (localSub && currentUid) {
    if (!subMap[currentUid]) {
      subMap[currentUid] = {
        uid: currentUid,
        displayName: (currentUser && (currentUser.displayName || currentUser.email)) || 'Local User',
        email: (currentUser && currentUser.email) || '',
        score: localSub.score,
        submittedAt: localSub.submittedAt,
        isLate: localSub.isLate,
        status: 'completed'
      };
    }
  }
  return subMap;
}

export async function recordHomeworkCompletion(type, targetId, score) {
  try {
    const assignments = await getHomeworkAssignments();
    const matching = assignments.filter(hw => hw.type === type && String(hw.targetId) === String(targetId));
    if (!matching || matching.length === 0) return;

    for (const hw of matching) {
      const minScore = typeof hw.minScore === 'number' ? hw.minScore : 80;
      if (score < minScore) continue;

      const isLate = hw.dueDate ? Date.now() > new Date(hw.dueDate).getTime() : false;
      const subRecord = {
        score,
        submittedAt: Date.now(),
        isLate,
        status: 'completed'
      };

      store.set('hw_sub_' + hw.id, subRecord);

      if (currentUser && currentUid !== 'guest' && fbDb && firestoreModules) {
        const studentName = currentUser.displayName || currentUser.email || 'Student';
        const studentEmail = currentUser.email || '';
        try {
          await firestoreModules.setDoc(
            firestoreModules.doc(fbDb, 'assignments', hw.id, 'submissions', currentUid),
            {
              uid: currentUid,
              displayName: studentName,
              email: studentEmail,
              score,
              submittedAt: firestoreModules.serverTimestamp ? firestoreModules.serverTimestamp() : new Date(),
              isLate,
              status: 'completed'
            },
            { merge: true }
          );
          await firestoreModules.setDoc(
            firestoreModules.doc(fbDb, 'users', currentUid, 'meta', 'submissions'),
            { [hw.id]: { score, submittedAt: Date.now(), isLate } },
            { merge: true }
          );
        } catch (err) {
          console.warn('Lỗi lưu submission lên Firestore:', err);
        }
      }

      showToast(`🎉 Đã nộp bài tập về nhà: "${hw.title}" (Điểm: ${score}%)!`);
    }
    updateHomeworkBadges();
  } catch (err) {
    console.warn('recordHomeworkCompletion error:', err);
  }
}
window.recordHomeworkCompletion = recordHomeworkCompletion;
window.getHomeworkTargetLabel = getHomeworkTargetLabel;
window.getHomeworkAssignments = getHomeworkAssignments;
window.saveHomeworkAssignment = saveHomeworkAssignment;
window.deleteHomeworkAssignment = deleteHomeworkAssignment;
window.getAssignmentSubmissions = getAssignmentSubmissions;
window.startHomeworkExercise = startHomeworkExercise;
window.updateHomeworkBadges = updateHomeworkBadges;

export function checkGrammarHomeworkProgress(gTopicId, state) {
  try {
    const t = GRAMMAR_TOPICS.find(x => x.id === gTopicId);
    if (!t) return;
    const answers = (state && state.answers) || {};
    let correct = 0, graded = 0;
    t.questions.forEach(q => {
      if (q.answer && answers[q.id]) {
        graded++;
        if (answers[q.id] === q.answer) correct++;
      }
    });
    if (graded >= Math.min(5, t.questions.length)) {
      const pct = Math.round((correct / graded) * 100);
      recordHomeworkCompletion('grammar', gTopicId, pct);
    }
  } catch (e) {}
}

export function checkPracticeHomeworkProgress(pExId, state) {
  try {
    if (pExId.startsWith('para_')) {
      const idx = PRACTICE_PARAGRAPHS.findIndex(p => p.id === pExId);
      const evals = Object.values((state && state.eval) || {});
      if (evals.length > 0) {
        const avg = Math.round(evals.reduce((s, e) => s + (e.score || 0), 0) / evals.length);
        recordHomeworkCompletion('practice_passage', String(idx >= 0 ? idx : pExId), avg);
      }
    } else if (pExId.startsWith('unit_')) {
      const idx = PRACTICE_UNITS.findIndex(u => u.id === pExId);
      const checked = Object.keys((state && state.checked) || {}).length;
      if (checked >= 2) {
        recordHomeworkCompletion('practice_unit', String(idx >= 0 ? idx : pExId), 100);
      }
    }
  } catch (e) {}
}

export function getStudentTargetProgress(type, targetId) {
  try {
    if (type === 'vocab_quiz') {
      const b = store.get('best:' + targetId, null);
      const p0 = store.get('p0_best:' + targetId, null);
      const mx = Math.max(b || 0, p0 || 0);
      return mx > 0 ? mx : null;
    }
    if (type === 'vocab_spell') {
      const log = store.get('spell_log_' + targetId, null);
      if (log && log.words) {
        const words = Object.values(log.words);
        if (words.length > 0) {
          const correct = words.filter(w => (w.correct || 0) > 0).length;
          return Math.round((correct / words.length) * 100);
        }
      }
      return null;
    }
    if (type === 'grammar') {
      const gState = store.get('grammar_ex:' + targetId, null);
      const t = GRAMMAR_TOPICS.find(x => x.id === targetId);
      if (gState && t) {
        const answers = gState.answers || {};
        let correct = 0, graded = 0;
        t.questions.forEach(q => {
          if (q.answer && answers[q.id]) {
            graded++;
            if (answers[q.id] === q.answer) correct++;
          }
        });
        return graded > 0 ? Math.round((correct / graded) * 100) : null;
      }
      return null;
    }
    if (type === 'practice_passage') {
      const idx = Number(targetId) || 0;
      const p = PRACTICE_PARAGRAPHS[idx];
      if (p) {
        const pState = store.get('practice_ex:' + p.id, null);
        const evals = Object.values((pState && pState.eval) || {});
        if (evals.length > 0) {
          return Math.round(evals.reduce((s, e) => s + (e.score || 0), 0) / evals.length);
        }
      }
      return null;
    }
    if (type === 'practice_unit') {
      const idx = Number(targetId) || 0;
      const u = PRACTICE_UNITS[idx];
      if (u) {
        const uState = store.get('practice_ex:' + u.id, null);
        const checked = Object.keys((uState && uState.checked) || {}).length;
        return checked > 0 ? 100 : null;
      }
      return null;
    }
  } catch (e) {}
  return null;
}

export function startHomeworkExercise(hw) {
  if (hw.type === 'vocab_quiz') {
    const topId = Number(hw.targetId) || 1;
    go(topId, 1);
    S.sub = 'quiz';
    render();
  } else if (hw.type === 'vocab_spell') {
    const topId = Number(hw.targetId) || 1;
    go(topId, 1);
    S.sub = 'spell';
    render();
  } else if (hw.type === 'grammar') {
    goTo('grammar');
    setTimeout(() => {
      const btn = document.querySelector(`.btn-select-topic[data-tid="${hw.targetId}"]`);
      if (btn) btn.click();
    }, 100);
  } else if (hw.type === 'practice_passage') {
    goTo('practice');
    setTimeout(() => {
      const pTab = document.querySelector('#btn-ptab-paragraphs');
      if (pTab) pTab.click();
      setTimeout(() => {
        const pBtn = document.querySelector(`.btn-select-para[data-idx="${hw.targetId}"]`);
        if (pBtn) pBtn.click();
      }, 60);
    }, 100);
  } else if (hw.type === 'practice_unit') {
    goTo('practice');
    setTimeout(() => {
      const uTab = document.querySelector('#btn-ptab-units');
      if (uTab) uTab.click();
      setTimeout(() => {
        const uBtn = document.querySelector(`.btn-select-unit[data-idx="${hw.targetId}"]`);
        if (uBtn) uBtn.click();
      }, 60);
    }, 100);
  }
}

export async function updateHomeworkBadges() {
  try {
    const badge = $('#snav-hw-badge');
    if (!badge) return;
    const assignments = await getHomeworkAssignments();
    const pendingCount = assignments.filter(hw => !store.get('hw_sub_' + hw.id)).length;
    if (pendingCount > 0) {
      badge.textContent = pendingCount;
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  } catch (e) {}
}

// ---------- Modal Helpers ----------
let activeModalCloseHandler = null;

export async function renderDashboardHomework(container) {
  if (!container) return;
  try {
    const assignments = await getHomeworkAssignments();
    if (!assignments || assignments.length === 0) {
      if (isTeacherUser) {
        container.innerHTML = `
          <div class="card" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;background:var(--surface);border-left:4px solid var(--accent)">
            <div>
              <div style="font-weight:700;font-size:14.5px">👨‍🏫 Bảng tin Giáo viên: Quản lý bài tập về nhà</div>
              <div class="hint" style="font-size:12.5px">Bạn chưa giao bài tập nào. Bấm vào Quản lý lớp học để tạo bài tập cho học viên.</div>
            </div>
            <button class="btn primary" id="dash-btn-teacher-hw" style="font-size:12.5px;padding:6px 14px">Giao bài tập mới →</button>
          </div>
        `;
        const tBtn = container.querySelector('#dash-btn-teacher-hw');
        if (tBtn) tBtn.onclick = () => { currentAdminTab = 'homework'; goTo('admin'); };
      } else {
        container.innerHTML = '';
      }
      return;
    }

    // Tự động nhận diện bài tập đã hoàn thành từ tiến độ cá nhân
    assignments.forEach(hw => {
      let sub = store.get('hw_sub_' + hw.id, null);
      if (!sub) {
        const autoScore = getStudentTargetProgress(hw.type, hw.targetId);
        if (autoScore != null && autoScore >= (hw.minScore || 80)) {
          const autoSub = { score: autoScore, submittedAt: Date.now(), isLate: false, autoDetected: true };
          store.set('hw_sub_' + hw.id, autoSub);
          if (currentUser && currentUid !== 'guest' && fbDb && firestoreModules) {
            try {
              firestoreModules.setDoc(
                firestoreModules.doc(fbDb, 'assignments', hw.id, 'submissions', currentUid),
                {
                  uid: currentUid,
                  displayName: currentUser.displayName || currentUser.email || 'Student',
                  email: currentUser.email || '',
                  score: autoScore,
                  submittedAt: firestoreModules.serverTimestamp ? firestoreModules.serverTimestamp() : new Date(),
                  isLate: false,
                  status: 'completed'
                },
                { merge: true }
              );
            } catch (e) {}
          }
        }
      }
    });

    const pendingCount = assignments.filter(hw => !store.get('hw_sub_' + hw.id)).length;
    updateHomeworkBadges();

    container.innerHTML = `
      <div class="card" style="padding:18px 20px;border-left:4px solid ${pendingCount > 0 ? 'var(--warn)' : 'var(--good)'}">
        <div class="row between" style="margin-bottom:14px;flex-wrap:wrap;gap:8px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:22px">📝</span>
            <div>
              <h2 class="sec" style="margin:0;font-size:18px;line-height:1.2">Bài tập về nhà (Assigned Homework)</h2>
              <div class="hint" style="font-size:12.5px">Hoàn thành bài tập trước hạn chót để ghi nhận điểm vào hệ thống lớp học.</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            ${pendingCount > 0 ? `
              <span class="hw-badge hw-badge-warn">⏰ Có ${pendingCount} bài cần làm</span>
            ` : `
              <span class="hw-badge hw-badge-ok">✓ Đã hoàn thành tất cả</span>
            `}
            ${isTeacherUser ? `
              <button class="btn ghost" id="dash-btn-manage-hw" style="font-size:12px;padding:4px 10px">Quản lý bài tập →</button>
            ` : ''}
          </div>
        </div>

        <div class="hw-grid">
          ${assignments.map(hw => {
            const sub = store.get('hw_sub_' + hw.id, null);
            const isDone = Boolean(sub);
            const isExpired = hw.dueDate ? Date.now() > new Date(hw.dueDate).getTime() : false;
            const dueDiff = hw.dueDate ? new Date(hw.dueDate).getTime() - Date.now() : 0;
            const isDueToday = !isExpired && dueDiff > 0 && dueDiff <= 86400000;

            let badgeHtml = '';
            if (isDone) {
              badgeHtml = `<span class="hw-badge hw-badge-ok">✓ Đã nộp (${sub.score}%)</span>`;
            } else if (isExpired) {
              badgeHtml = `<span class="hw-badge hw-badge-bad">⚠ Đã quá hạn</span>`;
            } else if (isDueToday) {
              badgeHtml = `<span class="hw-badge hw-badge-warn">⏰ Hôm nay hết hạn</span>`;
            } else {
              badgeHtml = `<span class="hw-badge hw-badge-info">📅 Hạn: ${fmtDue(hw.dueDate)}</span>`;
            }

            return `
              <div class="hw-card">
                <div class="row between" style="gap:6px">
                  <span class="hw-type-tag">${esc(getTypeTagLabel(hw.type))}</span>
                  ${badgeHtml}
                </div>
                <div style="font-weight:700;font-size:15px;color:var(--ink);line-height:1.35">${esc(hw.title)}</div>
                <div style="font-size:12.5px;color:var(--muted)">${esc(hw.targetLabel)}</div>
                
                <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);background:var(--sunk);padding:6px 10px;border-radius:6px;gap:6px;flex-wrap:wrap">
                  <span>Yêu cầu: <b>${hw.minScore > 0 ? `≥ ${hw.minScore}%` : 'Hoàn thành'}</b></span>
                  <span>Hạn: <b>${fmtDue(hw.dueDate)}</b></span>
                </div>

                ${hw.instructions ? `
                  <div class="hw-instructions">“${esc(hw.instructions)}”</div>
                ` : ''}

                <div style="margin-top:auto;display:flex;gap:8px">
                  <button class="btn ${isDone ? 'ghost' : 'primary'} btn-start-hw" data-hw-id="${esc(hw.id)}" style="flex:1;justify-content:center;font-size:13px;padding:8px 12px">
                    ${isDone ? 'Làm lại / Luyện thêm →' : 'Làm bài ngay →'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const manageBtn = container.querySelector('#dash-btn-manage-hw');
    if (manageBtn) {
      manageBtn.onclick = () => {
        currentAdminTab = 'homework';
        goTo('admin');
      };
    }

    container.querySelectorAll('.btn-start-hw').forEach(btn => {
      btn.onclick = () => {
        const hw = assignments.find(x => x.id === btn.dataset.hwId);
        if (hw) startHomeworkExercise(hw);
      };
    });
  } catch (err) {
    console.warn('renderDashboardHomework error:', err);
  }
}

// ---------- Home Dashboard (#home) ----------
let dashFilter = 'all'; // 'all' | 'in_progress' | 'completed' | 'not_started'