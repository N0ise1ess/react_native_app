import { Right } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import {
  AboutScreen,
  AccountScreen,
  BuildingDormsCardScreen,
  BuildingDormsScreen,
  ChatScreen,
  ContactsScreen,
  DivisionsScreen,
  FinanceScreen,
  HomeScreen,
  LibraryCardScreen,
  LibraryCollectionScreen,
  LibraryFavouriteScreen,
  LibraryScreen,
  LibrarySearchScreen,
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
  ReportsScreen,
  RequestsInfoScreen,
  RequestsLibraryScreen,
  ScratchBookScreen,
  ServicesScreen,
  SettingsScreen,
  TimeTableScreen,
  WifiAccessScreen,
} from '../modules';
import { CustomIcon } from '../modules/shared';
import { styles } from './styles';

const AppStack = createStackNavigator(
  {
    About: AboutScreen,
    Home: HomeScreen,
    Library: LibraryScreen,
    LibraryCard: LibraryCardScreen,
    LibraryCollections: LibraryCollectionScreen,
    LibraryFavourite: LibraryFavouriteScreen,
    Services: ServicesScreen,
    RequestsInfo: RequestsInfoScreen,
    RequestsLibrary: RequestsLibraryScreen,
    LibrarySearch: LibrarySearchScreen,
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
            <CustomIcon name={'settings'} style={styles.rightIconStyle} />
          </TouchableOpacity>
        </Right>
      ),
    }),
  },
);

export default createAppContainer(AppStack);
