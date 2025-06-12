import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { SpaceH } from '../../components/space/Space';
import React from 'react';

export const RegistionItem: React.FC<{
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}> = ({ icon, title, subtitle, onPress }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <TouchableOpacity
      style={[
        styles.settingItemContainer,
        {
          backgroundColor: colors.card,
          shadowColor: colors.shadow,
          borderColor: colors.border,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.rowContainer}>
        <Icon
          name={icon}
          size={30}
          color={colors.icon}
          style={[styles.iconProfile, { backgroundColor: colors.overlay }]}
        />
        <SpaceH size={16} />
        <View style={styles.textContainer}>
          <Text style={[appStyles.bodyText, { color: colors.textPrimary }]}>{title}</Text>
          {subtitle ? (
            <Text style={[appStyles.caption, { color: colors.textSecondary }]}>{subtitle}</Text>
          ) : null}
        </View>
        <Icon name="chevron-forward" size={18} color={colors.divider} />
        <SpaceH size={10} />
      </View>
    </TouchableOpacity>
  );
};

export const MyAccountItem: React.FC<{
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}> = ({ icon, title, subtitle, onPress }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <View
      style={[
        styles.myAccountItemContainer,
        {
          backgroundColor: colors.card,
          shadowColor: colors.shadow,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={[styles.rowMyAccountContainer, { backgroundColor: colors.overlay }]}>
        <Icon
          name={icon}
          size={30}
          color={colors.icon}
          style={[styles.iconProfile, { backgroundColor: colors.overlay }]}
        />
        <SpaceH size={16} />
        <View style={styles.textContainer}>
          <Text style={[appStyles.bodyText, { color: colors.textPrimary }]}>{title}</Text>
          {subtitle ? (
            <Text style={[appStyles.caption, { color: colors.textSecondary }]}>{subtitle}</Text>
          ) : null}
        </View>
        <Icon name="chevron-forward" size={18} color={colors.divider} />
        <SpaceH size={10} />
      </View>
    </View>
  );
};

export const RowBackground: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { colors } = useColors();
  return (
    <View
      style={[
        styles.myAccountItemContainer,
        {
          backgroundColor: colors.card,
          shadowColor: colors.shadow,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.columnContainer}>{children}</View>
    </View>
  );
};

export const SettingRowItem: React.FC<{
  title: string;
  onPress?: () => void;
  icon: string;
  iconBackground?: string;
}> = ({ title, onPress, icon, iconBackground }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <TouchableOpacity onPress={onPress} style={styles.rowTouchContainer}>
      <View style={styles.rowItemContainer}>
        <Icon
          name={icon}
          size={18}
          color={colors.white}
          style={{ backgroundColor: iconBackground, borderRadius: 100, padding: 8 }}
        />
        <Text style={[appStyles.bodyText, { color: colors.textPrimary, flex: 1, marginLeft: 10 }]}>
          {title}
        </Text>
        <Icon name="chevron-forward" size={18} color={colors.divider} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingItemContainer: {
    flex: 1,
    borderRadius: 100,
    elevation: 2,
    borderWidth: 2.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
  },
  iconProfile: {
    alignSelf: 'center',
    borderRadius: 100,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 16,
  },

  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 16,
  },

  rowMyAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 14,
    padding: 16,
  },

  myAccountItemContainer: {
    flex: 1,
    borderRadius: 16,
    elevation: 2,
    borderWidth: 2.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  rowItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 8,
  },

  rowTouchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
