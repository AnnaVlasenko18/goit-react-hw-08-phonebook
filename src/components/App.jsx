import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

// import { lazy, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import React from 'react';
// import { Layout } from './Layout/Layout';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsRefreshing } from '../redux/auth/authSelector';
// import { refreshUser } from '../redux/auth/authOperations';
// import { Loader } from './Loader';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="/register" element={<RegistrationPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/contacts" element={<ContactsPage />} />
//       </Route>
//     </Routes>
//   );
// };
