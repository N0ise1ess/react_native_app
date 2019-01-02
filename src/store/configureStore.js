import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import logger from 'redux-logger';
import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authReducer', 'libraryReducer', 'newsReducer', 'financeReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = compose(
  applyMiddleware(thunk, logger),
)(createStore)(persistedReducer);

persistStore(store, () => {});

export default store;
