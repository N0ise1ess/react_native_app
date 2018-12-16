import { combineReducers } from 'redux';
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';
export default combineReducers({
    authReducer,
    libraryReducer,
});
