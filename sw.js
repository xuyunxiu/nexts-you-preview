// 超簡單快取：把關鍵檔案先存起來
const CACHE = "nexts-you-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json"
  // 圖片與其他檔等你上傳後，再加進來即可
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
