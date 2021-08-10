import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '@ui-kitten/components';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { loginAction } from '../../actions';



class LoginLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }


  doSignup = async () => {
    const Username =  this.props.Username
    const Password = this.props.Password
    this.setState({ isLoading: true });
    await this.props.loginAction({ Username, Password });
    this.setState({ isLoading: false })
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.doSignup}>
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