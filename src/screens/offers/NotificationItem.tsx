// src/components/NotificationItem.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Notification } from '../../models/types';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { getAssetUrl } from '../../config/api';
import { RootStackParamList } from '../../navigation/RootNavigator';

interface NotificationItemProps {
  item: Notification;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NotificationDetails'>;

export const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  const appStyles = useStyles();
  const { colors } = useColors();
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('NotificationDetails', { item });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[appStyles.card, { padding: 0 }]}>
        <Image
          source={{ uri: getAssetUrl(item.image) }}
          style={{ width: '100%', height: 180, borderRadius: 14 }}
        />
        <Text
          style={[
            appStyles.bodyText,
            {
              color: colors.textPrimary,
              fontSize: 16,
              fontWeight: 'bold',
              marginHorizontal: 16,
              marginVertical: 10,
            },
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
