import { Button, Icon, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

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
      headerStyle: {
        backgroundColor: '#163D7D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      },
      headerRight: (
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <Icon type="EvilIcons" name="gear" style={{ color: 'white', fontSize: 30 }} />
          </Button>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AppStack);
