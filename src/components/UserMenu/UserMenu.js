import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Filter } from '../Filter/Filter';
import { StyledUserMenuButton } from '../UserMenu/UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <Filter />
      <StyledUserMenuButton type="button" onClick={handleLogOut}>
        Logout
      </StyledUserMenuButton>
    </>
  );
};
