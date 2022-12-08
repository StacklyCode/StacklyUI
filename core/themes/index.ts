import ThemeWithout from './Without';

import ThemeSTDark from './Stackly/dark';
import ThemeSTLight from './Stackly/light';

import ThemeTWLight from './Tailwind/light';

export { default as ThemeSTDark } from './Stackly/dark';
export { default as ThemeStacklyLight } from './Stackly/light';

export const themes = {
  'stackly-light': ThemeSTLight,
  'stackly-dark': ThemeSTDark,
  'tailwind-light': ThemeTWLight,
  without: ThemeWithout
};
