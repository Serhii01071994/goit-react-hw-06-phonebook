import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contactsReducer';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(delContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter)
  );
   

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <PhoneBook/>
      <h2 className={css.title}>Contacts</h2>
      <ContactFilter/>
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
