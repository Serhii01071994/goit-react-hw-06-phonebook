import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
