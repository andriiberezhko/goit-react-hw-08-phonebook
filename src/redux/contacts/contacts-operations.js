import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('/contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    // console.log(data);
    return data;
  } catch {}
});

const addContact = createAsyncThunk('/contacts', async contact => {
  try {
    // console.log(contact);
    const { data } = await axios.post('/contacts', contact);
    console.log(data);
    return data;
  } catch {}
});

const deleteContact = createAsyncThunk('/contacts', async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`, id);

    return data;
  } catch {}
});

export const contactsOperations = {
  getContacts,
  addContact,
  deleteContact,
};
