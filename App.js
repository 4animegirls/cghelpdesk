import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import Navigation from './components/navigation/Navigation';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { default as theme } from './theme.json';
import {  Provider } from 'react-redux';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeContext } from './contexts/theme-context';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      theme: 'dark'
    }
  }

  //[this.state.theme]

  toggleTheme = () => {
    let nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: nextTheme });
  };

  render() {
    return (
      <>
        <Provider store={store}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeContext.Provider value = {{theme: this.state.theme, toggleTheme: this.toggleTheme}} >
            <ApplicationProvider {...eva} theme={{...eva[this.state.theme], ...theme}}> 
              <Navigation />
            </ApplicationProvider>
          </ThemeContext.Provider>
        </Provider>
      </>
    );
  }
}
