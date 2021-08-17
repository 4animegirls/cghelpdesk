import React, { Component } from 'react';
import { Layout, Text, Input, Button, Divider, Spinner } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { addToken, loginAction } from '../../actions'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'
import i18n from 'i18n-js';
import { ActivityIndicator} from "react-native";


class Login extends Component {
  constructor(props){
    super(props)
    this.state = { name: '',
            password: '' };
  }

  loginHandler = () => {
    this.props.loginAction({ Username: this.state.name, Password: this.state.password });
  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1' style={{ fontSize: 50, fontFamily: 'serif', marginBottom: 50 }}>coradesk</Text>
        <Input
          placeholder={i18n.t('login.username')}
          value={this.state.name}
          onChangeText={nextValue => this.setState({ name: nextValue })}
          style={{ width: 300 }}
        />
        <Input
          placeholder={i18n.t('login.password')}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={nextValue => this.setState({ password: nextValue })}
          style={{ marginBottom: 7, marginTop: 7, width: 300 }}
        />
        <Button style={{ width: 300 }} onPress={this.loginHandler} disabled={this.props.user.loginRequest}>
          {this.props.user.loginRequest ? <ActivityIndicator  size='small' color = '#fff' /> : i18n.t('login.login')}
        </Button>
        <Button onPress={() => { this.props.addToken('test') }} style={{ width: 300, marginTop: 7 }} status='warning'>
          {i18n.t('login.debug')}
        </Button>

        {this.props.user.error &&
          <Text category='h6' status="warning">{this.props.user.error}</Text>
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status,
  user: state.user
})


const mapDispatchToProps = dispatch => ({
  addToken: token => dispatch(addToken(token)),
  loginAction: userLogin => dispatch(loginAction(userLogin))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
