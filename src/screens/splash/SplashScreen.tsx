import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { BackgroundGradient } from '../../components/background/Background';
 
const SplashScreen = () => {
  const { colors } = useColors();
  const styles = useStyles();

  return (
    <BackgroundGradient>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.centerContainer}>
          <Text style={[styles.title, { color: colors.facebook }]}>Welcome</Text>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default SplashScreen;

