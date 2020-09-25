'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2625637d4fbf3af347a7ad3ec46f1407",
".git/config": "0af5bd9d5bba7820e10608d8a1a760c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a565d0ef7da7b7ddf86f2f7473feade",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "0e4bedf3e3fde7ef336bb00eb88e4697",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "189a9f4a24f86fefd4430cc6d83d7c37",
".git/logs/refs/heads/master": "189a9f4a24f86fefd4430cc6d83d7c37",
".git/logs/refs/remotes/origin/master": "dd96aef7da05671b09697f85d774296b",
".git/objects/04/8c2c141b5eb1d9a1782671c73908109f4b9669": "6c9eb17a4022527c85e732a3bbb5a02d",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/59be5bb7ba90c31133c616f157d39de75ede67": "fe3212702136ab4e38c32e6dfef2164f",
".git/objects/13/bf97ffb47f54d01aa45c9c1eaa6aee15ad0991": "59f11cf500fc7510426c66ecd11ff5e1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/fda42682ef086dccc9b75241b16e2ddedec91d": "85f2c50c63f2050c6e4912649885c9f8",
".git/objects/1f/c7912a7997fe6838f0d9e9c591539728123baa": "ecc6f8b5acb14ae2cf874606b079e672",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/9c95e07d69379526b6736618cd17ed43d92dcf": "55d680180babb6b861e7e781e28b7c87",
".git/objects/28/87c77e0a367d7c77baf0a04da30931f98fbf4c": "889922ffe0dfa2a3a06151c4195ccb55",
".git/objects/28/cf9185d0b8bb3e3da91e205d17bfd8b16e35f4": "8baf17bbcec3e477104324765195be73",
".git/objects/28/d069714b53964e3a5e2880a2d848dcab4da3e2": "17c589a74bd8dd56468c38b845f35f74",
".git/objects/32/200dc3ceb26adf2ac66eebb802b2a0cc612aed": "cf2bf930e307dfc3a09660daad418899",
".git/objects/38/b7f8400679fbb9851686f475c8c1a5505a9e0b": "85a0690afb675087c990da6e4bc949b8",
".git/objects/3d/40e72aa3349f2acd96d96bb6c906a3d70a207e": "4632b09bc6291502c38b7f225b7ac4e7",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/4d/35275ef5158b84350758891e9bf906afb36518": "9ae2857c2cff931e2636e71a40b1e2f4",
".git/objects/51/8aef1ff07c1b217717ce1c2c3caa1aee0274f5": "a4cf476dc51f5f3a9efffdcdad7dbf6c",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/59/2ccd20073f76a663c56fe0176397149782565c": "f62220b171d651e35bb386ab9cb488f9",
".git/objects/5e/4968edef55bf2b26e0b893228e808142789c09": "c893ade289c1621069306368c81c93eb",
".git/objects/62/238c39716b3ed8e7a9184eff96043f399f8268": "be45d03ee826bb5893bacea4fecab3e0",
".git/objects/69/1d2e6091a9b11c53b02ac52f29130f10f9b562": "45c2b685d107dcd0edd17ea1a3444196",
".git/objects/6f/1f3b66e29d1e5f96b771c50e339a37d49e910d": "0e36c14647d6c284e0712a753670b996",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7d/94efc98ba08d4913c58dabb2fb194fe152298d": "2a073cf383acfbafc8b376f6ae081204",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8c4b402f415303b3353da1683216a175492abd": "4f503f691047636bf34cc8f56165aa8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/90/a1b1c42749bcfa7ff6f63d02b17280e5f83eda": "32efee2048f7178f6589d56abf62e07a",
".git/objects/95/511d373a9cd6a637153dea6dc7efb7bf11738f": "e3efa76dd4c1ddac5fd6c21a8bdbbf9e",
".git/objects/95/81ef82423c1c115c2fb173839abe8ea9e3ff25": "ce762d7aab2b8897584522a265beebfd",
".git/objects/9a/0755a73ae398f8f678e65f851e5e387169f146": "d682d660be11c41bb8221c1736cf5c78",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/a2/a21ea2e8258fedce43b41016096d018d070d58": "b4883f29c982c8e51d5374701895e573",
".git/objects/ac/bf3c71e8cca31a3f5412eda1f774d71ed4ffa6": "afc9dc22646bd92b05231cca45cd882a",
".git/objects/b0/a7142c698bd3bd62419dfbb1ac2641752d1122": "7063086446769f64f765bcb84592aa06",
".git/objects/b6/648669de1fa980a63ec5f13e5aef00d3d7ce94": "3375fe475f818c0d183da1f558150f82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6ddfdb9805e0168b2ccb56e6e6b125373aee96": "a2944a8220af3d37b374b8f7fd50e6c0",
".git/objects/b8/dc6c729918731fc93ca946feddb5ed1a9db4b0": "5d2396b78a7f30ee32544197b3464c83",
".git/objects/bb/d65cb9207d760aa88fa41246f01f5f27ee6c6f": "ea6a9de668b079865815258723649c63",
".git/objects/bd/44cf7e7ef8049d667c41f42ca298cb5047cc85": "7f2a98665b357bc136ebde32233f4768",
".git/objects/be/950e6388e524c21fd3abcbcedbfa5cf70a263a": "a85565204802d64adfa33b2c1e6ecaa5",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/c8/a99b2e44b0662bb479f3f2d833b6d159e55cd2": "149acfb27eb1b7d8c08c051c1e2f4ba4",
".git/objects/d3/59c97c26590a28a1e995add1da770abe7b1549": "0399d49c65c47ede490b53fd44a9a9be",
".git/objects/d3/8ee9943d7bd610b0b6866a39211e53bf9588fb": "6d9ab60d77958ca85460bef5202aabc7",
".git/objects/d5/38930865a468ce5f76f2f04903df2a10b8ca88": "f4509a78c631ea0e62e49186d772b966",
".git/objects/db/d003c63cab8fee2d293061b3de084d90a87f76": "504b7468ac1d2489a096d5a3c0f1de91",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/e9/e56ef25f4daf5135a2a9dfba9a4dd199166a39": "947d98fe639fc1a01f6d530691e0034c",
".git/objects/ec/61bf88c62394ef782990f544e452b89ca7aed2": "362117a69988ec016051e00e0adcf742",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/ff/bba633fb66b0f4e5cd06e7500dc329c9dcde75": "f20d67d76f48a2dad0bb2ede03836e97",
".git/ORIG_HEAD": "54b8b7091f60e987f21375b8c9a7ebb9",
".git/refs/heads/master": "117595bf5dfae29049463594ccc96554",
".git/refs/remotes/origin/master": "117595bf5dfae29049463594ccc96554",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "9d562abfef86f380a3ed8225a23a0dbc",
"assets/fonts/AquateScript.ttf": "bb411c549c026817d94dc4a8213b2432",
"assets/fonts/Inconsolata-Regular.ttf": "ed256edfa0728c24fec78767235703d4",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/images/cookies.png": "e1c3723d2b2bad29732d1321e1d72d12",
"assets/NOTICES": "7ed34f522283ba1069190088096a1dfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"CNAME": "8108683afe2b4dff0e49b19182bea311",
"favicon.ico": "49d3648990a484d8eea88a7b48abdc10",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "248a424bac64287d7ccf47696edda75c",
"/": "248a424bac64287d7ccf47696edda75c",
"main.dart.js": "2107dbabc9320111a2ea7e40a5e6d1c3",
"manifest.json": "751cb580eca0a5120702817f9b7c3d0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
