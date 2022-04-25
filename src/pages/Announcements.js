import { useState } from 'react';
import AnnouncementList from '../components/Announcements/AnnouncementsList';
import AnnouncementsEmpty from '../components/Announcements/AnnouncementsEmpty';
import AddAnnoncement from '../components/Announcements/AddAnnouncement';
import Modal from '../components/UI/Modal';

const Announcements = ({ announcements, onEditAnnouncement, onDeleteAnnouncement, onStartAdd }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editAnnouncement, setEditAnnouncement] = useState(null);

  const hideAndClearForm = () => {
    setIsFormVisible(false);
    setEditAnnouncement(null);
  };

  const addAnnouncmentHandler = ({ title, description }) => {
    // setAnnouncementList((prevAnnouncementList) => {
    //   return [...prevAnnouncementList, { title, description, id: Math.random().toString(), data: Date.now() }];
    // });

    hideAndClearForm();
  };

  const updateAnnouncmentHandler = ({ title, description, id }) => {
    // setAnnouncementList((prevAnnouncementsList) => {
    //   const copyAnnouncements = [...prevAnnouncementsList];

    //   const editAnnouncement = copyAnnouncements.find((announcement) => announcement.id === id);

    //   editAnnouncement.title = title;
    //   editAnnouncement.description = description;
    //   editAnnouncement.date = Date.now();

    //   return copyAnnouncements;
    // });

    hideAndClearForm();
  };

  return (
    <div>
      {isFormVisible && (
        <Modal onCancel={hideAndClearForm}>
          <AddAnnoncement
            onAddAnnouncment={addAnnouncmentHandler}
            onUpdateAnnouncment={updateAnnouncmentHandler}
            onCancel={hideAndClearForm}
            announcementToEdit={editAnnouncement}
            onStartAdd={onStartAdd}
          />
        </Modal>
      )}

      {announcements.length ? (
        <AnnouncementList
          announcements={announcements}
          onEditAnnouncement={onEditAnnouncement}
          onDeleteAnnouncement={onDeleteAnnouncement}
        />
      ) : (
        !isFormVisible && <AnnouncementsEmpty onStartAdd={onStartAdd} />
      )}
    </div>
  );
};

export default Announcements;
