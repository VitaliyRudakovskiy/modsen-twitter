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

import firebaseConfig from './config';

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
