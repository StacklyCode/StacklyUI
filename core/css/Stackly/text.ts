import { css } from '@emotion/react';
import { AtomTextTypes, CSSType } from 'types';

export const TextCSS: CSSType<AtomTextTypes> = (theme, props) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.option?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#fff';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};
