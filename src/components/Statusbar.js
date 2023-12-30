import React from 'react';
import { StatusBar as RNStatusBar, View } from 'react-native';
import { lightColors, darkColors } from '../constants/ScreenMode.js';

const StatusBar = ({ backgroundColor, barStyle }) => {
    const colors = backgroundColor === lightColors.statusBar ? lightColors : darkColors;
  
    return (
      <View style={{ backgroundColor, height: RNStatusBar.currentHeight }}>
        <RNStatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      </View>
    );
  };
  
  export default StatusBar;
