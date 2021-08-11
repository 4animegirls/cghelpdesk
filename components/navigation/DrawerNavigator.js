import React from 'react'
import Home from '../home/Home'
import { logout } from '../../actions'
import Settings from '../settings/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import logoutConfirm from '../login/logoutConfirm';


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
            <DrawerItem title='Home' />
            <DrawerItem title='Settings' />
            <DrawerItem title='Logout' onPress={
                () => { logoutConfirm() && dispatch(logout()) }} style={{ backgroundColor: 'darkred' }} accessoryRight={<Icon name='close-square' />} />
        </Drawer>
    )
};

export default class DrawerNavigator extends React.Component {
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
                <Screen name='Home' component={Home} />
                <Screen name='Settings' component={Settings} />
                <Screen name='Logout' component={Home} />
            </Navigator>
        );
    }
}