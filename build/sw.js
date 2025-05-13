const CACHE_NAME = 'retailai-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// ✅ Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('📦 Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('✅ Archivos cacheados correctamente');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Asegura que se active de inmediato
});

// ✅ Activación y limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
  console.log('🔄 Activando nuevo Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log(`🗑 Borrando caché antigua: ${name}`);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim(); // Toma control de todas las pestañas
});

// ✅ Intercepta y responde desde caché o red
self.addEventListener('fetch', (event) => {
  console.log(`➡️ Interceptando petición: ${event.request.url}`);
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
