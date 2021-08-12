import React, { Component } from 'react'
import Home from '../home/Home'
import { removeToken } from '../../actions'
import Settings from '../settings/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import { connect, useDispatch } from 'react-redux';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { setLocaleAsUpdated } from '../../actions';

const { Navigator, Screen } = createDrawerNavigator();

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

class DrawerNavigator extends Component {  
  componentDidMount() {
    i18n.locale = this.props.locale.locale;
  }
  componentDidUpdate() {
    if (!this.props.locale.localeUpdated) {
      i18n.locale = this.props.locale.locale;
      this.props.setLocaleAsUpdated();
    }
  }

  render() {
    return (
      <Navigator
        screenOptions={() => ({
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

const mapStateToProps = state => ({
  locale: state.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocaleAsUpdated: () => dispatch(setLocaleAsUpdated()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerNavigator)