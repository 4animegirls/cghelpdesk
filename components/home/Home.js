import React, { Component } from 'react';
import { Layout, Text} from '@ui-kitten/components';

export default class Login extends Component {
  state = { value: '' };

  setValue = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      </Layout>
    );
  }
}
