import { createBrowserRouter } from 'react-router-dom';
import Routes from '@constants/routes';
import Auth from '@pages/Auth';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Profile from '@pages/Profile';
import Signup from '@pages/Signup';

const router = createBrowserRouter([
  {
    path: Routes.AUTH,
    element: <Auth />,
  },
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.SIGNUP,
    element: <Signup />,
  },
  {
    path: Routes.PROFILE,
    element: <Profile />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;
