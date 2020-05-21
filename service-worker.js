self.addEventListener('fetch', event=> {
    let response=fetch(event.request);
    event.respondWith(response);
});

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

self.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});
