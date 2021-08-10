import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { loginAction } from '../../actions';



class LoginLoader extends Component {
  state = {
    isLoading: false
  }


  doSignup = async () => {
    this.setState({ isLoading: true });
    this.props.loginAction();
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
const mapDispatchToProps = dispatch => ({
  loginAction: userLogin => dispatch(loginAction(userLogin))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginLoader)