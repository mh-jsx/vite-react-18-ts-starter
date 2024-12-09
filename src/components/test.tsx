import { Button, Table } from 'antd';

import { removeAuth, saveAuth } from 'auth/core/_slice';

import { useAppDispatch, useAppSelector } from 'store/redux/hooks';

function Test() {
  const { count } = useAppSelector((state) => state.feature1);
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  console.log('::: count:', count);
  console.log('::: auth:', auth);

  const handleLogin = () => {
    const u = { id: '123', name: 'John Doe', email: 'john@example.com' };
    const t = 'jwt-token-here';
    dispatch(saveAuth({ user: u, token: t }));
  };

  const handleLogout = () => {
    dispatch(removeAuth());
  };

  return (
    <div>
      <div className="flex gap-4">
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button onClick={handleLogout}>Logout</Button>

        <Table dataSource={[]} columns={[]} />
      </div>
    </div>
  );
}

export default Test;
