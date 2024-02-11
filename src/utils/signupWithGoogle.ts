import { NavigateFunction } from 'react-router-dom';
import Routes from '@constants/routes';
import { auth, firestore, provider, signInWithPopup } from '@db/index';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const signupWithGoogle = async (navigate: NavigateFunction) => {
  try {
    const response = await signInWithPopup(auth, provider);
    const { user } = response;

    const { uid, email, phoneNumber, displayName } = user;

    const userData = {
      id: uid,
      name: displayName,
      email,
      phone: phoneNumber,
      birthDate: '',
    };

    const userCollection = collection(firestore, 'users');
    const userQuery = query(userCollection, where('id', '==', userData.id));
    const result = await getDocs(userQuery);

    if (result.empty) {
      await addDoc(userCollection, userData);
      navigate(Routes.HOME);
    } else {
      navigate(Routes.HOME);
    }
  } catch (error) {
    throw new Error(`An error occured while Google login: ${error}`);
  }
};

export default signupWithGoogle;
