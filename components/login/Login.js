import React, { Component } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

export default class Login extends Component {
  state = { name: '',
            password: '' };

  setValue = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>FACE IN THE CULTURE OF FACELESSNESS</Text>
        <Input
          placeholder='Name'
          value={this.state.name}
          onChangeText={nextValue => this.setState({ name: nextValue })}
        />
        <Input
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={nextValue => this.setState({ password: nextValue })}
        />
        <Button onPress = {() => {console.log('login')}}>
          LOG IN
        </Button>
      </Layout>
    );
  }
}
