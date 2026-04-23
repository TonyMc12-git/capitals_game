const CACHE_NAME = "capitals-game-pwa-v11";
const APP_VERSION = "20260423-capitals11";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260423-capitals11",
  "./app.js?v=20260423-capitals10",
  "./manifest.webmanifest?v=20260423-capitals11",
  "./favicon-192.png",
  "./apple-touch-icon.png?v=20260423-capitals11",
  "./icons/icon-192-v3.png",
  "./icons/icon-512-v3.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(new Request(event.request, { cache: "reload" }))
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", responseCopy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  if (requestUrl.pathname.endsWith("/sw.js")) {
    event.respondWith(fetch(new Request(event.request, { cache: "reload" })));
    return;
  }

  event.respondWith(
    fetch(new Request(event.request, { cache: "reload" }))
      .then((response) => {
        const responseCopy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
