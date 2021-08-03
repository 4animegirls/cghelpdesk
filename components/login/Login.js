import React, { Component } from 'react';
import { Layout, Text, Input, Button, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { addToken, loginAction } from '../../actions'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'

class Login extends Component {
  state = { name: '',
            password: '' };


  render() {
    if(this.props.status.user.Token === null){
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1' style={{ fontSize: 50, fontFamily: 'serif', marginBottom: 50 }}>coradesk</Text>
        <Input
          placeholder='Username'
          value={this.state.name}
          onChangeText={nextValue => this.setState({ name: nextValue })}
          style={{ width: 300 }}
        />
        <Input
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={nextValue => this.setState({ password: nextValue })}
          style = {{ marginBottom:7, marginTop:7, width:300 }}
        />
        <Button style = {{ width: 300 }} onPress = {() => {
          this.props.loginAction({Username: this.state.name, Password: this.state.password})}}>
          LOG IN
        </Button>
        <Button onPress = {() => {this.props.addToken('test')}} style={{ width: 300, marginTop: 7 }} status='warning'>
          DEBUG
        </Button>
      </Layout>
    );
  }
  else {
    return(
    <Navigation />
    )


  }
}}

const mapStateToProps = state => ({
  status : state.status
})


const mapDispatchToProps = dispatch => ({
  addToken: token => dispatch(addToken(token)),
  loginAction: userLogin => dispatch(loginAction(userLogin))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
