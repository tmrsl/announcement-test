import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AnnouncementItem from '../components/Announcements/AnnouncementItem';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

function hasSimilarWord(currentStr, targetStr) {
  const currectWords = currentStr.split(' ').map((w) => w.toLowerCase());
  const targetWords = targetStr.split(' ').map((w) => w.toLowerCase());

  return currectWords.some((w) => targetWords.includes(w));
}

export default function AnnouncementDetails(props) {
  const params = useParams();
  const announcementsList = useSelector((state) => state.announcements);

  const currentAnnoncement = announcementsList.find((a) => a.id === params.id);
  const currentAnnoncementDate = currentAnnoncement ? new Date(currentAnnoncement.date) : null;

  const relativeAnnouncements = currentAnnoncement
    ? announcementsList.filter((a) => {
        if (a.id === currentAnnoncement.id) return false;

        return (
          hasSimilarWord(currentAnnoncement.title, a.title) ||
          hasSimilarWord(currentAnnoncement.description, a.description)
        );
      })
    : [];

  return (
    <div>
      {currentAnnoncement ? (
        <div className="flex flex-col gap-8">
          <Card className="flex flex-col p-6">
            <h2 className="text-2xl mb-4">{currentAnnoncement.title}</h2>
            <h3 className="text-lg mb-6">{currentAnnoncement.description}</h3>
            <span className="self-end text-sm text-gray-500">
              {`${currentAnnoncementDate.toDateString()} : ${currentAnnoncementDate.toLocaleTimeString()}`}
            </span>
          </Card>

          <Card className="flex flex-col p-6">
            <h2 className="text-2xl mb-4">Relative announcements (top 3)</h2>

            <ul className="flex flex-col gap-1 list-none">
              {relativeAnnouncements.map((announcement) => (
                <Link key={announcement.id} to={`/announcements/${announcement.id}`}>
                  <AnnouncementItem announcement={announcement} viewOnly />
                </Link>
              ))}
            </ul>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col items-center p-8">
          <h2 className="mb-10 text-2xl">Announcement with given id was not found</h2>
          <img className="w-full max-w-[640px] mb-10" src="/icons/not-found.svg" alt="Not Found Illustration" />
          <Link to="/announcements">
            <Button>Go back</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
