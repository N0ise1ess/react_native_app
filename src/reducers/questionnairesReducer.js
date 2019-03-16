import initialState from '../store/initialState';
import * as constants from '../constants';

export default (state = initialState.questionnaires, action) => {
    switch (action.type) {
        case constants.GET_ALL_QUESTIONNAIRES_SUCCESS: return {
            ...state,
            listQuestionnaires: action.payload,
        }
        case constants.GET_QUESTIONNAIRES_SUCCESS: return {
            ...state,
            questionnaires: action.payload,
        }
        case constants.SET_ANSWERS_ID: return {
            ...state,
            answersId: [...state.answersId, action.payload]
        }
        case constants.SAVE_QUESTIONNAIRES_SUCCESS: return {
            ...state,
            isFinished: true,
        }
        default: return {...state}
    }
}