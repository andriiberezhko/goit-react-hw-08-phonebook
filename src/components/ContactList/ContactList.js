import React from 'react';
import Contact from 'components/Contact/Contact';

import { useGetContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';

import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useGetContactsQuery().data;

  const { filter } = useSelector(state => state.filter);
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  return (
    <section className={style.container}>
      <h2 className={style.title}>Contacts</h2>
      <div className={style.wrapperList}>
        <ul>
          {contacts ? (
            filteredContacts().map(({ id, name, phone }) => {
              return <Contact key={id} id={id} name={name} number={phone} />;
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
