import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';
import { Loader } from 'components/Loader';
import { ErrorMsg } from '../ErrorMessage/ErrorMessage';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ContactsList>
      {isLoading && <Loader />}
      {error && <ErrorMsg />}
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ContactsList>
  );
};
