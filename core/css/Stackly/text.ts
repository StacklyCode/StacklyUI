import { css } from '@emotion/react';
import { AtomTextTypes, CSSType } from 'types';

export const TextSTDarkCSS: CSSType<AtomTextTypes> = (theme, props) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color = theme?.text?.color?.[MAINTHEME] ?? '#fff';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const TextSTLightCSS: CSSType<AtomTextTypes> = (theme, props) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color = theme?.text?.color?.[MAINTHEME] ?? '#000';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};
