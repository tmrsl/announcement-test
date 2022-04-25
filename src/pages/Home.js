import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Title</h1>

      <Link to="/announcements">
        <Button>Go and create my filrst!</Button>
      </Link>
    </div>
  );
};

export default Home;
