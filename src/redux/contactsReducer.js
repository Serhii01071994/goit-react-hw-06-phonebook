import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
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
