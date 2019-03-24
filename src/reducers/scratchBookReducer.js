import * as constants from '../constants';
import initialState from '../store/initialState';

export default (state = initialState.scratchBook, action) => {
    switch (action.type) {
        case constants.GET_DISCIPLINE_LIST_PROGRESS_SUCCESS: return {
            ...state,
            isLoading: false,
            dataScratchBook: action.payload,
        }
        case constants.GET_DISCIPLINE_LIST_PROGRESS: return {
            ...state,
            isLoading: true,
        }
        case constants.GET_DISCIPLINE_LIST_PROGRESS_FAIL: return {
            ...state,
            isLoading: false,
        }
        default: return {...state}
    }
}