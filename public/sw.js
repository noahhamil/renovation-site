const CACHE_NAME = 'flash-services-v1';
const urlsToCache = [
    '/',
    '/manifest.json',
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Fetch event - Network first, fallback to cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone the response
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        // Only cache same-origin requests
                        if (event.request.url.startsWith(self.location.origin)) {
                            cache.put(event.request, responseClone);
                        }
                    });
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
