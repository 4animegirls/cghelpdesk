import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'



export default class LoginLoader extends Component {
  state = {
    isLoading: false
  };

  doSignup = async () => {
    this.setState({ isLoading: true });
    await asyncSignupFunction();
    this.setState({ isLoading: false })
  };

  render() {
    return (
      <View>
        <TouchableOpacity  onPress={this.doSignup}>
          <Text>LOG IN</Text>
        </TouchableOpacity >
        <ActivityIndicator animating={this.state.isLoading} />
      </View>
    );
  }
}
