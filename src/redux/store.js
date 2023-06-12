import { configureStore } from '@reduxjs/toolkit';

import contactsRerucer from './contactsSlice';
import filterReducer from './filterSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsRerucer,
    filter: filterReducer,
    auth: authReducer,
  },
});
