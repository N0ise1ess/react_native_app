import initialState from '../store/initialState';
import { LOAD_PROGRESS, LOAD_SUCCESS } from '../constants';

export default (loadingReducer = (state = initialState.loadingScreen, action) => {
  switch (action.type) {
    case LOAD_PROGRESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
});
