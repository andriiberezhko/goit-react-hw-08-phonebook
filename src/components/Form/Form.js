import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsApi';
import style from './Form.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useGetContactsQuery().data;
  const [addContact] = useAddContactMutation();

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setPhone(event.currentTarget.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const contact = {
      name,
      phone,
    };
    console.log(contact);
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`Contact ${name} is already exist`);
      toast.error(`Contact ${name} is already exist`);
      reset();
      return;
    }
    addContact(contact);
    alert(`Contact ${name} has been added`);
    toast.success(`Contact ${name} has been added`);
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmitForm} className={style.form}>
      <label className={style.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputName}
          className={style.formInput}
        />
      </label>
      <label className={style.label}>
        Number
        <input
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputNumber}
          className={style.formInput}
        />
      </label>
      <button type="submit" className={style.addButton}>
        Add contact
      </button>
    </form>
  );
};
