import Button from '../UI/Button';

const AnnouncementItem = ({ onEditAnnouncement, announcement, onDeleteItem }) => {
  return (
    <li
      className="flex items-center gap-4 p-2 w-fullborder-solid border-2 border-gray-200 rounded-md"
      key={announcement.id}
    >
      <span className="mr-auto">{announcement.title}</span>

      <Button onClick={onEditAnnouncement}>Edit</Button>
      <Button onClick={onDeleteItem}>Delete</Button>
    </li>
  );
};

export default AnnouncementItem;
