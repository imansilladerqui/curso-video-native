import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const verticalSeparator = (props) => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default verticalSeparator;
