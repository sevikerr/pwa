self.addEventListener('install', function (e) {
  console.log("install pwa");
  e.waitUntil(
    caches.open('v1.0').then(function (cache) {
      return cache.addAll([
        '/pwa/',
        '/pwa/index.html',
        '/pwa/index.js',
        '/pwa/style.css',
        '/pwa/icon/cat.png',
        '/pwa/icon/bigger-cat.png',
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
