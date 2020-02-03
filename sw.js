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
self.__precacheManifest = [
  {
    "url": "images/128.png",
    "revision": "ce25e0c14fc06ed9b012f7c0dd49e472"
  },
  {
    "url": "images/144.png",
    "revision": "a5fe00a74b8a3dda47bdba3068eca870"
  },
  {
    "url": "images/152.png",
    "revision": "8d7743bdf668292bbad5c7f2797bca24"
  },
  {
    "url": "images/192.png",
    "revision": "2d0c41bced10c3ecd029b817c96afeeb"
  },
  {
    "url": "images/384.png",
    "revision": "ca39513f9ecc019e7c40c4eccfe76355"
  },
  {
    "url": "images/48.png",
    "revision": "7eb284a0ef9cb14c05f562bec76d13c0"
  },
  {
    "url": "images/512.png",
    "revision": "524270b2f6963d1bda9341f3b8558520"
  },
  {
    "url": "images/72.png",
    "revision": "6d358f12f721ab9d9e3827c268b83e6f"
  },
  {
    "url": "images/96.png",
    "revision": "72e2fce4aa2ede53c1d2d55bc30e6857"
  },
  {
    "url": "index.html",
    "revision": "71de4991e473d962cb26b73b6652f676"
  },
  {
    "url": "src/dismissable-item.js",
    "revision": "2bb2005412532775fe699ffc452d58c8"
  },
  {
    "url": "src/file-storage.js",
    "revision": "ed8cd820634d5bb5d93637f53b04bb86"
  },
  {
    "url": "src/index.js",
    "revision": "ca95ebea114442969cf0ae5f0a559a7f"
  },
  {
    "url": "src/mwc-list-item-css.js",
    "revision": "b4f2384c6d571814abf9c6836013eab4"
  },
  {
    "url": "web_modules/@material/mwc-button.js",
    "revision": "2b8dc55f662c6a0cdd9a53abc8dd0405"
  },
  {
    "url": "web_modules/@material/mwc-dialog.js",
    "revision": "3f4fa75bf597b382b9816dc7566ca1b6"
  },
  {
    "url": "web_modules/@material/mwc-drawer.js",
    "revision": "906eccf6a5b4a112e017affc9a25a9b0"
  },
  {
    "url": "web_modules/@material/mwc-icon-button.js",
    "revision": "c5d0216484342707a11b190546f376b2"
  },
  {
    "url": "web_modules/@material/mwc-snackbar.js",
    "revision": "bbfc0b3e3255e4d6f238fd2ea9b61bdd"
  },
  {
    "url": "web_modules/@material/mwc-textfield.js",
    "revision": "1bcb21b3dfd4197396de94ad51e9b2c3"
  },
  {
    "url": "web_modules/@material/mwc-top-app-bar.js",
    "revision": "460bac506147a4575a682b16c2143a2d"
  },
  {
    "url": "web_modules/@pkijs/asn1js/asn1.js",
    "revision": "dd33731b12f69c106b08e52d0045e1b7"
  },
  {
    "url": "web_modules/@pkijs/bytestreamjs/bytestream.js",
    "revision": "14a63f32e71e81d621601e71bc521367"
  },
  {
    "url": "web_modules/@pkijs/pkijs/pkijs.js",
    "revision": "1beb9997450cd86ea4d587c41e6361ef"
  },
  {
    "url": "web_modules/@pkijs/pvutils/utils.js",
    "revision": "7ae4c12f9af7bf4b40c853d5c870b0a5"
  },
  {
    "url": "web_modules/common/_rollupPluginBabelHelpers-8ca5e321.js",
    "revision": "f13f4af3adffdb3e0c7ee95c36bc4ce9"
  },
  {
    "url": "web_modules/common/base-element-3ce1de48.js",
    "revision": "c07c2d81743de7a350a02838732a2a6b"
  },
  {
    "url": "web_modules/common/class-map-6ab3b156.js",
    "revision": "65c64d8cf967c22581eb122a3bd794c9"
  },
  {
    "url": "web_modules/common/events-bc34a64f.js",
    "revision": "7dee21ee817d855a38548523a46876cb"
  },
  {
    "url": "web_modules/common/foundation-72b817cb.js",
    "revision": "7cc998d10e5772cd1d3a444c90c97377"
  },
  {
    "url": "web_modules/common/inert-e9f7cad0.js",
    "revision": "7c6c0eece5b3f82009c54ece51a78d25"
  },
  {
    "url": "web_modules/common/lit-html-e3979997.js",
    "revision": "5d836ee2497804f5452a4403ea287b2d"
  },
  {
    "url": "web_modules/common/ripple-directive-29572fad.js",
    "revision": "bb8ebfc4f910140fa0c9c014e39cdd8a"
  },
  {
    "url": "web_modules/common/shady-render-75138fc5.js",
    "revision": "c6fd2255b32c05d0d3dd4eac19373433"
  },
  {
    "url": "web_modules/idb.js",
    "revision": "a3ea54c219190630c34a408d537ae56d"
  },
  {
    "url": "web_modules/lit-element.js",
    "revision": "dbfeca52be799021f3bc5a4a95bd22f9"
  },
  {
    "url": "web_modules/lit-html.js",
    "revision": "2a0b847cf0d9162a02c0c9e256150b64"
  },
  {
    "url": "manifest.json",
    "revision": "c973be04000bcd284af55396b3e41966"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts./, new workbox.strategies.CacheFirst({ "cacheName":"fonts", plugins: [] }), 'GET');
