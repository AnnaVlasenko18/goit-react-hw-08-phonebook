import React from 'react';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import {
  StyleContainer,
  StyleTitle,
  StyleIcon,
} from '../HomePage/HomePageStyled';

export default function HomePage() {
  return (
    <StyleContainer>
      <StyleTitle>Wellcome to Phonebook!</StyleTitle>
      <StyleIcon icon={faSmile} size="2x" />
    </StyleContainer>
  );
}
