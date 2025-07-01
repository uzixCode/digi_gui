'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "acd73aba987ecb7b48670b879098fcad",
".git/config": "6d4598427314718dd78455461f5619c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2bc2532bca31fce89d0f5e33529132d2",
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
".git/index": "fc75eac89a78e98fda5eb202166a57fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e816f1faa9978b38693d91c5f73f29a",
".git/logs/refs/heads/main": "e42e9498c2011941d26ef4724d01c032",
".git/logs/refs/heads/master": "c764ba9c8b98520cee791f1ff25d5181",
".git/logs/refs/remotes/origin/main": "9e9a8f4f36117b6f7a58fddf1baaa439",
".git/logs/refs/remotes/origin/master": "296b024a93137b305f4673089234a915",
".git/objects/00/989b8736d1ee753f5b294a8fe5ddafde9183b3": "706077a846d9ced4e49ec8dc8f618330",
".git/objects/05/f1ec85cc1fbe0bcf6d5f86483cf7ef1e24e6f5": "daeddc61cdc7471b4cc57cf76abc5957",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/7f9bdda732b09bcca1c517f8f546bfcc94d8e3": "066da9e6ddfe92665d7392350ecdae9f",
".git/objects/16/3b6711e80176b132cff2cb63763e5b2099415e": "63a5f617c6c9b4656164dafb897c5df3",
".git/objects/1d/f3a74db7d85b22f14a3500131f7e7669b9df06": "9011b5e598cf6ec4b32e967db1f8eaf6",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/26/cfbd4ff8426232a6b67c9ce4a7607651289c5e": "136001ec3ecedd3c5325408db80378cb",
".git/objects/28/b3aaca6e0761246c17dc33c23436fe0da16764": "914ae2a4e27a21a4b999e6b817e9952e",
".git/objects/2c/83362012d342e602e9723b05a662f2478f3bbd": "8b545e44890a048d55785e7aad7e8296",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/04f254d5e7e1eda6ecd46a8fdcd422fb78404f": "804a04fa9f4916228c901fdff702cabd",
".git/objects/38/c1142a8fbf36092cefaf6f358e32fbbdc66f1e": "92d4f854268cc32dc088af33bb21e3e4",
".git/objects/3a/15d41610269f549c1dbd1e442577e7cc2ca759": "023f53f528a7d95040ead5aba0af9a7a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/21e8701ce213183c120e73e20768de8c6c6e23": "3c71ebc9cc9bbd820756b8714d6c6e87",
".git/objects/3f/caacbe5c2cf0a3ddd6f8ddcea68464e87c132a": "993b08739fe35943201c4ee730040053",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/191f83eddf41d48316d22a2c33353a0cad5d43": "8cf507f2ba2d9e78806f8e05756c9cdd",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/cc7598b9eee8d0fd000c8f85a739216932f28c": "1fa217a8aacfe3a83789655448231797",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/51/0a72326a8e995ce09c8cd721a1b6d698b76605": "d2f78e7e3bf94c7e483a713a66ee6487",
".git/objects/51/f95b8065a2b5d4a4bddc7cda0d09841a74547d": "60b85abf75793a2a7ab6835c9b972212",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/62/2a9b5c8278fa69f21287cf51c02a8da4f121c3": "e9b0534c803663f622871f5177b150d9",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/c5e7e44d5d0440f6589af19e00bba9c794e847": "8a97fe3a7c820dc57e4bd78416b4e1ed",
".git/objects/6e/dcfeced952135ed0e8a1b8eaa4bd503ca0e075": "a9016c9acd68f29eeef502b41a825158",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/b5c6d14de1f9d2f8d53fa6005581677e70f998": "ba138666d9bcc33b1503bf590c5be579",
".git/objects/80/26904b14949c8e55b3361fcc809e63ace711f9": "4fc1f69d5d950dfd574900777f9c546a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/c0869f93141a43dca5238716d0cedccbd4a4d4": "9de6371d928336b1cb97fbfa7cfeeaf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8f97051f1cbed1f5b63835a6f335b4c4c0cacb": "3173e3db1486677d27b0d40fd1764c59",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/e6d7dbfbfe6f5444eb31817f3ef5ae3885de4e": "c502b0d0fda39a71a6541f1cf73c1c08",
".git/objects/98/0a8eb1f9bc814f41e3987969a58ec5723e949a": "51732b6c95ea7f978229d8eecad600f6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/485d5b02211173dad622a5cd53a74e46832d9f": "141a7bb709171c2fa0203474112336b6",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a7/e46b0a533508274028c5cf43e9087e1f88104e": "5141ed3e7a16dd42e09449578a70ea2a",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/ac/8403ec5330738a8123842058d0fd4cda05346d": "41fcb5777225a4c3373200876e2d5ef7",
".git/objects/ae/f8c88371db6389d4b89946a78bc9d1715f4db1": "b95178bb254b761a1f64f0cbf31ddeb6",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/73abaa69b7b6a898ec42cf968d61feec263a92": "54a164d0a305e44c1548e85549870dfc",
".git/objects/b6/1de0e454760bb34bf1c6496ef2d810315d0143": "23df8a375d1c77c1ca33796b719858e0",
".git/objects/b6/a40bc1642739b3988ae8fc1a5e4d14a492ff3f": "eb6aa882f65a0a141582967dc89854f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/a80e279cd794f99eb906dde7a494dd61a00947": "383bbc781438a605a384b4d7613c3287",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c7/6219fdd8c9f9bc3b4316f42b16577a25bc5c5b": "86f6df198b3167149664bdd905f0e50b",
".git/objects/c8/2cce1671d126fd51b603c91915512ca9917d17": "da351930a37cb5220cf60d5dfcdaddef",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/6451b821a7fc871eca2aa3399789da54d18705": "e6cae29c92c560ad2f8ca36d29a29e52",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/dc711a6d256cd3a64b29c80b67f001bf52ce29": "69bb8f443d600bb6bd5cec91aef17b84",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/36e5fa0da68e21dd14de783bdf07e44d26ac9b": "d8bf07689c4a301d4f2b58553ff226ba",
".git/objects/e4/8b3423e0a610986732aef9573d12e6acff5651": "592d7974d188c6085ef93e0fb26d3fcf",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/9f1db5b9dc229aebee2751647644d50fcd47d6": "3a1dfe641deaf7635066412562aeb8d9",
".git/objects/e9/f92afffac1f77f4452a79ea90949dccedc9c3d": "bc17bc75850469e8a72f72f48e7aec6b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bfc4089ae249871e49a8f33dba74bbb3bfd8fe": "3adc904abd7734fde7bab0f050f89223",
".git/objects/f0/3dffcf0dbd9335826dd07d2ec3a38d46856522": "f3dc8a7724072774328efecb556dc304",
".git/objects/f1/1f324a7672e2c34e49c9995902051d49c5177a": "df3b42b84c47164d0f65b667e4244931",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e3ee166a16d66b8b493c8e1b7abd2a169d359a": "69eb825d72b519cb29d12947c9fa9040",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.idx": "248ee8b816782fee3c0f6aa8deed2659",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.pack": "d5acf3bfe2106eda5f75d97b1f993336",
".git/objects/pack/pack-4970e3af66a56f57d0a9637b1d0c548acd578a21.rev": "c86994e8fbd06d6a9a0f6f396a2720bd",
".git/refs/heads/main": "c1259fc3212e672c113810a16a24795b",
".git/refs/heads/master": "6dd1bcb0672afe2bfe56ac116b1ace68",
".git/refs/remotes/origin/main": "c1259fc3212e672c113810a16a24795b",
".git/refs/remotes/origin/master": "6dd1bcb0672afe2bfe56ac116b1ace68",
"assets/AssetManifest.bin": "b60e827399f465f8fd2839dcb8a97fba",
"assets/AssetManifest.bin.json": "d2548083744442c1ac69b0af1d9aaff8",
"assets/AssetManifest.json": "30d61443988d6a7442c0531b2269ca4e",
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
"digi_gui/.git/config": "2f121cf0b702c654b56bc781c4e41a9b",
"digi_gui/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"digi_gui/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"digi_gui/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"digi_gui/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"digi_gui/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"digi_gui/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"digi_gui/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"digi_gui/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"digi_gui/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"digi_gui/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"digi_gui/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"digi_gui/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"digi_gui/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"digi_gui/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"digi_gui/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"digi_gui/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"digi_gui/.git/index": "64ae54f630ca5ea54e94c841e5c152fc",
"digi_gui/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"digi_gui/.git/logs/HEAD": "ddc1b0f50ebe22fc8f9233d60f04956d",
"digi_gui/.git/logs/refs/heads/main": "ddc1b0f50ebe22fc8f9233d60f04956d",
"digi_gui/.git/logs/refs/remotes/origin/HEAD": "ddc1b0f50ebe22fc8f9233d60f04956d",
"digi_gui/.git/objects/pack/pack-c6e59eb92053b0c4a36bfaf133721030fa2de567.idx": "2a9aca16c1ad9485fd1518a26e0715cc",
"digi_gui/.git/objects/pack/pack-c6e59eb92053b0c4a36bfaf133721030fa2de567.pack": "5ec85c438cd52675ea9d0207edd4cab5",
"digi_gui/.git/objects/pack/pack-c6e59eb92053b0c4a36bfaf133721030fa2de567.rev": "74ec2b040c2eaf988fe96922a994ba88",
"digi_gui/.git/packed-refs": "4839fa68a8afa4e9d814cead6ef26659",
"digi_gui/.git/refs/heads/main": "c1259fc3212e672c113810a16a24795b",
"digi_gui/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"digi_gui/assets/AssetManifest.bin": "4154b1d5f6a260a47269f1bebde693d9",
"digi_gui/assets/AssetManifest.bin.json": "d7ff1a992cce9f21bdd8b5263cf241e4",
"digi_gui/assets/AssetManifest.json": "5c1baf68fd2dac4d3c863ef7fe4fa963",
"digi_gui/assets/assets/icons/api.png": "76823c92119fe4428e4d5acb9d5e2a40",
"digi_gui/assets/assets/icons/color-palette.png": "9c86358a9383a07eda37fbf415670255",
"digi_gui/assets/assets/icons/convert.png": "5d50f393acba8479868a160254d82474",
"digi_gui/assets/assets/icons/env.png": "ff2110088fc2bb078a5d24ad4d8d66b3",
"digi_gui/assets/assets/icons/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"digi_gui/assets/assets/icons/language.png": "c21c667643e7a7c49a49da2cced0b2d7",
"digi_gui/assets/assets/icons/link.png": "79e30d430a44161f965e30bb43bdb903",
"digi_gui/assets/assets/icons/page.png": "1218d1c55c39d41228d8b744834d9914",
"digi_gui/assets/assets/images/digitelnusa.png": "e780a218b83ab31db9312f18608ea07e",
"digi_gui/assets/assets/l10n/app_id.arb": "e169d7baee977037130fbe0a740c8576",
"digi_gui/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"digi_gui/assets/fonts/MaterialIcons-Regular.otf": "0209a1b7eb24dc7ee0373916f7815d5b",
"digi_gui/assets/NOTICES": "49f1a6140a052f2dfc54fedbbb45c9a9",
"digi_gui/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"digi_gui/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"digi_gui/canvaskit/canvaskit.js": "3709bd882f416107176c2ab8730ca757",
"digi_gui/canvaskit/canvaskit.js.symbols": "f1d636564735db5b835f7f4fa1591189",
"digi_gui/canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"digi_gui/canvaskit/chromium/canvaskit.js": "27f7d5845fb45327c09497b285a0e864",
"digi_gui/canvaskit/chromium/canvaskit.js.symbols": "79cf7fcf3b3ef820a06fe8690bf8cf79",
"digi_gui/canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"digi_gui/canvaskit/skwasm.js": "e2e4523ba5872fa065533dcdd7ff5246",
"digi_gui/canvaskit/skwasm.js.symbols": "c25cb0d88ad70a2ed79a5cef737a4581",
"digi_gui/canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"digi_gui/canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"digi_gui/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"digi_gui/flutter.js": "5635bfa3ff7e8e305d9f2b1c10aaee5a",
"digi_gui/flutter_bootstrap.js": "51f44b282fa314624967e5eeb9a9b141",
"digi_gui/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"digi_gui/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"digi_gui/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"digi_gui/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"digi_gui/index.html": "e4aaa9984d19402f46f133281a9ee8c8",
"digi_gui/main.dart.js": "b84c7fd18ace5da3ec43b3c27d85f9ef",
"digi_gui/manifest.json": "3d6d7a19291395d9c5059778ba44607e",
"digi_gui/version.json": "2e2439d1664bb050a932eb4bc75bf086",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "377facb480c97b217aa5fea04371b25c",
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
