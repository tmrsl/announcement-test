import React, { useState } from 'react';
import AddAnnoncement from './components/Announcements/AddAnnouncement';
import AnnouncementList from './components/Announcements/AnnouncementsList';

const announcements = [
  {
    title: 'Full-stack Engineer',
    description:
      'We are currently looking for a highly motivated Full-stack Engineer to develop our new product from the ground up.',
    date: Date.now(),
    id: Math.random().toString()
  },
  {
    title: 'Full-stack Engineer',
    description: 'We are looking for a Full-stack Engineer to join our team on a full-time basis. ',
    date: Date.now(),
    id: Math.random().toString()
  },
  {
    title: 'Senior Product Analyst',
    description:
      'We are looking for a Senior Product Analyst to join our social networking platform that helps discover new people and communicate without borders worldwide.',
    date: Date.now(),
    id: Math.random().toString()
  }
];

function App() {
  const [announcementsList, setAnnouncementList] = useState(announcements);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editAnnouncement, setEditAnnouncement] = useState(null);

  const addAnnouncmentHandler = ({ title, description }) => {
    setAnnouncementList((prevAnnouncementList) => {
      return [...prevAnnouncementList, { title, description, id: Math.random().toString(), data: Date.now() }];
    });

    hideAndClearForm();
  };

  const updateAnnouncmentHandler = ({ title, description, id }) => {
    setAnnouncementList((prevAnnouncementsList) => {
      const copyAnnouncements = [...prevAnnouncementsList];

      const editAnnouncement = copyAnnouncements.find((announcement) => announcement.id === id);

      editAnnouncement.title = title;
      editAnnouncement.description = description;
      editAnnouncement.date = Date.now();

      return copyAnnouncements;
    });

    hideAndClearForm();
  };

  const hideAndClearForm = () => {
    setIsFormVisible(false);
    setEditAnnouncement(null);
  };

  const deleteAnnouncementHangler = (id) => {
    setAnnouncementList((prevAnnouncementsList) => {
      const deleteAnnouncement = prevAnnouncementsList.filter((a) => a.id !== id);

      return deleteAnnouncement;
    });
  };

  const onEditHandler = (e) => {
    setEditAnnouncement(e);
    setIsFormVisible(true);
  };

  return (
    <div className="min-h-screen p-24 bg-slate-100">
      <button onClick={() => setIsFormVisible(true)}>Add</button>
      {isFormVisible && (
        <AddAnnoncement
          onAddAnnouncment={addAnnouncmentHandler}
          onUpdateAnnouncment={updateAnnouncmentHandler}
          onCancel={hideAndClearForm}
          announcementToEdit={editAnnouncement}
        />
      )}
      <AnnouncementList
        announcements={announcementsList}
        onEditAnnouncement={onEditHandler}
        onDeleteAnnouncement={deleteAnnouncementHangler}
      />
    </div>
  );
}

export default App;
