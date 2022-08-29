import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../img/phonebook.png';

export const HomePage = () => {
  return (
    <>
      <img src={img} alt="phonebook" height="60%" />
      <p className="homeTitle">
        To start use Phonebook, please <NavLink to="/login">Login</NavLink> or{' '}
        <NavLink to="/register">Register</NavLink>
      </p>
    </>
  );
};
