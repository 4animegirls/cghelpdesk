import React, { Component } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { addToken } from '../../actions'

class Login extends Component {
  state = { name: '',
            password: '' };


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
        <Button onPress = {() => {(this.state.name=='admin' && this.state.password=='lol')? this.props.addToken('test'): null}}>
          LOG IN
        </Button>
      </Layout>
    );
  }
}

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
