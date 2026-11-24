// Configuración de Firebase
// Obtén estas credenciales de tu Consola de Firebase: https://console.firebase.google.com
const firebaseConfig = {
  apiKey: "AIzaSyDhLfm7mxjmzE7S-vzz3pzws9JDJ4TAowc",
  authDomain: "favoritos-1fa27.firebaseapp.com",
  projectId: "favoritos-1fa27",
  storageBucket: "favoritos-1fa27.firebasestorage.app",
  messagingSenderId: "949536072714",
  appId: "1:949536072714:web:e4d4bf742a72e284452bf3",
 
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencias de servicios
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();

console.log("Firebase inicializado correctamente");
