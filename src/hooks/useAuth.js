import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelector.js';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    userName: useSelector(selectUserName),
  };
};
