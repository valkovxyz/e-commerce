import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwEm6W_V1N-636kq3gAfNUe-HjN6yKMPs",
  authDomain: "e-commerce-db-957c9.firebaseapp.com",
  projectId: "e-commerce-db-957c9",
  storageBucket: "e-commerce-db-957c9.appspot.com",
  messagingSenderId: "984447147494",
  appId: "1:984447147494:web:c72ccf4322b69355db4a27"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const sighInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    const userDocRef = await doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }
  return await signInWithEmailAndPassword(auth, email, password)
}
