import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store/configureStore';
import * as Modules from '../modules';

export const goToAuth = () => Navigation.setRoot({
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: "Auth"
                    }
                }
            ]
        }
    }
})

export const registerScreens = () => {
    Navigation.registerComponentWithRedux(`AuthLoading`, () => Modules.LoadingScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Auth`, () => Modules.LoginScreen, Provider, store);
    Navigation.registerComponentWithRedux(`SignUp`, () => Modules.SignUpScreen, Provider, store);
    Navigation.registerComponentWithRedux(`ResetPassword`, () => Modules.PasswordResetScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Home`, () => Modules.HomeScreen, Provider, store);
    Navigation.registerComponentWithRedux(`About`, () => Modules.AboutScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Library`, () => Modules.LibraryScreen, Provider, store);
    Navigation.registerComponentWithRedux(`LibraryCard`, () => Modules.LibraryCardScreen, Provider, store);
    Navigation.registerComponentWithRedux(`LibraryCollections`, () => Modules.LibraryCollectionScreen, Provider, store);
    Navigation.registerComponentWithRedux(`LibraryFavourite`, () => Modules.LibraryFavouriteScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Services`, () => Modules.ServicesScreen, Provider, store);
    Navigation.registerComponentWithRedux(`RequestsInfo`, () => Modules.RequestsInfoScreen, Provider, store);
    Navigation.registerComponentWithRedux(`RequestsLibrary`, () => Modules.RequestsLibraryScreen, Provider, store);
    Navigation.registerComponentWithRedux(`LibrarySearch`, () => Modules.LibrarySearchScreen, Provider, store);
    Navigation.registerComponentWithRedux(`News`, () => Modules.NewsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`NewsDetails`, () => Modules.NewsDetailsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`TimeTable`, () => Modules.TimeTableScreen, Provider, store);
    Navigation.registerComponentWithRedux(`ScratchBook`, () => Modules.ScratchBookScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Settings`, () => Modules.SettingsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Account`, () => Modules.AccountScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Finance`, () => Modules.FinanceScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Notifications`, () => Modules.NotificationsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`PersonalRating`, () => Modules.PersonalRatingScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Questionnaires`, () => Modules.QuestionnairesScreen, Provider, store);
    Navigation.registerComponentWithRedux(`QuestionnairesStep`, () => Modules.QuestionnairesStep, Provider, store);
    Navigation.registerComponentWithRedux(`Contacts`, () => Modules.ContactsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Divisions`, () => Modules.DivisionsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`BuildingDorms`, () => Modules.BuildingDormsScreen, Provider, store);
    Navigation.registerComponentWithRedux(`BuildingDormsCard`, () => Modules.BuildingDormsCardScreen, Provider, store);
    Navigation.registerComponentWithRedux(`MainConfig`, () => Modules.MainConfigScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Personalities`, () => Modules.PersonalitiesScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Personality`, () => Modules.PersonalityScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Chat`, () => Modules.ChatScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Parents`, () => Modules.ParentsListScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Parent`, () => Modules.ParentScreen, Provider, store);
    Navigation.registerComponentWithRedux(`WifiAccess`, () => Modules.WifiAccessScreen, Provider, store);
    Navigation.registerComponentWithRedux(`Reports`, () => Modules.ReportsScreen, Provider, store);
}