import React from 'react';
import {Button, Text, View} from 'react-native';
import {CommonScreenProps} from '../app.routes';

export function ProfilePage(props: CommonScreenProps<'Profile'>) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
      <Button
        title="Go to OrderDetail 321"
        onPress={() => props.navigation.push('Order', {orderId: '321'})}
      />
    </View>
  );
}
