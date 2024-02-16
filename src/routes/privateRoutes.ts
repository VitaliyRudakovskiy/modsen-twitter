import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import TweetPage from '@/pages/TweetPage';

import ROUTES from '.';

const privateRoutes = [
  { path: ROUTES.HOME, element: Home },
  { path: ROUTES.PROFILE, element: Profile },
  { path: ROUTES.TWEET, element: TweetPage },
];

export default privateRoutes;
