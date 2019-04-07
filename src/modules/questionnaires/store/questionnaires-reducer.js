import { initialState } from './questionnaires-initial-state';
import * as types from './questionnaires-action-types';

export const questionnairesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        listQuestionnaires: action.payload,
      };
    case types.GET_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        questionnaires: action.payload,
      };
    case types.SET_ANSWERS_ID:
      return {
        ...state,
        answersId: [...state.answersId, action.payload],
      };
    case types.SAVE_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        isFinished: true,
      };
    default:
      return { ...state };
  }
};
