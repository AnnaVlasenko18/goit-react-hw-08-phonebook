import styled from 'styled-components';

export const StyleContactListConteiner = styled.div`
  min-height: calc(60vh);
  background: ${props => props.theme.colors.background};
  color: white;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const ContactsTitle = styled.h1`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.fs28};
  text-align: 'center';
  font-weight: bold;
  padding-left: ${p => p.theme.spacing(6)};
`;
