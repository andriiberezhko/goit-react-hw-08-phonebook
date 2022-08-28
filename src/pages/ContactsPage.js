import React from 'react';
// import { Form } from '../components/Form/Form';
// import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { FormContainer } from 'components/FormContainer/FormContainer';
import { Wrapper } from 'components/Wrapper/Wrapper';

export const ContactsPage = () => {
  return (
    <Wrapper>
      <FormContainer />

      <ContactList />
    </Wrapper>
  );
};
