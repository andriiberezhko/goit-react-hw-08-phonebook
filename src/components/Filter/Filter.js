import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/dataSlice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={style.filterTitle}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
        className={style.inputSearch}
      ></input>
    </>
  );
};

export default Filter;
