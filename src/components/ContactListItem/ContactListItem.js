import { useDispatch } from 'react-redux';
import {
  ContactItem,
  ContactItemText,
  ContactDelete,
  FormText,
  ContactDeleteIcon,
} from './ContactListItem.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handelDelete = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <ContactItemText>
        <FormText>{name}:</FormText>
        <FormText>{number}</FormText>
      </ContactItemText>
      <ContactDelete type="button" onClick={handelDelete}>
        <ContactDeleteIcon />
      </ContactDelete>
    </ContactItem>
  );
};
