import React from 'react';
import {Button, Text, View} from 'react-native';
import {CommonScreenProps} from '../app.routes';

export function HomePage(props: CommonScreenProps<'Home'>) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to order list"
        onPress={() => props.navigation.push('OrderList')}
      />
    </View>
  );
}
