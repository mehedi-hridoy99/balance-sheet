/* Amar Balance Sheet - service worker
   Strategy: network-first for the app itself, so updates always apply.
   Falls back to cache only when there's no connection (offline support). */
var CACHE = "amar-balance-sheet-v5";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", function(e){
  // Activate this new worker immediately, don't wait for old tabs to close.
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS).catch(function(){ /* ignore individual misses */ });
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      // Delete every old cache version so stale files can't linger.
      return Promise.all(keys.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;

  // NETWORK-FIRST: always try to fetch the live version. If it works, use it
  // and refresh the cache. If the network is down, fall back to the cache.
  e.respondWith(
    fetch(e.request).then(function(res){
      // Only cache good, same-origin responses.
      if(res && res.status === 200 && res.type === "basic"){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      }
      return res;
    }).catch(function(){
      // Offline: serve from cache, falling back to index.html for navigations.
      return caches.match(e.request).then(function(hit){
        return hit || caches.match("./index.html");
      });
    })
  );
});

/* Lets the page tell a freshly-installed worker to take over right away. */
self.addEventListener("message", function(e){
  if(e.data === "skip-waiting") self.skipWaiting();
});
