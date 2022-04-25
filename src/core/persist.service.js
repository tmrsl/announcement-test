import { ANNOUNCEMENTS_SLICE_KEY } from './constants';

class PersistService {
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
  }

  preloadSlice = () => {
    try {
      const partedSlice = localStorage.getItem(this.localStorageKey);

      if (partedSlice === null) {
        return [];
      }

      return JSON.parse(partedSlice);
    } catch (e) {
      return [];
    }
  };

  persistSlice(data) {
    try {
      const serializedState = JSON.stringify(data);
      localStorage.setItem(this.localStorageKey, serializedState);
    } catch (err) {
      console.error(err);
    }
  }
}

export const AnnouncementPersistService = new PersistService(ANNOUNCEMENTS_SLICE_KEY);
