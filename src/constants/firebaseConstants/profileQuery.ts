import { orderBy, query, where } from 'firebase/firestore';

import { TWEETS } from '@/db/collections';

const profileQuery = (profileEmail: string) =>
  query(
    TWEETS,
    where('email', '==', profileEmail),
    orderBy('createdAt', 'desc')
  );

export default profileQuery;
