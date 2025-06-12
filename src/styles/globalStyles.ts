import { StyleSheet } from 'react-native';
import { SPACING } from './constants';
import { useColors } from '../context/ThemeContext';

export const useStyles = () => {
  const { colors } = useColors();

  return StyleSheet.create({

    listContainer: {
      paddingHorizontal: SPACING.md,
      flexGrow: 1,
      width: "100%",
    },
    // Container styles
    container: {
      flex: 1,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    loadingContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      width: 90,
      borderRadius: 22,
      backgroundColor: colors.background,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    errorContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },


    scrollContainer: {
      flexGrow: 1,
      paddingVertical: SPACING.xs,
      paddingHorizontal: SPACING.md,
    },

    // Text styles
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: SPACING.sm,
      textAlign: 'center',
      color: colors.textPrimary,
      fontFamily: 'Sora',
    },
    subtitle: {
      fontSize: 16,
      marginBottom: SPACING.lg,
      textAlign: 'center',
      color: colors.textSecondary,
      fontFamily: 'Sora',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.textPrimary,
      fontFamily: 'Sora',
    },
    bodyText: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.textPrimary,
      fontFamily: 'Sora',
    },
    caption: {
      fontSize: 14,
      opacity: 0.7,
      color: colors.textSecondary,
      fontFamily: 'Sora',
    },
    text: {
      fontSize: 16,
      marginBottom: SPACING.sm,
      color: colors.textPrimary,
      fontFamily: 'Sora',
    },
    label: {
      fontSize: 14,
      marginBottom: SPACING.xs,
      fontFamily: 'Sora',
      color: colors.textPrimary,
    },
    labelContainer: {
      marginHorizontal: 6, 
      marginVertical: 6,
    },

    // Button styles
    button: {
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.md,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },

    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Sora',
      color: colors.white,
    },

    outlineButton: {
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.md,
      borderRadius: 12,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.border,
    },
    outlineButtonText: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Sora',
      color: colors.primary,
    },

    // Card styles
    card: {
    
      padding: SPACING.md,
      borderRadius: 16,
      marginBottom: SPACING.md,
      elevation: 2,
      borderColor: colors.border,
      borderWidth: 2.5,
      backgroundColor: colors.card,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1.84,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Sora',
      marginBottom: SPACING.xs,
      color: colors.textPrimary,
    },
    cardText: {
      fontSize: 14,
      fontFamily: 'Sora',
      color: colors.textSecondary,
    },

    // Input styles
    input: {
      height: 50,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: SPACING.md,
      marginBottom: SPACING.md,
      fontSize: 16,
      fontFamily: 'Sora',
      backgroundColor: colors.input,
      borderColor: colors.border,
      color: colors.textPrimary,
    },
    inputError: {
      borderColor: colors.error,
      borderWidth: 1,
    },
    errorText: {
      color: colors.error,
      fontSize: 12,
      fontFamily: 'Sora',
      marginTop: -SPACING.sm,
      marginBottom: SPACING.sm,
      marginLeft: SPACING.xs,
    },
    inputLabel: {
      fontSize: 16,
      fontFamily: 'Sora',
      marginBottom: SPACING.xs,
      fontWeight: '500',
      color: colors.textPrimary,
    },

    // Image styles
    imageContainer: {
      width: 100,
      height: 100,
      marginBottom: SPACING.lg,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.primary,
      borderRadius: 50,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },

    // List styles
    listItem: {
      padding: SPACING.md,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: colors.border,
    },
    listItemText: {
      fontSize: 16,
      fontFamily: 'Sora',
      color: colors.textPrimary,
    },

    // Layout
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Radio Button styles
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: SPACING.sm,
      borderColor: colors.textPrimary,
    },
    radioButtonSelected: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: colors.primary,
    },
  });
};