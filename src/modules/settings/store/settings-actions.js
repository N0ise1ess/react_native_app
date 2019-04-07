import { SET_FONT_SIZE } from './settings-action-types';

export const setFontSize = (payload) => ({
  type: SET_FONT_SIZE,
  payload,
});
