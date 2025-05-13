const CACHE_NAME = 'retailai-cache-v2';

const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  // Asegúrate de que estos archivos existan realmente en la raíz pública de Render
  // '/icon-512.png', // Descomenta si este ícono existe
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('💾 Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.error('⚠️ Error cacheando archivos:', err);
      });
    })
  );
});

// Activación y limpieza de caches viejos
self.addEventListener('activate', event => {
  console.log('✅ Activando nuevo Service Worker');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// Intercepción de peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});