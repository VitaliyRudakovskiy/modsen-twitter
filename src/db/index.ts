import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsqvIuYxZbZZH85qolceCkyPxaahhUe_Y',
  authDomain: 'modsen-twitter-838c1.firebaseapp.com',
  projectId: 'modsen-twitter-838c1',
  storageBucket: 'modsen-twitter-838c1.appspot.com',
  messagingSenderId: '289069416801',
  appId: '1:289069416801:web:0a83b22b28caffca678520',
  measurementId: 'G-CD49YC22X3',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
const signin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

const firestore = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export {
  app,
  auth,
  firestore,
  logout,
  provider,
  register,
  signin,
  signInWithPopup,
  storage,
};
