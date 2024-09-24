import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Define your Figma frame dimensions
const figmaFrameWidth = 375; // Example Figma frame width
const figmaFrameHeight = 812; // Example Figma frame height

// Utility functions
export const getResponsiveFontSize = figmaFontSize => {
  // Convert Figma font size to a percentage of screen width
  const screenWidth = wp('100%');
  const fontSize = (figmaFontSize / figmaFrameWidth) * screenWidth;
  return fontSize;
};

export const getResponsiveWidth = figmaWidth => {
  // Convert Figma width to a percentage of screen width
  const screenWidth = wp('100%');
  const width = (figmaWidth / figmaFrameWidth) * screenWidth;
  return width;
};

export const getResponsiveHeight = figmaHeight => {
  // Convert Figma height to a percentage of screen height
  const screenHeight = hp('100%');
  const height = (figmaHeight / figmaFrameHeight) * screenHeight;
  return height;
};
