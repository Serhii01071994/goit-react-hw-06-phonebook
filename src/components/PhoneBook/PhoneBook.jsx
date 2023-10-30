import { useState } from 'react';
import css from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsReducer';

export const PhoneBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsData);

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`Contact ${formData.name} is already in contacts!`);
      setFormData('');
      return;
    }
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            onChange={handleInput}
            value={formData.name}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            onChange={handleInput}
            value={formData.number}
            type="tel"
            name="number"
            pattern="[\+]?[\d\s\(\)-]+"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
