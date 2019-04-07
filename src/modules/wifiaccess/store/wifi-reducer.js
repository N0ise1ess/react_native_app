import { initialState } from './wifi-initial-state';
import * as types from './wifi-action-types';

export const wifiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WIFI_SUCCESS:
      return {
        ...state,
        isLoadingWifi: false,
        dataWifi: action.payload,
      };
    case types.GET_WIFI_FAILURE:
      return {
        ...state,
        isLoadingWifi: false,
      };
    case types.GET_WIFI_PENDING:
      return {
        ...state,
        isLoadingWifi: true,
      };
    default:
      return state;
  }
};
