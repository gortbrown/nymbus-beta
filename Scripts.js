window.isUpdateAvailable = new Promise(function(resolve, reject) {
// lazy way of disabling service workers while developing
	if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
		// register service worker file
		navigator.serviceWorker.register('service-worker.js')
			.then(reg => {
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
							case 'installed':
								if (navigator.serviceWorker.controller) {
									// new update available
									resolve(true);
								} else {
									// no update available
									resolve(false);
								}
								break;
						}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
	}
});

window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			const toast = this.toastCtrl.create({
				message: 'New Update available! Reload the webapp to see the latest juicy changes.',
				position: 'bottom',
				showCloseButton: true,
			});
			toast.present();
		}
	});


if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)) {
	window.location.href = 'mobile/mobile.html';
}

                                            
function pswdgen() {
var prt1 = prompt('Please type in a word. Recomended length is 2-3 sylables');
if (prt1 == null) {
	return;
}

var prt2 = prompt('Please type in another word');
if (prt2 == null) {
	return;
}
var prt3 = prompt('Please type in one more word');
if (prt3 == null) {
	return;
}
var num = Math.floor(Math.random() * 99) + 1;
alert('Your new password is: ' + prt1 + prt2 + prt3 + num + ' Please enter this into a password manager to remeber it.');
}





