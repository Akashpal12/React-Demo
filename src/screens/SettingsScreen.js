// DetailsScreen.js
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet ,useColorScheme} from 'react-native';
import AppBar from '../components/AppBar.js'; // Import the AppBar component
import { lightColors, darkColors } from '../constants/ScreenMode.js'; // Import color schemes


const SettingScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkColors : lightColors;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Use the AppBar component */}
      <AppBar title="SettingScreen" />
      {/* Content */}
      <View style={[styles.content, { backgroundColor:'white'}]}>
        <Text style={{color:colors.background}}>Details Screen Content Goes Here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SettingScreen;