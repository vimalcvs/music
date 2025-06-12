import {View, ScrollView} from 'react-native';
import {useStyles} from '../../styles/globalStyles';
import {
  Overview,
  Header,
  InsightsCard,
  JumpBackList,
  RecentTracks,
} from './ProfileComponent ';
import {SpaceV} from '../../components/space/Space';

import {useColors} from '../../context/ThemeContext';

const ProfileScreen = () => {
  const appStyles = useStyles(); 
   const {colors} = useColors();

  return (
    <ScrollView
      style={appStyles.container}
      contentContainerStyle={appStyles.scrollContainerBg}
      showsVerticalScrollIndicator={false}>
      <SpaceV size={26} />
      <Header />
      <View  style={[{backgroundColor: colors.backgroundSecondary}]}>
      <SpaceV size={16} />
      <Overview />
      <SpaceV size={16} />
      <InsightsCard />
      <SpaceV size={16} />
      <JumpBackList />
      <SpaceV size={16} />
      <RecentTracks />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
