import {
  timeTableSearchApi,
  timeTableGetApi
} from '../api';

import {
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  SEARCH_FAILURE,
  TIMETABLE_GET_FAILURE,
  TIMETABLE_GET_SUCCESS,
  TIMETABLE_GET_PENDING
} from '../constants';

export const getSearchedTimetable = (searchedText, token) => async dispatch => {
  dispatch({
    type: SEARCH_PENDING
  });

  await timeTableSearchApi(searchedText, token)
    .then(
      response => {
        console.log('test2:', response);
        dispatch({
          type: SEARCH_SUCCESS,
          payload: response
        });
      },
      err => {
        console.log('test3:', err);
        dispatch({
          type: SEARCH_FAILURE,
          payload: err
        });
      }
    );
};

export const getTimetable = (search, token) => async dispatch => {
  dispatch({
    type: TIMETABLE_GET_PENDING
  });

  await timeTableGetApi(search, token)
    .then(
      response => {
        dispatch({
          type: TIMETABLE_GET_SUCCESS,
          payload: response
        });
      },
      err => {
        dispatch({
          type: TIMETABLE_GET_FAILURE,
          payload: err
        });
      }
    );
};
