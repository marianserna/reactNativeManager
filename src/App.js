import React from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBQjPAfr6bVvqq5vE6iL-xN-B2PgIzR4QQ',
      authDomain: 'manager-b8c1d.firebaseapp.com',
      databaseURL: 'https://manager-b8c1d.firebaseio.com',
      projectId: 'manager-b8c1d',
      storageBucket: 'manager-b8c1d.appspot.com',
      messagingSenderId: '1047358442019'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
