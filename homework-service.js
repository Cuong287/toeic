// homework-service.js - Simplified Homework Management & Assignment Logic
let store = null;
let esc = s => (s == null ? '' : String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])));
let fbDb = null;
let firestoreModules = null;
let currentUser = null;
let currentUid = 'guest';
let isTeacherUser = false;
let goTo = () => {};
let showToast = () => {};

export function initHomeworkService(context) {
  if (!context) return;
  store = context.store || store;
  esc = context.esc || esc;
  fbDb = context.fbDb || fbDb;
  firestoreModules = context.firestoreModules || firestoreModules;
  currentUser = context.currentUser !== undefined ? context.currentUser : currentUser;
  currentUid = context.currentUid || currentUid;
  isTeacherUser = context.isTeacherUser !== undefined ? context.isTeacherUser : isTeacherUser;
  goTo = context.goTo || goTo;
  showToast = context.showToast || showToast;
}

export function updateHomeworkUserContext(ctx) {
  if (!ctx) return;
  if (ctx.fbDb !== undefined) fbDb = ctx.fbDb;
  if (ctx.firestoreModules !== undefined) firestoreModules = ctx.firestoreModules;
  if (ctx.currentUser !== undefined) currentUser = ctx.currentUser;
  if (ctx.currentUid !== undefined) currentUid = ctx.currentUid;
  if (ctx.isTeacherUser !== undefined) isTeacherUser = ctx.isTeacherUser;
}

// Format date
export function fmtDue(val) {
  if (!val) return '—';
  const d = new Date(val);
  if (isNaN(d.getTime())) return String(val);
  const date = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  return `${date} · ${time}`;
}

export function getTypeTagLabel(type) {
  return 'Homework';
}

export function getHomeworkTargetLabel(type, targetId) {
  return '';
}

// Fetch all assignments
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
    console.warn('Failed to load assignments from Firestore:', e);
  }

  const localList = store ? store.get('assignments_cache', []) : [];
  if (list.length === 0 && localList.length > 0) {
    list = localList;
  } else if (list.length > 0 && store) {
    store.set('assignments_cache', list);
  }

  list.sort((a, b) => {
    const ta = (a.createdAt && a.createdAt.toMillis) ? a.createdAt.toMillis() : (a.createdAt || 0);
    const tb = (b.createdAt && b.createdAt.toMillis) ? b.createdAt.toMillis() : (b.createdAt || 0);
    return tb - ta;
  });
  return list;
}

// Save or update an assignment
export async function saveHomeworkAssignment(hwData) {
  if (store) {
    const currentList = store.get('assignments_cache', []);
    const idx = currentList.findIndex(x => x.id === hwData.id);
    if (idx >= 0) currentList[idx] = hwData;
    else currentList.unshift(hwData);
    store.set('assignments_cache', currentList);
  }

  if (fbDb && firestoreModules && currentUser && currentUid !== 'guest') {
    try {
      await firestoreModules.setDoc(
        firestoreModules.doc(fbDb, 'assignments', hwData.id),
        {
          ...hwData,
          updatedAt: firestoreModules.serverTimestamp ? firestoreModules.serverTimestamp() : Date.now()
        },
        { merge: true }
      );
    } catch (e) {
      console.warn('Failed to save assignment to Firestore:', e);
    }
  }
  updateHomeworkBadges();
}

// Delete an assignment
export async function deleteHomeworkAssignment(hwId) {
  if (store) {
    const currentList = store.get('assignments_cache', []).filter(x => x.id !== hwId);
    store.set('assignments_cache', currentList);
  }

  if (fbDb && firestoreModules && currentUser && currentUid !== 'guest') {
    try {
      await firestoreModules.deleteDoc(firestoreModules.doc(fbDb, 'assignments', hwId));
    } catch (e) {
      console.warn('Failed to delete assignment from Firestore:', e);
    }
  }
  updateHomeworkBadges();
}

// Get student submissions for an assignment
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

  const localSub = store ? store.get('hw_sub_' + hwId, null) : null;
  if (localSub && currentUid) {
    if (!subMap[currentUid]) {
      subMap[currentUid] = {
        uid: currentUid,
        displayName: (currentUser && (currentUser.displayName || currentUser.email)) || 'Student',
        email: (currentUser && currentUser.email) || '',
        submittedAt: localSub.submittedAt,
        status: 'completed'
      };
    }
  }
  return subMap;
}

// Student toggles completion
export async function toggleHomeworkCompletion(hwId, isCompleted = true) {
  const assignments = await getHomeworkAssignments();
  const hw = assignments.find(x => x.id === hwId);
  const title = hw ? (hw.title || 'Assignment') : 'Assignment';

  if (isCompleted) {
    const subRecord = {
      submittedAt: Date.now(),
      status: 'completed'
    };
    if (store) store.set('hw_sub_' + hwId, subRecord);

    if (currentUser && currentUid !== 'guest' && fbDb && firestoreModules) {
      try {
        const studentName = currentUser.displayName || currentUser.email || 'Student';
        const studentEmail = currentUser.email || '';
        await firestoreModules.setDoc(
          firestoreModules.doc(fbDb, 'assignments', hwId, 'submissions', currentUid),
          {
            uid: currentUid,
            displayName: studentName,
            email: studentEmail,
            submittedAt: firestoreModules.serverTimestamp ? firestoreModules.serverTimestamp() : new Date(),
            status: 'completed'
          },
          { merge: true }
        );
      } catch (err) {
        console.warn('Failed to save submission to Firestore:', err);
      }
    }
    showToast(`Marked as completed: "${title}"`);
  } else {
    if (store) store.remove('hw_sub_' + hwId);

    if (currentUser && currentUid !== 'guest' && fbDb && firestoreModules) {
      try {
        await firestoreModules.deleteDoc(
          firestoreModules.doc(fbDb, 'assignments', hwId, 'submissions', currentUid)
        );
      } catch (err) {
        console.warn('Failed to delete submission from Firestore:', err);
      }
    }
    showToast(`Marked as pending: "${title}"`);
  }
  updateHomeworkBadges();
}

// Badges
export async function updateHomeworkBadges() {
  try {
    const badge = document.querySelector('#snav-hw-badge');
    if (!badge || !store) return;
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

// Stubs for backward compatibility
export function recordHomeworkCompletion() {}
export function checkGrammarHomeworkProgress() {}
export function checkPracticeHomeworkProgress() {}
export function getStudentTargetProgress() { return null; }
export function startHomeworkExercise() {}

window.recordHomeworkCompletion = recordHomeworkCompletion;
window.getHomeworkTargetLabel = getHomeworkTargetLabel;
window.getHomeworkAssignments = getHomeworkAssignments;
window.saveHomeworkAssignment = saveHomeworkAssignment;
window.deleteHomeworkAssignment = deleteHomeworkAssignment;
window.getAssignmentSubmissions = getAssignmentSubmissions;
window.toggleHomeworkCompletion = toggleHomeworkCompletion;
window.startHomeworkExercise = startHomeworkExercise;
window.updateHomeworkBadges = updateHomeworkBadges;

// Render Homework on Home Dashboard
export async function renderDashboardHomework(container) {
  if (!container) return;
  try {
    const assignments = await getHomeworkAssignments();
    if (!assignments || assignments.length === 0) {
      if (isTeacherUser) {
        container.innerHTML = `
          <div class="card" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;background:var(--surface);border-left:4px solid var(--accent)">
            <div>
              <div style="font-weight:700;font-size:14.5px">Instructor Notice: Homework Management</div>
              <div class="hint" style="font-size:12.5px">No assignments posted yet. Create an assignment for students to see on their dashboard.</div>
            </div>
            <button class="btn primary" id="dash-btn-teacher-hw" style="font-size:12.5px;padding:6px 14px">Assign Homework</button>
          </div>
        `;
        const tBtn = container.querySelector('#dash-btn-teacher-hw');
        if (tBtn) tBtn.onclick = () => { window._pendingAdminTab = 'homework'; goTo('admin'); };
      } else {
        container.innerHTML = '';
      }
      return;
    }

    const pendingCount = store ? assignments.filter(hw => !store.get('hw_sub_' + hw.id)).length : 0;
    updateHomeworkBadges();

    container.innerHTML = `
      <div class="card" style="padding:18px 20px;border-left:4px solid ${pendingCount > 0 ? 'var(--warn)' : 'var(--good)'}">
        <div class="row between" style="margin-bottom:14px;flex-wrap:wrap;gap:8px">
          <div>
            <h2 class="sec" style="margin:0;font-size:18px;line-height:1.2">Assigned Homework</h2>
            <div class="hint" style="font-size:12.5px">Review assigned tasks and mark them as completed when finished.</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            ${pendingCount > 0 ? `
              <span class="hw-badge hw-badge-warn">${pendingCount} Pending</span>
            ` : `
              <span class="hw-badge hw-badge-ok">All Completed</span>
            `}
            ${isTeacherUser ? `
              <button class="btn ghost" id="dash-btn-manage-hw" style="font-size:12px;padding:4px 10px">Manage Homework</button>
            ` : ''}
          </div>
        </div>

        <div class="hw-grid">
          ${assignments.map(hw => {
            const sub = store ? store.get('hw_sub_' + hw.id, null) : null;
            const isDone = Boolean(sub);
            const isExpired = hw.dueDate ? Date.now() > new Date(hw.dueDate).getTime() : false;
            const dueDiff = hw.dueDate ? new Date(hw.dueDate).getTime() - Date.now() : 0;
            const isDueToday = !isExpired && dueDiff > 0 && dueDiff <= 86400000;

            let badgeHtml = '';
            if (isDone) {
              badgeHtml = `<span class="hw-badge hw-badge-ok">Completed</span>`;
            } else if (isExpired) {
              badgeHtml = `<span class="hw-badge hw-badge-bad">Overdue</span>`;
            } else if (isDueToday) {
              badgeHtml = `<span class="hw-badge hw-badge-warn">Due Today</span>`;
            } else if (hw.dueDate) {
              badgeHtml = `<span class="hw-badge hw-badge-info">Due: ${fmtDue(hw.dueDate)}</span>`;
            }

            const contentText = hw.content || hw.instructions || '';

            return `
              <div class="hw-card" style="display:flex;flex-direction:column">
                <div class="row between" style="gap:6px">
                  <div style="font-weight:700;font-size:15px;color:var(--ink);line-height:1.35">${esc(hw.title || 'Assigned Homework')}</div>
                  ${badgeHtml}
                </div>

                ${hw.dueDate ? `
                  <div style="font-size:12px;color:var(--muted)">Due: <b>${fmtDue(hw.dueDate)}</b></div>
                ` : ''}

                <div class="hw-text-content" style="margin:8px 0;flex:1">
                  ${esc(contentText)}
                </div>

                <div style="margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:6px">
                  ${isDone ? `
                    <span style="font-size:12.5px;color:var(--good);font-weight:600">Completed</span>
                    <button class="btn ghost btn-toggle-hw" data-hw-id="${esc(hw.id)}" data-action="uncomplete" style="font-size:12px;padding:4px 10px">
                      Mark Pending
                    </button>
                  ` : `
                    <button class="btn primary btn-toggle-hw" data-hw-id="${esc(hw.id)}" data-action="complete" style="width:100%;justify-content:center;font-size:13px;padding:8px 12px;display:inline-flex;align-items:center;gap:6px">
                      <span>Mark as Completed</span>
                    </button>
                  `}
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
        window._pendingAdminTab = 'homework';
        goTo('admin');
      };
    }

    container.querySelectorAll('.btn-toggle-hw').forEach(btn => {
      btn.onclick = async () => {
        const hwId = btn.dataset.hwId;
        const action = btn.dataset.action;
        btn.disabled = true;
        await toggleHomeworkCompletion(hwId, action === 'complete');
        renderDashboardHomework(container);
      };
    });
  } catch (err) {
    console.warn('renderDashboardHomework error:', err);
  }
}
