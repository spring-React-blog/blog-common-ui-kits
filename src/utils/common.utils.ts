import theme from '../shared/theme';
import { Color } from '../types/common';

export const resetStyle = (type: string) => {
  switch (type) {
    case 'button':
      return `
        margin: 0;
        padding: 0;
        line-height: 1.75;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
      `;
    default:
      return '';
  }
};

export const getColorType = (color?: Color) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'success':
      return theme.colors.success;
    case 'error':
      return theme.colors.error;
    case 'modern':
      return theme.colors.modern;
    default:
      return theme.colors.black;
  }
};
