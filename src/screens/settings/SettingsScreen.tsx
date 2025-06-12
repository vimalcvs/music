import { ScrollView } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { MyAccountItem, RegistionItem, RowBackground, SettingRowItem } from './SettingsComponent';
import { SpaceV } from '../../components/space/Space';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackgroundGradient } from '../../components/background/Background';

const SettingsScreen: React.FC = () => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleRegisterPress = () => {
    console.log('Register pressed');
  };

  return (
    <BackgroundGradient>
      <ScrollView style={[appStyles.scrollContainer]} showsVerticalScrollIndicator={false}>
        <SpaceV size={50} />
        <RegistionItem
          icon="person"
          title="Register/Sign In"
          subtitle="19 virtual devices"
          onPress={handleRegisterPress}
        />
        <SpaceV size={16} />

        <MyAccountItem
          icon="person"
          title="Register/Sign In"
          subtitle="19 virtual devices"
          onPress={handleRegisterPress}
        />

        <SpaceV size={16} />

        <RowBackground
          children={
            <>
              <SettingRowItem
                title="Notifications"
                onPress={() => {
                  navigation.navigate('SettingsNotification', {
                    message: 'Welcome to notifications',
                  });
                }}
                icon="notifications"
                iconBackground={colors.blue}
              />
              <SettingRowItem
                title="Settings"
                onPress={() => {
                  navigation.navigate('SettingsDetails', {
                    userData: {
                      name: 'John Doe',
                      email: 'john@example.com',
                      preferences: {
                        theme: 'dark',
                        language: 'en',
                      },
                    },
                  });
                }}
                icon="settings"
                iconBackground={colors.yellow}
              />
              <SettingRowItem
                title="Save to cloud"
                onPress={() => {}}
                icon="cloud"
                iconBackground={colors.green}
              />
            </>
          }
        />

        <SpaceV size={16} />

        <RowBackground
          children={
            <>
              <SettingRowItem
                title="My goals"
                onPress={() => {}}
                icon="footsteps"
                iconBackground={colors.orange}
              />
            </>
          }
        />

        <SpaceV size={16} />
        <RowBackground
          children={
            <>
              <SettingRowItem
                title="Help and feedback"
                onPress={() => {}}
                icon="help"
                iconBackground={colors.blue}
              />
              <SettingRowItem
                title="Like this app?"
                onPress={() => {}}
                icon="star"
                iconBackground={colors.red}
              />
            </>
          }
        />

        <SpaceV size={100} />
      </ScrollView>
    </BackgroundGradient>
  );
};

export default SettingsScreen;
