import { createSlice, nanoid } from '@reduxjs/toolkit';

import contacts from 'controllers/local-data-provider';
import { addReducer, removeReducer } from './contactsReducers';

const setInitialState = () =>
  contacts.map(contact => ({ ...contact, id: nanoid() }));

const initialState = setInitialState();

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer: addReducer,
      prepare: contact => {
      return {payload: {...contact, id: nanoid()}}
    }
    },
    remove: removeReducer,
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;