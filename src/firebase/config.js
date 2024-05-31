import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXxUT00xmE7ewiPNVdbC67x109-uXhPws",
  authDomain: "awms-65b79.firebaseapp.com",
  projectId: "awms-65b79",
  storageBucket: "awms-65b79.appspot.com",
  messagingSenderId: "827087606158",
  appId: "1:827087606158:web:b5b8a88925bffde4f894df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
