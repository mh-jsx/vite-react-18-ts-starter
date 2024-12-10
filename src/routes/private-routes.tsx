import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PrimaryLayout } from 'components/layouts';
import { NotFound } from 'components/ui';

const Dashboard = lazy(() => import('pages/private-route'));

function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
