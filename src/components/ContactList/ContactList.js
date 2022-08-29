import React from 'react';
import Contact from 'components/Contact/Contact';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useGetContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';

import style from './ContactList.module.css';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { authOperations } from 'redux/auth/auth-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(authOperations.current());
  //   dispatch(contactsOperations.getContacts());
  // }, [dispatch]);
  const contacts = useSelector(contactsSelectors.getContacts);
  // console.log(contacts);

  const { filter } = useSelector(state => state.filter);
  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   console.log(visibleContacts);
  //   return visibleContacts;
  // };
  return (
    <section className={style.container}>
      <h2 className={style.title}>Contacts</h2>
      <div className={style.wrapperList}>
        <ul>
          {contacts !== [] ? (
            contacts.map(({ id, name, number }) => {
              return <Contact key={id} id={id} name={name} number={number} />;
            })
          ) : (
            <p>You don`t have any contacts</p>
          )}
        </ul>
      </div>
    </section>
  );
};
export default ContactList;
