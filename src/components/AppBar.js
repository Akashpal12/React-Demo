import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { lightColors, darkColors } from '../constants/ScreenMode.js'; // Import color schemes
import BackIcon from '../assets/svgIcons/Svg.js'; 

const AppBar = ({ title, onBackPress }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <BackIcon width={24} height={24} fill={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row', // Added flexDirection to align items horizontally
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  backButton: {
    padding: 4,
  },
});

export default AppBar;
