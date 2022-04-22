import Card from '../UI/Card';
import Button from '../UI/Button';

function AnnouncementsEmpty(props) {
  return (
    <Card className="flex flex-col items-center justify-center p-8 mx-auto my-0 w-4/5 max-w-2xl">
      <h2 className="mb-4">Seems like you don't have any announcements yet.</h2>
      <Button onClick={props.onStartAdd}>Add new annoncement</Button>
    </Card>
  );
}

export default AnnouncementsEmpty;
