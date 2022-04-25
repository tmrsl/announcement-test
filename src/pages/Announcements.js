import { useSelector, useDispatch } from 'react-redux';
import { addAnnouncement, updateAnnouncement, deleteAnnouncement } from '../redux/announcementsSlice';
import { useState } from 'react';
import AnnouncementList from '../components/Announcements/AnnouncementsList';
import AnnouncementsEmpty from '../components/Announcements/AnnouncementsEmpty';
import AddAnnouncement from '../components/Announcements/AddAnnouncement';
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

  const addAnnouncementHandler = ({ title, description }) => {
    dispatch(addAnnouncement({ title, description }));

    hideAndClearForm();
  };

  const updateAnnouncementHandler = ({ title, description, id }) => {
    dispatch(updateAnnouncement({ title, description, id }));

    hideAndClearForm();
  };

  const deleteAnnouncementHandler = (id) => {
    dispatch(deleteAnnouncement({ id }));

    hideAndClearForm();
  };

  const setToEditHandler = (announcement) => {
    setEditAnnouncement(announcement);
    setIsFormVisible(true);
  };

  const closeModalHandler = () => {
    setEditAnnouncement(null);
    setIsFormVisible(false);
  };

  return (
    <div className="flex flex-grow">
      {isFormVisible && (
        <Modal onCancel={closeModalHandler}>
          <AddAnnouncement
            announcementToEdit={editAnnouncement}
            onAddAnnouncement={addAnnouncementHandler}
            onUpdateAnnouncment={updateAnnouncementHandler}
            onCancel={closeModalHandler}
          />
        </Modal>
      )}

      {announcementsList.length ? (
        <AnnouncementList
          announcements={announcementsList}
          onEditAnnouncement={setToEditHandler}
          onDeleteAnnouncement={deleteAnnouncementHandler}
        />
      ) : (
        <AnnouncementsEmpty onStartAdd={() => setIsFormVisible(true)} />
      )}

      <button
        className="fixed right-6 bottom-6 text-white text-xlw p-6 rounded-full bg-purple-700"
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
