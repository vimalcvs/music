import SplashScreen from '../screens/splash/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsDetails from '../screens/settings/SettingsDetails';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import SettingsNotification from '../screens/settings/SettingsNotification';
import { UserData } from '../models/user.types';
import NotificationDetails from '../screens/offers/NotificationDetail';
import { Notification } from '../models/types';

export interface RootStackParamList extends ParamListBase {
  MainTabs: undefined;
  HomeScreen: undefined;
  OffersScreen: undefined;
  SettingsScreen: undefined;
  SettingsDetails: {
    userData: UserData;
  };

  SettingsNotification: {
    message: string;
  };

  NotificationDetails: {
    item: Notification;
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="SettingsDetails" component={SettingsDetails} />
        <Stack.Screen name="SettingsNotification" component={SettingsNotification} />
        <Stack.Screen name="NotificationDetails" component={NotificationDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
