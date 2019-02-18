import { Button, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { CustomIcon } from '../modules/shared/components/custom-icon';

import { styles } from './styles';

import {
  AboutScreen,
  AccountScreen,
  BuildingDormsScreen,
  ChatScreen,
  ContactsScreen,
  DivisionsScreen,
  FinanceScreen,
  HomeScreen,
  LibraryCardScreen,
  LibraryScreen,
  MainConfigScreen,
  NewsDetailsScreen,
  NewsScreen,
  NotificationsScreen,
  ParentScreen,
  ParentsListScreen,
  PersonalitiesScreen,
  PersonalityScreen,
  PersonalRatingScreen,
  QuestionnairesScreen,
  SettingsScreen,
  TimeTableScreen,
} from '../modules';

const AppStack = createStackNavigator(
  {
    About: AboutScreen,
    Home: HomeScreen,
    Library: LibraryScreen,
    LibraryCard: LibraryCardScreen,
    News: NewsScreen,
    NewsDetails: NewsDetailsScreen,
    TimeTable: TimeTableScreen,
    Settings: SettingsScreen,
    Account: AccountScreen,
    Finance: FinanceScreen,
    Notifications: NotificationsScreen,
    PersonalRating: PersonalRatingScreen,
    Questionnaires: QuestionnairesScreen,
    Contacts: ContactsScreen,
    Divisions: DivisionsScreen,
    BuildingDorms: BuildingDormsScreen,
    MainConfig: MainConfigScreen,
    Personalities: PersonalitiesScreen,
    Personality: PersonalityScreen,
    Chat: ChatScreen,
    Parents: ParentsListScreen,
    Parent: ParentScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: styles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: (
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <CustomIcon name={"settings"} style={styles.rightIconStyle} />
          </Button>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AppStack);
