import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="text-2xl mb-8">
        Welcome to{' '}
        <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Announcment.io
        </span>
      </h1>

      <Link to="/announcements">
        <Button>Go and create your first announcement!</Button>
      </Link>
    </div>
  );
};

export default Home;
