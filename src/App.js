import { Routes, Route, Link, useMatch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import AnnouncementDetails from './pages/AnnouncementDetails';

import Button from './components/UI/Button';

function App() {
  const isDetailRoute = useMatch('announcements/:id');

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header className="flex items-center justify-between py-4 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-8 min-h-[44px]">
          <Link to="/">
            <span className="text-xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Announcment.io
            </span>
          </Link>

          {isDetailRoute && (
            <Link to="/announcements">
              <Button>Manage Announcments</Button>
            </Link>
          )}
        </div>
      </header>

      <main className="flex flex-grow p-4 overflow-y-auto">
        <div className="container mx-auto flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcements/:id" element={<AnnouncementDetails />} />
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
