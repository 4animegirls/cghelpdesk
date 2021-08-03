import React, { Component } from 'react';
import { Layout, Text, Input, Button, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { addToken, login } from '../../actions'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'

class Login extends Component {
  state = { name: '',
            password: '' };


  render() {
    if(this.props.status.token !=='test'){
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1' style={{ fontSize: 50, fontFamily: 'serif', paddingBottom: 50 }}>coradesk</Text>
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
          style = {{paddingBottom:7, paddingTop:7, width:300 }}
        />
        <Button style = {{ width: 300, paddingBottom:7 }} onPress = {() => {
          (this.state.name=='text' && this.state.password=='x')? this.props.login({username: this.state.name, password: this.state.password}): null}}>
          LOG IN
        </Button>
        <Divider style = {{height:5}}/>
        <Button onPress = {() => {this.props.addToken('test')}} style={{ width: 300 }} status='warning'>
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
  login: userLogin => dispatch(login(userLogin))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
