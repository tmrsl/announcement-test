import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import AnnouncementDetails from './pages/AnnouncementDetails';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header className="flex items-center justify-between bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          <span>Announcment.io</span>

          {/* <Button onClick={() => setIsFormVisible(true)}>Add new annoncement</Button> */}
        </div>
      </header>

      <main className="flex flex-grow p-4 overflow-y-auto">
        <div className="container mx-auto">
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
