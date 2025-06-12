// src/screens/NotificationDetails.tsx
import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { getAssetUrl } from '../../config/api';
import HtmlRenderer from '../../components/HtmlRenderer';

type Props = NativeStackScreenProps<RootStackParamList, 'NotificationDetails'>;

const NotificationDetails: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { colors } = useColors();
  const appStyles = useStyles();

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
      showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: getAssetUrl(item.image) }}
        style={{ width: '100%', height: 200, borderRadius: 16 }}
      />
      <Text style={[appStyles.heading, { color: colors.textPrimary, marginTop: 8 }]}>
        {item.title}
      </Text>
      <HtmlRenderer
        html={item?.body || 'No details to show.'}
        customBaseStyle={{ paddingTop: 8, paddingBottom: 48 }}
      />
    </ScrollView>
  );
};

export default NotificationDetails;
