import { useParams, Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

export default function AnnouncementDetails(props) {
  const params = useParams();

  const annoncement = props.annoncements.find((a) => a.id == params.id);
  const date = new Date(annoncement?.date).toLocaleDateString();
  return (
    <Card className="p-6">
      {annoncement ? (
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">{annoncement.title}</h2>
          <h3 className="text-lg mb-6">{annoncement.description}</h3>
          <span className="self-end text-sm text-gray-500">{date}</span>
        </div>
      ) : (
        <div>
          <h2>Announcement with given id was not found</h2>
          <Link to="/announcements">
            <Button>Go back</Button>
          </Link>
        </div>
      )}
    </Card>
  );
}
