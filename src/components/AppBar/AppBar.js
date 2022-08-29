import React from 'react';
import style from './AppBar.module.css';
// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <div className={style.appBar}>
      <h1>Your Phonebook</h1>

      <ul className={style.buttonGroupe}>
        <li key="1">
          {/* <Button variant="outlined">SingUp</Button> */}
          <NavLink to="/register" className={style.authButton}>
            SingUp
          </NavLink>
          {/* <button type="button" className={style.authButton}>
            SingUp
          </button> */}
        </li>
        <li key="2">
          {/* <Button variant="outlined">SingIn</Button> */}
          <NavLink to="/login" className={style.authButton}>
            SingIn
          </NavLink>
          {/* <button type="button" className={style.authButton}>
            SingIn
          </button> */}
        </li>
      </ul>

      <div className={style.userGroupe}>
        <p>Hello name</p>
        <button type="button" className={style.logOutButton}>
          LogOut
        </button>
      </div>
    </div>
  );
};
