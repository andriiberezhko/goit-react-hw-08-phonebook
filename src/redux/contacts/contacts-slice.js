import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './contacts-operations';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    // [contactsOperations.addContact.fulfilled](state, action) {
    //   // console.log(action.payload);
    //   state.contacts.contacts = { ...action.payload };
    //   // state.push(action.payload);
    //   // state.contacts.contacts = initialState.push(action.payload);
    // },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contacts = action.payload;
    },
  },
});
