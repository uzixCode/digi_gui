'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "6d4598427314718dd78455461f5619c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "78a56b30f94a382ca19a3c5174af5909",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "397c388f2a12ab6326ebaa9c6564b69b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4023ca146c41a78a12afa2149df0471c",
".git/logs/refs/heads/main": "ec77ecaf42cf759c1403d201194792fe",
".git/logs/refs/heads/master": "c764ba9c8b98520cee791f1ff25d5181",
".git/logs/refs/remotes/origin/main": "6bd8ded27eceeb1f4b68b4c07440f733",
".git/logs/refs/remotes/origin/master": "296b024a93137b305f4673089234a915",
".git/objects/05/f1ec85cc1fbe0bcf6d5f86483cf7ef1e24e6f5": "daeddc61cdc7471b4cc57cf76abc5957",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/7f9bdda732b09bcca1c517f8f546bfcc94d8e3": "066da9e6ddfe92665d7392350ecdae9f",
".git/objects/16/3b6711e80176b132cff2cb63763e5b2099415e": "63a5f617c6c9b4656164dafb897c5df3",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/28/b3aaca6e0761246c17dc33c23436fe0da16764": "914ae2a4e27a21a4b999e6b817e9952e",
".git/objects/2c/83362012d342e602e9723b05a662f2478f3bbd": "8b545e44890a048d55785e7aad7e8296",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/c1142a8fbf36092cefaf6f358e32fbbdc66f1e": "92d4f854268cc32dc088af33bb21e3e4",
".git/objects/3a/15d41610269f549c1dbd1e442577e7cc2ca759": "023f53f528a7d95040ead5aba0af9a7a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/21e8701ce213183c120e73e20768de8c6c6e23": "3c71ebc9cc9bbd820756b8714d6c6e87",
".git/objects/3f/caacbe5c2cf0a3ddd6f8ddcea68464e87c132a": "993b08739fe35943201c4ee730040053",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/0a72326a8e995ce09c8cd721a1b6d698b76605": "d2f78e7e3bf94c7e483a713a66ee6487",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/62/2a9b5c8278fa69f21287cf51c02a8da4f121c3": "e9b0534c803663f622871f5177b150d9",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/c5e7e44d5d0440f6589af19e00bba9c794e847": "8a97fe3a7c820dc57e4bd78416b4e1ed",
".git/objects/72/b5c6d14de1f9d2f8d53fa6005581677e70f998": "ba138666d9bcc33b1503bf590c5be579",
".git/objects/80/26904b14949c8e55b3361fcc809e63ace711f9": "4fc1f69d5d950dfd574900777f9c546a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/c0869f93141a43dca5238716d0cedccbd4a4d4": "9de6371d928336b1cb97fbfa7cfeeaf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/485d5b02211173dad622a5cd53a74e46832d9f": "141a7bb709171c2fa0203474112336b6",
".git/objects/a7/e46b0a533508274028c5cf43e9087e1f88104e": "5141ed3e7a16dd42e09449578a70ea2a",
".git/objects/ac/8403ec5330738a8123842058d0fd4cda05346d": "41fcb5777225a4c3373200876e2d5ef7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/73abaa69b7b6a898ec42cf968d61feec263a92": "54a164d0a305e44c1548e85549870dfc",
".git/objects/b6/a40bc1642739b3988ae8fc1a5e4d14a492ff3f": "eb6aa882f65a0a141582967dc89854f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/a80e279cd794f99eb906dde7a494dd61a00947": "383bbc781438a605a384b4d7613c3287",
".git/objects/c7/6219fdd8c9f9bc3b4316f42b16577a25bc5c5b": "86f6df198b3167149664bdd905f0e50b",
".git/objects/c8/2cce1671d126fd51b603c91915512ca9917d17": "da351930a37cb5220cf60d5dfcdaddef",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/36e5fa0da68e21dd14de783bdf07e44d26ac9b": "d8bf07689c4a301d4f2b58553ff226ba",
".git/objects/e4/8b3423e0a610986732aef9573d12e6acff5651": "592d7974d188c6085ef93e0fb26d3fcf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/9f1db5b9dc229aebee2751647644d50fcd47d6": "3a1dfe641deaf7635066412562aeb8d9",
".git/objects/e9/f92afffac1f77f4452a79ea90949dccedc9c3d": "bc17bc75850469e8a72f72f48e7aec6b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bfc4089ae249871e49a8f33dba74bbb3bfd8fe": "3adc904abd7734fde7bab0f050f89223",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.idx": "248ee8b816782fee3c0f6aa8deed2659",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.pack": "d5acf3bfe2106eda5f75d97b1f993336",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.rev": "c86994e8fbd06d6a9a0f6f396a2720bd",
".git/refs/heads/main": "9c54b1f49717e19d5dbab79416746547",
".git/refs/heads/master": "6dd1bcb0672afe2bfe56ac116b1ace68",
".git/refs/remotes/origin/main": "9c54b1f49717e19d5dbab79416746547",
".git/refs/remotes/origin/master": "6dd1bcb0672afe2bfe56ac116b1ace68",
"assets/AssetManifest.bin": "4154b1d5f6a260a47269f1bebde693d9",
"assets/AssetManifest.bin.json": "d7ff1a992cce9f21bdd8b5263cf241e4",
"assets/AssetManifest.json": "5c1baf68fd2dac4d3c863ef7fe4fa963",
"assets/assets/icons/api.png": "76823c92119fe4428e4d5acb9d5e2a40",
"assets/assets/icons/color-palette.png": "9c86358a9383a07eda37fbf415670255",
"assets/assets/icons/convert.png": "5d50f393acba8479868a160254d82474",
"assets/assets/icons/env.png": "ff2110088fc2bb078a5d24ad4d8d66b3",
"assets/assets/icons/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"assets/assets/icons/language.png": "c21c667643e7a7c49a49da2cced0b2d7",
"assets/assets/icons/link.png": "79e30d430a44161f965e30bb43bdb903",
"assets/assets/icons/page.png": "1218d1c55c39d41228d8b744834d9914",
"assets/assets/images/digitelnusa.png": "e780a218b83ab31db9312f18608ea07e",
"assets/assets/l10n/app_id.arb": "b3c8edeb238be24ced7231f50d594434",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0209a1b7eb24dc7ee0373916f7815d5b",
"assets/NOTICES": "d3f7cc0702eeb1165f093b59b4773453",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5aae0665248eb53a162126dd68415951",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4aaa9984d19402f46f133281a9ee8c8",
"/": "e4aaa9984d19402f46f133281a9ee8c8",
"main.dart.js": "12e3e4fa18dcde002fe6df8dc74acc4b",
"manifest.json": "3d6d7a19291395d9c5059778ba44607e",
"version.json": "2e2439d1664bb050a932eb4bc75bf086"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
