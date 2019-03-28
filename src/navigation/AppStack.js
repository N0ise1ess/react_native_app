import { Button, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { CustomIcon } from '../modules/shared/components/custom-icon';
import { TouchableOpacity } from 'react-native';

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
  ServicesScreen,
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
  QuestionnairesStep,
  SettingsScreen,
  TimeTableScreen,
  WifiAccessScreen,
  ScratchBookScreen,
  ReportsScreen,
  BuildingDormsCardScreen,
  RequestsInfoScreen,
  RequestsLibraryScreen,
} from '../modules';

const AppStack = createStackNavigator(
  {
    About: AboutScreen,
    Home: HomeScreen,
    Library: LibraryScreen,
    LibraryCard: LibraryCardScreen,
    Services: ServicesScreen,
    RequestsInfo: RequestsInfoScreen,
    RequestsLibrary: RequestsLibraryScreen,
    News: NewsScreen,
    NewsDetails: NewsDetailsScreen,
    TimeTable: TimeTableScreen,
    ScratchBook: ScratchBookScreen,
    Settings: SettingsScreen,
    Account: AccountScreen,
    Finance: FinanceScreen,
    Notifications: NotificationsScreen,
    PersonalRating: PersonalRatingScreen,
    Questionnaires: QuestionnairesScreen,
    QuestionnairesStep: QuestionnairesStep,
    Contacts: ContactsScreen,
    Divisions: DivisionsScreen,
    BuildingDorms: BuildingDormsScreen,
    BuildingDormsCard: BuildingDormsCardScreen,
    MainConfig: MainConfigScreen,
    Personalities: PersonalitiesScreen,
    Personality: PersonalityScreen,
    Chat: ChatScreen,
    Parents: ParentsListScreen,
    Parent: ParentScreen,
    WifiAccess: WifiAccessScreen,
    Reports: ReportsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: styles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: (
        <Right>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <CustomIcon name={"settings"} style={styles.rightIconStyle} />
          </TouchableOpacity>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AppStack);
