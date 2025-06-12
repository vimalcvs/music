import React from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 export const BackgroundGradient: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <LinearGradient
      colors={['#d2ffe3', '#ffe9fc']}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
