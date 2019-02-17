import React from 'react';
import { Text, Header, Left, Body, Right, Button, Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  LibraryScreen,
  LibraryCardScreen,
  NewsScreen,
  NewsDetailsScreen,
  TimeTableScreen,
  SettingsScreen,
  AccountScreen,
  AboutScreen,
  FinanceScreen,
  NotificationsScreen,
  PersonalRatingScreen,
  QuestionnairesScreen,
  ContactsScreen,
  DivisionsScreen,
  BuildingDormsScreen,
  MainConfigScreen,
  PersonalitiesScreen,
  PersonalityScreen,
  ChatScreen,
  ParentsScreen,
  ParentScreen,
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
    Parents: ParentsScreen,
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
