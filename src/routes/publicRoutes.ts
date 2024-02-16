import Auth from '@/pages/Auth';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';

import ROUTES from '.';

const publicRoutes = [
  { path: ROUTES.AUTH, element: Auth },
  { path: ROUTES.LOGIN, element: Login },
  { path: ROUTES.SIGNUP, element: Signup },
  { path: ROUTES.NOT_FOUND, element: NotFound },
];

export default publicRoutes;
