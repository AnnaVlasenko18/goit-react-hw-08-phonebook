import React from 'react';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import {
  StyleContainer,
  StyleTitle,
  StyleIcon,
  StyleContactsPageContainer,
  StyleContactsPage,
} from '../HomePage/HomePageStyled';

import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function HomePage() {
  const { userName } = useAuth();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <StyleContactsPageContainer>
      <StyleContactsPage>
        <StyleTitle>Wellcome to Phonebook, {userName.name}!</StyleTitle>
        <StyleIcon icon={faSmile} size="3x" />
      </StyleContactsPage>
      <Button
        variant="link"
        colorScheme="whide"
        width="200px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Link to="/contacts">My contacts</Link>
      </Button>
    </StyleContactsPageContainer>
  ) : (
    <StyleContainer>
      <StyleTitle>Wellcome to Phonebook!</StyleTitle>
      <StyleIcon icon={faSmile} size="3x" />
    </StyleContainer>
  );
}
