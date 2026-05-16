// ===============================
//  Firebase Configuration
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyA5v7-vP87dJ2mN9Y7hbBM29X2KK4W6Tr0",
  authDomain: "xpert-forex-trade.firebaseapp.com",
  databaseURL: "https://xpert-forex-trade-default-rtdb.firebaseio.com",
  projectId: "xpert-forex-trade",
  storageBucket: "xpert-forex-trade.firebasestorage.app",
  messagingSenderId: "491439791457",
  appId: "1:491439791457:web:5c30d0c48599b72634b920",
  measurementId: "G-KLVLL4EQ1W"
};

// ===============================
//  Initialize Firebase
// ===============================
firebase.initializeApp(firebaseConfig);

// ===============================
//  Firebase Auth Reference
// ===============================
const auth = firebase.auth();

// ===============================
//  Protect Page Helper
// ===============================
function protectPage() {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}

// ===============================
//  Logout Helper
// ===============================
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}
