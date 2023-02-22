import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes} from './app.routes';
import {CommonStackComp} from './common-stack.navigator';

/**
 * TODO:
 * Select first page of commonstack (done)
 * 'spread' modules into commonStack
 */
export function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeTab"
          component={CommonStackComp}
          initialParams={{initialPage: 'Home'}}
        />
        <Tab.Screen
          name="SettingsTab"
          component={CommonStackComp}
          initialParams={{initialPage: 'Profile'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator<TabRoutes>();
