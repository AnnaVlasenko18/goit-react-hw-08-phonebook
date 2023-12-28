import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Wrapper = styled.div`
  min-height: calc(60vh);
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  color: white;
`;

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSize.fs20};
`;

export const ErrMsgStyled = styled(ErrorMessage)`
  color: ${props => props.theme.colors.errorText};
  background-color: ${props => props.theme.colors.colorText};
  opacity: 0.9;
  font-size: ${props => props.theme.fontSize.fs20};
  font-weight: 500;
  padding: ${p => p.theme.spacing(1)};
  width: auto;
  border-radius: ${props => props.theme.radii.md};
`;

export const InputForm = styled(Field)`
  width: 300px;
  padding: ${p => p.theme.spacing(2)};
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.background};

  &::placeholder {
    color: ${props => props.theme.colors.background};
    opacity: 0.4;
  }
`;

export const AddContact = styled.button`
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(4)};
  font: inherit;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.backgroundHeader};
  color: ${props => props.theme.colors.background};
  font-weight: 600;

  &:hover {
    border-radius: ${props => props.theme.radii.sm};
    background: ${props => props.theme.colors.backgroundHeader};
    color: ${props => props.theme.colors.background};
    opacity: 0.9;
  }
`;
