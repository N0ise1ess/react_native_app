import { departmentsGetApi, getBuildingDorms } from '../../api';

import * as actionTypes from './contacts-action-types';

export const setOpenedIdItemDivisions = (payload) => ({
  types: actionTypes.SET_OPENED_ID,
  payload,
});

export const getDepartments = (searchedText) => async (dispatch) => {
  dispatch({
    types: actionTypes.DEPARTMENTS_PENDING,
  });
  try {
    const response = await departmentsGetApi(searchedText);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          types: actionTypes.DEPARTMENTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          types: actionTypes.DEPARTMENTS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      types: actionTypes.DEPARTMENTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getBuildings = () => async (dispatch) => {
  try {
    const { data } = await getBuildingDorms();
    data &&
      dispatch({
        types: actionTypes.GET_BUILDING_DORMS_SUCCESS,
        payload: data,
      });
  } catch (e) {
    console.log(e);
  }
};
