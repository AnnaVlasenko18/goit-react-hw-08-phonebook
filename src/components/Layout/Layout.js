import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

// import { Outlet } from 'react-router-dom';
// import { AppBar } from '../AppBar/AppBar';

// export const Layout = () => {
//   return (
//     <>
//       {' '}
//       <p>ghsghgxh</p>
//       {/* <AppBar /> */}
//       <Outlet />
//     </>
//   );
// };
