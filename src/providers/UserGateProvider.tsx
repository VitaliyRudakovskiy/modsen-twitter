import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import Loader from '@/components/Loader';
import { auth } from '@/db';
import { setIsAuth } from '@/store/slices/authSlice';
import { LoaderContainer } from '@/theme/style/global';

import { IChildren } from './types';

const UserGateProvider = ({ children }: IChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setIsAuth(!!user));
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return children;
};

export default UserGateProvider;
