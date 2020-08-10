import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Suggestion = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{
            uri: props.item.medium_cover_image,
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.item.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.year}>{props.item.year}</Text>
        <Text style={styles.rating}>{props.item.rating} Estrellas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  left: {},
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: '#ffffff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: '#fff',
    fontSize: 11,
  },
});

export default Suggestion;