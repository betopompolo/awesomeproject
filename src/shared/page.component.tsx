import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Page: React.FC<React.PropsWithChildren> = props => {
  return <View style={styles.page}>{props.children}</View>;
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
