import {
  newsApi
} from '../api';
import {
  NEWS_PENDING,
  NEWS_SUCCESS,
  NEWS_FAILURE
} from '../constants';

export const getAllNews = () => async dispatch => {
  dispatch({
    type: NEWS_PENDING
  });
  try {
    const response = await newsApi();
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: NEWS_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: NEWS_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: NEWS_FAILURE,
      payload: err,
      error: true
    });
  }
};
