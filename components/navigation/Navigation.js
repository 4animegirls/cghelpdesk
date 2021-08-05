import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import Home from '../home/Home'
import { removeToken } from '../../actions'
import Settings from '../settings/Settings'
import Details from '../details/details';
import Login from '../login/Login'


const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator()

const Header = () => (
  <Layout style={{ paddingTop: 60, paddingBottom: 20, paddingLeft: 20 }}>
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
      <DrawerItem title='Logout' onPress={() => dispatch(removeToken())} style={{ backgroundColor: 'darkred' }} accessoryRight={<Icon name='close-square' />} />
    </Drawer>
  )
};

export const DrawerNavigator = () => (
  <Navigator
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      gestureEnabled: true
    })} drawerContent={props => <DrawerContent {...props} />}
  >
    <Screen name='Home' component={Home} />
    <Screen name='Settings' component={Settings} />
    <Screen name = 'Login' component = {Login} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name = 'Login' component = {Login} />
      <Stack.Screen name = 'root' component = {DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name = 'Details' component = {Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator
