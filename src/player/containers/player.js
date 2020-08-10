import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import bigBunny from '../../../assets/big.mp4';
import Layout from '../components/layout';

const Player = () => {
  return (
    <Layout
      video={
        <Video source={bigBunny} style={styles.video} resizeMode="contain" />
      }
    />
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
