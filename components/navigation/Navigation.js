import React, { Component } from 'react';
import { IndexPath, Layout, Drawer, DrawerItem, Icon, IconRegistry, Button, ViewPager, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home'
import Settings from '../settings/Settings'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../actions'

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  const dispatch = useDispatch();

  const DrawerContent = ({ navigation, state }) => (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title='Home' style={{ marginTop: '15%' }} />
      <DrawerItem title='Settings' />
      <DrawerItem title='LogOut' />
    </Drawer>
  );

  export const DrawerNavigator = () => (
    <Navigator drawerContent={props => <DrawerContent {...props} />} style={{ height: '100%' }}>
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
