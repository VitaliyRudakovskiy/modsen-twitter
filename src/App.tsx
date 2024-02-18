import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import ErrorBoundary from '@/components/ErrorBoundary';
import Loader from '@/components/Loader';
import { auth } from '@/db';
import ThemeProvider from '@/providers/ThemeProvider';
import ROUTES from '@/routes';
import privateRoutes from '@/routes/privateRoutes';
import publicRoutes from '@/routes/publicRoutes';
import { LoaderContainer } from '@/theme/style/global';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuth(!!user);
        setIsLoading(false);
      }),
    []
  );

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {publicRoutes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
            {privateRoutes.map(({ path, element: Element }) => {
              const RouteElement = isAuth ? (
                <Element />
              ) : (
                <Navigate to={ROUTES.AUTH} replace />
              );
              return <Route key={path} path={path} element={RouteElement} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
