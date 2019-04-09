import * as types from './settings-action-types';
import { AsyncStorage } from 'react-native';
import { initialState } from './settings-initial-state';

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FONT_SIZE: {
      AsyncStorage.setItem('fontSize', action.payload.toString());
      return {
        ...state,
        fontSize: action.payload,
      };
    }
    default:
      return state;
  }
};
