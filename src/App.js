import React, {Component} from 'react'; 
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MovieList from './screens/MovieList';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MovieList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App