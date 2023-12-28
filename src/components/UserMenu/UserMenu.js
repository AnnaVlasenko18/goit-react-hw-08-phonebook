import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <p> Welcome, {userName.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </>
  );
};
