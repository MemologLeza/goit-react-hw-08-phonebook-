import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="navbar-nav ">
      <button className="btn btn-outline-success me-2" type="button">
        <NavLink className="text-decoration-none text-white" to="register">
          Register
        </NavLink>
      </button>
      <p> </p>
      <button className="btn btn-outline-success" type="button">
        <NavLink className="text-decoration-none text-white" to="login">
          Login
        </NavLink>
      </button>
    </div>
  );
};

export default AuthNav;
