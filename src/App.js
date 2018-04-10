import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    // {} --> initial state that we want to pass to the reducer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
