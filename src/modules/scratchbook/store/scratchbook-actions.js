import * as api from '../../api';
import * as types from './scratchbook-action-types';
export const getDisciplineListProgress = (token) => async (dispatch) => {
  dispatch({ type: types.GET_DISCIPLINE_LIST_PROGRESS });
  try {
    const { data } = await api.getDisciplineListProgress(token);
    dispatch({ type: types.GET_DISCIPLINE_LIST_PROGRESS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.GET_DISCIPLINE_LIST_PROGRESS_FAIL });
  }
};
