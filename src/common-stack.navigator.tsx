import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CommonRoutes, TabRoutes} from './app.routes';
import {HomePage} from './home/home.page';
import {OrderListPage} from './order/order-list.page';
import {OrderDetailPage} from './order/order.page';
import {ProfilePage} from './settings/profile.page';

export function CommonStackComp(props: BottomTabScreenProps<TabRoutes>) {
  return (
    <CommonStack.Navigator initialRouteName={props.route.params.initialPage}>
      <CommonStack.Screen name="Home" component={HomePage} />
      <CommonStack.Screen name="Profile" component={ProfilePage} />
      <CommonStack.Screen name="Order" component={OrderDetailPage} />
      <CommonStack.Screen name="OrderList" component={OrderListPage} />
    </CommonStack.Navigator>
  );
}

const CommonStack = createNativeStackNavigator<CommonRoutes>();
