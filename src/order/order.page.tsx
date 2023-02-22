import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {CommonRoutes} from '../app.routes';
import {Page} from '../shared/page.component';

export interface OrderDetailPageProps {
  orderId: string;
}
export const OrderDetailPage = (
  props: NativeStackScreenProps<CommonRoutes, 'Order'>,
) => {
  return (
    <Page>
      <Text>Order id is {props.route.params.orderId}</Text>
    </Page>
  );
};
