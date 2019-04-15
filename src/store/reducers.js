import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from '../modules/auth';
import { contactsReducer } from '../modules/contacts';
import { financesReducer } from '../modules/finances';
import { libraryReducer } from '../modules/library';
import { loadingReducer } from '../modules/loading';
import { newsReducer } from '../modules/news';
import { personalitiesReducer } from '../modules/personalities';
import { questionnairesReducer } from '../modules/questionnaires';
import { scratchBookReducer } from '../modules/scratchbook';
import { settingsReducer } from '../modules/settings';
import { timetableReducer } from '../modules/timetable';
import { wifiReducer } from '../modules/wifiaccess';

export default combineReducers({
  authReducer,
  libraryReducer,
  newsReducer,
  financesReducer,
  form: formReducer,
  contactsReducer,
  loadingScreen: loadingReducer,
  personalitiesReducer,
  questionnaires: questionnairesReducer,
  scratchBook: scratchBookReducer,
  settings: settingsReducer,
  timetableReducer,
  wifi: wifiReducer,
});
