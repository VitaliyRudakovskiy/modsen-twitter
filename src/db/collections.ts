import { collection } from 'firebase/firestore';

import { firestore } from './index';

export const TWEETS = collection(firestore, 'tweets');

export const USERS = collection(firestore, 'users');
