import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};
