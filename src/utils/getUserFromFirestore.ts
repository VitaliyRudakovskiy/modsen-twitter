import { collection, getDocs, query, where } from 'firebase/firestore';

import { firestore, signin } from '@/db/index';
import isPhoneNumber from '@/helpers/isPhoneNumber';

const getUserDataAndLogin = async (phoneOrEmail: string, password: string) => {
  const isPhone = isPhoneNumber(phoneOrEmail);
  const userCollection = collection(firestore, 'users');
  const userQuery = query(
    userCollection,
    isPhone
      ? where('phone', '==', phoneOrEmail)
      : where('email', '==', phoneOrEmail)
  );

  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) return {};

  const userData = querySnapshot.docs[0].data();
  const userEmail = isPhone ? userData.email : phoneOrEmail;
  const userCredentials = await signin(userEmail, password);
  const token = await userCredentials.user.getIdToken();

  return { userData, token };
};

export default getUserDataAndLogin;
