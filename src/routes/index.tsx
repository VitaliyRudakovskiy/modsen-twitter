import { createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import Routes from '@constants/routes';
import Auth from '@pages/Auth';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Signup from '@pages/Signup';

const router = createBrowserRouter([
  {
    path: Routes.AUTH,
    element: <Auth />,
  },
  {
    path: Routes.HOME,
    element: <Sidebar />,
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
    path: Routes.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;
