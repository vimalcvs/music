import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useColors } from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
 
function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode } = useColors();
  return (
      <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
      />
      <RootNavigator />
    </>
  );
};

export default App;
