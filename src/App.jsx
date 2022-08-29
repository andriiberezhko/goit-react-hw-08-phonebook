import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { ContactsPage } from 'pages/ContactsPage';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
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
