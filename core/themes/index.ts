import ThemeStacklyDark from './Stackly/dark';
import ThemeStacklyLight from './Stackly/light';
import ThemeWithout from './Without';
export { default as ThemeStacklyDark } from './Stackly/dark';
export { default as ThemeStacklyLight } from './Stackly/light';

export const themes = {
  'stackly-light': ThemeStacklyLight,
  'stackly-dark': ThemeStacklyDark,
  without: ThemeWithout
};
