import React from 'react';
import { View, StyleSheet, Text, useColorScheme, TouchableOpacity, Dimensions,SafeAreaView } from 'react-native';
import { lightColors, darkColors } from '../constants/ScreenMode.js'; // Import color schemes
import CustomStatusBar from '../components/Statusbar.js'; // Renamed the custom StatusBar component

const HomeScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const colors = isDarkMode ? darkColors : lightColors;

    const handleButtonPress = () => {
        navigation.navigate('Details');
    };

    // Get the device's width and height
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return (
        
        
        
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <CustomStatusBar backgroundColor={colors.statusBar} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.buttonContainer}>
                <Text style={[styles.text, { color: colors.text }]}>
                    Hello, this is an example of dark mode and light mode!
                </Text>

                <TouchableOpacity
                  
                  style={{
                    backgroundColor: isDarkMode ? darkColors.buttonBackground : lightColors.buttonBackground,
                    width: deviceWidth * 0.6,
                    height: deviceHeight * 0.055,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                }}
                    onPress={handleButtonPress}
                >
                    <Text style={[styles.buttonText, { color: colors.te, textAlign: 'center' }]}>
                        Go to Details
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});


