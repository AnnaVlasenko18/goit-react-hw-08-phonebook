import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <>
      <p> Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </>
  );
};
