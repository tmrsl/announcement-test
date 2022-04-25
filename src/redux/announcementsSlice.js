import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { AnnouncementPersistService } from '../core/persist.service';

export const tasksSlice = createSlice({
  name: 'announcements',
  initialState: AnnouncementPersistService.preloadSlice(),
  reducers: {
    addAnnouncement: (state, { payload }) => {
      const newAnnouncement = {
        title: payload.title,
        description: payload.description,
        id: uuidv4(),
        date: Date.now()
      };

      return [...state, newAnnouncement];
    },
    updateAnnouncement: (state, { payload }) => {
      const editAnnouncement = state.find((announcement) => announcement.id === payload.id);

      editAnnouncement.title = payload.title;
      editAnnouncement.description = payload.description;
      editAnnouncement.date = Date.now();
    },
    deleteAnnouncement: (state, { payload }) => {
      return state.filter((a) => a.id !== payload.id);
    }
  }
});

export const { addAnnouncement, updateAnnouncement, deleteAnnouncement } = tasksSlice.actions;

export default tasksSlice.reducer;
