self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-nclexbuddy-cache').then((cache) => {
      return cache.addAll([
          '.',
          'index.html',
          'https://raw.githubusercontent.com/DanBudszzz/PWAtest/main/icon.png'
        ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});