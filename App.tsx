import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Markdown} from './markdown/markdown.component';

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

const myMarkdown =
  'Hello! Some **bold text**, *italic text* and a [google link](https://www.google.com.br)';

const HomeScreen: React.FC<NativeStackScreenProps<StackRoute, 'Home'>> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Input</Text>
      <Text>{myMarkdown}</Text>

      <View style={{height: 32}} />

      <Text style={styles.sectionTitle}>Output</Text>
      <Text>
        <Markdown
          markdown={myMarkdown}
          renderBold={text => <Bold>{text}</Bold>}
          renderItalic={text => <Italic>{text}</Italic>}
          renderLink={(text, url) => {
            return (
              <Text
                style={{textDecorationLine: 'underline'}}
                onPress={() => Linking.openURL(url)}>
                {text}
              </Text>
            );
          }}
        />
      </Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sectionTitle: {fontSize: 30, fontWeight: 'bold', marginBottom: 8},
});

export interface BoldProps {
  children: string;
}
export const Bold: React.FC<BoldProps> = props => {
  return <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
};

export interface ItalicProps {
  children: string;
}
export const Italic: React.FC<ItalicProps> = props => {
  return <Text style={{fontStyle: 'italic'}}>{props.children}</Text>;
};
