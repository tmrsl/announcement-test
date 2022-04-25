import { useSelector, useDispatch } from 'react-redux';
import { addAnnouncement, updateAnnouncement, deleteAnnouncement } from '../redux/announcementsSlice';
import { useState } from 'react';
import AnnouncementList from '../components/Announcements/AnnouncementsList';
import AnnouncementsEmpty from '../components/Announcements/AnnouncementsEmpty';
import AddAnnoncement from '../components/Announcements/AddAnnouncement';
import Modal from '../components/UI/Modal';

const Announcements = () => {
  const announcementsList = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editAnnouncement, setEditAnnouncement] = useState(null);

  const hideAndClearForm = () => {
    setIsFormVisible(false);
    setEditAnnouncement(null);
  };

  const addAnnouncmentHandler = ({ title, description }) => {
    dispatch(addAnnouncement({ title, description }));

    hideAndClearForm();
  };

  const updateAnnouncmentHandler = ({ title, description, id }) => {
    dispatch(updateAnnouncement({ title, description, id }));

    hideAndClearForm();
  };

  const deleteAnnouncmentHandler = (id) => {
    dispatch(deleteAnnouncement({ id }));

    hideAndClearForm();
  };

  const setToEditHandler = (announcement) => {
    setEditAnnouncement(announcement);
    setIsFormVisible(true);
  };

  const closeModalHandler = (announcement) => {
    setEditAnnouncement(null);
    setIsFormVisible(false);
  };

  return (
    <div>
      {isFormVisible && (
        <Modal onCancel={closeModalHandler}>
          <AddAnnoncement
            announcementToEdit={editAnnouncement}
            onAddAnnouncment={addAnnouncmentHandler}
            onUpdateAnnouncment={updateAnnouncmentHandler}
            onCancel={closeModalHandler}
          />
        </Modal>
      )}

      {announcementsList.length ? (
        <AnnouncementList
          announcements={announcementsList}
          onEditAnnouncement={setToEditHandler}
          onDeleteAnnouncement={deleteAnnouncmentHandler}
        />
      ) : (
        <AnnouncementsEmpty onStartAdd={() => setIsFormVisible(true)} />
      )}

      <button
        className="absolute right-6 bottom-6 text-white text-xlw p-6 rounded-full bg-purple-700"
        onClick={() => setIsFormVisible(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default Announcements;
