import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Home from './components/home/Home';

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Home />
      </ApplicationProvider>
    );
  }
}
