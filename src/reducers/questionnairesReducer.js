import initialState from '../store/initialState';
import * as constants from '../constants';

export default (state, action) => {
    switch (action.type) {
        case constants.GET_ALL_QUESTIONNAIRES_SUCCESS: return {
            ...state,
            listQuestionnaires: action.payload,
        }
        default: return {...state}
    }
}