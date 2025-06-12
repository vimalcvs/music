import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native'; 
import { ButtonOutline, ButtonPrimary } from '../../components/buttons/Buttons';
import { SpaceV } from '../../components/space/Space';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsDetails'>;

const SettingsDetails: React.FC<Props> = ({ route }) => {
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
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ellipsis-vertical" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      ),
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

export default SettingsDetails;
