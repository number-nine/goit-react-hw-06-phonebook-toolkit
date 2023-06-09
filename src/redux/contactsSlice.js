import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import rawData from 'controllers/local-data-provider'



const initialState = {
  contacts: []
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action) => {
      state.contacts.push(action.payload.contact);
    },
    remove: (state, action) =>  state.contacts.filter(contact => contact.id !== action.payload.id),
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
