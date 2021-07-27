import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
      </ApplicationProvider>
    );
  }
}
