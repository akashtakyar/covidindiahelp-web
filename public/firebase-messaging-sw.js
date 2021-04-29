importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "1062407524656"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return self.registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    // do what you want
    // ...
});
self.addEventListener("message", (message) => console.log("====", message));
self.addEventListener("push", (event) => {
    console.log("event===",event)
    console.log("event.data===",event.data)
    const {notification} = event.data.json();
    console.log("notification===",notification)
    let title = notification?.title || 'Push Notification';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: notification?.body || 'This is Demo notification',
            // icon: "./favicon-32.png",
            icon: "https://spyna.it/icons/favicon.ico",
            image: "https://spyna.it/icons/favicon.ico",
            vibrate: [200, 100, 200],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2'
            }
        })
    );
});

