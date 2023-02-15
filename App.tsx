import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Profile"
          component={DetailsScreen}
          options={{title: 'Detalhes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type StackRoute = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackRoute>();

const HomeScreen: React.FC<
  NativeStackScreenProps<StackRoute, 'Home'>
> = props => {
  const [text, setText] = useState('Debug');

  return (
    <View style={styles.screen}>
      <Pressable onPress={() => setText('Hey ya!')}>
        <Text>{text}</Text>
      </Pressable>
      <Button
        title="Go to list"
        onPress={() => props.navigation.push('Profile')}
      />
    </View>
  );
};

function DetailsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
