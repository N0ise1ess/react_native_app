import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';
import newsReducer from './newsReducer';
import financeReducer from './financeReducer';
import timetableReducer from './timetableReducer';
import departmentReducer from './departmentReducer';
import loadingReducer from './loadingReducer';
export default combineReducers({
  authReducer,
  libraryReducer,
  newsReducer,
  financeReducer,
  timetableReducer,
  form: formReducer,
  departmentReducer,
  loadingScreen: loadingReducer,
});
