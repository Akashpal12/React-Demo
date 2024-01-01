import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen';
import MainContainer from './src/components/MainContainer.js';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        //         <Stack.Screen name="Home" component={HomeScreen} />
        //         <Stack.Screen name="Details" component={DetailsScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <MainContainer/>
    );
};

export default App;
