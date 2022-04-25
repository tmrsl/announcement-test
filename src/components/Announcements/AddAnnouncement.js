import Input from '../UI/Input';
import Button from '../UI/Button';
import { useEffect, useState, useMemo } from 'react';

const AddAnnouncement = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEntereddescription] = useState('');

  const isAnnouncementEdit = props.announcementToEdit;

  useEffect(() => {
    if (isAnnouncementEdit) {
      const { title, description } = props.announcementToEdit;
      setEnteredTitle(title);
      setEntereddescription(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnnouncementHandler = (event) => {
    event.preventDefault();

    const payload = { title: enteredTitle, description: enteredDescription };

    if (isAnnouncementEdit) {
      const { id } = props.announcementToEdit;
      props.onUpdateAnnouncment({ ...payload, id });
    } else {
      props.onAddAnnouncement(payload);
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

  const canSubmit = useMemo(() => {
    return enteredTitle.trim() && enteredDescription.trim();
  }, [enteredTitle, enteredDescription]);

  return (
    <form onSubmit={addAnnouncementHandler}>
      <Input label="Title" id="aTitle" type="text" value={enteredTitle} onChange={enteredTitleHandler} />
      <Input
        label="Description"
        id="aDescription"
        type="text"
        value={enteredDescription}
        onChange={enteredDescriptionHandler}
      />

      <div className="mt-4 flex gap-4">
        <Button type="submit" disabled={!canSubmit}>
          {isAnnouncementEdit ? 'Edit Announcement' : 'Add Announcement'}
        </Button>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddAnnouncement;
