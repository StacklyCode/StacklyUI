import { css } from '@emotion/react';
import { wrapperBlur } from 'css';
import { SSP } from 'types';
import { AtomLoaderTypes } from './types';

export const TypeLoader: SSP<AtomLoaderTypes> = (props) => {
  const { astype, theme } = props;
  switch (astype) {
    case 'small':
      return css`
        width: 80px;
        height: 80px;
      `;
    case 'button':
      return css`
        width: 38px;
        height: max-content;
      `;
    case 'fullscreen':
      return css`
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        ${wrapperBlur(theme?.general?.properties?.blur ?? 'red')}
      `;
    default:
      return css`
        width: 100%;
        height: 100%;
      `;
  }
};

export const ColorLoader = (color: string) => {
  return css`
    svg {
      * {
        stroke: ${color ?? '#000'};
      }
    }
  `;
};

export const TypeColorLoader: SSP<AtomLoaderTypes> = (props) => {
  const { theme, astheme } = props;
  const MAINTHEME = astheme ?? theme?.loader?.theme ?? 'primary';
  const MAINCOLOR =
    theme?.loader?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  return ColorLoader(MAINCOLOR);
};
