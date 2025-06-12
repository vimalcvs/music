import { SectionList } from 'react-native';
import React from 'react';
import { SpaceV } from '../../components/space/Space';
import { BackgroundGradient } from '../../components/background/Background';
import { DayItem, WeekItem, getChapterList } from './HomeComponent';

const HomeScreen = () => {
  const weeksList = getChapterList();
  return (
    <BackgroundGradient>
        <SpaceV size={50} />
        <SectionList
          sections={weeksList.map(week => ({
            title: week.weeksList,
            data: week.daysList,
          }))}
          keyExtractor={(item, index) => item.listId + index}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderSectionHeader={({ section }) => (
            <WeekItem item={{ weeksList: section.title, daysList: section.data }} />
          )}
          renderItem={({ item }) => <DayItem item={item} />}
        /> 
    </BackgroundGradient>
  );
};

export default HomeScreen;
