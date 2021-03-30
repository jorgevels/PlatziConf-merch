/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.36bf7ce45edf5ffba22b6651add0bbed.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/maps.arcgis.com\/sharing\/rest\/content\/items\/3ddd6c4932d649d6996db442e920ceb9\/data|res.cloudinary.com/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/api-covi-19.jorgevelasquez006.now.sh\/API\/covi19.json|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/brief|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/latest?iso2=CO/, new workbox.strategies.NetworkFirst({ "cacheName":"api", plugins: [] }), 'GET');
