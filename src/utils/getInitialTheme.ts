import { Theme } from '../interfaces/Theme';
import { LS_THEME } from './constants';

export const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(LS_THEME);
  if (storedTheme) {
    return storedTheme;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.DARK;
  }

  return Theme.LIGHT;
};
