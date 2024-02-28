import { orderBy, query } from 'firebase/firestore';

import { TWEETS } from '@/db/collections';

const orderedTweetsQuery = () => query(TWEETS, orderBy('createdAt', 'desc'));

export default orderedTweetsQuery;
