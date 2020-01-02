import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';

export default () => (
  <>
    <StatusBar
      backgroundColor="#fff"
      translucent={false}
      barStyle="dark-content"
    />
    <App />
  </>
);
