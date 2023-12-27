import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <AuthNav /> : <UserMenu />} */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
