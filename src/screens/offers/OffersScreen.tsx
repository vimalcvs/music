import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { useNotifications } from './useComments';
import { NotificationItem } from './NotificationItem';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';
import { BackgroundGradient } from '../../components/background/Background';

const OffersScreen: React.FC = () => {
  const { notifications, loading, error, refetch } = useNotifications();
  const appStyles = useStyles();
  const { colors } = useColors();

  return (
    <BackgroundGradient>
      <SafeAreaView style={appStyles.container}>
        <SpaceV size={50} />
        <View style={[appStyles.centerContainer, { flex: 1 }]}>
          <Text style={[appStyles.heading, { textAlign: 'left' }, { marginStart: 16 }]}>
            Offers
          </Text>
          <SpaceV size={8} />

          {loading && (
            <View style={appStyles.loadingContainer}>
              <ActivityIndicator size="large" color="#007bff" />
            </View>
          )}

          {error && (
            <View style={appStyles.errorContainer}>
              <Text style={[appStyles.bodyText, { color: colors.error }]}>{error}</Text>
            </View>
          )}

          {notifications.length > 0 && (
            <FlatList
              data={notifications}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <NotificationItem item={item} />}
              contentContainerStyle={appStyles.listContainer}
              style={{ width: '100%' }}
              refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
            />
          )}
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default OffersScreen;
