import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';
import newsReducer from './newsReducer';
import financeReducer from './financeReducer';
import timetableReducer from './timetableReducer';
import departmentReducer from './departmentReducer';
import loadingReducer from './loadingReducer';
import settings from './settingsReducer';
export default combineReducers({
  authReducer,
  libraryReducer,
  newsReducer,
  financeReducer,
  timetableReducer,
  form: formReducer,
  departmentReducer,
  loadingScreen: loadingReducer,
  settings,
});
