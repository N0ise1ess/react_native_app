import * as api from '../../api';
import * as actionTypes from './loading-action-types';
import queue from 'async/queue';

export const initLoad = () => async (dispatch) => {
  try {
    let requests = [
      { key: 'news', invoke: () => api.getNews(), payload: { progress: 0.2, text: 'Загружаем новости...' } },
      { key: 'event', invoke: () => api.getEvents(), payload: { progress: 0.4, text: 'Загружаем события...' } },
      {
        key: 'advertisement',
        invoke: () => api.getAdvertisement(),
        payload: { progress: 0.6, text: 'Загружаем объявления...' },
      },
      { key: 'slider', invoke: () => api.getSlider(), payload: { progress: 1, text: 'Загружаем галерею...' } },
    ];

    let pipeline = queue(async (item, getNext) => {
      dispatch({
        type: actionTypes.LOAD_PROGRESS,
        payload: { ...item.payload },
      });
      let value = await item.invoke();
      dispatch({
        type: actionTypes.NEWS_SUCCESS,
        payload: { [item.key]: value },
      });
      getNext();
    }, 1);

    pipeline.drain = () => {
      dispatch({ type: actionTypes.LOAD_SUCCESS });
    };

    pipeline.push(requests);
  } catch (error) {
    console.error('loadStartup:', error);
  }
};
