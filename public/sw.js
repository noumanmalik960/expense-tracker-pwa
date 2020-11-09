
const cacheName = "cache-v1"
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
]


this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(urlsToCache)
    })
  )
})

// this.addEventListener('fetch', (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.match(event.request).then((result) => {
//         if (result)
//           return result
//         // If its not present in cache then go fetch from api
//         let requestUrl = event.request.clone();
//         return fetch(requestUrl)
//       })
//     )
//   }
// })

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