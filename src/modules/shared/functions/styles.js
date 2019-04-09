import { STEP_CHANGE_FONT_SIZE } from '../constants';

export const getSizeFonts = (fontSize, index) => fontSize + index * STEP_CHANGE_FONT_SIZE;
