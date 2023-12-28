import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaAddressBook } from 'react-icons/fa';

export const StyledHeaderConteiner = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderNav = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.fs28};
  color: ${p => p.theme.colors.colorTextHeader};
  font-weight: 900;
`;

export const StyledHeaderLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.fs20};
  color: ${p => p.theme.colors.colorTextHeader};
  font-weight: 700;
  padding-left: ${p => p.theme.spacing(8)};
`;

export const StyledHeaderIcon = styled(FaAddressBook)`
  width: 32px;
  height: 32px;
`;
