import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import List from '../pages/List';
import Header from '../components/Header';

const App = () => {
  return (
    <NavigationNativeContainer>
      <Header />
      <Tab.Navigator initialRouteName="Pendentes">
        <Tab.Screen
          name="Pendentes"
          component={() => <List received={false} />}
        />
        <Tab.Screen
          name="Devolvidos"
          component={() => <List received={true} />}
        />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
