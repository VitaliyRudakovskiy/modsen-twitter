import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/App';
import store, { persistor } from '@/store';

const AppRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppRedux;
