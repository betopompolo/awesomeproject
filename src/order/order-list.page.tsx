import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CommonScreenProps} from '../app.routes';

export function OrderListPage(props: CommonScreenProps<'OrderList'>) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[...Array(10).keys()].map(it => it.toString())}
        renderItem={({item}) => (
          <Text
            style={{padding: 16}}
            onPress={() => props.navigation.push('Order', {orderId: item})}>
            Order {item}
          </Text>
        )}
      />
    </View>
  );
}
