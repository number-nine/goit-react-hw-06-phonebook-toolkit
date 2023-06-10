import { useSelector, useDispatch } from 'react-redux';

import { remove } from 'redux/contactsSlice';
import { ListWrapper } from './ContactsList.styled';
import { Button } from '../common.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  const dispatch = useDispatch();
  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(remove(id))}>
              Delete
            </Button>
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
