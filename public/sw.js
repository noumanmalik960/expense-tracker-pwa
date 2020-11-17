
const cacheName = "cache-v1"
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/main.c3817044.chunk.css',
  '/static/js/2.5f7689fa.chunk.js',
  '/static/js/main.7c9f7f12.chunk.js',
  '/favicon.ico',
  '/manifest.json',

]


this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // cache hit
        if (response) {
          return response;
        }
        return fetch(event.request)
      })
  )
})

self.addEventListener('activate', function (event) {

  var cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});