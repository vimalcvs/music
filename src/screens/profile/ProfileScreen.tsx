import {
  View,
  ScrollView,
 
} from 'react-native'; 
import { useStyles } from '../../styles/globalStyles';
import { BackgroundGradient } from '../../components/background/Background';
 
import { ButtonPrimary } from '../../components/buttons/Buttons';

const ProfileScreen = () => {
  const appStyles = useStyles();
 
  return (
    <BackgroundGradient>
      <ScrollView
        style={appStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.container}>
         
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default ProfileScreen;
