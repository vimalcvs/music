declare module 'react-native-render-html' {
  import { ViewStyle, TextStyle } from 'react-native';
  
  interface RenderHtmlProps {
    source: { html: string };
    contentWidth?: number;
    baseStyle?: TextStyle;
    imagesMaxWidth?: number;
    tagsStyles?: Record<string, TextStyle>;
  }

  const RenderHtml: React.FC<RenderHtmlProps>;
  export default RenderHtml;
} 