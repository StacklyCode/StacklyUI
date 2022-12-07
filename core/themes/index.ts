import ThemeSTDark from './Stackly/dark';
import ThemeStacklyLight from './Stackly/light';
import ThemeWithout from './Without';
export { default as ThemeSTDark } from './Stackly/dark';
export { default as ThemeStacklyLight } from './Stackly/light';

export const themes = {
  'stackly-light': ThemeStacklyLight,
  'stackly-dark': ThemeSTDark,
  without: ThemeWithout
};
