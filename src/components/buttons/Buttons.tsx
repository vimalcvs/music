import React from 'react';
import { useStyles } from '../../styles/globalStyles';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';


export const ButtonPrimary = ({
    title,
    onPress,
    fullWidth = false
  }: {
    title: string,
    onPress: () => void,
    fullWidth?: boolean
  }) => {
    const appStyles = useStyles();
    return (
      <TouchableOpacity
        style={[appStyles.button, fullWidth && { width: '100%', alignSelf: 'stretch' }]}
        onPress={onPress}>
        <Text style={appStyles.buttonText}>{title}</Text>
      </TouchableOpacity>
    )
  }
  
  export const ButtonOutline = ({
    title,
    onPress,
    fullWidth = false
  }: {
    title: string,
    onPress: () => void,
    fullWidth?: boolean
  }) => {
    const appStyles = useStyles();
    return (
      <TouchableOpacity
        style={[appStyles.outlineButton, fullWidth && { width: '100%', alignSelf: 'stretch' }]}
        onPress={onPress}>
        <Text style={appStyles.outlineButtonText}>{title}</Text>
      </TouchableOpacity>
    )
  }