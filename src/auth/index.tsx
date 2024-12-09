import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import SignIn from './components/sign-in';

function AuthRoutes() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path="sign-in" element={<SignIn />} />

        <Route index element={<SignIn />} />

        <Route path="*" element={<Navigate to="/auth" />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
