import ThemeWithout from './Without';

import ThemeSTDark from './Stackly/dark';
import ThemeSTLight from './Stackly/light';

export { default as ThemeSTDark } from './Stackly/dark';
export { default as ThemeStacklyLight } from './Stackly/light';

export const themes = {
  'stackly-dark': ThemeSTDark,
  'stackly-light': ThemeSTLight,
  without: ThemeWithout
};
