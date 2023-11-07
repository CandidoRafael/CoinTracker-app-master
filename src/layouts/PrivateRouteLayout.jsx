import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { projectAuth } from '../firebase/firebase-config';
import { useState,useEffect } from 'react';
import Loading from '../components/loading';

export const PrivateRouteLayout = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);


  if (!authChecked) {
    return <Loading />;
  }


  return projectAuth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};