import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './announcementsSlice';
import { AnnouncementPersistService } from '../core/persist.service';

const store = configureStore({
  reducer: {
    announcements: announcementsReducer
  }
});

store.subscribe(() => {
  AnnouncementPersistService.persistSlice(store.getState().announcements);
});

export default store;
