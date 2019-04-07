import { timeTableSearchApi, timeTableGetApi } from '../../api';
import * as types from './timetable-action-types';

export const getSearchedTimetable = (searchedText, token) => async (dispatch) => {
  dispatch({
    type: types.SEARCH_PENDING,
  });

  await timeTableSearchApi(searchedText, token).then(
    (response) => {
      dispatch({
        type: types.SEARCH_SUCCESS,
        payload: response,
      });
    },
    (err) => {
      dispatch({
        type: types.SEARCH_FAILURE,
        payload: err,
      });
    },
  );
};

export const getTimetable = (search, token) => async (dispatch) => {
  dispatch({
    type: types.TIMETABLE_GET_PENDING,
  });

  await timeTableGetApi(search, token).then(
    (response) => {
      dispatch({
        type: types.TIMETABLE_GET_SUCCESS,
        payload: response,
      });
    },
    (err) => {
      dispatch({
        type: types.TIMETABLE_GET_FAILURE,
        payload: err,
      });
    },
  );
};
