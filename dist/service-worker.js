if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const i = document.createElement('script');
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, r, n) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map((s) => {
            switch (s) {
              case 'exports':
                return i;
              case 'module':
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define('./service-worker.js', ['./workbox-c47f5370'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: '/assets/main.css',
          revision: '96198fa594933eb8593e3ee76698e996',
        },
        { url: '/bundle.js', revision: 'cb0078c4d7ead5fce678a3cc5a43122f' },
        {
          url: '/bundle.js.LICENSE.txt',
          revision: '3c73c585782ac05880c0f89bcfdbba5a',
        },
      ],
      {}
    ),
    e.registerRoute(
      /https:\/\/maps.arcgis.com\/sharing\/rest\/content\/items\/3ddd6c4932d649d6996db442e920ceb9\/data|res.cloudinary.com/,
      new e.CacheFirst({ cacheName: 'images', plugins: [] }),
      'GET'
    ),
    e.registerRoute(
      /https:\/\/api-covi-19.jorgevelasquez006.now.sh\/API\/covi19.json|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/brief|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/latest?iso2=CO/,
      new e.NetworkFirst({ cacheName: 'api', plugins: [] }),
      'GET'
    );
});
