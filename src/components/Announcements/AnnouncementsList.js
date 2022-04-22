import { useState, useMemo } from 'react';
import Card from '../UI/Card';
import Input from '../UI/Input';
import AnnouncementItem from './AnnouncementItem';

function AnnouncementList(props) {
  const [search, setSearch] = useState('');

  const itemsToDisplay = useMemo(() => {
    if (!search) {
      return props.announcements;
    }

    return props.announcements.filter((a) => a.title.toLowerCase().includes(search.toLowerCase()));
  }, [props.announcements, search]);

  return (
    <Card className="p-4 mx-auto my-0 w-4/5 max-w-2xl">
      <Input className="mb-4" placeholder="Search ..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <ul className="flex flex-col gap-1 list-none">
        {itemsToDisplay.map((announcement) => (
          <AnnouncementItem
            key={announcement.id}
            announcement={announcement}
            onEditAnnouncement={() => props.onEditAnnouncement(announcement)}
            onDeleteItem={() => props.onDeleteAnnouncement(announcement.id)}
          />
        ))}
      </ul>
    </Card>
  );
}

export default AnnouncementList;
