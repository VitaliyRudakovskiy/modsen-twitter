import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

import ROUTES from '.';

const privateRoutes = [
  { path: ROUTES.HOME, element: Home },
  { path: ROUTES.PROFILE, element: Profile },
];

export default privateRoutes;
