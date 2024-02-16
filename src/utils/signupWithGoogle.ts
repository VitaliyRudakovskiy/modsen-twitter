import { NavigateFunction } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { auth, firestore, provider, signInWithPopup } from '@/db/index';
import ROUTES from '@/routes';
import { DispatchRTK } from '@/store/index';
import { setCurrentUser } from '@/store/slices/userSlice';
import { IUser } from '@/store/types';

const signupWithGoogle = async (
  navigate: NavigateFunction,
  dispatch: DispatchRTK
) => {
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
      const token = await user.getIdToken();
      dispatch(setCurrentUser({ ...(userData as IUser), token }));
      navigate(ROUTES.HOME);
    } else {
      const token = await user.getIdToken();
      dispatch(setCurrentUser({ ...(userData as IUser), token }));
      navigate(ROUTES.HOME);
    }
  } catch (error) {
    throw new Error(`An error occured while Google login: ${error}`);
  }
};

export default signupWithGoogle;
