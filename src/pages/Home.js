import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Announcment.io</h1>

      <Link to="/announcements">
        <Button>Go and create your first annoncement!</Button>
      </Link>
    </div>
  );
};

export default Home;
