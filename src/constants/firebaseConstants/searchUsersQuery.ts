import { query, where } from 'firebase/firestore';

import { USERS } from '@/db/collections';

const searchUsersQuery = (inputValue: string) =>
  query(
    USERS,
    where('email', '>=', inputValue),
    where('email', '<=', `${inputValue}\uf8ff`)
  );

export default searchUsersQuery;
