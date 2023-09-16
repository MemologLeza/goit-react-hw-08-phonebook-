import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth/operations/operations';
import { useAuth } from 'store/auth/selectors/utils';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  const { user } = useAuth();
  return (
    <div className="navbar-nav ">
      <p className="text-light my-auto me-4">Welcom, {user.name}</p>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleClick}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
