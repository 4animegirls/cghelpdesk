import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {connect } from 'react-redux'
import Details from '../details/Details';
import Login from '../login/Login'
import DrawerNavigator from './DrawerNavigator'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import translations from '../../locale';
import { setLocaleAsUpdated } from '../../actions';

const Stack = createStackNavigator()

i18n.translations = translations;
i18n.fallbacks = true;

class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {(this.props.user.Token === null)
            && <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
          {(this.props.user.Token !== null)
            && <Stack.Screen name='root' component={DrawerNavigator} options={{ headerShown: false }} />}
          {(this.props.user.Token !== null)
            && <Stack.Screen name='Details' component={Details} options={{ headerShown: false }}/>}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null
)(AppNavigator)

