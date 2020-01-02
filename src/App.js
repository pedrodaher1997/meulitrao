import React from 'react';
import MaterialTopTabNavigator from './routes/MaterialTopTabNavigator';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MaterialTopTabNavigator />
    </PersistGate>
  </Provider>
);

export default App;
