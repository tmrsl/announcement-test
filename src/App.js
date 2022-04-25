import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAnnoncement from './components/Announcements/AddAnnouncement';
import Button from './components/UI/Button';
import Modal from './components/UI/Modal';

// Pages
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import AnnouncementDetails from './pages/AnnouncementDetails';

const announcements = [
  {
    title: 'Full-stack Engineer',
    description:
      'We are currently looking for a highly motivated Full-stack Engineer to develop our new product from the ground up.',
    date: Date.now(),
    id: '21245345345'
  },
  {
    title: 'Full-stack Engineer',
    description: 'We are looking for a Full-stack Engineer to join our team on a full-time basis. ',
    date: Date.now(),
    id: '21245345346'
  },
  {
    title: 'Senior Product Analyst',
    description:
      'We are looking for a Senior Product Analyst to join our social networking platform that helps discover new people and communicate without borders worldwide.',
    date: Date.now(),
    id: '21245345347'
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

  const onStartAdd = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header className="flex items-center justify-between bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          <span>Announcment.io</span>

          <Button onClick={() => setIsFormVisible(true)}>Add new annoncement</Button>
        </div>
      </header>

      <main className="flex flex-grow p-4 overflow-y-auto">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/announcements"
              element={
                <Announcements
                  announcements={announcementsList}
                  onEditAnnouncement={onEditHandler}
                  onDeleteAnnouncement={deleteAnnouncementHangler}
                  isFormVisible={isFormVisible}
                  onStartAdd={onStartAdd}
                />
              }
            />

            <Route path="/announcements/:id" element={<AnnouncementDetails annoncements={announcementsList} />} />

            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
