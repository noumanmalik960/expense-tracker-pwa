importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js')


firebase.initializeApp({
  apiKey: "AIzaSyBMRjQ_B00edGPNMzlt8mdE4U_hHLIM0nQ",
  authDomain: "expense-tracker-80959.firebaseapp.com",
  databaseURL: "https://expense-tracker-80959.firebaseio.com",
  projectId: "expense-tracker-80959",
  storageBucket: "expense-tracker-80959.appspot.com",
  messagingSenderId: "50076654142",
  appId: "1:50076654142:web:6838101034c5e8552b8f6f"
})

firebase.messaging();