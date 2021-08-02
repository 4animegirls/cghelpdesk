import React, { Component } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

export default class Login extends Component {
  state = { value: '' };

  setValue = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>FACE IN THE CULTURE OF FACELESSNESS</Text>
        <Input
          placeholder='Place your Text'
          value={this.state.value}
          onChangeText={nextValue => this.setValue(nextValue)}
        />
        <Input
          placeholder='Place your Text'
          value={this.state.value}
          onChangeText={nextValue => this.setValue(nextValue)}
        />
        <Button>
          BUTTON
        </Button>
      </Layout>
    );
  }
}
