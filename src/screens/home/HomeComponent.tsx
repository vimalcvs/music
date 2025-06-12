import { Day, Week } from '../../models/types';
import { View, Text } from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';

 export const getChapterList = (): Week[] => {
    const totalDays = 100;
    const daysPerWeek = 7;
    const weeks: Week[] = [];
    let dayCount = 1;

    while (dayCount <= totalDays) {
      const remainingDays = totalDays - dayCount + 1;
      const daysInWeek = Math.min(daysPerWeek, remainingDays);

      const week: Week = {
        weeksList: `WEEK ${weeks.length + 1}`,
        daysList: Array.from({ length: daysInWeek }, (_, dayIndex) => {
          const dayNumber = dayCount + dayIndex;
          return {
            listDay: `Day ${dayNumber}`,
            listId: `A${dayNumber}`,
            listTime: `Chapter ${5 + (dayIndex % 3)} min`
          };
        })
      };
      weeks.push(week);
      dayCount += daysInWeek;
    }
    return weeks;
  };


export const WeekItem = ({ item }: { item: Week }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <View>
      <Text
        style={[
          appStyles.bodyText,
          { color: colors.textPrimary, marginVertical: 6, marginHorizontal: 10 },
        ]} >
        {item.weeksList}
      </Text>
    </View>
  );
};


export const DayItem = ({ item }: { item: Day }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <View style={[appStyles.card]}>
      <Text style={[appStyles.heading, { color: colors.textPrimary }]}>{item.listDay}</Text>
      <SpaceV size={6} />
      <Text style={[appStyles.caption, { color: colors.textSecondary }]}>{item.listTime}</Text>
    </View>
  );
};