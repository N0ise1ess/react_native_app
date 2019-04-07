import { getPersonalityByName, getPersonalityById } from '../../api';

import * as actionTypes from './personalities-action-types';

export const findPersonalityByName = (searchedName, size, page) => async (
  dispatch,
) => {
  dispatch({
    type: actionTypes.PERSONALITY_SEARCHING_PENDING,
  });
  try {
    const response = await getPersonalityByName(searchedName, size, page);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: actionTypes.PERSONALITY_SEARCHING_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.PERSONALITY_SEARCHING_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.PERSONALITY_SEARCHING_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const updatePersonalityByName = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PERSONALITY_UPDATE_PENDING,
  });
  try {
    const response = await getPersonalityByName();
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: actionTypes.PERSONALITY_UPDATE_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.PERSONALITY_UPDATE_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.PERSONALITY_UPDATE_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const findPersonalityById = (personId) => async (dispatch) => {
  dispatch({
    type: actionTypes.PERSONALITY_SEARCHING_BY_ID_PENDING,
  });
  try {
    const response = await getPersonalityById(personId);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: actionTypes.PERSONALITY_SEARCHING_BY_ID_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.PERSONALITY_SEARCHING_BY_ID_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.PPERSONALITY_SEARCHING_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  }
};
