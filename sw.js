self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cantine-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "stock.html",
        "historique.html",
        "historique-stock.html",
        "bilan.html",
        "parametres.html",
        "style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});