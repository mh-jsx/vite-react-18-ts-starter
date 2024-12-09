import { config } from 'config';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import AuthRoutes from 'auth/auth-routes';

import ErrorBoundary from './error-boundary';
import PrivateRoutes from './private-routes';
import PublicRoutes from './public-routes';

function Router() {
  const isAuthenticated = false;

  return (
    <BrowserRouter basename={config.env.BASE_URL}>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />

        <Route element={<Outlet />} errorElement={<ErrorBoundary />}>
          {isAuthenticated ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <Route path="auth/*" element={<AuthRoutes />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
