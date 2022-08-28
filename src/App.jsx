import React from 'react';
import { Container } from 'components/Container/Container';
import { ContactsPage } from 'pages/ContactsPage';
import { AppBar } from 'components/AppBar/AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ContactsPage />
    </Container>
  );
};
