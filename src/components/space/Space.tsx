import { View, ViewStyle } from "react-native";

/**
 * Props interface for Space components
 * @interface SpaceProps
 */
interface SpaceProps {
  /** Size of the space in pixels */
  size: number;
  /** Optional background color of the space */
  backgroundColor?: string;
  /** Whether the space should flex to fill available space */
  flex?: boolean;
  /** Whether the horizontal space should take full width */
  fullWidth?: boolean;
}

/**
 * Horizontal space component
 * @param {SpaceProps} props - Component props
 * @returns {JSX.Element} Horizontal space View component
 */
export const SpaceH: React.FC<SpaceProps> = ({ 
  size, 
  fullWidth, 
  backgroundColor, 
  flex 
}) => {
  const style: ViewStyle = {
    width: fullWidth ? '100%' : size,
    backgroundColor,
    flex: flex ? 1 : undefined,
  };

  return <View style={style} />;
};

/**
 * Vertical space component
 * @param {SpaceProps} props - Component props
 * @returns {JSX.Element} Vertical space View component
 */
export const SpaceV: React.FC<SpaceProps> = ({ 
  size, 
  backgroundColor, 
  flex 
}) => {
  const style: ViewStyle = {
    height: size,
    backgroundColor,
    flex: flex ? 1 : undefined,
  };

  return <View style={style} />;
};
  