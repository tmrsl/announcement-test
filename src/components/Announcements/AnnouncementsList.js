import Card from "../UI/Card";

const AnnouncementList = (props) => {
  return (
    <Card className="mx-auto my-0 w-4/5 max-w-2xl">
      <ul className="p-4 list-none">
        {props.announcements.map((announcement) => (
          <li
            className="flex-shrink w-full min-w-1 mx-0 my-2 p-2 border-solid border-2 border-gray-200 rounded-md"
            onClick={() => props.onEditAnnouncement(announcement)}
            key={announcement.id}
          >
            {announcement.title}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default AnnouncementList;
