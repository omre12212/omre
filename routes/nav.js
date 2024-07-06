import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNames from './ScreenNames';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarInfo from '../screens/CarInfo';
import CartPage from '../screens/CartPage';
import SplashX from '../screens/SplashX';
// import Test from '../screens/Test';



const MainNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={"test"} component={Test}/> */}
        <Stack.Screen name={ScreenNames.splash} component={SplashX} />
        <Stack.Screen name={ScreenNames.home} component={Home} />
        <Stack.Screen name={ScreenNames.CarInfo} component={CarInfo} />
        <Stack.Screen name={ScreenNames.CartPage} component={CartPage}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};
//Test

export default MainNavigation;