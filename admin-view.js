// admin-view.js - Classroom & Teacher Management Portal
import {
  fmtDue,
  getHomeworkAssignments,
  saveHomeworkAssignment,
  deleteHomeworkAssignment,
  getAssignmentSubmissions
} from './homework-service.js?v=42';

let store = null;
let esc = s => s;
let speak = () => {};
let showToast = () => {};
let confirmModal = () => {};
let promptModal = () => {};
let openModal = () => {};
let closeModal = () => {};
let authModules = null;
let fbAuth = null;
let fbDb = null;
let firestoreModules = null;
let currentUser = null;
let currentUid = 'guest';
let isAdminUser = false;
let isTeacherUser = false;
let setIsTeacherUser = () => {};
let S = { t: 1, p: 1, sub: 'list' };
let goTo = () => {};
let TOPICS = [];
let GRAMMAR_TOPICS = [];
let PRACTICE_PARAGRAPHS = [];
let PRACTICE_UNITS = [];
let PRONUN_UNITS = [];

export function initAdminView(context) {
  if (!context) return;
  store = context.store || store;
  esc = context.esc || esc;
  speak = context.speak || speak;
  showToast = context.showToast || showToast;
  confirmModal = context.confirmModal || confirmModal;
  promptModal = context.promptModal || promptModal;
  openModal = context.openModal || openModal;
  closeModal = context.closeModal || closeModal;
  authModules = context.authModules || authModules;
  fbAuth = context.fbAuth || fbAuth;
  fbDb = context.fbDb || fbDb;
  firestoreModules = context.firestoreModules || firestoreModules;
  currentUser = context.currentUser !== undefined ? context.currentUser : currentUser;
  currentUid = context.currentUid || currentUid;
  isAdminUser = context.isAdminUser !== undefined ? context.isAdminUser : isAdminUser;
  isTeacherUser = context.isTeacherUser !== undefined ? context.isTeacherUser : isTeacherUser;
  setIsTeacherUser = context.setIsTeacherUser || setIsTeacherUser;
  S = context.S || S;
  goTo = context.goTo || goTo;
  TOPICS = context.TOPICS || TOPICS;
  GRAMMAR_TOPICS = context.GRAMMAR_TOPICS || GRAMMAR_TOPICS;
  PRACTICE_PARAGRAPHS = context.PRACTICE_PARAGRAPHS || PRACTICE_PARAGRAPHS;
  PRACTICE_UNITS = context.PRACTICE_UNITS || PRACTICE_UNITS;
  PRONUN_UNITS = context.PRONUN_UNITS || PRONUN_UNITS;
}

export function updateAdminUserContext(ctx) {
  if (!ctx) return;
  if (ctx.fbDb !== undefined) fbDb = ctx.fbDb;
  if (ctx.fbAuth !== undefined) fbAuth = ctx.fbAuth;
  if (ctx.firestoreModules !== undefined) firestoreModules = ctx.firestoreModules;
  if (ctx.authModules !== undefined) authModules = ctx.authModules;
  if (ctx.currentUser !== undefined) currentUser = ctx.currentUser;
  if (ctx.currentUid !== undefined) currentUid = ctx.currentUid;
  if (ctx.isAdminUser !== undefined) isAdminUser = ctx.isAdminUser;
  if (ctx.isTeacherUser !== undefined) isTeacherUser = ctx.isTeacherUser;
}

// ---------- NEW PAGE: TEACHER & CLASS MANAGEMENT (Quản lý lớp học cho Thầy) ----------
export function fmtRelativeTime(ms) {
  if (!ms) return 'Never';
  const diff = Date.now() - ms;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
  if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
  if (diff < 7 * 86400000) return Math.floor(diff / 86400000) + 'd ago';
  return new Date(ms).toLocaleDateString('vi-VN');
}

export function exportStudentsCSV(users) {
  const headers = ['Full Name', 'Email', 'Role', 'Joined Date', 'Last Active', 'TOEIC Attempted', 'TOEIC Completed', 'Total TOEIC Points', 'Pronunciation Units', 'Pronunciation Exercises Completed', 'Pronunciation Graded', 'UID'];
  const escCsv = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  const rows = users.map(u => [
    u.displayName,
    u.email,
    u.isAdmin ? 'Admin' : (u.isTeacher ? 'Instructor' : 'Student'),
    u.createdAt ? new Date(u.createdAt).toLocaleDateString('vi-VN') : '',
    u.lastActiveAt ? new Date(u.lastActiveAt).toLocaleString('vi-VN') : '',
    u.topicsAttempted || 0,
    u.completedCount || 0,
    u.totalBest || 0,
    u.pronunUnitsDone || 0,
    u.pronunExFilled || 0,
    u.pronunExChecked || 0,
    u.uid
  ].map(escCsv).join(','));
  const csvContent = '\uFEFF' + headers.map(escCsv).join(',') + '\n' + rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BaoCao_LopHoc_TOEIC_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('✓ Exported CSV report (Excel compatible)!');
}

let currentAdminTab = 'roster'; // 'roster' | 'homework'

export async function renderAdmin(box) {
  if (!currentUser || !isTeacherUser) {
    box.innerHTML = `
      <div class="card" style="text-align:center;padding:40px">
        <h2 style="color:var(--bad);margin:0 0 8px">Access Denied</h2>
        <p class="hint">Your account does not have teacher or administrator privileges.</p>
        ${currentUser ? `<p class="hint" style="font-size:12.5px;margin-top:8px">Your User UID: <code style="user-select:all;background:var(--sunk);padding:2px 6px;border-radius:4px">${esc(currentUser.uid)}</code></p>` : ''}
        <button class="btn primary" onclick="location.hash='#t1-p1'" style="margin-top:12px">Back to Study Hub</button>
      </div>`;
    return;
  }

  box.innerHTML = `
    <div class="thead" style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div>
          <div class="eyebrow" style="color:#2563EB;font-weight:700">${isAdminUser ? 'Admin & Instructor Portal' : 'Instructor Portal'}</div>
          <h1 style="font-size:28px;margin:4px 0">Classroom Management & Submissions</h1>
          <div class="meta">
            <span>Quản lý học viên, giao bài tập về nhà và theo dõi tiến độ học tập trên toàn bộ nền tảng.</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn" id="btn-admin-refresh" style="font-size:13px">Refresh</button>
          <button class="btn" id="btn-admin-export" style="font-size:13px" ${currentAdminTab === 'roster' ? '' : 'style="display:none"'}>Export CSV</button>
          ${isAdminUser ? `<button class="btn primary" id="btn-manage-teachers" style="font-size:13px">Manage Instructors</button>` : ''}
          ${currentAdminTab === 'homework' ? `<button class="btn primary" id="btn-admin-create-hw" style="font-size:13px">+ Giao bài tập mới</button>` : ''}
        </div>
      </div>
    </div>

    <!-- Sub-navigation Tabs -->
    <div style="display:flex;gap:8px;margin-bottom:16px;border-bottom:1px solid var(--line);padding-bottom:12px;overflow-x:auto">
      <button class="btn ${currentAdminTab === 'roster' ? 'primary' : 'ghost'}" id="admin-tab-btn-roster" style="font-size:13.5px;padding:7px 16px;display:inline-flex;align-items:center;gap:6px">
        <span>👥 Danh sách học viên (Roster)</span>
      </button>
      <button class="btn ${currentAdminTab === 'homework' ? 'primary' : 'ghost'}" id="admin-tab-btn-hw" style="font-size:13.5px;padding:7px 16px;display:inline-flex;align-items:center;gap:6px">
        <span>📝 Bài tập về nhà (Homework)</span>
        <span class="badge" id="admin-hw-tab-badge" style="background:var(--accent-soft);color:var(--accent);font-size:11px;padding:1px 7px;border-radius:10px">...</span>
      </button>
    </div>

    <div id="admin-tab-main-content">
      <div class="card" style="text-align:center;padding:32px"><div class="hint">Đang tải dữ liệu lớp học…</div></div>
    </div>
  `;

  box.querySelector('#btn-admin-refresh').onclick = () => renderAdmin(box);
  box.querySelector('#admin-tab-btn-roster').onclick = () => { currentAdminTab = 'roster'; renderAdmin(box); };
  box.querySelector('#admin-tab-btn-hw').onclick = () => { currentAdminTab = 'homework'; renderAdmin(box); };
  const createHwBtn = box.querySelector('#btn-admin-create-hw');
  if (createHwBtn) createHwBtn.onclick = () => openCreateAssignmentModal(() => renderAdmin(box));

  const tabContainer = box.querySelector('#admin-tab-main-content');
  const exportBtn = box.querySelector('#btn-admin-export');
  const hwTabBadge = box.querySelector('#admin-hw-tab-badge');

  try {
    const [userDocsSnap, teachersSnap, adminsSnap, assignments] = await Promise.all([
      (fbDb && firestoreModules) ? firestoreModules.getDocs(firestoreModules.query(firestoreModules.collection(fbDb, 'users'), firestoreModules.limit(200))).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDocs(firestoreModules.collection(fbDb, 'teachers')).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDocs(firestoreModules.collection(fbDb, 'admins')).catch(() => null) : Promise.resolve(null),
      getHomeworkAssignments()
    ]);

    if (hwTabBadge) {
      hwTabBadge.textContent = String(assignments.length);
    }

    const teacherSet = new Set();
    const adminSet = new Set();
    if (teachersSnap) teachersSnap.forEach(d => teacherSet.add(d.id));
    if (adminsSnap) adminsSnap.forEach(d => adminSet.add(d.id));

    const docs = userDocsSnap ? userDocsSnap.docs : [];
    const users = [];
    const BATCH_SIZE = 10;

    for (let i = 0; i < docs.length; i += BATCH_SIZE) {
      const chunk = docs.slice(i, i + BATCH_SIZE);
      const chunkUsers = await Promise.all(chunk.map(async (d) => {
        const uData = d.data();
        const u = {
          uid: d.id,
          displayName: uData.displayName || 'Anonymous',
          email: uData.email || '',
          photoURL: uData.photoURL || '',
          createdAt: uData.createdAt && uData.createdAt.toMillis ? uData.createdAt.toMillis() : null,
          lastActiveAt: uData.updatedAt && uData.updatedAt.toMillis ? uData.updatedAt.toMillis() : null,
          totalBest: 0,
          completedCount: 0,
          topicsAttempted: 0,
          pronunUnitsDone: 0,
          pronunExChecked: 0,
          pronunExFilled: 0,
          isAdmin: adminSet.has(d.id),
          isTeacher: teacherSet.has(d.id)
        };

        try {
          const sumDoc = await firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', d.id, 'meta', 'summary'));
          if (sumDoc.exists()) {
            const s = sumDoc.data();
            u.totalBest = Number(s.totalBest) || 0;
            u.completedCount = Number(s.completedCount) || 0;
            u.topicsAttempted = Number(s.topicsAttempted) || 0;
            u.pronunUnitsDone = Number(s.pronunUnitsDone) || 0;
            u.pronunExChecked = Number(s.pronunExChecked) || 0;
            u.pronunExFilled = Number(s.pronunExFilled) || 0;
            if (s.updatedAt && s.updatedAt.toMillis) {
              u.lastActiveAt = Math.max(u.lastActiveAt || 0, s.updatedAt.toMillis());
            }
          } else {
            const pSnap = await firestoreModules.getDocs(firestoreModules.collection(fbDb, 'users', d.id, 'progress'));
            u.topicsAttempted = pSnap.size;
            pSnap.forEach(pd => {
              const p = pd.data();
              if (typeof p.best === 'number') u.totalBest += p.best;
              if (p.completed || p.completedManual) u.completedCount++;
              if (p.updatedAt && p.updatedAt.toMillis) {
                u.lastActiveAt = Math.max(u.lastActiveAt || 0, p.updatedAt.toMillis());
              }
            });
          }
        } catch (e) {}

        return u;
      }));
      users.push(...chunkUsers);
    }

    if (users.length === 0 && currentUser) {
      users.push({
        uid: currentUser.uid,
        displayName: currentUser.displayName || 'Student',
        email: currentUser.email || '',
        totalBest: 0,
        completedCount: 0,
        topicsAttempted: 0,
        pronunUnitsDone: 0,
        isAdmin: isAdminUser,
        isTeacher: isTeacherUser
      });
    }

    const manageBtn = box.querySelector('#btn-manage-teachers');
    if (manageBtn) {
      manageBtn.onclick = () => openTeacherRoleModal(users, () => renderAdmin(box));
    }

    if (currentAdminTab === 'homework') {
      if (exportBtn) exportBtn.style.display = 'none';
      renderAdminHomeworkView(tabContainer, assignments, users, () => renderAdmin(box));
      return;
    }

    // TAB: ROSTER
    if (exportBtn) {
      exportBtn.style.display = '';
      exportBtn.disabled = users.length === 0;
      exportBtn.onclick = () => exportStudentsCSV(users);
    }

    const weekAgo = Date.now() - 7 * 86400000;
    const active7d = users.filter(u => u.lastActiveAt && u.lastActiveAt >= weekAgo).length;
    const sumCompleted = users.reduce((s, u) => s + (u.completedCount || 0), 0);
    const sumPronunFilled = users.reduce((s, u) => s + (u.pronunExFilled || 0), 0);

    tabContainer.innerHTML = `
      <div id="admin-stats" class="stat-grid" style="margin-bottom:16px">
        <div class="stat-card">
          <div class="val">${users.length}</div>
          <div class="lbl">Total Students</div>
        </div>
        <div class="stat-card">
          <div class="val" style="color:var(--good)">${active7d}</div>
          <div class="lbl">Active (7 Days)</div>
        </div>
        <div class="stat-card">
          <div class="val" style="color:var(--accent)">${sumCompleted}</div>
          <div class="lbl">TOEIC Completed</div>
        </div>
        <div class="stat-card">
          <div class="val" style="color:#E11D48">${sumPronunFilled}</div>
          <div class="lbl">Pronunciation Completed</div>
        </div>
      </div>

      <div class="card" style="margin-bottom:14px;padding:12px 14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center">
        <input type="search" id="admin-search" placeholder="Search student name, email, or UID..." style="flex:1;min-width:200px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13.5px" />
        <select id="admin-filter" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13px">
          <option value="all">All Students</option>
          <option value="active7d">Active in past 7 days</option>
          <option value="has_pronun">Completed Pronunciation</option>
          <option value="inactive">No activity yet</option>
        </select>
        <select id="admin-sort" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13px">
          <option value="recent">Sort: Recently active</option>
          <option value="score">Sort: Highest TOEIC score</option>
          <option value="pronun">Sort: Most pronunciation units</option>
          <option value="name">Sort: Name A → Z</option>
          <option value="joined">Sort: Newly joined</option>
        </select>
      </div>

      <div id="admin-user-list">
        <div class="card" style="text-align:center;padding:32px">
          <div class="hint">Loading student roster…</div>
        </div>
      </div>
    `;

    const userListContainer = tabContainer.querySelector('#admin-user-list');

    if (users.length === 0) {
      userListContainer.innerHTML = '<div class="card"><div class="empty">No students registered yet.</div></div>';
      return;
    }

    function renderTable() {
      const qTxt = (tabContainer.querySelector('#admin-search').value || '').trim().toLowerCase();
      const flt = tabContainer.querySelector('#admin-filter').value;
      const srt = tabContainer.querySelector('#admin-sort').value;

      let list = users.filter(u => {
        if (qTxt) {
          const hay = `${u.displayName} ${u.email} ${u.uid}`.toLowerCase();
          if (!hay.includes(qTxt)) return false;
        }
        if (flt === 'active7d') return u.lastActiveAt && u.lastActiveAt >= weekAgo;
        if (flt === 'has_pronun') return (u.pronunExFilled || 0) > 0;
        if (flt === 'inactive') return (u.topicsAttempted || 0) === 0 && (u.pronunExFilled || 0) === 0;
        return true;
      });

      list.sort((a, b) => {
        if (srt === 'recent') return (b.lastActiveAt || 0) - (a.lastActiveAt || 0);
        if (srt === 'score') return (b.totalBest || 0) - (a.totalBest || 0);
        if (srt === 'pronun') return (b.pronunExFilled || 0) - (a.pronunExFilled || 0);
        if (srt === 'name') return (a.displayName || '').localeCompare(b.displayName || '', 'vi');
        if (srt === 'joined') return (b.createdAt || 0) - (a.createdAt || 0);
        return 0;
      });

      if (list.length === 0) {
        userListContainer.innerHTML = '<div class="card" style="text-align:center;padding:28px"><div class="hint">No students matched the selected filter.</div></div>';
        return;
      }

      userListContainer.innerHTML = `
        <div class="card" style="padding:0;overflow-x:auto">
          <table class="lb-table" style="margin:0;width:100%">
            <thead>
              <tr>
                <th style="padding-left:16px">Student</th>
                <th>Last Active</th>
                <th style="text-align:center">TOEIC (45)</th>
                <th style="text-align:right">TOEIC Score</th>
                <th style="text-align:center">Pronunciation</th>
                <th style="text-align:center;padding-right:16px">Submissions</th>
              </tr>
            </thead>
            <tbody>
              ${list.map(u => `
                <tr class="lb-row">
                  <td style="padding-left:16px">
                    <div style="display:flex;align-items:center;gap:8px">
                      <div style="font-weight:700">${esc(u.displayName)}</div>
                      ${u.isAdmin ? '<span style="font-size:10.5px;background:#F59E0B;color:#fff;padding:1px 6px;border-radius:10px;font-weight:700">Admin</span>' : (u.isTeacher ? '<span style="font-size:10.5px;background:#2563EB;color:#fff;padding:1px 6px;border-radius:10px;font-weight:700">Instructor</span>' : '')}
                    </div>
                    <div style="font-size:12px;color:var(--muted)">${esc(u.email || 'No email')}</div>
                  </td>
                  <td style="font-size:12.5px;color:var(--muted)">
                    <div>${fmtRelativeTime(u.lastActiveAt)}</div>
                    <div style="font-size:11px;opacity:.75">Tham gia: ${u.createdAt ? new Date(u.createdAt).toLocaleDateString('vi-VN') : '—'}</div>
                  </td>
                  <td style="text-align:center">
                    <div style="font-weight:700">${u.topicsAttempted || 0}/45</div>
                    <div style="font-size:11px;color:var(--good)">✓ ${u.completedCount || 0} completed</div>
                  </td>
                  <td style="text-align:right;font-weight:800;color:var(--accent)">${u.totalBest || 0}</td>
                  <td style="text-align:center">
                    <div style="font-weight:700;color:#E11D48">${u.pronunExFilled || 0} units</div>
                    <div style="font-size:11px;color:var(--muted)">${u.pronunUnitsDone || 0} Unit</div>
                  </td>
                  <td style="text-align:center;padding-right:16px">
                    <button class="btn primary" data-inspect="${esc(u.uid)}" data-name="${esc(u.displayName || u.email || 'Student')}" style="padding:5px 12px;font-size:12.5px">View Submissions</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`;

      userListContainer.querySelectorAll('[data-inspect]').forEach(b => {
        b.onclick = () => openAdminUserInspector(b.dataset.inspect, b.dataset.name);
      });
    }

    tabContainer.querySelector('#admin-search').oninput = renderTable;
    tabContainer.querySelector('#admin-filter').onchange = renderTable;
    tabContainer.querySelector('#admin-sort').onchange = renderTable;
    renderTable();
  } catch (err) {
    console.error('Lỗi tải danh sách thành viên:', err);
    tabContainer.innerHTML = `<div class="card"><div class="fb no">Error loading data: ${esc(err.message)}</div></div>`;
  }
}
window.renderAdmin = renderAdmin;

export async function renderAdminHomeworkView(container, assignments, users, onRefresh) {
  container.innerHTML = `
    <div id="admin-hw-stats" class="stat-grid" style="margin-bottom:16px"></div>

    <div class="card" style="margin-bottom:14px;padding:12px 14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center">
      <input type="search" id="admin-hw-search" placeholder="Tìm kiếm bài tập theo tiêu đề hoặc nội dung..." style="flex:1;min-width:220px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13.5px" />
      <select id="admin-hw-filter-status" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13px">
        <option value="all">Tất cả trạng thái</option>
        <option value="active">Đang mở (Active)</option>
        <option value="expired">Đã hết hạn (Expired)</option>
      </select>
      <button class="btn primary" id="btn-create-hw-in-tab" style="font-size:13px;display:inline-flex;align-items:center;gap:6px">
        <span>+ Giao bài tập mới</span>
      </button>
    </div>

    <div id="admin-hw-list">
      <div class="card" style="text-align:center;padding:32px"><div class="hint">Đang tải danh sách bài tập…</div></div>
    </div>
  `;

  container.querySelector('#btn-create-hw-in-tab').onclick = () => openCreateAssignmentModal(onRefresh);

  const hwListEl = container.querySelector('#admin-hw-list');
  const hwStatsEl = container.querySelector('#admin-hw-stats');

  const now = Date.now();
  const activeCount = assignments.filter(h => !h.dueDate || new Date(h.dueDate).getTime() >= now).length;
  const expiredCount = assignments.length - activeCount;

  hwStatsEl.innerHTML = `
    <div class="stat-card">
      <div class="val">${assignments.length}</div>
      <div class="lbl">Tổng bài tập đã tạo</div>
    </div>
    <div class="stat-card">
      <div class="val" style="color:var(--good)">${activeCount}</div>
      <div class="lbl">Đang mở (Active)</div>
    </div>
    <div class="stat-card">
      <div class="val" style="color:var(--muted)">${expiredCount}</div>
      <div class="lbl">Đã hết hạn (Expired)</div>
    </div>
    <div class="stat-card">
      <div class="val" style="color:var(--accent)" id="admin-hw-total-subs-val">...</div>
      <div class="lbl">Lượt hoàn thành từ học viên</div>
    </div>
  `;

  if (assignments.length === 0) {
    hwListEl.innerHTML = `
      <div class="card" style="text-align:center;padding:40px 20px">
        <div style="font-size:42px;margin-bottom:8px">📝</div>
        <h3 style="margin:0 0 6px;font-size:18px">Chưa có bài tập nào được giao</h3>
        <p class="hint" style="max-width:500px;margin:0 auto 18px;line-height:1.5">
          Giáo viên chỉ cần điền nội dung bài tập vào ô text và bấm Giao bài tập. Học viên sẽ thấy ngay trên Trang chủ để xem và bấm hoàn thành.
        </p>
        <button class="btn primary" id="btn-empty-create-hw" style="display:inline-flex;align-items:center;gap:6px;padding:9px 20px;font-size:14px">
          <span>+ Giao bài tập đầu tiên</span>
        </button>
      </div>
    `;
    const emptyBtn = hwListEl.querySelector('#btn-empty-create-hw');
    if (emptyBtn) emptyBtn.onclick = () => openCreateAssignmentModal(onRefresh);
    const totalSubsVal = hwStatsEl.querySelector('#admin-hw-total-subs-val');
    if (totalSubsVal) totalSubsVal.textContent = '0';
    return;
  }

  const subsMapPerHw = {};
  let totalSubmissionsCount = 0;
  await Promise.all(assignments.map(async (hw) => {
    try {
      const subs = await getAssignmentSubmissions(hw.id);
      subsMapPerHw[hw.id] = subs;
      totalSubmissionsCount += Object.keys(subs).length;
    } catch (e) {
      subsMapPerHw[hw.id] = {};
    }
  }));

  const totalSubsVal = hwStatsEl.querySelector('#admin-hw-total-subs-val');
  if (totalSubsVal) totalSubsVal.textContent = String(totalSubmissionsCount);

  function renderHwTable() {
    const qTxt = (container.querySelector('#admin-hw-search').value || '').trim().toLowerCase();
    const statusFlt = container.querySelector('#admin-hw-filter-status').value;

    let filtered = assignments.filter(hw => {
      if (qTxt) {
        const hay = `${hw.title || ''} ${hw.content || ''} ${hw.instructions || ''}`.toLowerCase();
        if (!hay.includes(qTxt)) return false;
      }
      const isExpired = hw.dueDate ? new Date(hw.dueDate).getTime() < Date.now() : false;
      if (statusFlt === 'active' && isExpired) return false;
      if (statusFlt === 'expired' && !isExpired) return false;
      return true;
    });

    if (filtered.length === 0) {
      hwListEl.innerHTML = '<div class="card" style="text-align:center;padding:28px"><div class="hint">Không tìm thấy bài tập nào phù hợp với bộ lọc.</div></div>';
      return;
    }

    hwListEl.innerHTML = `
      <div class="card" style="padding:0;overflow-x:auto">
        <table class="lb-table" style="margin:0;width:100%">
          <thead>
            <tr>
              <th style="padding-left:16px;width:50%">Bài tập & Nội dung</th>
              <th>Hạn nộp</th>
              <th style="text-align:center">Hoàn thành</th>
              <th style="text-align:right;padding-right:16px">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(hw => {
              const subs = subsMapPerHw[hw.id] || {};
              const subCount = Object.keys(subs).length;
              const isExpired = hw.dueDate ? new Date(hw.dueDate).getTime() < Date.now() : false;
              const pctSub = users.length > 0 ? Math.round((subCount / users.length) * 100) : 0;
              const contentText = hw.content || hw.instructions || '';
              return `
                <tr class="lb-row">
                  <td style="padding-left:16px">
                    <div style="font-weight:700;font-size:15px;color:var(--ink)">${esc(hw.title || 'Bài tập về nhà')}</div>
                    <div class="hint" style="font-size:12.5px;margin-top:4px;white-space:pre-wrap;line-height:1.5;max-height:85px;overflow-y:auto;background:var(--sunk);padding:6px 10px;border-radius:6px">${esc(contentText)}</div>
                  </td>
                  <td style="font-size:12.5px">
                    <div>${fmtDue(hw.dueDate)}</div>
                    <div><span class="badge ${isExpired ? 'bad' : 'ok'}" style="font-size:10.5px">${isExpired ? 'Đã hết hạn' : 'Đang mở'}</span></div>
                  </td>
                  <td style="text-align:center">
                    <div style="font-weight:700;font-size:13.5px">${subCount} / ${users.length}</div>
                    <div class="hint" style="font-size:11px;color:${subCount > 0 ? 'var(--good)' : 'var(--muted)'}">${pctSub}% học viên</div>
                  </td>
                  <td style="text-align:right;padding-right:16px;white-space:nowrap">
                    <button class="btn primary btn-view-hw-subs" data-hw-id="${esc(hw.id)}" style="padding:4px 10px;font-size:12px;margin-right:6px">Xem nộp bài</button>
                    <button class="btn ghost btn-edit-hw" data-hw-id="${esc(hw.id)}" style="padding:4px 8px;font-size:12px;margin-right:6px">Sửa</button>
                    <button class="btn ghost btn-del-hw" data-hw-id="${esc(hw.id)}" style="padding:4px 8px;font-size:12px;color:var(--bad);border-color:var(--bad)">Xóa</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    hwListEl.querySelectorAll('.btn-view-hw-subs').forEach(btn => {
      btn.onclick = () => {
        const hw = assignments.find(x => x.id === btn.dataset.hwId);
        if (hw) openAssignmentSubmissionsModal(hw, users, subsMapPerHw[hw.id] || {});
      };
    });

    hwListEl.querySelectorAll('.btn-edit-hw').forEach(btn => {
      btn.onclick = () => {
        const hw = assignments.find(x => x.id === btn.dataset.hwId);
        if (hw) openCreateAssignmentModal(onRefresh, hw);
      };
    });

    hwListEl.querySelectorAll('.btn-del-hw').forEach(btn => {
      btn.onclick = async () => {
        const hw = assignments.find(x => x.id === btn.dataset.hwId);
        if (!hw) return;
        const ok = await confirmModal({
          title: 'Xóa bài tập về nhà?',
          message: `Bạn có chắc muốn xóa bài tập "${hw.title || 'Bài tập này'}"? Dữ liệu hoàn thành của học viên cho bài này cũng sẽ bị xóa.`,
          confirmText: 'Xóa bài tập',
          cancelText: 'Hủy',
          danger: true
        });
        if (!ok) return;
        await deleteHomeworkAssignment(hw.id);
        showToast('✓ Đã xóa bài tập về nhà.');
        if (onRefresh) onRefresh();
      };
    });
  }

  container.querySelector('#admin-hw-search').oninput = renderHwTable;
  container.querySelector('#admin-hw-filter-status').onchange = renderHwTable;
  renderHwTable();
}

export function openCreateAssignmentModal(onDone, existingHw = null) {
  const isEdit = Boolean(existingHw);
  const defaultDue = new Date(Date.now() + 3 * 86400000);
  defaultDue.setHours(23, 59, 0, 0);
  const dueDefaultStr = existingHw && existingHw.dueDate
    ? new Date(existingHw.dueDate).toISOString().slice(0, 16)
    : defaultDue.toISOString().slice(0, 16);

  openModal(`
    <div class="modal-backdrop">
      <div class="modal-box" style="max-width:580px;width:95%">
        <button class="modal-close" aria-label="Close">✕</button>
        <h3 style="margin:0 0 6px;font-size:20px">${isEdit ? 'Chỉnh sửa bài tập về nhà' : 'Giao bài tập về nhà'}</h3>
        <p class="hint" style="margin:0 0 16px;line-height:1.5">
          Nhập nội dung bài tập giáo viên muốn giao. Học viên sẽ thấy thông báo và nội dung này trực tiếp trên Trang chủ.
        </p>

        <form id="create-hw-form" style="display:flex;flex-direction:column;gap:14px">
          <div>
            <label style="font-weight:700;font-size:13px;display:block;margin-bottom:5px">Tiêu đề bài tập</label>
            <input type="text" id="new-hw-title" placeholder="vd: Bài tập tuần 3: Ôn từ vựng & Dịch câu Topic 03..." value="${esc(existingHw?.title || '')}" style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:14px" />
          </div>

          <div>
            <label style="font-weight:700;font-size:13px;display:block;margin-bottom:5px">Nội dung bài tập * (Vùng điền text chính)</label>
            <textarea id="new-hw-content" rows="7" required placeholder="Nhập chi tiết bài tập cần làm, yêu cầu, dặn dò...&#10;Ví dụ:&#10;- Học kỹ 15 từ vựng của Topic 03: Recommendation&#10;- Dịch 7 câu bài tập trong tab Translation&#10;- Luyện phát âm các từ mới và chuẩn bị bài cho buổi học tới..." style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:14px;line-height:1.6;resize:vertical">${esc(existingHw?.content || existingHw?.instructions || '')}</textarea>
          </div>

          <div>
            <label style="font-weight:700;font-size:13px;display:block;margin-bottom:5px">Hạn nộp (tùy chọn)</label>
            <input type="datetime-local" id="new-hw-due-date" value="${dueDefaultStr}" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13.5px" />
          </div>

          <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:6px">
            <button type="button" class="btn ghost" id="btn-cancel-create-hw">Hủy</button>
            <button type="submit" class="btn primary" id="btn-submit-create-hw" style="padding:9px 22px">
              ${isEdit ? 'Lưu thay đổi' : 'Giao bài tập'}
            </button>
          </div>
        </form>
      </div>
    </div>
  `);

  const form = document.querySelector('#create-hw-form');
  const titleEl = document.querySelector('#new-hw-title');
  const contentEl = document.querySelector('#new-hw-content');
  const dueDateEl = document.querySelector('#new-hw-due-date');
  const cancelBtn = document.querySelector('#btn-cancel-create-hw');

  if (cancelBtn) cancelBtn.onclick = () => closeModal();

  form.onsubmit = async (e) => {
    e.preventDefault();
    const content = contentEl.value.trim();
    if (!content) {
      showToast('Vui lòng nhập nội dung bài tập');
      return;
    }
    const title = titleEl.value.trim() || 'Bài tập về nhà';
    const dueDate = dueDateEl.value ? new Date(dueDateEl.value).toISOString() : null;

    const submitBtn = document.querySelector('#btn-submit-create-hw');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = isEdit ? 'Đang lưu…' : 'Đang giao…';
    }

    const hwObj = {
      id: existingHw ? existingHw.id : `hw_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      title,
      content,
      instructions: content,
      dueDate,
      createdAt: existingHw ? (existingHw.createdAt || Date.now()) : Date.now(),
      updatedAt: Date.now(),
      createdBy: (currentUser && currentUser.uid) || 'teacher',
      teacherName: (currentUser && (currentUser.displayName || currentUser.email)) || 'Giáo viên'
    };

    await saveHomeworkAssignment(hwObj);
    showToast(`✓ Đã ${isEdit ? 'cập nhật' : 'giao'} bài tập: "${title}"`);
    closeModal();
    if (onDone) onDone();
  };
}

export function openAssignmentSubmissionsModal(assignment, users, submissionsMap) {
  const contentText = assignment.content || assignment.instructions || '';
  openModal(`
    <div class="modal-backdrop">
      <div class="modal-box wide" style="max-height:88vh;overflow-y:auto">
        <button class="modal-close" aria-label="Close">✕</button>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:12px">
          <div>
            <div class="eyebrow" style="color:var(--accent);font-weight:700">Chi tiết hoàn thành bài tập</div>
            <h3 style="margin:4px 0;font-size:20px">${esc(assignment.title || 'Bài tập về nhà')}</h3>
            <div class="hint" style="font-size:12.5px">
              Hạn nộp: <b>${fmtDue(assignment.dueDate)}</b> · Người giao: <b>${esc(assignment.teacherName || 'Giáo viên')}</b>
            </div>
          </div>
          <div>
            <button class="btn" id="btn-export-hw-subs" style="font-size:12.5px">Xuất CSV</button>
          </div>
        </div>

        ${contentText ? `
          <div style="white-space:pre-wrap;line-height:1.5;font-size:13px;color:var(--ink);background:var(--sunk);padding:10px 14px;border-radius:8px;margin-bottom:14px;border:1px solid var(--line)">
            <b>Nội dung bài tập:</b><br>${esc(contentText)}
          </div>
        ` : ''}

        <div id="modal-hw-stats" class="stat-grid" style="margin-bottom:14px"></div>

        <div style="margin-bottom:12px">
          <input type="search" id="modal-hw-search" placeholder="Tìm kiếm học viên..." style="width:100%;box-sizing:border-box;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font-size:13.5px" />
        </div>

        <div id="modal-hw-table-container"></div>
      </div>
    </div>
  `);

  const statsBox = document.querySelector('#modal-hw-stats');
  const tableBox = document.querySelector('#modal-hw-table-container');
  const searchInput = document.querySelector('#modal-hw-search');
  const exportBtn = document.querySelector('#btn-export-hw-subs');

  exportBtn.onclick = () => exportHomeworkSubmissionsCSV(assignment, users, submissionsMap);

  const totalStudents = users.length;
  let submittedCount = 0;

  users.forEach(u => {
    const s = submissionsMap[u.uid];
    if (s) submittedCount++;
  });

  const missingCount = totalStudents - submittedCount;
  const pctSubmitted = totalStudents > 0 ? Math.round((submittedCount / totalStudents) * 100) : 0;

  statsBox.innerHTML = `
    <div class="stat-card">
      <div class="val">${submittedCount}<span style="font-size:15px;color:var(--muted);font-weight:600"> / ${totalStudents}</span></div>
      <div class="lbl">Đã hoàn thành (${pctSubmitted}%)</div>
    </div>
    <div class="stat-card">
      <div class="val" style="color:var(--muted)">${missingCount}</div>
      <div class="lbl">Chưa hoàn thành</div>
    </div>
  `;

  function renderStudents() {
    const q = (searchInput.value || '').trim().toLowerCase();
    const filteredUsers = users.filter(u => {
      if (!q) return true;
      const hay = `${u.displayName} ${u.email} ${u.uid}`.toLowerCase();
      return hay.includes(q);
    });

    if (filteredUsers.length === 0) {
      tableBox.innerHTML = '<div class="hint" style="text-align:center;padding:24px">Không tìm thấy học viên nào.</div>';
      return;
    }

    tableBox.innerHTML = `
      <div class="card" style="padding:0;overflow-x:auto">
        <table class="lb-table" style="margin:0;width:100%">
          <thead>
            <tr>
              <th style="padding-left:14px">Học viên</th>
              <th>Trạng thái</th>
              <th style="text-align:right;padding-right:14px">Thời gian hoàn thành</th>
            </tr>
          </thead>
          <tbody>
            ${filteredUsers.map(u => {
              const s = submissionsMap[u.uid];
              const isSubmitted = Boolean(s);

              let statusBadge = '<span class="badge" style="background:var(--sunk);color:var(--muted);font-size:11px">Chưa hoàn thành</span>';
              if (isSubmitted) {
                statusBadge = '<span class="badge ok" style="font-size:11px">✓ Đã hoàn thành</span>';
              }

              return `
                <tr class="lb-row">
                  <td style="padding-left:14px">
                    <div style="font-weight:700">${esc(u.displayName)}</div>
                    <div style="font-size:12px;color:var(--muted)">${esc(u.email || u.uid)}</div>
                  </td>
                  <td>${statusBadge}</td>
                  <td style="text-align:right;padding-right:14px;font-size:12.5px;color:var(--muted)">
                    ${isSubmitted && s.submittedAt ? `
                      <div>${fmtDue(s.submittedAt)}</div>
                      <div style="font-size:11px;opacity:.8">${fmtRelativeTime(s.submittedAt)}</div>
                    ` : '—'}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  searchInput.oninput = renderStudents;
  renderStudents();
}

export function exportHomeworkSubmissionsCSV(assignment, users, submissionsMap) {
  const headers = ['Học viên', 'Email', 'Trạng thái', 'Thời gian hoàn thành', 'Hạn nộp'];
  const escCsv = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  const rows = users.map(u => {
    const sub = submissionsMap[u.uid];
    const isSubmitted = Boolean(sub);
    const statusText = isSubmitted ? 'Đã hoàn thành' : 'Chưa hoàn thành';
    const submitTime = sub && sub.submittedAt ? new Date(sub.submittedAt).toLocaleString('vi-VN') : '';
    return [
      u.displayName,
      u.email,
      statusText,
      submitTime,
      assignment.dueDate ? new Date(assignment.dueDate).toLocaleString('vi-VN') : ''
    ].map(escCsv).join(',');
  });

  const csvContent = '\uFEFF' + headers.map(escCsv).join(',') + '\n' + rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TOEIC_Homework_${assignment.id}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('✓ Đã xuất file CSV kết quả nộp bài!');
}

export function openTeacherRoleModal(users, onUpdated) {
  openModal(`
    <div class="modal-backdrop">
      <div class="modal-box wide" style="max-height:85vh;overflow-y:auto">
        <button class="modal-close" aria-label="Close">✕</button>
        <h3 style="margin:0 0 6px;font-size:20px">Instructor Access Management</h3>
        <p class="hint" style="margin:0 0 14px;line-height:1.5">
          Instructors can access Classroom Management to review all student progress and provide feedback.
        </p>

        <div style="background:var(--sunk);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:14px">
          <div style="font-weight:700;font-size:13.5px;margin-bottom:6px">Step 1: Invite instructor to sign in with Google or Email</div>
          <div style="font-size:12.5px;color:var(--muted)">Once the instructor has signed in, locate their account below and click <b>"Grant Instructor Role"</b>.</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;max-height:360px;overflow-y:auto" id="teacher-role-list">
          ${users.map(u => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:8px;background:var(--surface)">
              <div style="min-width:0">
                <div style="font-weight:700;font-size:14px">${esc(u.displayName)} ${u.isAdmin ? '<span style="color:#F59E0B;font-size:11.5px">(Admin)</span>' : (u.isTeacher ? '<span style="color:#2563EB;font-size:11.5px">(Instructor)</span>' : '')}</div>
                <div style="font-size:12px;color:var(--muted)">${esc(u.email || u.uid)}</div>
              </div>
              <div>
                ${u.isAdmin ? `<span class="hint" style="font-size:12px">Full Admin Privileges</span>` : (
                  u.isTeacher
                    ? `<button class="btn ghost btn-revoke-teacher" data-uid="${esc(u.uid)}" style="font-size:12px;color:var(--bad);border-color:var(--bad)">Revoke Instructor</button>`
                    : `<button class="btn primary btn-grant-teacher" data-uid="${esc(u.uid)}" data-name="${esc(u.displayName)}" data-email="${esc(u.email)}" style="font-size:12px">Grant Instructor</button>`
                )}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `);

  document.querySelectorAll('.btn-grant-teacher').forEach(b => {
    b.onclick = async () => {
      const uid = b.dataset.uid;
      b.disabled = true;
      b.textContent = 'Granting…';
      try {
        await firestoreModules.setDoc(firestoreModules.doc(fbDb, 'teachers', uid), {
          displayName: b.dataset.name || '',
          email: b.dataset.email || '',
          grantedBy: currentUser.uid,
          grantedAt: firestoreModules.serverTimestamp()
        });
        showToast('✓ Instructor role granted successfully!');
        closeModal();
        if (onUpdated) onUpdated();
      } catch (err) {
        showToast('Cannot grant role: ' + formatFirebaseError(err));
        b.disabled = false;
        b.textContent = 'Grant Instructor';
      }
    };
  });

  document.querySelectorAll('.btn-revoke-teacher').forEach(b => {
    b.onclick = async () => {
      const ok = await confirmModal({
        title: 'Revoke Instructor Role?',
        message: 'Are you sure you want to revoke Instructor privileges for this account?',
        confirmText: 'Revoke Role',
        cancelText: 'Cancel',
        danger: true
      });
      if (!ok) return;
      const uid = b.dataset.uid;
      b.disabled = true;
      try {
        await firestoreModules.deleteDoc(firestoreModules.doc(fbDb, 'teachers', uid));
        showToast('Instructor privileges revoked.');
        closeModal();
        if (onUpdated) onUpdated();
      } catch (err) {
        showToast('Error revoking role: ' + formatFirebaseError(err));
        b.disabled = false;
      }
    };
  });
}

export async function openAdminUserInspector(targetUid, userName) {
  openModal(`
    <div class="modal-backdrop">
      <div class="modal-box wide" style="max-height:88vh;overflow-y:auto">
        <button class="modal-close" aria-label="Close">✕</button>
        <h3 style="margin:0 0 4px;font-size:20px">Student Submissions: ${esc(userName)}</h3>
        <div class="hint" style="margin-bottom:14px;font-size:12px">UID: ${esc(targetUid)}</div>
        <div id="inspector-body">
          <div class="hint" style="text-align:center;padding:24px">Loading student submissions…</div>
        </div>
      </div>
    </div>
  `);

  try {
    const progress = {};
    const answers = {};
    const pronunAnswers = {};
    const practiceAnswers = {};
    const grammarAnswers = {};
    let review = null;
    let teacherNote = null;
    let studentHwSubs = {};

    const [progSnap, ansSnap, revDoc, noteDoc, hwDoc, allHw] = await Promise.all([
      (fbDb && firestoreModules) ? firestoreModules.getDocs(firestoreModules.collection(fbDb, 'users', targetUid, 'progress')).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDocs(firestoreModules.collection(fbDb, 'users', targetUid, 'answers')).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', targetUid, 'meta', 'review')).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', targetUid, 'meta', 'teacher_note')).catch(() => null) : Promise.resolve(null),
      (fbDb && firestoreModules) ? firestoreModules.getDoc(firestoreModules.doc(fbDb, 'users', targetUid, 'meta', 'submissions')).catch(() => null) : Promise.resolve(null),
      getHomeworkAssignments()
    ]);

    if (hwDoc && hwDoc.exists()) studentHwSubs = hwDoc.data() || {};
    const allAssignmentsList = allHw || [];

    if (progSnap) progSnap.forEach(d => { progress[Number(d.id)] = d.data(); });
    if (ansSnap) {
      ansSnap.forEach(d => {
        if (d.id.startsWith('pronun_')) {
          const uId = Number(d.id.slice('pronun_'.length));
          pronunAnswers[uId] = d.data();
        } else if (d.id.startsWith('practice_')) {
          const exId = d.id.slice('practice_'.length);
          practiceAnswers[exId] = d.data();
        } else if (d.id.startsWith('grammar_')) {
          const topId = d.id.slice('grammar_'.length);
          grammarAnswers[topId] = d.data();
        } else {
          answers[Number(d.id)] = d.data();
        }
      });
    }
    if (revDoc && revDoc.exists()) review = revDoc.data();
    if (noteDoc && noteDoc.exists()) teacherNote = noteDoc.data();

    const inspBody = $('#inspector-body');
    const pronunUnitIds = Object.keys(pronunAnswers).map(Number).sort((a, b) => a - b);
    const practiceExIds = Object.keys(practiceAnswers).sort();
    const grammarTopicIds = Object.keys(grammarAnswers).sort();
    const workedTopicIds = TOPICS.filter(t => progress[t.id] || (answers[t.id] && Object.keys(answers[t.id].data || {}).length > 0)).map(t => t.id);

    let activeTab = workedTopicIds.length === 0 && pronunUnitIds.length > 0 ? 'pronun' : 'toeic';
    let selTopicId = workedTopicIds[0] || 1;
    let selPronunUnitId = pronunUnitIds[0] || 2;
    let selPracticeExId = practiceExIds[0] || 'unit_ex_1';
    let selGrammarTopicId = grammarTopicIds[0] || 'tenses';

    function renderInspector() {
      const activeReviewItems = (review && Array.isArray(review.items)) ? review.items.filter(x => !x.deleted) : [];

      inspBody.innerHTML = `
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;border-bottom:1px solid var(--line);padding-bottom:10px">
          <button class="btn ${activeTab === 'toeic' ? 'primary' : 'ghost'}" data-itab="toeic" style="font-size:13px">TOEIC Topics (${workedTopicIds.length})</button>
          <button class="btn ${activeTab === 'pronun' ? 'primary' : 'ghost'}" data-itab="pronun" style="font-size:13px">Pronunciation (${pronunUnitIds.length} Units)</button>
          <button class="btn ${activeTab === 'practice' ? 'primary' : 'ghost'}" data-itab="practice" style="font-size:13px">Practice Drills (${practiceExIds.length})</button>
          <button class="btn ${activeTab === 'grammar' ? 'primary' : 'ghost'}" data-itab="grammar" style="font-size:13px">Grammar (${grammarTopicIds.length} Topics)</button>
          <button class="btn ${activeTab === 'homework' ? 'primary' : 'ghost'}" data-itab="homework" style="font-size:13px">Bài tập về nhà (${allAssignmentsList.length})</button>
          <button class="btn ${activeTab === 'feedback' ? 'primary' : 'ghost'}" data-itab="feedback" style="font-size:13px">Feedback & Saved Words (${activeReviewItems.length})</button>
        </div>
        <div id="insp-tab-content"></div>
      `;

      inspBody.querySelectorAll('[data-itab]').forEach(b => {
        b.onclick = () => { activeTab = b.dataset.itab; renderInspector(); };
      });

      const tabBox = inspBody.querySelector('#insp-tab-content');

      if (activeTab === 'toeic') {
        const p = progress[selTopicId] || {};
        const a = answers[selTopicId] ? answers[selTopicId].data || {} : {};
        const transKeys = Object.keys(a).filter(k => k.startsWith('tr:'));
        const gapKeys = Object.keys(a).filter(k => k.startsWith('g-') || k.startsWith('gt-'));
        const wfKeys = Object.keys(a).filter(k => k.startsWith('wf-'));

        tabBox.innerHTML = `
          <div class="row between" style="margin-bottom:14px;background:var(--sunk);padding:10px 14px;border-radius:8px;flex-wrap:wrap;gap:8px">
            <div>
              <b>Topic:</b>
              <select id="insp-topic-sel" style="margin-left:6px;padding:6px 10px;border-radius:6px;border:1px solid var(--line);background:var(--surface);color:var(--ink)">
                ${TOPICS.map(t => {
                  const tp = progress[t.id];
                  const ta = answers[t.id] ? Object.keys(answers[t.id].data || {}).length : 0;
                  const mark = (tp && (tp.completed || tp.completedManual)) ? '✓ ' : ((tp || ta > 0) ? '• ' : '');
                  const info = tp && tp.best != null ? ` (${tp.best}%)` : (ta > 0 ? ` (${ta} items)` : '');
                  return `<option value="${t.id}" ${t.id === selTopicId ? 'selected' : ''}>${mark}Topic ${t.id}: ${esc(splitTitle(t).main)}${info}</option>`;
                }).join('')}
              </select>
            </div>
            <div>
              <span>Quiz Score: <b>${p.best != null ? p.best + '%' : 'Not attempted'}</b></span>
              <span style="margin-left:12px">${p.completed || p.completedManual ? '<span style="color:var(--good);font-weight:700">✓ Completed</span>' : '<span style="color:var(--muted)">Incomplete</span>'}</span>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:14px">
            <div>
              <h4 style="margin:0 0 8px;font-size:15px">1. Sentence Translations (${transKeys.length} items)</h4>
              ${transKeys.length === 0 ? '<div class="hint" style="padding:10px;background:var(--bg);border-radius:6px">No sentence translations submitted for this topic.</div>' : `
                <div style="display:flex;flex-direction:column;gap:8px">
                  ${transKeys.map(k => `
                    <div style="background:var(--bg);padding:10px 12px;border-radius:8px;border:1px solid var(--line)">
                      <div class="hint" style="font-size:11.5px;margin-bottom:3px">${esc(k)}</div>
                      <div style="font-size:14px;white-space:pre-wrap">${esc(a[k])}</div>
                    </div>`).join('')}
                </div>
              `}
            </div>

            <div>
              <h4 style="margin:0 0 8px;font-size:15px">2. Listening & Blank Fill-ins (${gapKeys.length} items)</h4>
              ${gapKeys.length === 0 ? '<div class="hint" style="padding:10px;background:var(--bg);border-radius:6px">No listening blank fill-ins submitted.</div>' : `
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px">
                  ${gapKeys.map(k => `
                    <div style="background:var(--bg);padding:8px 12px;border-radius:8px;border:1px solid var(--line)">
                      <span class="hint" style="font-size:11.5px">${esc(k)}: </span>
                      <b>${esc(a[k])}</b>
                    </div>`).join('')}
                </div>
              `}
            </div>

            ${wfKeys.length > 0 ? `
              <div>
                <h4 style="margin:0 0 8px;font-size:15px">3. Word Form Exercises (${wfKeys.length} items)</h4>
                <div style="display:flex;flex-wrap:wrap;gap:6px">
                  ${wfKeys.map(k => `<span class="chip">${esc(k)}: <b>${esc(a[k])}</b></span>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `;

        tabBox.querySelector('#insp-topic-sel').onchange = (e) => {
          selTopicId = Number(e.target.value);
          renderInspector();
        };
      } else if (activeTab === 'pronun') {
        if (pronunUnitIds.length === 0) {
          tabBox.innerHTML = '<div class="hint" style="text-align:center;padding:24px;background:var(--sunk);border-radius:8px">This student has not submitted any Cambridge pronunciation exercises yet.</div>';
          return;
        }
        const uData = pronunAnswers[selPronunUnitId] || {};
        const exMap = uData.exercises || {};
        const unitMeta = PRONUN_UNITS.find(x => x.id === selPronunUnitId);

        tabBox.innerHTML = `
          <div class="row between" style="margin-bottom:14px;background:var(--sunk);padding:10px 14px;border-radius:8px;flex-wrap:wrap;gap:8px">
            <div>
              <b>Select Submitted Unit:</b>
              <select id="insp-pronun-sel" style="margin-left:6px;padding:6px 10px;border-radius:6px;border:1px solid var(--line);background:var(--surface);color:var(--ink)">
                ${pronunUnitIds.map(uidNum => {
                  const um = PRONUN_UNITS.find(x => x.id === uidNum);
                  return `<option value="${uidNum}" ${uidNum === selPronunUnitId ? 'selected' : ''}>Unit ${uidNum}: ${esc(um ? um.title : '')}</option>`;
                }).join('')}
              </select>
            </div>
            <div class="hint" style="font-size:12.5px">
              Updated: ${uData.updatedAt && uData.updatedAt.toDate ? uData.updatedAt.toDate().toLocaleString('vi-VN') : '—'}
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:12px">
            ${Object.entries(exMap).map(([exId, exObj]) => {
              const exMeta = unitMeta && unitMeta.exercises ? unitMeta.exercises.find(e => String(e.id) === String(exId)) : null;
              const ansEntries = Object.entries((exObj && exObj.answers) || {}).filter(([, v]) => String(v || '').trim() !== '');
              return `
                <div style="background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:12px 14px">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
                    <div style="font-weight:800;font-size:14.5px">${esc(exMeta ? exMeta.title : 'Exercise ' + exId)}</div>
                    <span class="badge" style="background:${exObj && exObj.checked ? 'var(--good-soft)' : 'var(--sunk)'};color:${exObj && exObj.checked ? 'var(--good)' : 'var(--muted)'};font-weight:700">
                      ${exObj && exObj.checked ? '✓ Checked' : 'In Progress'} (${ansEntries.length} answers submitted)
                    </span>
                  </div>
                  ${ansEntries.length === 0 ? '<div class="hint">No answers submitted yet.</div>' : `
                    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:6px">
                      ${ansEntries.map(([ak, av]) => `
                        <div style="background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:13px">
                          <span class="hint" style="font-size:11px">${esc(ak)}: </span>
                          <b>${esc(av)}</b>
                        </div>
                      `).join('')}
                    </div>
                  `}
                </div>
              `;
            }).join('')}
          </div>
        `;

        tabBox.querySelector('#insp-pronun-sel').onchange = (e) => {
          selPronunUnitId = Number(e.target.value);
          renderInspector();
        };
      } else if (activeTab === 'practice') {
        if (practiceExIds.length === 0) {
          tabBox.innerHTML = '<div class="hint" style="text-align:center;padding:24px;background:var(--sunk);border-radius:8px">This student has not submitted any Practice drills yet.</div>';
          return;
        }
        const pDoc = practiceAnswers[selPracticeExId] || {};
        const pData = pDoc.data || {};
        const pAnswers = pData.answers || {};
        const pUnit = PRACTICE_UNITS.find(u => u.id === selPracticeExId);
        const pPara = PRACTICE_PARAGRAPHS.find(p => p.id === selPracticeExId);
        const isTenses = selPracticeExId === 'practice_tenses_30';

        tabBox.innerHTML = `
          <div class="row between" style="margin-bottom:14px;background:var(--sunk);padding:10px 14px;border-radius:8px;flex-wrap:wrap;gap:8px">
            <div>
              <b>Select Practice Exercise:</b>
              <select id="insp-practice-sel" style="margin-left:6px;padding:6px 10px;border-radius:6px;border:1px solid var(--line);background:var(--surface);color:var(--ink)">
                ${practiceExIds.map(exId => {
                  const u = PRACTICE_UNITS.find(x => x.id === exId);
                  const p = PRACTICE_PARAGRAPHS.find(x => x.id === exId);
                  const label = u ? u.title : (p ? p.title : (exId === 'practice_tenses_30' ? '30 Tense Drills' : exId));
                  return `<option value="${exId}" ${exId === selPracticeExId ? 'selected' : ''}>${esc(label)}</option>`;
                }).join('')}
              </select>
            </div>
            <div class="hint" style="font-size:12.5px">
              Updated: ${pDoc.updatedAt && pDoc.updatedAt.toDate ? pDoc.updatedAt.toDate().toLocaleString('vi-VN') : '—'}
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:10px">
            ${pUnit ? pUnit.items.map(it => `
              <div style="background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
                <div style="font-weight:700;font-size:13.5px;color:var(--ink);margin-bottom:4px">
                  <span style="color:#059669">${it.id}.</span> ${esc(it.vi)}
                </div>
                <div style="font-size:14px;padding:6px 10px;border-radius:6px;background:var(--surface);color:var(--ink);border:1px solid var(--line)">
                  ${pAnswers[it.id] ? esc(pAnswers[it.id]) : '<i style="color:var(--muted)">Not answered</i>'}
                </div>
              </div>
            `).join('') : (pPara ? pPara.segments.map(seg => `
              <div style="background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
                <div class="hint" style="font-size:12px;margin-bottom:4px;font-weight:700;color:#059669">Section ${seg.id}:</div>
                <div style="font-size:13px;line-height:1.5;margin-bottom:6px">${esc(seg.vi)}</div>
                <div style="font-size:14px;padding:8px 10px;border-radius:6px;background:var(--surface);color:var(--ink);border:1px solid var(--line)">
                  ${pAnswers[seg.id] ? esc(pAnswers[seg.id]) : '<i style="color:var(--muted)">Not answered</i>'}
                </div>
              </div>
            `).join('') : (isTenses ? PRACTICE_TENSES.map(it => `
              <div style="background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
                <div style="font-weight:700;font-size:13.5px;color:var(--ink);margin-bottom:4px">
                  <span style="color:#059669">${it.id}.</span> ${esc(it.vi)}
                </div>
                <div style="font-size:14px;padding:6px 10px;border-radius:6px;background:var(--surface);color:var(--ink);border:1px solid var(--line)">
                  ${pAnswers[it.id] ? esc(pAnswers[it.id]) : '<i style="color:var(--muted)">Not answered</i>'}
                </div>
              </div>
            `).join('') : ''))}
          </div>
        `;

        tabBox.querySelector('#insp-practice-sel').onchange = (e) => {
          selPracticeExId = e.target.value;
          renderInspector();
        };
      } else if (activeTab === 'grammar') {
        if (grammarTopicIds.length === 0) {
          tabBox.innerHTML = '<div class="hint" style="text-align:center;padding:24px;background:var(--sunk);border-radius:8px">This student has not submitted any Grammar exercises yet.</div>';
          return;
        }
        const gDoc = grammarAnswers[selGrammarTopicId] || {};
        const gData = gDoc.data || {};
        const gAnswers = gData.answers || {};
        const gTopic = GRAMMAR_TOPICS.find(t => t.id === selGrammarTopicId);

        tabBox.innerHTML = `
          <div class="row between" style="margin-bottom:14px;background:var(--sunk);padding:10px 14px;border-radius:8px;flex-wrap:wrap;gap:8px">
            <div>
              <b>Select Grammar Topic:</b>
              <select id="insp-grammar-sel" style="margin-left:6px;padding:6px 10px;border-radius:6px;border:1px solid var(--line);background:var(--surface);color:var(--ink)">
                ${grammarTopicIds.map(topId => {
                  const t = GRAMMAR_TOPICS.find(x => x.id === topId);
                  return `<option value="${topId}" ${topId === selGrammarTopicId ? 'selected' : ''}>${t ? t.icon + ' ' + esc(t.title) : topId}</option>`;
                }).join('')}
              </select>
            </div>
            <div class="hint" style="font-size:12.5px">
              Submitted: <b>${Object.keys(gAnswers).length}</b> / ${gTopic ? gTopic.questions.length : '—'} questions
            </div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px">
            ${gTopic ? gTopic.questions.filter(q => gAnswers[q.id]).map(q => {
              const choice = gAnswers[q.id];
              const choiceText = q.options[choice] || '';
              const isCorrect = q.answer && choice === q.answer;
              const isWrong = q.answer && choice !== q.answer;
              return `
                <div style="background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                    <span style="font-weight:700;font-size:13px">Question ${q.num}</span>
                    <span class="badge" style="background:${isCorrect ? 'var(--good-soft)' : (isWrong ? 'var(--bad-soft)' : 'var(--sunk)')};color:${isCorrect ? 'var(--good)' : (isWrong ? 'var(--bad)' : 'var(--ink)')}">
                      Selected: (${choice})
                    </span>
                  </div>
                  <div class="hint" style="font-size:12px;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(q.stem)}</div>
                  <div style="font-size:13px;font-weight:600">
                    ${esc(choiceText)}
                  </div>
                </div>
              `;
            }).join('') : ''}
          </div>
        `;

        tabBox.querySelector('#insp-grammar-sel').onchange = (e) => {
          selGrammarTopicId = e.target.value;
          renderInspector();
        };
      } else if (activeTab === 'homework') {
        const studentAssignments = allAssignmentsList || [];
        tabBox.innerHTML = `
          <div style="margin-bottom:12px;font-size:13.5px;color:var(--muted)">
            Danh sách tất cả bài tập về nhà đã giao và trạng thái nộp bài của học viên <b>${esc(userName)}</b>:
          </div>
          ${studentAssignments.length === 0 ? '<div class="hint" style="padding:16px;background:var(--sunk);border-radius:8px">Chưa có bài tập về nhà nào trong hệ thống.</div>' : `
            <div class="card" style="padding:0;overflow-x:auto">
              <table class="lb-table" style="margin:0;width:100%">
                <thead>
                  <tr>
                    <th style="padding-left:14px">Bài tập</th>
                    <th>Yêu cầu</th>
                    <th>Hạn nộp</th>
                    <th>Trạng thái</th>
                    <th style="text-align:right;padding-right:14px">Điểm & Thời gian nộp</th>
                  </tr>
                </thead>
                <tbody>
                  ${studentAssignments.map(hw => {
                    let sub = (studentHwSubs && studentHwSubs[hw.id]) || null;
                    if (!sub && targetUid === currentUid) sub = store.get('hw_sub_' + hw.id, null);
                    const isSubmitted = Boolean(sub);
                    const isPassed = sub ? sub.score >= hw.minScore : false;
                    return `
                      <tr class="lb-row">
                        <td style="padding-left:14px">
                          <div style="font-weight:700">${esc(hw.title)}</div>
                          <div style="font-size:12px;color:var(--muted)">${esc(hw.targetLabel)}</div>
                        </td>
                        <td style="font-size:12.5px">${hw.minScore > 0 ? `≥ ${hw.minScore}%` : 'Hoàn thành'}</td>
                        <td style="font-size:12px;color:var(--muted)">${fmtDue(hw.dueDate)}</td>
                        <td>
                          ${isSubmitted
                            ? (sub.isLate ? '<span class="badge warn" style="font-size:11px">⚠ Nộp muộn</span>' : '<span class="badge ok" style="font-size:11px">✓ Đúng hạn</span>')
                            : '<span class="badge" style="background:var(--sunk);color:var(--muted);font-size:11px">Chưa nộp</span>'}
                        </td>
                        <td style="text-align:right;padding-right:14px;font-size:12.5px">
                          ${isSubmitted ? `
                            <div style="font-weight:700;color:${isPassed ? 'var(--good)' : 'var(--bad)'}">${sub.score}% ${isPassed ? '(Đạt)' : '(Chưa đạt)'}</div>
                            <div class="hint" style="font-size:11px">${sub.submittedAt ? fmtDue(sub.submittedAt) : ''}</div>
                          ` : '<span style="color:var(--muted)">—</span>'}
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        `;
      } else {
        tabBox.innerHTML = `
          <div style="display:flex;flex-direction:column;gap:16px">
            <div style="background:var(--sunk);border:1px solid var(--line);border-radius:10px;padding:14px">
              <h4 style="margin:0 0 8px;font-size:15px">Instructor Feedback for Student</h4>
              <p class="hint" style="margin:0 0 8px;font-size:12.5px">The student will see this note directly on their Learner Profile page.</p>
              <textarea id="insp-teacher-note" rows="3" placeholder="e.g. Excellent work on Unit 2, focus on contrasting /iː/ and /ɪ/ vowels!" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-family:inherit;font-size:14px;box-sizing:border-box">${esc(teacherNote ? teacherNote.note || '' : '')}</textarea>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
                <span class="hint" style="font-size:12px" id="note-save-status">
                  ${teacherNote && teacherNote.updatedAt && teacherNote.updatedAt.toDate ? 'Last saved: ' + teacherNote.updatedAt.toDate().toLocaleString('en-US') : ''}
                </span>
                <button class="btn primary" id="btn-save-teacher-note" style="font-size:13px;padding:6px 14px">Save Feedback</button>
              </div>
            </div>

            <div>
              <h4 style="margin:0 0 8px;font-size:15px">Saved Vocabulary for Student (${activeReviewItems.length} words)</h4>
              ${activeReviewItems.length === 0 ? '<div class="hint">No saved vocabulary yet.</div>' : `
                <div class="row" style="gap:6px;flex-wrap:wrap">
                  ${activeReviewItems.map(x => `<span class="chip" style="background:var(--warn-soft);color:var(--warn);font-weight:600">${esc(x.w)} (${esc(x.vi)})</span>`).join('')}
                </div>
              `}
            </div>
          </div>
        `;

        tabBox.querySelector('#btn-save-teacher-note').onclick = async (e) => {
          const btn = e.currentTarget;
          const noteText = (tabBox.querySelector('#insp-teacher-note').value || '').trim();
          btn.disabled = true;
          btn.textContent = 'Saving…';
          try {
            await firestoreModules.setDoc(firestoreModules.doc(fbDb, 'users', targetUid, 'meta', 'teacher_note'), {
              note: noteText,
              authorUid: currentUser.uid,
              authorName: currentUser.displayName || currentUser.email || 'Instructor',
              updatedAt: firestoreModules.serverTimestamp()
            });
            teacherNote = { note: noteText, updatedAt: { toDate: () => new Date() } };
            tabBox.querySelector('#note-save-status').textContent = '✓ Feedback saved successfully!';
            showToast('✓ Feedback sent to student!');
          } catch (err) {
            showToast('Unable to save feedback: ' + formatFirebaseError(err));
          } finally {
            btn.disabled = false;
            btn.textContent = 'Save Feedback';
          }
        };
      }
    }

    renderInspector();
  } catch (err) {
    $('#inspector-body').innerHTML = `<div class="fb no">Error: ${esc(err.message)}</div>`;
  }
}

window.renderAdmin = renderAdmin;
window.renderAdminHomeworkView = renderAdminHomeworkView;
window.openCreateAssignmentModal = openCreateAssignmentModal;
window.openAssignmentSubmissionsModal = openAssignmentSubmissionsModal;
window.openAdminUserInspector = openAdminUserInspector;
