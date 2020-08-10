import React from 'react';
import {StyleSheet, View} from 'react-native';

const horizontalSeparator = () => {
  return <View style={[styles.separator]} />;
};

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default horizontalSeparator;
