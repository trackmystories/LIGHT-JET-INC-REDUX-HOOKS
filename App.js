import React from 'react';
import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Home from './src/Home';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require('./assets/components.jpeg')}
      />
      <Text style={styles.title}>LIGHT JET INC</Text>
      <Text style={styles.paragraph}>
        The total number of items left over for each main component category
        after each manufacturing day.
      </Text>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '12%',
    backgroundColor: '#fffbf2',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
  },
  title: {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'center',
  },
});
