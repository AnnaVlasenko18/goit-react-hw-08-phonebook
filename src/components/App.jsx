import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/authSelector';
import { refreshUser } from '../redux/auth/authOperations';
import { Loader } from './Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const Login = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RegistrationPage
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
