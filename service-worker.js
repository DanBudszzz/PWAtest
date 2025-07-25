self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-nclexbuddy-cache').then((cache) => {
      console.log('Opened cache');
      // More explicit and reliable list of files to cache
      return cache.addAll([
        './', // Caches the root of your site.
        'index.html', // Your main HTML file.
        'https://raw.githubusercontent.com/DanBudszzz/PWAtest/main/icon.png' // Cross-origin resource.
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // If the request is in the cache, return it. Otherwise, fetch from the network.
      return response || fetch(e.request);
    })
  );
});