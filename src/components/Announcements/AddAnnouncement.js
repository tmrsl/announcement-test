import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useEffect, useState } from 'react';

const AddAnnoncement = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEntereddescription] = useState('');

  const isAnnouncementEdit = props.announcementToEdit;

  useEffect(() => {
    if (isAnnouncementEdit) {
      const { title, description } = props.announcementToEdit;
      setEnteredTitle(title);
      setEntereddescription(description);
    }
  }, []);

  const addAnnouncementHandler = (event) => {
    event.preventDefault();

    const payload = { title: enteredTitle, description: enteredDescription };

    if (isAnnouncementEdit) {
      const { id } = props.announcementToEdit;
      props.onUpdateAnnouncment({ ...payload, id });
    } else {
      props.onAddAnnouncment(payload);
    }

    setEnteredTitle('');
    setEntereddescription('');
  };

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredDescriptionHandler = (event) => {
    setEntereddescription(event.target.value);
  };

  return (
    <Card className="mx-auto my-0 mb-8 w-4/5 max-w-2xl p-4">
      <form onSubmit={addAnnouncementHandler}>
        <Input label="Title" id="aTitle" type="text" value={enteredTitle} onChange={enteredTitleHandler} />
        <Input
          label="Description"
          id="aDescription"
          type="text"
          value={enteredDescription}
          onChange={enteredDescriptionHandler}
        />
        <Button className="mt-2" type="submit">
          {isAnnouncementEdit ? 'Edit Announcement' : 'Add Announcement'}
        </Button>
        <Button className="mt-2">Cancel</Button>
      </form>
    </Card>
  );
};

export default AddAnnoncement;
