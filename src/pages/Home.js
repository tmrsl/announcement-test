import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Announcement.io</h1>

      <Link to="/announcements">
        <Button>Go and create your first announcement!</Button>
      </Link>
    </div>
  );
};

export default Home;
