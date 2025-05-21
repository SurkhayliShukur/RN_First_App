import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  width,
  height,
  isSmallDevice: width < 375,
  isLargeDevice: width > 600,
  isTablet: width > 600 && width < 1024,
  isLandscape: width > height,
  isPortrait: height > width,
};