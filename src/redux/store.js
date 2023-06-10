import { configureStore } from '@reduxjs/toolkit';

import contactsRerucer from './contactsSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsRerucer,
    filter: filterReducer,
  },
});