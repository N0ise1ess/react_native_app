import * as api from '../../api';
import * as actionTypes from './questionnaires-action-types';

export const resetQuestionnaires = () => ({
  type: actionTypes.GET_QUESTIONNAIRES_SUCCESS,
  payload: {},
});

export const getAllQuestionnaires = (token) => async (dispatch) => {
  try {
    let { data } = await api.getAllQuestionnaires(token);
    data &&
      dispatch({
        type: actionTypes.GET_ALL_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
  } catch (e) {}
};

export const getQuestionnaires = (id, token) => async (dispatch) => {
  try {
    let { data } = await api.getQuestionnaire(id, token);
    data &&
      dispatch({
        type: actionTypes.GET_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
  } catch (e) {
    console.log(e);
  }
};

export const saveAnswers = (parametrs, token) => async (dispatch) => {
  try {
    let { data } = await api.saveAnswers(parametrs, token);
    data &&
      dispatch({
        type: actionTypes.SAVE_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
    getAllQuestionnaires(token)(dispatch);
  } catch (e) {
    console.log(e);
  }
};
