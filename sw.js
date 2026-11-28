// TOEIC Prep Hub: lưu trang để mở được khi mất mạng. Audio luôn tải từ mạng.
const V = 'so-tu-toeic-v60';
const CORE = [
  './',
  './index.html',
  './styles.css',
  './firebase-config.js',
  './part1-data.js',
  './part1-view.js',
  './ets-data.js',
  './ets-view.js',
  './pronunciation-data.js',
  './practice-data.js',
  './grammar-data.js',
  './vocab-clues.js',
  './practice-view.js',
  './grammar-view.js',
  './spelling-view.js',
  './pronunciation-view.js',
  './homework-service.js',
  './admin-view.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/apple-touch-icon.png',
  './img/pronun/mouth_i_long.png',
  './img/pronun/mouth_i_short.png',
  './img/pronun/mouth_u_long.png',
  './img/pronun/mouth_u_short.png',
  './img/pronun/ex21_tv.png',
  './img/pronun/ex22_clues.png',
  './img/pronun/unit2_boat.png',
  './img/pronun/unit2_56.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V).then(c => {
      return Promise.all(
        CORE.map(url => c.add(url).catch(err => console.warn('[SW] Pre-cache failed for ' + url, err)))
      );
    }).then(() => self.skipWaiting())
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

self.addEventListener('message', e => {
  if (e.data && (e.data.action === 'skipWaiting' || e.data.type === 'SKIP_WAITING')) {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);

  // 1. Audio & TTS & API dịch: để trình duyệt tự xử lý trực tiếp từ mạng
  if (
    url.pathname.endsWith('.mp3') ||
    url.hostname.includes('dict.youdao.com') ||
    url.hostname.includes('mymemory.translated.net') ||
    url.pathname.includes('translate_tts')
  ) {
    return;
  }

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
        if (res.ok) {
          const c = res.clone();
          caches.open(V).then(x => x.put('./index.html', c));
        }
        return res;
      }).catch(() => caches.match('./index.html').then(m => m || caches.match('./')))
    );
    return;
  }

  // 4. Các file script và style cùng origin (JS, MJS, CSS):
  // Network-first với cache fallback.
  // Đảm bảo mỗi khi mở/refresh (F5), trình duyệt luôn nhận được code JS mới nhất,
  // loại bỏ hoàn toàn nguy cơ lệch version ES module exports/imports.
  // Khi offline, tự động fallback về cache đã lưu.
  if (url.origin === location.origin && (url.pathname.endsWith('.js') || url.pathname.endsWith('.mjs') || url.pathname.endsWith('.css'))) {
    e.respondWith(
      fetch(r).then(res => {
        if (res.ok) {
          const c = res.clone();
          caches.open(V).then(x => x.put(r, c));
        }
        return res;
      }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match(r)))
    );
    return;
  }

  // 5. Tài nguyên tĩnh (CSS ngoại vi, fonts, hình ảnh, pinned Firebase SDK từ gstatic): Cache-first
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
