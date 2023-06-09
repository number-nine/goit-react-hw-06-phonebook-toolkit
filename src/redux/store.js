import { configureStore } from '@reduxjs/toolkit';

import contactsRerucer from './contactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsRerucer,
  },
});