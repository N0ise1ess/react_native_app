import {GET_DISCIPLINE_LIST_PROGRESS, GET_DISCIPLINE_LIST_PROGRESS_SUCCESS} from '../constants';
import {getDisciplineListProgress as getDisciplineListProgressApi} from '../api/api-fns';

export const getDisciplineListProgress = token => async dispatch => {
    dispatch({type: GET_DISCIPLINE_LIST_PROGRESS});
    try{
        const {data} = await getDisciplineListProgressApi(token)
        dispatch({type: GET_DISCIPLINE_LIST_PROGRESS_SUCCESS, payload: data});
    } catch(e) {
        dispatch({type: GET_DISCIPLINE_LIST_PROGRESS_FAIL});
    }
}