import { Dispatch, SetStateAction } from 'react';
import { getDocs, query } from 'firebase/firestore';

import searchUsersQuery from '@/constants/firebaseConstants/searchUsersQuery';
import { USERS } from '@/db/collections';
import { ISearchedUser } from '@/types/user';

async function fetchUsers(
  inputValue: string,
  setItems: Dispatch<SetStateAction<ISearchedUser[]>>
) {
  const dataQuery = inputValue ? searchUsersQuery(inputValue) : query(USERS);

  const snapshot = await getDocs(dataQuery);
  const newItems = snapshot.docs.map((doc) => doc.data() as ISearchedUser);
  setItems(newItems);
}

export default fetchUsers;
