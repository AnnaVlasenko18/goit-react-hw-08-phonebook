import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  ContactsList,
  ContactsTitle,
  StyleContactListConteiner,
} from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/selectors.js';
import { Loader } from 'components/Loader';
import { ErrorMsg } from '../ErrorMessage/ErrorMessage';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <StyleContactListConteiner>
      <ContactsList>
        <ContactsTitle>Contacts</ContactsTitle>
        {isLoading && <Loader />}
        {error && <ErrorMsg />}
        {contacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ContactsList>
    </StyleContactListConteiner>
  );
};
