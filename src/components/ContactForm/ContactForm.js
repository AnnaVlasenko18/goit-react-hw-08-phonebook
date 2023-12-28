import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  FormLabel,
  ErrMsgStyled,
  InputForm,
  FormContact,
  AddContact,
} from '../ContactForm/ContactForm.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';
import toast from 'react-hot-toast';
const phoneRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'The name must contain only letters')
    .min(2, 'Too Short!')
    .required('Required!'),
  number: Yup.string()
    .matches(phoneRegExp, 'Enter the number in the format "XXX-XX-XX"')
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleAddContact = values => {
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (checkContact) {
      Report.warning(
        'Contact has not been added.',
        `${values.name} is already in contacts.`,
        'Okay'
      );
      return;
    }
    dispatch(addContact(values));
    toast.success('Successfully created!');
  };
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          handleAddContact(values);
          actions.resetForm();
        }}
      >
        <FormContact>
          <FormLabel htmlFor="name">Name</FormLabel>
          <InputForm name="name" type="text" placeholder="Name" />
          <ErrMsgStyled name="name" component="div" />

          <FormLabel>Number</FormLabel>
          <InputForm name="number" placeholder="XXX-XX-XX" type="tel" />
          <ErrMsgStyled name="number" component="p" />

          <AddContact type="submit" disabled={isLoading}>
            Add contact
          </AddContact>
        </FormContact>
      </Formik>
    </Wrapper>
  );
};
