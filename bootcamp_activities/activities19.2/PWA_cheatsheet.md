
# Chris' Progressive Web Applications Cheatsheet


## Manifest 
Manifest is a JSON file providing information for mobile and desktop installation.  **short_name** is used on the home screen and in the application menu. The **icons** array contains information about the thumbnail images used when installing the PWA on mobile or desktop. **start_url** defines what page is opened when the app is first launched. **display** modes we could specify are standalone, fullscreen, minimal-ui, and browser.


Example: 

` {
   "short_name": "Demo",
   "name": "Web App Manifest Demo",
   "icons": [
     {
       "src": "/assets/images/icons-192.png",
       "sizes": "192x192",
       "type": "image/png"
     },
     {
       "src": "/assets/images/icons-512.png",
       "sizes": "512x512",
       "type": "image/png"
     }
   ],
   "start_url": "/",
   "background_color": "	#808080",
   "display": "standalone",
   "theme_color": "#808080"
 } `

## Service Worker

A Service worker is a script (JavaScript file) that runs in background and assists in offline first web application development. 

We add an event listener to our window element, listening for the load event and register our service worker using the navigator object. Typically we register service worker above the closing </body> tag in index.html

Service workerfile will include All files that need to be cached are stored as strings in an array. 

All files that need to be cached are precached in the **install** step. 

The **activate** step clears out the all outdated caches. 

The **fetch** listener intercepts all fetch requests and uses data from the cache to return a response.

## Steps to convert app to PWA

1. Create manifest.webmanifest JSON file, put into public folder

2.  Link to manifest.webmanifest in index.html within the head tags. 
 `<link rel="manifest" href="manifest.webmanifest" />`
 
3. Register Service Worker above the closing </body> tag in index.html
`<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
          console.log('We found your service worker file!', reg);
        });
    });
  }
</script>
`
 
 
4. Create a service-worker.js file in the root of the public folder. 

5. The service-worker.js includes FILES_TO_CACHE, CACHE_NAME, DATA_CACHE_NAME:

	- FILES TO CACHE:
	`const FILES_TO_CACHE = [
	  "/",
	  "/index.html",
	  "/assets/css/style.css",
	  "/assets/js/loadPosts.js",
	  "/assets/images/Angular-icon.png",
	  "/assets/images/React-icon.png",
	  "/assets/images/Vue.js-icon.png",
	  "/manifest.webmanifest",
	];`
	
	- SET CACHE VARIABLE NAMES:
	
	`const CACHE_NAME = 'static-cache-v2';`
	
	`const DATA_CACHE_NAME = 'data-cache-v1';`

6. The Service worker file will also include **install**, **activate** and **fetch** listeners:  

	**Install**
	
	Inside our install event listener callback we open our cache and call addAll, passing in FILES_TO_CACHE. skipWaiting() ensures that any new versions of our service worker will take over the page and become activated immediately.

	`self.addEventListener('install', function(evt) {
	  evt.waitUntil(
	    caches.open(CACHE_NAME).then(cache => {
	      console.log('Your files were pre-cached successfully!');
	      return cache.addAll(FILES_TO_CACHE);
	    })
	  );
	  self.skipWaiting();
	});`

	
	
	
	**Activate**
	
	Inside the activate event listener callback, we activate our service worker, cleaning up outdated caches.
	
	`self.addEventListener('activate', function(evt) {
	  evt.waitUntil(
	    caches.keys().then(keyList => {
	      return Promise.all(
	        keyList.map(key => {
	          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
	            console.log('Removing old cache data', key);
	            return caches.delete(key);
	          }
	        })
	      );
	    })
	  );
	// Tells our new service worker to take over.
	  self.clients.claim();
	})`;


	**Fetch**
	
	Here we modify the service worker to handle requests to /api and store the responses in our cache, so we can easily access them later. (This includes every route with api) If the network request fails, we try to get the response from our cache.
	
	`
self.addEventListener("fetch", function (evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);

          });
      }).catch(err => {
        console.log(err)
      })
    );
    return;
  }
  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});

`	