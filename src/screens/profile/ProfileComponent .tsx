import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {useColors} from '../../context/ThemeContext';
import {useStyles} from '../../styles/globalStyles';
import {SpaceH, SpaceV} from '../../components/space/Space';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  NotificationDetails: undefined;
  // Add other screens here as needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const OUTER_MARGIN = 12;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_HORIZONTAL_PADDING = 16;
const CARD_GAP = 16;
const CARD_WIDTH =
  (SCREEN_WIDTH - OUTER_MARGIN * 2 - CARD_HORIZONTAL_PADDING * 2 - CARD_GAP) /
  2;

const items = [
  {
    id: '1',
    icon: 'plus',
    label: 'Create',
    buttonText: "Let's Go",
    bgColor: '#FFE6E6',
  },
  {
    id: '2',
    icon: 'rocket',
    label: 'Release',
    buttonText: 'Drop Now',
    bgColor: '#D4F1FF',
  },
  {
    id: '3',
    icon: 'bullhorn',
    label: 'Promote',
    buttonText: 'Send It',
    bgColor: '#D8FFE0',
  },
  {
    id: '4',
    icon: 'users',
    label: 'Engage',
    buttonText: 'Show Love',
    bgColor: '#FFEBC1',
  },
];

type ActionCardProps = {
  icon: string;
  label: string;
  buttonText: string;
  bgColor: string;
  onPress: () => void;
  style?: any;
};

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  label,
  buttonText,
  bgColor,
  onPress,
  style,
}) => {
  const {colors} = useColors();
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={[styles.iconCircle, {backgroundColor: bgColor}]}>
        <Icon name={icon} size={22} color={colors.black} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <IconMaterial
          name="arrow-right-alt"
          size={24}
          color="#22C55E"
          style={{marginLeft: 4}}
        />
      </View>
    </TouchableOpacity>
  );
};

export const Overview = () => {
  const {colors} = useColors();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <HeaderTopRow
        title="Overview"
        lineColor={'#CABDFF'}
      />
      <View style={styles.grid}>
        {items.map((item, index) => (
          <ActionCard
            key={item.id}
            {...item}
            onPress={() => console.log(item.label)}
            style={[
              styles.actionCard,
              {marginRight: index % 2 === 0 ? CARD_GAP : 0},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionCard: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    marginBottom: 16,
  },

  container: {
    borderRadius: 20,
    padding: 16,
    marginHorizontal: OUTER_MARGIN,
    overflow: 'hidden',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 0.8,
    borderColor: '#E5E7EB',
    backgroundColor: '#FCFCFC',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    fontFamily: 'Sora',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: 16,
    color: '#22C55E',
    fontWeight: '900',
    fontFamily: 'Sora',
  },
});

export const Header = () => {
  const {colors} = useColors();
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={[stylesHeader.wrapper, {backgroundColor: colors.background}]}>
      <View style={stylesHeader.topRow}>
        <View style={stylesHeader.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={stylesHeader.logoIcon}
          />
        </View>
        <View style={stylesHeader.iconContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SettingsNotification' as never)
            }>
            <Icon
              name="users"
              size={22}
              color={colors.icon}
              style={stylesHeader.icon}
            />
          </TouchableOpacity>
          <SpaceH size={8} />
          <TouchableOpacity>
            <Icon
              name="bell"
              size={20}
              color={colors.icon}
              style={stylesHeader.icon}
            />
          </TouchableOpacity>
          <SpaceH size={8} />
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={stylesHeader.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          stylesHeader.searchContainer,
          {backgroundColor: colors.inputField},
        ]}>
        <Icon
          name="search"
          size={20}
          color={colors.iconSecondary}
          style={stylesHeader.searchIcon}
        />
        <TextInput
          style={stylesHeader.input}
          placeholder="Search music, artist, albums..."
          placeholderTextColor={colors.textTertiary}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View
          style={[stylesHeader.cmdBox, {backgroundColor: colors.background}]}>
          <Text style={stylesHeader.cmdText}>⌘ F</Text>
        </View>
      </View>
    </View>
  );
};

const stylesHeader = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoIcon: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginTop: 8,
    alignItems: 'center',
  },
  searchIcon: {
    paddingStart: 6,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Sora',
    fontSize: 15,
  },
  cmdBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  cmdText: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'Sora',
  },
});

const tabs = ['Analytics', 'Performance', 'Engagement', 'Revenue'];

export const InsightsCard = () => {
  const {colors} = useColors();
  const [activeTab, setActiveTab] = useState(0);

  const getTabData = (tabIndex: number) => {
    switch (tabIndex) {
      case 0: // Analytics
        return [
          {id: '1', icon: 'headphones', label: 'Total Plays', value: '128k'},
          {id: '2', icon: 'users', label: 'Followers', value: '45.2k'},
          {id: '3', icon: 'download', label: 'Downloads', value: '15.7k'},
          {id: '4', icon: 'star', label: 'Rating', value: '4.8'},
        ];
      case 1: // Performance
        return [
          {id: '5', icon: 'chart-line', label: 'Growth Rate', value: '+24%'},
          {id: '6', icon: 'clock', label: 'Avg. Listen Time', value: '3.2m'},
          {
            id: '7',
            icon: 'play-circle',
            label: 'Completion Rate',
            value: '68%',
          },
          {id: '8', icon: 'trophy', label: 'Top Rank', value: '#12'},
        ];
      case 2: // Engagement
        return [
          {id: '9', icon: 'heart', label: 'Likes', value: '24.5k'},
          {id: '10', icon: 'share', label: 'Shares', value: '8.2k'},
          {id: '11', icon: 'comment', label: 'Comments', value: '3.8k'},
          {id: '12', icon: 'retweet', label: 'Reposts', value: '5.1k'},
        ];
      case 3: // Revenue
        return [
          {
            id: '13',
            icon: 'dollar-sign',
            label: 'Total Revenue',
            value: '$12.4k',
          },
          {
            id: '14',
            icon: 'credit-card',
            label: 'Subscriptions',
            value: '$8.2k',
          },
          {id: '15', icon: 'gift', label: 'Donations', value: '$2.1k'},
          {id: '16', icon: 'chart-bar', label: 'Monthly Growth', value: '+15%'},
        ];
      default:
        return [];
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <HeaderTopRow
        title="Insights"
        custom={
          <View style={stylesRecent.dropdown}>
            <Text
              style={[
                stylesRecent.dropdownText,
                {color: colors.textSecondary},
              ]}>
              28 Dec – 10,2024
            </Text>
            <IconMaterial
              name="keyboard-arrow-down"
              size={24}
              color={colors.iconSecondary}
            />
          </View>
        }
        lineColor={'#FFD88D'}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={stylesInsights.tabsRow}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveTab(index)}>
            <Text
              style={[
                stylesInsights.tabText,
                index === activeTab && stylesInsights.tabActive,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={getTabData(activeTab)}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={stylesInsights.row}
        renderItem={({item}) => (
          <View style={stylesInsights.itemBox}>
            <View style={stylesInsights.topRow}>
              <View style={stylesInsights.iconCircle}>
                <Icon name={item.icon} size={20} color="#000" />
              </View>
              <Text style={stylesInsights.itemValue}>{item.value}</Text>
            </View>
            <Text style={stylesInsights.itemLabel}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

const stylesInsights = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    margin: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dateText: {
    fontSize: 12,
    marginRight: 4,
  },
  tabsRow: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10,
    alignItems: 'center',
  },
  tabText: {
    marginRight: 16,
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
    fontFamily: 'Sora',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  tabActive: {
    color: '#000',
    fontWeight: '700',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    fontFamily: 'Sora',
    borderWidth: 0.8,
    borderColor: '#E5E7EB',
  },
  row: {
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 8,
  },
  itemBox: {
    width: '48%',
    backgroundColor: '#FCFCFC',
    borderRadius: 12,
    padding: 16,
    borderWidth: 0.8,
    borderColor: '#E5E7EB',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconCircle: {
    backgroundColor: '#FECFC1',
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  itemValue: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Sora',
  },
  itemLabel: {
    fontSize: 14,
    marginTop: 12,
    fontWeight: '700',
    fontFamily: 'Sora',
    color: '#333',
  },
});

const jumpBackData = [
  {
    id: '1',
    image: 'https://i.imgur.com/UYiroysl.jpg',
    title: 'International Villagers',
    editedTime: 'Edited 46 hours ago',
  },
  {
    id: '2',
    image: 'https://i.imgur.com/UYiroysl.jpg',
    title: 'International Villagers',
    editedTime: 'Edited 46 hours ago',
  }
];

export const JumpBackList = () => {
  const renderItem = ({item}: {item: (typeof jumpBackData)[0]}) => (
    <View style={stylesJump.cardItem}>
      <Image source={{uri: item.image}} style={stylesJump.image} />
      <View style={stylesJump.overlay}>
        <Text style={stylesJump.title}>{item.title}</Text>
        <Text style={stylesJump.subtitle}>{item.editedTime}</Text>
      </View>
    </View>
  );

  const {colors} = useColors();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <HeaderTopRow
        title="Jump Back In"
        custom={
          <TouchableOpacity style={stylesRecent.dropdown}>
            <Text
              style={[
                stylesRecent.dropdownText,
                {color: colors.textSecondary},
              ]}>
              This week
            </Text>
            <IconMaterial
              name="keyboard-arrow-down"
              size={24}
              color={colors.iconSecondary}
            />
          </TouchableOpacity>
        }
        lineColor={'#FFBC99'}
      />

      <FlatList
        data={jumpBackData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />

      {/* View All Button */}
      <TouchableOpacity style={stylesJump.viewAllButton}>
        <Text style={stylesJump.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesJump = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dropdownText: {
    fontSize: 12,
    marginRight: 4,
  },
  cardItem: {
    marginTop: 12,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
  },
  subtitle: {
    color: '#4ADE80',
    fontSize: 12,
  },
  viewAllButton: {
    marginTop: 16,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  viewAllText: {
    fontWeight: '700',
    fontFamily: 'Sora',
    fontSize: 14,
    color: '#000',
  },
});

const recentTracks = [
  {
    id: '1',
    title: 'Divide',
    meta: '02:23 • Anubhav',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '2',
    title: 'X',
    meta: '2015 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '3',
    title: 'No 6',
    meta: '2019 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '3',
    title: 'No 6',
    meta: '2019 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '3',
    title: 'No 6',
    meta: '2019 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '3',
    title: 'No 6',
    meta: '2019 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
  {
    id: '3',
    title: 'No 6',
    meta: '2019 • Album',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
  },
];

export const RecentTracks = () => {
  const {colors} = useColors();
  return (
    <View>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <HeaderTopRow
          title="Recent Tracks"
          custom={
            <TouchableOpacity style={stylesRecent.dropdown}>
              <Text
                style={[
                  stylesRecent.dropdownText,
                  {color: colors.textSecondary},
                ]}>
                This week
              </Text>
              <IconMaterial
                name="keyboard-arrow-down"
                size={24}
                color={colors.iconSecondary}
              />
            </TouchableOpacity>
          }
          lineColor={'#FF99EF'}
        />
        {/* Track List */}
        <FlatList
          data={recentTracks}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={stylesRecent.trackItem}>
              <Image
                source={{uri: item.image}}
                style={stylesRecent.trackImage}
              />
              <Text style={stylesRecent.trackTitle}>{item.title}</Text>
              <Text style={stylesRecent.trackMeta}>{item.meta}</Text>
            </View>
          )}
        />
      </View>
      <SpaceV size={16} />
    </View>
  );
};

const stylesRecent = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 12,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#D946EF',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 8,
    paddingStart: 14,
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    paddingVertical: 8,
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 13,
    fontFamily: 'Sora',
    fontWeight: '700',
    marginRight: 4,
  },
  trackItem: {
    marginRight: 16,
    alignItems: 'center',
    width: 100,
  },
  trackImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  trackTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  trackMeta: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
  },
});

const HeaderTopRow = ({
  title,
  custom,
  lineColor,
}: {
  title: string;
  custom?: React.ReactNode;
  lineColor: string;
}) => {
  const {colors} = useColors();
  const appStyles = useStyles();
  return (
    <View style={stylesRecent.header}>
      <View style={stylesRecent.headerLeft}>
        <View style={[stylesRecent.indicator, {backgroundColor: lineColor}]} />
        <Text style={[appStyles.heading, {color: colors.textPrimary}]}>
          {title}
        </Text>
      </View>
      {custom && <View>{custom}</View>}
    </View>
  );
};
