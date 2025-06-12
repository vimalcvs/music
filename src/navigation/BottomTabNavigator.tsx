import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColors } from '../context/ThemeContext';
import { PlatformPressable } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import OffersScreen from '../screens/offers/OffersScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const ICON_MAP = {
  Home: {
    filled: 'home',
    outline: 'home-outline',
  },
  Profile: {
    filled: 'person',
    outline: 'person-outline',
  },
  Offers: {
    filled: 'gift',
    outline: 'gift-outline',
  },
  Settings: {
    filled: 'settings',
    outline: 'settings-outline',
  },
} as const;

const TabBarIcon = ({
  route,
  color,
  size,
  focused,
}: {
  route: { name: string };
  color: string;
  size: number;
  focused: boolean;
}) => {
  const iconName = focused
    ? ICON_MAP[route.name as keyof typeof ICON_MAP].filled
    : ICON_MAP[route.name as keyof typeof ICON_MAP].outline;
  return <Icon name={iconName} size={size} color={color} />;
};

const TabBarButton = (props: any) => (
  <PlatformPressable {...props} android_ripple={{ color: 'transparent' }} />
);

const createTabBarIcon = (route: { name: string }) => (props: any) =>
  <TabBarIcon route={route} {...props} />;

const BottomTabNavigator = () => {
  const { colors } = useColors();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarIcon: createTabBarIcon(route),
        headerShown: false,
        tabBarButton: TabBarButton,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.tabBar,
          borderTopWidth: 0.5,
          height: 80,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
