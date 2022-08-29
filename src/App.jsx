import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'components/Container/Container';
import { ContactsPage } from 'pages/ContactsPage';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { authOperations } from 'redux/auth/auth-operations';
import { contactsOperations } from 'redux/contacts/contacts-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.current());
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Container>
  );
};
