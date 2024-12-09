import { Navigate, Route, Routes } from 'react-router-dom';

import Test from 'components/test';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default PublicRoutes;
