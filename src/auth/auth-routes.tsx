import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Login from './login';

function AuthRoutes() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path="sign-in" element={<Login />} />

        <Route index element={<Login />} />

        <Route path="*" element={<Navigate to="/auth" />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
