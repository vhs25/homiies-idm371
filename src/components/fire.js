import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAZSgyscyzrJ9pm5Yd6u9iT0-sw5pQe69I",
    authDomain: "homiies-8ae9a.firebaseapp.com",
    databaseURL: "https://homiies-8ae9a.firebaseio.com",
    projectId: "homiies-8ae9a",
    storageBucket: "homiies-8ae9a.appspot.com",
    messagingSenderId: "447213300258",
    appId: "1:447213300258:web:e8ef4896440a2af751b87b",
    measurementId: "G-K8709D7CPC"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;