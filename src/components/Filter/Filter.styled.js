import styled from 'styled-components';

export const ContactFilter = styled.input`
  padding: ${p => p.theme.spacing(1)};
  opacity: 0.8;
  color: ${props => props.theme.colors.background};
  border: 1.5px solid ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.sm};

  &::placeholder {
    color: ${props => props.theme.colors.background};
    opacity: 0.4;
  }
`;
