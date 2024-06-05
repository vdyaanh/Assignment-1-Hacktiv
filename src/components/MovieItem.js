import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieItem = ({ title, poster, plot }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 15,
  },
  plot: {
    fontSize: 12,
    color: 'black',
  },
});

export default MovieItem;