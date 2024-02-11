import { firestore, register } from '@db/index';
import { addDoc, collection } from 'firebase/firestore';

const setUserToFirestore = async (
  name: string,
  phone: string,
  email: string,
  password: string,
  birthDate: string
) => {
  const credentials = await register(email, password);
  const userData = {
    name,
    email,
    phone,
    birthDate,
    id: credentials.user.uid,
  };

  const userCollection = collection(firestore, 'users');

  await addDoc(userCollection, userData);
};

export default setUserToFirestore;
