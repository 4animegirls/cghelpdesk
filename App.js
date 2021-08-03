import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Application from './components/application/Application';


const store = createStore(rootReducer, applyMiddleware(thunk))
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
