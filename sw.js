importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

// Precache main resource so that the app can be loaded offline.
workbox.precaching.precache([
  {
    url: '/index.html',
    // Bump this number every time a new resource is added to index.html
    revision: '1',
  }
]);
workbox.routing.registerNavigationRoute('/index.html');

// Cache CSS and JS
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate(),
);

// Cache github images
workbox.routing.registerRoute(
  /^https:\/\/user-images\.githubusercontent\.com\/.*/,
  workbox.strategies.staleWhileRevalidate(),
);

// Cache images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

// Cache fonts
workbox.routing.registerRoute(
  new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst(),
);

// Enable offline GA
workbox.googleAnalytics.initialize();
