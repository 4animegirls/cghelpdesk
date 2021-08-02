import React, { Component } from 'react';
import { IndexPath, Layout, Drawer, DrawerItem, Icon, IconRegistry, Button, ViewPager, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home'

const { Navigator, Screen } = createDrawerNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='Home'/>
    <DrawerItem title='Orders' />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>} style= {{height:'100%'}}>
    <Screen name='Home' component={Home}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer >
    <DrawerNavigator/>
  </NavigationContainer>
);

export default AppNavigator;