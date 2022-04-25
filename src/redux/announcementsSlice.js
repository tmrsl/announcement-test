import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
  name: 'announcements',
  initialState: [
    {
      title: 'Full-stack Engineer',
      description:
        'We are currently looking for a highly motivated Full-stack Engineer to develop our new product from the ground up.',
      date: Date.now(),
      id: uuidv4()
    }
  ],
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
