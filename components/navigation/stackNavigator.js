import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../details/details';




const { Navigator, Screen } = createStackNavigator();


const HomeNavigator = () => {
    return (
    <Navigator>
        <Screen name = 'Details' component={Details}/>
    </Navigator>
 )} ;

export default stackNavigator = () => {
    return(
        <NavigationContainer >
            <HomeNavigator />
        </NavigationContainer>
    )
};