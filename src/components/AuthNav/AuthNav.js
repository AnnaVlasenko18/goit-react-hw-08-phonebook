import { HeaderNav, HeaderDiv } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <HeaderDiv>
      <HeaderNav to="/register">Register</HeaderNav>
      <HeaderNav to="/login">Log In</HeaderNav>
    </HeaderDiv>
  );
};
