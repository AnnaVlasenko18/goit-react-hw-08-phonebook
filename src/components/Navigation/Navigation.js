import { useAuth } from '../../hooks/useAuth';
import {
  StyledHeaderNav,
  StyledHeaderLink,
  StyledHeaderConteiner,
  StyledHeaderIcon,
} from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeaderConteiner>
      <StyledHeaderNav to="/">PHONEBOOK</StyledHeaderNav>

      {isLoggedIn && (
        <StyledHeaderLink to="/contacts">
          <StyledHeaderIcon width="49px" height="49px" />
        </StyledHeaderLink>
      )}
    </StyledHeaderConteiner>
  );
};
