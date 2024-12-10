import { Outlet } from 'react-router-dom';

function PrimaryLayout() {
  return (
    <div>
      private Primary layout
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PrimaryLayout;
