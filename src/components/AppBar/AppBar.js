import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';
import { StyledHeader } from '../AppBar/AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};
