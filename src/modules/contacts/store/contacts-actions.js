import { departmentsGetApi, getBuildingDorms } from '../../api';

import * as types from './contacts-action-types';

export const setOpenedIdItemDivisions = (payload) => ({
  type: types.SET_OPENED_ID,
  payload,
});

export const getDepartments = (searchedText) => async (dispatch) => {
  dispatch({
    type: types.DEPARTMENTS_PENDING,
  });
  try {
    const response = await departmentsGetApi(searchedText);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.DEPARTMENTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.DEPARTMENTS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.DEPARTMENTS_FAILURE,
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
        type: types.GET_BUILDING_DORMS_SUCCESS,
        payload: data,
      });
  } catch (e) {
    console.log(e);
  }
};
