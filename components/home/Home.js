import React, { Component } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { ButtonSimpleUsageShowcase } from './Button';

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>FACE IN THE CULTURE OF FACELESSNESS</Text>
        <ButtonSimpleUsageShowcase />
      </Layout>
    );
  }
}
