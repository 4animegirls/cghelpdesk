import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import { useDispatch, connect } from 'react-redux'
import Home from '../home/Home'
import { removeToken } from '../../actions'
import Settings from '../settings/Settings'
import Details from '../details/Details';
import Login from '../login/Login';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import translations from '../../locale';

const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator()

i18n.translations = translations;
i18n.fallbacks = true;

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
      <DrawerItem title={i18n.t('navigation.home')} />
      <DrawerItem title={i18n.t('navigation.settings')} />
      <DrawerItem title={i18n.t('navigation.logout')} onPress={
        () => { dispatch(removeToken()) }} style={{ backgroundColor: 'darkred' }} accessoryRight={<Icon name='close-square' />} />
    </Drawer>
  )
};

export class DrawerNavigator extends Component {
  constructor({ navigation }) {
    super()
  }

  render() {
    return (
      <Navigator
        screenOptions={({ navigation }) => ({
          headerShown: false,
          gestureEnabled: true
        })} drawerContent={props => <DrawerContent {...props} />}
      >
        <Screen name={i18n.t('navigation.home')} component={Home} />
        <Screen name={i18n.t('navigation.settings')} component={Settings} />
        <Screen name={i18n.t('navigation.logout')} component={Screen} />
      </Navigator>
    );
  }
}

class AppNavigator extends Component {
  componentDidMount() {
    console.log({ props: this.props, locale: this.props.locale });
    // i18n.locale = this.props.locale;
  }

  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator>
          {(this.props.user.Token === null)
            && <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
          {(this.props.user.Token !== null) 
          && <Stack.Screen name='root' component={DrawerNavigator} options={{ headerShown: false }} />}
          {(this.props.user.Token !== null) 
          && <Stack.Screen name={i18n.t('navigation.details')} component={Details} options={{ headerShown: false }} />}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
  locale: state.locale
})

export default connect(
  mapStateToProps,
  null
)(AppNavigator)

