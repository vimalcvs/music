import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SPACING = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};

export const DIMENSIONS = {
  screenWidth: width,
  screenHeight: height,
};
