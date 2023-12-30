import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;