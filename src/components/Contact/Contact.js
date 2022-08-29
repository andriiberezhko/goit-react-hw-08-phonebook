import React from 'react';
// import { useDeleteContactsMutation } from 'services/contactsApi';
import style from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  // const [deleteContact] = useDeleteContactsMutation();
  return (
    <li className={style.item}>
      <p>
        <span>{name}</span>: <span className={style.number}>{number}</span>
      </p>
      <button
        type="button"
        className={style.button}
        // onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
