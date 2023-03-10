// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBTQUU8jCD9LK00A9hQ34LbQ9FIkrCmO-k",
  authDomain: "planty-99cd7.firebaseapp.com",
  projectId: "planty-99cd7",
  storageBucket: "planty-99cd7.appspot.com",
  messagingSenderId: "72446886781",
  appId: "1:72446886781:web:394cb6099755ccfab38214",
  measurementId: "G-Q9Z2SCN3YW"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});