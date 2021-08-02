import React, { Component } from 'react';
import { Layout, Text, Input, Button, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { addToken } from '../../actions'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'

class Login extends Component {
  state = { name: '',
            password: '' };


  render() {
    if(this.props.status.token !=='test'){
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>Login</Text>
        <Input
          placeholder='Username'
          value={this.state.name}
          onChangeText={nextValue => this.setState({ name: nextValue })}
        />
        <Input
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={nextValue => this.setState({ password: nextValue })}
          style = {{padding:5}}
        />
        <Button onPress = {() => {(this.state.name=='admin' && this.state.password=='lol')? this.props.addToken('test'): null}}>
          LOG IN
        </Button>
        <Divider style = {{height:5}}/>
        <Button onPress = {() => {this.props.addToken('test')}} status='warning'>
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
  addToken: token => dispatch(addToken(token))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
