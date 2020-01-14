import React from 'react';
import MaterialTopTabNavigator from './routes/MaterialTopTabNavigator';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//aqui importo o store e o persistor que criamos
import {store, persistor} from './store';

/**
 * O Provider tem que ser sempre o primeiro elemento
 * O PersistGate sempre dentro de provider
 * E em seguida o seu Index.js ou App.js (depende da estrutura do App)
 * Dessa forma tudo que esta dentro de Provider e PersistGate tem acesso ao State
 */

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MaterialTopTabNavigator />
    </PersistGate>
  </Provider>
);

export default App;
