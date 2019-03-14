import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

let store = compose(applyMiddleware(thunk, logger))(createStore)(rootReducer);
export default store;
