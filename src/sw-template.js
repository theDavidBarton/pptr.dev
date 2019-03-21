/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Enable offline GoogleAnalytics.
workbox.googleAnalytics.initialize();

workbox.precaching.precacheAndRoute([], {});

// This is needed to make SPA to work offline.
workbox.routing.registerNavigationRoute("index.html");

// Cache common github images (e.g. pptr logo).
workbox.routing.registerRoute(/^https:\/\/user-images\.githubusercontent\.com\/.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
