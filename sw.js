// Nome della cache (se cambi le frasi in futuro, cambia 'v1' in 'v2' per forzare l'aggiornamento sui telefoni)
const CACHE_NAME = 'fede-germania-v1';

// I file da salvare offline per far funzionare l'app in aereo
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.png' 
];

// Evento di installazione: salva i file nella cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache aperta, salvataggio file...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Evento di attivazione: pulisce le vecchie cache se aggiorni la versione
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Eliminazione vecchia cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercetta le richieste e serve i file dalla cache se disponibili
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
