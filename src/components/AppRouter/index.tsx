import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ROUTES from '@/routes';
import privateRoutes from '@/routes/privateRoutes';
import publicRoutes from '@/routes/publicRoutes';
import { selectIsAuth } from '@/store/slices/authSlice';

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        {privateRoutes.map(({ path, element: Element }) => (
          <Route
            key={path}
            path={path}
            element={
              isAuth ? <Element /> : <Navigate to={ROUTES.AUTH} replace />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
