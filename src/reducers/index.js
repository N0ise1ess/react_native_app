import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';
import newsReducer from './newsReducer';
export default combineReducers({
    authReducer,
    libraryReducer,
    newsReducer,
    form: formReducer,
});
