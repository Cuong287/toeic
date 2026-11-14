// Sổ từ TOEIC: lưu trang để mở được khi mất mạng. Audio luôn tải từ mạng.
const V = 'so-tu-toeic-v3';
const CORE = [
  './',
  './index.html',
  './firebase-config.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  // Chỉ xóa các cache cũ có tiền tố 'so-tu-toeic-' để không ảnh hưởng ứng dụng khác trên cùng origin
  e.waitUntil(
    caches.keys().then(ks =>
      Promise.all(
        ks.filter(k => k.startsWith('so-tu-toeic-') && k !== V).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);

  // 1. Audio: để trình duyệt tự xử lý (tua, tải từng phần)
  if (url.pathname.endsWith('.mp3')) return;

  // 2. Network-only cho các API của Firebase Auth, Firestore và Cloud Functions
  if (
    url.hostname === 'firestore.googleapis.com' ||
    url.hostname === 'identitytoolkit.googleapis.com' ||
    url.hostname === 'securetoken.googleapis.com' ||
    url.hostname.endsWith('.cloudfunctions.net') ||
    url.hostname.endsWith('.run.app')
  ) {
    return;
  }

  // 3. Navigation và index.html: Network-first với fallback cache
  if (r.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) {
    e.respondWith(
      fetch(r).then(res => {
        const c = res.clone();
        caches.open(V).then(x => x.put('./index.html', c));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 4. firebase-config.js: Network-first để cập nhật cấu hình ngay khi người dùng sửa file
  if (url.pathname.endsWith('firebase-config.js')) {
    e.respondWith(
      fetch(r).then(res => {
        if (res.ok) {
          const c = res.clone();
          caches.open(V).then(x => x.put(r, c));
        }
        return res;
      }).catch(() => caches.match(r))
    );
    return;
  }

  // 5. Tài nguyên tĩnh (CSS, fonts, pinned Firebase SDK từ gstatic): Cache-first
  e.respondWith(
    caches.match(r).then(m => m || fetch(r).then(res => {
      const isAllowedDomain = (
        url.origin === location.origin ||
        url.hostname === 'fonts.googleapis.com' ||
        url.hostname === 'fonts.gstatic.com' ||
        (url.hostname === 'www.gstatic.com' && url.pathname.includes('/firebasejs/'))
      );
      if (res.ok && isAllowedDomain) {
        const c = res.clone();
        caches.open(V).then(x => x.put(r, c));
      }
      return res;
    }))
  );
});
