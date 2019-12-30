import React from 'react';
import {View, Text} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import List from './pages/List';

const App = () => {
  return (
    <NavigationNativeContainer>
      <View style={{backgroundColor: '#fff', padding: 16}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Meu Litrão</Text>
      </View>
      <Tab.Navigator initialRouteName="Pendentes">
        <Tab.Screen
          name="Pendentes"
          component={() => <List status="pendentes" />}
        />
        <Tab.Screen
          name="Devolvidos"
          component={() => <List status="devolvidos" />}
        />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
