import { query, where } from 'firebase/firestore';

import { TWEETS } from '@/db/collections';

const searchQuery = (searchInput: string) =>
  query(
    TWEETS,
    where('text', '>=', searchInput),
    where('text', '<=', `${searchInput}\uf8ff`)
  );

export default searchQuery;
