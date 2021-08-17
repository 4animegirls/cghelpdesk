import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import Details from '../details/Details';
import Login from '../login/Login'
import DrawerNavigator from './DrawerNavigator'
import { View } from 'react-native';

const Stack = createStackNavigator()

class AppNavigator extends Component {
  render() {

    return (
      <View style={{ background: '#222B45' }}>
        <NavigationContainer >
          <Stack.Navigator>
            {(this.props.user.Token === null)
              && <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
            {(this.props.user.Token !== null)
              && <Stack.Screen name='root' component={DrawerNavigator} options={{ headerShown: false }} />}
            {(this.props.user.Token !== null)
              && <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user
})




export default connect(
  mapStateToProps,
  null
)(AppNavigator)

