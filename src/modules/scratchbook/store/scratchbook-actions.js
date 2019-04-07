import * as api from '../../api';
import * as actionTypes from './scratchbook-action-types';
export const getDisciplineListProgress = (token) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_DISCIPLINE_LIST_PROGRESS });
  try {
    const { data } = await api.getDisciplineListProgress(token);
    dispatch({ type: actionTypes.GET_DISCIPLINE_LIST_PROGRESS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: actionTypes.GET_DISCIPLINE_LIST_PROGRESS_FAIL });
  }
};
