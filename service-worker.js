"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/todo-list/index.html","2bd7d539d89fba46ec22892ba4bea08e"],["/todo-list/static/css/main.3bca65c8.css","1a7984c3bccc180cd1051021331e9d86"],["/todo-list/static/js/main.6f5491a9.js","a5260d53f025d1ded1a2e2669daafc99"],["/todo-list/static/media/fa-brands-400.2ac01f76.woff2","2ac01f7650b5ab76bfebbc708928929e"],["/todo-list/static/media/fa-brands-400.4b280bec.woff","4b280becfd11224f26d35848eadf0a32"],["/todo-list/static/media/fa-brands-400.8f8fac65.svg","8f8fac65806eec82b4e04a7c3380cd44"],["/todo-list/static/media/fa-brands-400.c1367e97.ttf","c1367e975c8b834f9db493958d5c499a"],["/todo-list/static/media/fa-brands-400.dcd6364b.eot","dcd6364b5f436685f2ea48eb129863f1"],["/todo-list/static/media/fa-regular-400.12717b4a.woff2","12717b4a013de862452c4ffcf4e1c264"],["/todo-list/static/media/fa-regular-400.649582a6.svg","649582a6076b3294a23dddc20b23f356"],["/todo-list/static/media/fa-regular-400.8473867a.ttf","8473867ab90a0a07178c173123a9bb83"],["/todo-list/static/media/fa-regular-400.93cd9a87.eot","93cd9a877c794fe87f8ce84f189d304f"],["/todo-list/static/media/fa-regular-400.960d05e6.woff","960d05e6858e73ff1caaa11cd5ba5363"],["/todo-list/static/media/fa-solid-900.0f8d2043.svg","0f8d20430f50916766815593890a2e8b"],["/todo-list/static/media/fa-solid-900.1af49f83.ttf","1af49f83f4cbc0fb391659b71b3a21dc"],["/todo-list/static/media/fa-solid-900.2ebe0c1f.woff","2ebe0c1f8e212023f851f1ec3a2778eb"],["/todo-list/static/media/fa-solid-900.303dc063.eot","303dc0631c4578227ea986e8832d3ad3"],["/todo-list/static/media/fa-solid-900.84f351b3.woff2","84f351b3972185aed620f78489e48b2d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/todo-list/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});