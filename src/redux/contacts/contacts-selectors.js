const getContacts = state => {
  console.log('state', state);
  console.log('state.contacts.contacts', state.contacts);
  return state.contacts.contacts;
};

const contactsSelectors = {
  getContacts,
};

export default contactsSelectors;
