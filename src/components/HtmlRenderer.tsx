import React from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useColors } from '../context/ThemeContext';

interface HtmlRendererProps {
  html: string;
  customTagStyles?: Record<string, any>;
  customBaseStyle?: Record<string, any>;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({
  html,
  customTagStyles,
  customBaseStyle,
}) => {
  const { colors } = useColors();
  const windowWidth = useWindowDimensions().width;

  const defaultTagStyles = {
    h1: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    h4: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    h5: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    h6: {
      fontSize: 13,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 6,
      color: colors.textPrimary,
    },
    p: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    span: { 
      fontWeight: 'bold'
    },
    ul: {
      marginLeft: 16,
      marginTop: 8,
      padding: 8,
      paddingLeft: 24,
      backgroundColor: colors.primary,
      borderRadius: 8,
    }
  };

  return (
    <RenderHtml
      contentWidth={windowWidth}
      baseStyle={{...customBaseStyle }}
      source={{ html: html || 'No content to show.' }}
      imagesMaxWidth={Dimensions.get('window').width}
      // @ts-ignore:  
      tagsStyles={{ ...defaultTagStyles, ...customTagStyles }}
    />
  );
};

export default HtmlRenderer; 