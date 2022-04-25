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

function buildTopSimilar(announcements, currentAnnouncement, length = 3) {
  const arr = [];

  if (!announcements.length) {
    return [];
  }

  for (const announcement of announcements) {
    if (arr.length >= length) break;

    if (announcement.id === currentAnnouncement.id) continue;

    if (
      hasSimilarWord(currentAnnouncement.title, announcement.title) ||
      hasSimilarWord(currentAnnouncement.description, announcement.description)
    ) {
      arr.push(announcement);
    }
  }

  return arr;
}

export default function AnnouncementDetails(props) {
  const params = useParams();
  const announcementsList = useSelector((state) => state.announcements);

  const currentAnnouncement = announcementsList.find((a) => a.id === params.id);
  const currentAnnouncementDate = currentAnnouncement ? new Date(currentAnnouncement.date) : null;

  const relativeAnnouncements = currentAnnouncement ? buildTopSimilar(announcementsList, currentAnnouncement) : [];

  return (
    <div>
      {currentAnnouncement ? (
        <div className="flex flex-col gap-8">
          <Card className="flex flex-col p-6">
            <h2 className="text-2xl mb-4">{currentAnnouncement.title}</h2>
            <h3 className="text-lg mb-6">{currentAnnouncement.description}</h3>
            <span className="self-end text-sm text-gray-500">
              {`${currentAnnouncementDate.toDateString()} : ${currentAnnouncementDate.toLocaleTimeString()}`}
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
