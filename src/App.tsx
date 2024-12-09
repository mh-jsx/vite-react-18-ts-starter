import { ConfigProvider } from 'antd';
import { config } from 'config';
import Router from 'routes/router';

function App() {
  return (
    <ConfigProvider theme={config.antd.theme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
