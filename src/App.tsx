import { ConfigProvider } from 'antd';
import { config } from 'config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from 'routes/router';

import { persistor, store } from './store/redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={config.antd.theme}>
          <Router />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
