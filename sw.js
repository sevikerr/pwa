self.addEventListener('install', function (e) {
  console.log("install pwa");
  e.waitUntil(
    caches.open('video-store').then(function (cache) {
      return cache.addAll([
        'index.html',
        'style.css',
        'index.js',
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