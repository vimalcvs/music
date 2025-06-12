import React from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback, View, Text } from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';

export const InputField: React.FC<{
    placeholder: string;
    keyboardType?: 'default';
    autoFocus?: boolean;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    label: string;
    error?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}> = ({
    placeholder,
    keyboardType = 'default',
    autoFocus = false,
    onChangeText,
    value,
    secureTextEntry = false,
    label,
    error,
    onFocus,
    onBlur,
}) => {
        const { colors } = useColors();
        const mainStyles = useStyles();
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={mainStyles.container}>
                    <Text style={[mainStyles.bodyText, mainStyles.labelContainer, { color: colors.textSecondary }]}>{label}</Text>
                    <TextInput
                        style={[
                            mainStyles.input,
                            { backgroundColor: colors.background },
                            error && mainStyles.inputError,
                        ]}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        placeholderTextColor={colors.placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        secureTextEntry={secureTextEntry}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    {error && <Text style={mainStyles.errorText}>{error}</Text>}
                </View>
            </TouchableWithoutFeedback>
        );
    };
