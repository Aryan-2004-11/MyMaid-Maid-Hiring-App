import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBlvuC5Decqi-YNwgtXPY5-wsT7GH2NV-4",
    authDomain: "mymaid-4a0e8.firebaseapp.com",
    projectId: "mymaid-4a0e8",
    storageBucket: "mymaid-4a0e8.appspot.com",
    messagingSenderId: "476377293758",
    appId: "1:476377293758:web:c14f32688be1c789d18fef"
  };


// const firebaseConfig = {
//   apiKey: "AIzaSyCF1LFRXq0KmbNrjni6fBBhPH0-7_85FNY",
//   authDomain: "assign-eefa5.firebaseapp.com",
//   projectId: "assign-eefa5",
//   storageBucket: "assign-eefa5.appspot.com",
//   messagingSenderId: "136399647982",
//   appId: "1:136399647982:web:1b2f390d09dc6ff0ddefff"
// };

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
    
  }
}

export const app = createFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
