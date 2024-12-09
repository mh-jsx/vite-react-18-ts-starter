import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      private layout
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
