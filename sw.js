self.addEventListener('install', function (e) {
  console.log("install pwa");
  e.waitUntil(
    caches.open('v1.1').then(function (cache) {
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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
