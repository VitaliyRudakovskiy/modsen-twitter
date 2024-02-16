import { addDoc, collection } from 'firebase/firestore';

import { firestore, register } from '@/db/index';

const setUserToFirestore = async (
  name: string,
  phone: string,
  email: string,
  password: string,
  birthDate: string
) => {
  const credentials = await register(email, password);
  const token = await credentials.user.getIdToken();
  const userData = {
    name,
    email,
    phone,
    birthDate,
    id: credentials.user.uid,
  };

  const userCollection = collection(firestore, 'users');

  await addDoc(userCollection, userData);
  return { userData: { ...userData, token } };
};

export default setUserToFirestore;
