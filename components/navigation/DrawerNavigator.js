import React from 'react'
import Home from '../home/Home'
import { logout } from '../../actions'
import Settings from '../settings/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import LogoutConfirm from '../login/logoutConfirm';


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
            <DrawerItem title='Home' />
            <DrawerItem title='Settings' />
            <DrawerItem title='Logout' onPress = {() => setLogoutConfirmState(true)} style={{ backgroundColor: 'darkred' }} accessoryRight={<Icon name='close-square' />} />
        </Drawer>
    )
};

export default class DrawerNavigator extends React.Component {
    constructor({ navigation }) {
        super()
        this.state = {
            logoutConfirmState: false
        }
    }

    setLogoutConfirmState = (state) => {
        this.setState({ logoutConfirmState: state })
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
                <Screen name='Home' component={Home} />
                <Screen name='Settings' component={Settings} />
            </Navigator>
            <LogoutConfirm visibility = {this.state.logoutConfirmState} changeVisibility = { setLogoutConfirmState }/>
            </>
        );
    }
}