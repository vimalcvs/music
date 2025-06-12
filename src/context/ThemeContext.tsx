import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: {
    // Base colors
    background: string;
    tabBar: string;
    tabBarActive: string;
    tabBarInactive: string;

    // Text hierarchy
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textMuted: string;

    // Primary colors
    primary: string;
    primaryLight: string;
    primaryDark: string;

    // Secondary colors
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;

    // Status colors
    success: string;
    warning: string;
    error: string;
    info: string;

    orange: string;
    blue: string;
    purple: string;
    green: string;
    yellow: string;
    red: string;

    // UI Element colors
    card: string;
    border: string;
    divider: string;
    input: string;
    placeholder: string;
    shadow: string;
    highlight: string;
    overlay: string;
    muted: string;
    disabled: string;
    icon: string;
    link: string;

    // Social colors
    facebook: string;
    google: string;
    twitter: string;
    white: string;
    black: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = {
    // Base colors
    background: isDarkMode ? '#000000' : '#FFFFFF',
    backgroundLight: isDarkMode ? '#1C1C1E' : '#F5F5F5',
    backgroundDark: isDarkMode ? '#121212' : '#E5E5E5',

    // Text hierarchy
    textPrimary: isDarkMode ? '#FFFFFF' : '#000000',
    textSecondary: isDarkMode ? '#A1A1A1' : '#4B4B4B',
    textTertiary: isDarkMode ? '#6E6E6E' : '#8E8E93',
    textMuted: isDarkMode ? '#A1A1A1' : '#6E6E6E',

    tabBar: isDarkMode ? '#1212129f' : '#FFFFFF',
    tabBarActive: '#007AFF',
    tabBarInactive: '#8E8E93',

    // Primary colors
    primary: '#007AFF',
    primaryLight: isDarkMode ? '#0A84FF' : '#47A3FF',
    primaryDark: isDarkMode ? '#0055B3' : '#0055B3',

    // Secondary colors
    secondary: '#5856D6',
    secondaryLight: '#7A79E0',
    secondaryDark: '#3A39B3',

    // Status colors
    success: '#34C759',
    successLight: '#66DB87',
    warning: '#FF9500',
    error: '#FF3B30',
    dangerLight: '#FF6B60',
    info: '#5AC8FA',

    orange: '#FFA500',
    blue: '#5AC8FA',
    purple: '#800080',
    green: '#34C759',
    yellow: '#FF9500',
    red: '#FF3B30',

    // UI Element colors
    card: isDarkMode ? '#111111' : '#Fafafa',
    border: isDarkMode ? '#2C2C2E' : '#fcfcfc',
    divider: isDarkMode ? '#38383A' : '#C6C6C8',
    input: isDarkMode ? '#2C2C2E' : '#FFFFFF',
    placeholder: isDarkMode ? '#636366' : '#C7C7CD',
    shadow: isDarkMode ? '#2C2C2E' : '#00000025',
    highlight: isDarkMode ? '#3A3A3C' : '#E5E5EA',
    overlay: isDarkMode ? '#00000080' : '#cfcfcf50',
    muted: isDarkMode ? '#48484A' : '#D1D1D6',
    disabled: isDarkMode ? '#3C3C3E' : '#D1D1D6',
    icon: isDarkMode ? '#FFFFFF' : '#1C1C1E',
    link: '#0A84FF',

    // Social colors
    facebook: '#1877F2',
    google: '#DB4437',
    twitter: '#1DA1F2',
    white: '#FFFFFF',
    black: '#000000',
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useColors = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
