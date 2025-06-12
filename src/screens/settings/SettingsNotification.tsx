import { useColors } from '../../context/ThemeContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import React from 'react';
import { ButtonOutline, ButtonPrimary } from '../../components/buttons/Buttons';
import { SpaceV } from '../../components/space/Space';

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsNotification'>;

const SettingsNotification: React.FC<Props> = () => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Notification',
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.textPrimary,
      headerShadowVisible: false,
    });
  }, [navigation, colors]);

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <SpaceV size={20} />
      <ButtonPrimary title="Show Alert" onPress={() => {}} />
      <SpaceV size={20} />
      <ButtonOutline title="Show Alert" onPress={() => {}} />
    </ScrollView>
  );
};

export default SettingsNotification;
