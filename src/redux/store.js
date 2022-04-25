import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './announcementsSlice';

const store = configureStore({
  reducer: {
    announcements: announcementsReducer
  }
});

export default store;
