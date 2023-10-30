import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { ContactFilter } from './ContactFilter/ContactFilter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, delContact } from 'redux/contactsReducer';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handlAddContact = ({ e, name, number }) => {
    e.prventDefault();
    dispatch(addContact({ name: name, number: number, id: nanoid() }));
  };

  const handleDeleteContact = id => {
    dispatch(delContact(id));
  };

  const filteredContacts = filter => {
    try {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      );
    } catch (err) {
      return contacts;
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <PhoneBook handlAddContact={handlAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <ContactFilter filter={filter} contacts={contacts} />
      <ContactList
        contacts={filteredContacts(filter) ?? []}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
