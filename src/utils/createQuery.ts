import { Location } from 'react-router-dom';

import orderedTweetsQuery from '@/constants/firebaseConstants/orderedTweetsQuery';
import profileQuery from '@/constants/firebaseConstants/profileQuery';
import searchTweetsQuery from '@/constants/firebaseConstants/searchTweetsQuery';
import ROUTES from '@/routes';

const createQuery = (
  searchInput: string,
  location: Location,
  profileEmail?: string
) => {
  let orderedQuery = orderedTweetsQuery();

  if (searchInput && location.pathname === ROUTES.HOME) {
    orderedQuery = searchTweetsQuery(searchInput);
  }

  if (profileEmail) orderedQuery = profileQuery(profileEmail);

  return orderedQuery;
};

export default createQuery;
