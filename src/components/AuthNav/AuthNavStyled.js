import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.fs20};
  color: ${p => p.theme.colors.colorTextHeader};
  font-weight: 900;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
