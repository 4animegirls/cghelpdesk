import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import { ImageBackground, StyleSheet } from 'react-native';
import Home from '../home/Home'
import { removeToken } from '../../actions'
import Settings from '../settings/Settings'

const { Navigator, Screen } = createDrawerNavigator();

const Header = () => (
  <Layout style={{  paddingTop: 60, paddingBottom: 20, paddingLeft: 20 }}>
    <Text category='h1' style={{ fontSize: 30, fontFamily: 'serif', margin: 0, padding: 0 }}>coradesk</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => {
  const dispatch = useDispatch();
  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title='Home' />
      <DrawerItem title='Settings' />
      <DrawerItem title='Logout' onPress={() => dispatch(removeToken())} />
    </Drawer>
  )
};

export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Screen name='Home' component={Home} />
    <Screen name='Settings' component={Settings} />
    <Screen name='Logout' component={Screen} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer >
    <DrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator
