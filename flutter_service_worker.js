'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "8fe2ab0aec14d0aea198f0047608a104",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6ee531872a206a01003ca3311153e3c1",
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
".git/index": "648dc32bcbeea65361dd0cf288d8274e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "562f3517f4da81bd3c919002a38c5bfc",
".git/logs/refs/heads/main": "85934b1342f153973ced7e6094c326eb",
".git/logs/refs/remotes/origin/main": "fa6bfd1b99ca48173db957c4b58302c6",
".git/objects/06/20c7640aff285db2b61e5dea6335916cb595c4": "82070b140908c661f05601188b2a528c",
".git/objects/07/2a27b15b1e6ba0c33b4a8f9a7eb4f265a4ed6a": "bdc9717a85888cd965ab4306cbdb2437",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/dc61b6eb1c3c02e6fc8bfdb6857557604e3aed": "546677f12240eec581e09d6a5d8e4486",
".git/objects/10/4905f19dd8c23cd5646256269cb78a8b8d5e0d": "06a985cb27eeb5d458593c244cd16c31",
".git/objects/13/a58bb0e150b4ae76ad6bdb2e6031e90d880228": "3d06e255bab9c8c09e14f5bc7c840edd",
".git/objects/16/3b6711e80176b132cff2cb63763e5b2099415e": "63a5f617c6c9b4656164dafb897c5df3",
".git/objects/1e/d502d4ad953e60e25c0d2fc05781561207edb5": "06443f75d798ace1bb18d3bccd7ee08e",
".git/objects/24/f4afe2ff7ea1aa2ee2fe4a53743a2799302d73": "58b62d0869e3e4bf9c57b05876f180e9",
".git/objects/2a/0e623a6318c97a441d8a4b803d96851052964e": "a0a1c991f109c40bbc6550cc6cd0bc13",
".git/objects/2c/83362012d342e602e9723b05a662f2478f3bbd": "8b545e44890a048d55785e7aad7e8296",
".git/objects/3a/02ac41a20433917d2acbe8d4973aee2ae41409": "d116b2ee3dde8d6f4e7c91a894d6ec82",
".git/objects/3a/15d41610269f549c1dbd1e442577e7cc2ca759": "023f53f528a7d95040ead5aba0af9a7a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/caacbe5c2cf0a3ddd6f8ddcea68464e87c132a": "993b08739fe35943201c4ee730040053",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/c3d51697bfdc5068a00911b982c91698d33ff4": "f291799e944c7603a194774265dff194",
".git/objects/64/f19e9a0053acc9ff609ce8529ee8e985ab2838": "53219a2a20e0fa2277f4f27e9c037e05",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b380238bfd491d555540d306cc1161110a3a55": "9dff0d6936aaec06cf6ab9bc9a213453",
".git/objects/6e/c25fc37fb6c6cc169a992c465be533a20897b2": "39489474fa9741f20e0434160f44a339",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/b5c6d14de1f9d2f8d53fa6005581677e70f998": "ba138666d9bcc33b1503bf590c5be579",
".git/objects/79/1a16f9a8d6794dc8f9d02bd70dcca01d2df221": "988ea79d934c57c324626337d637f5ba",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/b7b61776ce99cdd877e759410f06279f6115ac": "91c80d35d975e26d685ad408a1a371c4",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/c0869f93141a43dca5238716d0cedccbd4a4d4": "9de6371d928336b1cb97fbfa7cfeeaf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a80e710ea9c36a626a3f042239791616f2c433": "24afb97b505dd22272394c9324c9195a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/641f254a8e69cc77c49022948d910b77857ff6": "94a4ebf2ec37d1eeaaf2668325f4c25a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/6533ed44bd6cec23ef63ccbc65ae8ba9cac9cf": "48974d4d429800475524e86a43ea8706",
".git/objects/9c/fb2376ef0db839c40c2cb874b115d876721d39": "e4364511da9c200f4410c254108559ac",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/e46b0a533508274028c5cf43e9087e1f88104e": "5141ed3e7a16dd42e09449578a70ea2a",
".git/objects/a9/4649b9d805c29117f2a9f12c7aa5bed2c3cf00": "198af2b1f0a1f0f58902f3312c45fbbf",
".git/objects/a9/800dc1f88db5b4c25e3783bbdd6796357db18c": "541d508fe15c495a3db4a8eab94ab2a0",
".git/objects/ab/1c82a14f452f0e876b2d3c9530f979b34e2f9e": "3589beb6c12edbab17b66ba72ee75d17",
".git/objects/ac/e49e213c374b4581d313e30990dafd29d4053b": "e8d8ee88597d06279875ee9a4854b06d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/f8c88371db6389d4b89946a78bc9d1715f4db1": "b95178bb254b761a1f64f0cbf31ddeb6",
".git/objects/af/f9d1d5625913ffafb29de5186b410faaabeaec": "60fee2c6c2f83632f1ec30ef98e4811f",
".git/objects/b2/19c47cf6ea080f8c351a6560ef66d1a0a6cc9d": "91bbbabacd9a71619e127cb85891e4cb",
".git/objects/b5/73abaa69b7b6a898ec42cf968d61feec263a92": "54a164d0a305e44c1548e85549870dfc",
".git/objects/b6/a40bc1642739b3988ae8fc1a5e4d14a492ff3f": "eb6aa882f65a0a141582967dc89854f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a743aa812697244a810f3f243402b1ea31159c": "f599385b1fc99689251dea47ffda2430",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c4/3cdb62e912faf8b30a1988c0adeae623e96b2b": "a7f5437e0e816bc3d1146119a23f9948",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/2df0661290568ad260b348be2d663642b7db58": "ad2fc57ea0cb70596c9f6f666417792b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/6451b821a7fc871eca2aa3399789da54d18705": "e6cae29c92c560ad2f8ca36d29a29e52",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3ee2b0288a4db7b65da9707d904dacfbddc8b8": "0dea0d9f27bf8e59d77984be92f4fec2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/dc711a6d256cd3a64b29c80b67f001bf52ce29": "69bb8f443d600bb6bd5cec91aef17b84",
".git/objects/e2/36e5fa0da68e21dd14de783bdf07e44d26ac9b": "d8bf07689c4a301d4f2b58553ff226ba",
".git/objects/e4/40c28e86d9f69d35eb1a5d9f8dbd73d0cefb78": "abcdf7f901ed243a73541e5a20368ddc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/9f1db5b9dc229aebee2751647644d50fcd47d6": "3a1dfe641deaf7635066412562aeb8d9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "dc8da0ece290f4c69da3d0f4281e7528",
".git/refs/heads/main": "dc8da0ece290f4c69da3d0f4281e7528",
".git/refs/remotes/origin/main": "647eab7e8ff7d37035f6e8ce020ed07d",
"assets/AssetManifest.bin": "b60e827399f465f8fd2839dcb8a97fba",
"assets/AssetManifest.bin.json": "d2548083744442c1ac69b0af1d9aaff8",
"assets/assets/icons/api.png": "76823c92119fe4428e4d5acb9d5e2a40",
"assets/assets/icons/color-palette.png": "9c86358a9383a07eda37fbf415670255",
"assets/assets/icons/convert.png": "5d50f393acba8479868a160254d82474",
"assets/assets/icons/env.png": "ff2110088fc2bb078a5d24ad4d8d66b3",
"assets/assets/icons/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"assets/assets/icons/language.png": "c21c667643e7a7c49a49da2cced0b2d7",
"assets/assets/icons/link.png": "79e30d430a44161f965e30bb43bdb903",
"assets/assets/icons/page.png": "1218d1c55c39d41228d8b744834d9914",
"assets/assets/icons/recycle-bin.png": "97a805b12fbc30a6bb752862ad5f19b2",
"assets/assets/images/digitelnusa.png": "e780a218b83ab31db9312f18608ea07e",
"assets/assets/l10n/app_id.arb": "b3c8edeb238be24ced7231f50d594434",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f26d94a65ed3adaeed031723cb7e1dab",
"assets/NOTICES": "6a62dfe0e6b21287dd7c077e1410cf63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f1b0b6de5f39aa8cfb6ab30e2181370e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4aaa9984d19402f46f133281a9ee8c8",
"/": "e4aaa9984d19402f46f133281a9ee8c8",
"main.dart.js": "01fac399471381e53a25349d3dfccb68",
"manifest.json": "3d6d7a19291395d9c5059778ba44607e",
"version.json": "5da29a7b61a8c632ffff1dc5658f8850"};
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
