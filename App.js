import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import Login from './components/login/Login';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const store = createStore(rootReducer, applyMiddleware(thunk))
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.dark}>
              <Login />
            </ApplicationProvider>
        </Provider>
      </>
    );
  }
}
