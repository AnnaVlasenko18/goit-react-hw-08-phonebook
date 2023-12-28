import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-around;
`;

export const ContactItemText = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormText = styled.label`
  font-size: ${props => props.theme.fontSize.fs18};
`;

export const ContactDelete = styled.button`
  &:hover {
    border-radius: ${props => props.theme.radii.sm};
    background: ${props => props.theme.colors.colorText};
    color: ${props => props.theme.colors.background};
  }
`;
export const ContactDeleteIcon = styled(MdDelete)`
  width: 28px;
  height: 28px;
`;
