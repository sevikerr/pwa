self.addEventListener('install', function (e) {
  console.log("install pwa");
  e.waitUntil(
    caches.open('video-store').then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/index.js',
        '/index.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});