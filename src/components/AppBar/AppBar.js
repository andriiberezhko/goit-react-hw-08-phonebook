import React from 'react';
import style from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={style.appBar}>
      <h1>Your Phonebook</h1>
      <div className={style.buttonGroupe}>
        <button type="button">SingUp</button>
        <button type="button">SingIn</button>
      </div>
      <div className={style.userGroupe}>
        <p>Hello name</p>
        <button type="button">LogOut</button>
      </div>
    </div>
  );
};
