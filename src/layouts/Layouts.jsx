import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refresh } from '../store/auth/operations/operations';
import { useAuth } from '../store/auth/selectors/utils';

const Layouts = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <Header />
      {isRefreshing && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layouts;
