import React, { Component } from 'react';


export default class LoginButton extends Component {
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
        <TouchableOpacity onPress={this.doSignup}>
          <Text>LOG IN</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={this.state.isLoading} />
      </View>
    );
  }
}
