import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
