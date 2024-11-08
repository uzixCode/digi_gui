'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "2c8aa8a0a333c595c1e75fdf9e7eda97",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f38efca53a3968de861638ca10a2b532",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b0b16120d5189d948500c620c98f707d",
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
".git/index": "fca1f060360f9b5d644012ccef61a55b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89b30eee10950056179d0735f4412fd5",
".git/logs/refs/heads/main": "89b30eee10950056179d0735f4412fd5",
".git/logs/refs/remotes/origin/main": "24e0e0bb65165f654966742cb7062847",
".git/logs/refs/remotes/origin/master": "80609373bce3624a7b015ee03dfbebd0",
".git/MERGE_HEAD": "6dd1bcb0672afe2bfe56ac116b1ace68",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "8a8bad6928a1e66dc82b823ea85623d2",
".git/objects/05/f1ec85cc1fbe0bcf6d5f86483cf7ef1e24e6f5": "daeddc61cdc7471b4cc57cf76abc5957",
".git/objects/06/ab660470dffbdb1383e2e7a9ebeb07ad2e2e2e": "dc5c0f32ac1d3c68bd4fceeff1bd4eda",
".git/objects/07/1b6ffade20206cb5c3cc47ed06710bcb275e62": "db185e9da5f8abd47d01859f69177ee2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/7f9bdda732b09bcca1c517f8f546bfcc94d8e3": "066da9e6ddfe92665d7392350ecdae9f",
".git/objects/12/049c1696f58f94e7d79dbe6666eae8001c21b5": "807151fdf1fb4cbfd22e6388160540dc",
".git/objects/16/3b6711e80176b132cff2cb63763e5b2099415e": "63a5f617c6c9b4656164dafb897c5df3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/85c479acb716c27e91118f33d040e0a26b9c7b": "1287391171aa824534d309c44cc6be6d",
".git/objects/16/aeed83ae38abc260e2617fd47dc3fd1e3a56ae": "ec5ad04b2f9b0a06f8d123fd45f4241b",
".git/objects/18/72e1b2fc3bb2e21d425973862980f91b8e0870": "ce5e5a69d612be4a2fa4abca36c0b094",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/76b2ec7327ac23f44bc1670b86b1e625815da5": "e42a76be18e31205b6b0378490309fbb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/29ced01292a3a6e9f15fbab1d294402c36208c": "9a8050e5434f24646687a1605e0818bd",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/24/6cc1d8501af985d996d70288f0d7895c6bc1e5": "7412387202eaccd46b0fda28972191bb",
".git/objects/28/b3aaca6e0761246c17dc33c23436fe0da16764": "914ae2a4e27a21a4b999e6b817e9952e",
".git/objects/2c/83362012d342e602e9723b05a662f2478f3bbd": "8b545e44890a048d55785e7aad7e8296",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/c1142a8fbf36092cefaf6f358e32fbbdc66f1e": "92d4f854268cc32dc088af33bb21e3e4",
".git/objects/39/1af1aa5df31414b6c51324bebb1d55b09104dc": "71f70fbe55581bd599f566982d46c6f7",
".git/objects/3a/15d41610269f549c1dbd1e442577e7cc2ca759": "023f53f528a7d95040ead5aba0af9a7a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/62fb08845772ae24372972a9a3fc43f4d54809": "93f3b941b57f0172e2537f544e722609",
".git/objects/3d/c00a1acc64e7cddcb26e21556d41867c6663c7": "0f0065247c70d85b4640b493ff87aa26",
".git/objects/3e/df01fc9e7a60b97d497ff8165dc7ac8f4d671e": "590eaebe086cfab17daa17b7cf91797a",
".git/objects/3f/80f7c9a92f7e99637c762325f2772cb6e32d52": "ed74d5ef1af117c19624d7838a7e2fcc",
".git/objects/3f/caacbe5c2cf0a3ddd6f8ddcea68464e87c132a": "993b08739fe35943201c4ee730040053",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f8bae69047dac7b3476ca2f6398a5056e154e8": "6b0458abcde04a22ebc7b2ce867b8db8",
".git/objects/42/dc1cda6077d6906f3a7db39144337c41e579a1": "0ea94dfc12d7a740a62d424ddf04a91d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/76261a97be8ca232a87b402dfb7199172fe220": "44cbc115f1f4435338ea16391fbfb8ba",
".git/objects/4b/4fc837b2c6e16829ccace7431cfe3cf3134d01": "d61a19609652909b1e86f18bf0e6bf86",
".git/objects/4e/6df2a8cb154687831191a1ab71c7cdb4e3950e": "1296aaea585672689837b767e59186ec",
".git/objects/51/0a72326a8e995ce09c8cd721a1b6d698b76605": "d2f78e7e3bf94c7e483a713a66ee6487",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/ac5d342093c9b68a2f2dc3c48e8b5fc7b5320c": "6e9ee4d9106fffb655ee0b1763a8122d",
".git/objects/5d/6b4f2b59b9727cc2f8a9c330998041d8ba24c6": "afd3cdb09271962edf025d1010ec5d7a",
".git/objects/5f/8be4a6226488826a96fec5dd966ed655a9a8c9": "f47e01be1c0bb807b896b55ab04607a7",
".git/objects/60/429a8d6fa968a3bc237fe789e52719ac65af24": "838eb4df88f55c4423fbb195eb2d457a",
".git/objects/62/d902b5229961d5cca1cb6e0056a4614e6287ae": "433a05fce0cda5ba0a08717409bd588b",
".git/objects/65/6be13dcb6c7626db7cd5eede16062ed92e7adb": "7c46c505641e4bcbf6364781d6dba4ce",
".git/objects/69/80b0019854e09a9be6ab9c558e827ab27c7be4": "4b883097453b2c184797c1524f2d08d6",
".git/objects/6a/717885850c4b49d61545961522f063a1998c06": "91272727bffbf3f32cd067546a24519c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/c5e7e44d5d0440f6589af19e00bba9c794e847": "8a97fe3a7c820dc57e4bd78416b4e1ed",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/72/b5c6d14de1f9d2f8d53fa6005581677e70f998": "ba138666d9bcc33b1503bf590c5be579",
".git/objects/72/cdbc90c67613aa57ec1b3d67855df3e6cb84c3": "abba71d0aeceac6a430ac5d92e2c8ac1",
".git/objects/76/a66e04512be62c0b24476843df0af87a8313cf": "36226934587a2e2eaa3a9a6845c11d7c",
".git/objects/7a/c5910c0eadfd2ef09dd77867d31b5c91ae4bd6": "27b386ba168fb35ab553972b26f6d2d5",
".git/objects/7d/25e0faf56b22f85ebad52cc0f584b0da207233": "7fc4856cf88f40d72b9ebe2997a74baf",
".git/objects/80/20df6f768de08e8f279fc57c952dcdfe28ffba": "99f775792a75daa436c256603770c46f",
".git/objects/80/26904b14949c8e55b3361fcc809e63ace711f9": "4fc1f69d5d950dfd574900777f9c546a",
".git/objects/80/d0243f3b9e13c98c38c2c8abbe02f3580f2986": "3a991d776d897d445d36928a28d3698e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/c0869f93141a43dca5238716d0cedccbd4a4d4": "9de6371d928336b1cb97fbfa7cfeeaf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/39e5a2ea38b4c49db1d5c2ec77d7f9dc159339": "58718287b1ef0834c62f8805f70fea3e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5313905c57daef2d520374e465137dc09d5f4d": "169a27968bd988913090222ab83d9c12",
".git/objects/8e/653fea163d0feb070ddd2932d73f98b4c6bebf": "f10efeb68d6e54d6f566a12d54d411a0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/cbd74f01e26da01b293355b1c464ee2d95dc13": "113ee048a3095f324406295a0ea58336",
".git/objects/97/27ef3e60b7290db0f15bfd6d5338ba54495ce6": "eefd94d7da02ffa923191bb011c23376",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/471df0cc02f312a3a08bfc98590077b7396836": "74efac63252526c1bd12351b6450a616",
".git/objects/9a/485d5b02211173dad622a5cd53a74e46832d9f": "141a7bb709171c2fa0203474112336b6",
".git/objects/9d/51b2ee59cfd14295b6df803943e4e9a7efc797": "4e0c16b9ea038bf9b95a1b44d120b4e8",
".git/objects/a0/7a7e17caff57a7b13c7ce7fa3b26b92fd0e604": "47cd71c983a94f0d9c5c7d122739ae8a",
".git/objects/a3/460b2db696178073e26ffc82383f659210f87a": "122fc80ab4988ce5cd08cabac9a24a36",
".git/objects/a3/97c67b89a8ab05367c8d09623fdd44a3c93d1e": "c0b28a8248133833165ca158fa8b88cc",
".git/objects/a5/79a0892827df8d34f6fa67df0c72b74d355840": "ee3016ecd6c33e6a6366937c2effb6d1",
".git/objects/a5/fbd09095d1e25aed23c69f163e998e482e2771": "8c4136a790177c53105df390dcde60fa",
".git/objects/a7/e46b0a533508274028c5cf43e9087e1f88104e": "5141ed3e7a16dd42e09449578a70ea2a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/0cdd13144a6f116ef9a19831f236becb3faae0": "561dff1c935eb80f000bf18d61af6b01",
".git/objects/b5/73abaa69b7b6a898ec42cf968d61feec263a92": "54a164d0a305e44c1548e85549870dfc",
".git/objects/b6/a40bc1642739b3988ae8fc1a5e4d14a492ff3f": "eb6aa882f65a0a141582967dc89854f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/4fb73ffddd514c5a2a2dda0b573e71c1b85c11": "6188d49e703b106752fcc2e6e4698c15",
".git/objects/bc/a80e279cd794f99eb906dde7a494dd61a00947": "383bbc781438a605a384b4d7613c3287",
".git/objects/c4/d6bee1ca761230aec4f765a3f6cd3b34aaba4e": "3e0d85d70141b753c33e1d44a852ea8c",
".git/objects/c4/f1a938602c95238569fdec73280eca91e22099": "e5d0fd06dc85385916bbb317b4bd81fc",
".git/objects/c5/069e5a4201f4dabe4d29d4c44c7a81430e70ca": "8aa0569737bcecb0e8ef84943c1b9b9f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/69e9842abf10d440d3763ef8995c6da00863b1": "980369dda0a9702f53f6eedc946d33a7",
".git/objects/ce/b9d9e15d1e95afbeffb6ffe8cbd0c351954429": "42c9d29f5fa33ab128c5a5482446d30b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/c1ea26aa27b5a157fcde92f4f9ab30e541a125": "c65807c32555d34938ce5511f38b35e9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/cca87efb9e1cf1986afbd6c64e4f4b21b74a75": "5b892351b8ead88eca2a33f058c03ba9",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e1/cb1e001811329e97bee0e0870b043e0a656aac": "9361f6a99bf06d3b5a41d3fdaad0b2ce",
".git/objects/e2/36e5fa0da68e21dd14de783bdf07e44d26ac9b": "d8bf07689c4a301d4f2b58553ff226ba",
".git/objects/e4/8b3423e0a610986732aef9573d12e6acff5651": "592d7974d188c6085ef93e0fb26d3fcf",
".git/objects/e6/3aaa6366c37ecdbfcffd21841a3a63b228a209": "5f7230624d2305a5386b2ad98ed722ef",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/9f1db5b9dc229aebee2751647644d50fcd47d6": "3a1dfe641deaf7635066412562aeb8d9",
".git/objects/e9/f92afffac1f77f4452a79ea90949dccedc9c3d": "bc17bc75850469e8a72f72f48e7aec6b",
".git/objects/eb/4d5360a05b57171a9e5f7efda3d9b0cb4f1976": "025d235f935adad0e839a29295c25af4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bfc4089ae249871e49a8f33dba74bbb3bfd8fe": "3adc904abd7734fde7bab0f050f89223",
".git/objects/f0/5ee52f6870f76847a0b8399e51e3823875a764": "32fedbbec1a998ae6dd2e49d583b2712",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/30e0be044dfbb73eca3d87b041f3ba94b76fd6": "a05722402250fa14f30ef8e2b21c9306",
".git/objects/fa/5e4473886973a3d3eff9db4d067838c08d1553": "aaad7ca378510219c8ff7fe9e46d2ab0",
".git/ORIG_HEAD": "0511eb2bee43c4e2796ba2142911686d",
".git/refs/heads/main": "0511eb2bee43c4e2796ba2142911686d",
".git/refs/remotes/origin/main": "0511eb2bee43c4e2796ba2142911686d",
".git/refs/remotes/origin/master": "6dd1bcb0672afe2bfe56ac116b1ace68",
"assets/AssetManifest.bin": "18e059b90a7c7726ac1a48b5973e3704",
"assets/AssetManifest.bin.json": "3bc5dc83b0d72b40c3cdf32479637134",
"assets/AssetManifest.json": "1ce1a3c32fec3f519c5588a894d614b5",
"assets/assets/icons/api.png": "76823c92119fe4428e4d5acb9d5e2a40",
"assets/assets/icons/color-palette.png": "9c86358a9383a07eda37fbf415670255",
"assets/assets/icons/convert.png": "5d50f393acba8479868a160254d82474",
"assets/assets/icons/env.png": "ff2110088fc2bb078a5d24ad4d8d66b3",
"assets/assets/icons/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"assets/assets/icons/language.png": "c21c667643e7a7c49a49da2cced0b2d7",
"assets/assets/icons/link.png": "79e30d430a44161f965e30bb43bdb903",
"assets/assets/icons/page.png": "1218d1c55c39d41228d8b744834d9914",
"assets/assets/images/digitelnusa.png": "e780a218b83ab31db9312f18608ea07e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9548684262a1a2d73d87d7315ed741b",
"assets/NOTICES": "ae2a3d8934b65c433d85c24b0c23ae9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "51a859aacc7f699bec19a44847b4bb0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ad82080e3e674493d31ea9cb81995d7",
"/": "5ad82080e3e674493d31ea9cb81995d7",
"main.dart.js": "4b639319d3fcd431a52580070975adf5",
"manifest.json": "82a78c4dab628133d655256991b501bd",
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
