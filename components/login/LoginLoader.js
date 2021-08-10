import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { Text, Button } from '@ui-kitten/components';
import { loginAction } from '../../actions';



class LoginLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  loginAction = ({ Username, Password }) => {
    return { Token: 'fdfdgdfrg4', username: 'svagi' };
  }

  doSignup = async () => {
    const Username = this.props.Username
    const Password = this.props.Password
    this.setState({ isLoading: true });
    await this.loginAction({ Username, Password });
    this.setState({ isLoading: false })

  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.doSignup}>
          <Text>LOG IN </Text>
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