import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

  const isSearchResults = useMemo(() => {
    if (search.trim().length < 1) {
      return true;
    }

    return search && itemsToDisplay.length;
  }, [itemsToDisplay, search]);

  return (
    <Card className="p-4 mx-auto w-full max-w-2xl">
      <Input className="mb-4" placeholder="Search ..." value={search} onChange={(e) => setSearch(e.target.value)} />

      {isSearchResults ? (
        <ul className="flex flex-col gap-1 list-none">
          {itemsToDisplay.map((announcement) => (
            <Link key={announcement.id} to={`/announcements/${announcement.id}`}>
              <AnnouncementItem
                announcement={announcement}
                onEditAnnouncement={() => props.onEditAnnouncement(announcement)}
                onDeleteItem={() => props.onDeleteAnnouncement(announcement.id)}
              />
            </Link>
          ))}
        </ul>
      ) : (
        <div>Nothing was found for "{search}"</div>
      )}
    </Card>
  );
}

export default AnnouncementList;
