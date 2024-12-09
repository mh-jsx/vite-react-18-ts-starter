import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/layout';
import NotFound from 'components/not-found/not-found';

const Dashboard = lazy(() => import('pages/private-route'));

function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
