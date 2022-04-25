import Button from '../UI/Button';

const AnnouncementItem = ({ onEditAnnouncement, announcement, onDeleteItem, viewOnly }) => {
  const editHandler = (evt) => {
    evt.preventDefault();

    onEditAnnouncement();
  };

  const deleteHandler = (evt) => {
    evt.preventDefault();

    onDeleteItem();
  };

  return (
    <li
      className="flex items-center gap-4 p-2 w-fullborder-solid border-2 border-gray-200 rounded-md hover:bg-zinc-300 ease-in duration-300"
      key={announcement.id}
    >
      <span className="mr-auto">{announcement.title}</span>

      {!viewOnly && <Button onClick={editHandler}>Edit</Button>}
      {!viewOnly && <Button onClick={deleteHandler}>Delete</Button>}
    </li>
  );
};

export default AnnouncementItem;
