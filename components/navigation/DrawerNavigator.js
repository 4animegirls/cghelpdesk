import React from 'react'
import Home from '../home/Home'
import { logout } from '../../actions'
import Settings from '../settings/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import LogoutConfirm from '../login/logoutConfirm';
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


const DrawerContent = ({ navigation, state, setLogoutConfirmState }) => {
    const dispatch = useDispatch();
    return (
        <Drawer
            header={Header}
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => index.row!==state.routeNames.length &&  navigation.navigate(state.routeNames[index.row])}>
            <DrawerItem title={i18n.t('navigation.home')}  />
            <DrawerItem title={i18n.t('navigation.settings')} />
            <DrawerItem title={i18n.t('navigation.logout')} onPress = {() => setLogoutConfirmState(true)} style={{ backgroundColor: 'darkred' }} accessoryRight={<Icon name='log-out' />} />
        </Drawer>
    )
};

class DrawerNavigator extends React.Component {
    constructor({ navigation }) {
        super()
        this.state = {
            logoutConfirmState: false
        }
    }

    setLogoutConfirmState = (state) => {
        this.setState({ logoutConfirmState: state })
    }

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
        const setLogoutConfirmState = this.setLogoutConfirmState
        return (
            <>
            <Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true
                })} drawerContent={props => <DrawerContent {...{...props, setLogoutConfirmState}} />}
            >
                <Screen name={i18n.t('navigation.home')} component={Home} />
                <Screen name={i18n.t('navigation.settings')} component={Settings} />
            </Navigator>
            <LogoutConfirm visibility = {this.state.logoutConfirmState} changeVisibility = { setLogoutConfirmState }/>
            </>
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
