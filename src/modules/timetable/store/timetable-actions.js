import { timeTableSearchApi, timeTableGetApi } from '../../api';
import * as actionTypes from './timetable-action-types';

export const getSearchedTimetable = (searchedText, token) => async (dispatch) => {
  dispatch({
    type: actionTypes.SEARCH_PENDING,
  });

  await timeTableSearchApi(searchedText, token).then(
    (response) => {
      dispatch({
        type: actionTypes.SEARCH_SUCCESS,
        payload: response,
      });
    },
    (err) => {
      dispatch({
        type: actionTypes.SEARCH_FAILURE,
        payload: err,
      });
    },
  );
};

export const getTimetable = (search, token) => async (dispatch) => {
  dispatch({
    type: actionTypes.TIMETABLE_GET_PENDING,
  });

  await timeTableGetApi(search, token).then(
    (response) => {
      dispatch({
        type: actionTypes.TIMETABLE_GET_SUCCESS,
        payload: response,
      });
    },
    (err) => {
      dispatch({
        type: actionTypes.TIMETABLE_GET_FAILURE,
        payload: err,
      });
    },
  );
};
