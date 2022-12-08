import { css } from '@emotion/react';
import { AtomLoaderTypes, CSSType } from 'types';
import { WrapperBlurSTDarkCSS, WrapperBlurSTLightCSS } from './wrapper';

export const LoaderTypeSTDark: CSSType<AtomLoaderTypes> = (theme, props) => {
  const { astype } = props;
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
        transition: all 0.3s ease-in-out;
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
        svg {
          width: 300px !important;
          height: 300px !important;
        }
        ${WrapperBlurSTDarkCSS(theme?.general?.properties?.blur ?? '#00000065')}
        transition: all 0.3s ease-in-out;
      `;
    default:
      return css`
        width: 100%;
        height: 100%;
      `;
  }
};

export const LoaderCSS = (color: string) => {
  return css`
    svg {
      * {
        stroke: ${color ?? '#000'};
      }
    }
  `;
};

export const LoaderTypeSTDarkCSS: CSSType<AtomLoaderTypes> = (theme, props) => {
  const { astheme } = props;
  const MAINTHEME = astheme ?? 'primary';
  const MAINCOLOR =
    theme?.loader?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  return LoaderCSS(MAINCOLOR);
};

export const LoaderTypeSTLight: CSSType<AtomLoaderTypes> = (theme, props) => {
  const { astype } = props;
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
        transition: all 0.3s ease-in-out;
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
        svg {
          width: 300px !important;
          height: 300px !important;
        }
        ${WrapperBlurSTLightCSS(
          theme?.general?.properties?.blur ?? '#00000065'
        )}
        transition: all 0.3s ease-in-out;
      `;
    default:
      return css`
        width: 100%;
        height: 100%;
      `;
  }
};
export const LoaderTypeSTLightCSS: CSSType<AtomLoaderTypes> = (
  theme,
  props
) => {
  const { astheme } = props;
  const MAINTHEME = astheme ?? 'primary';
  const MAINCOLOR =
    theme?.loader?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  return LoaderCSS(MAINCOLOR);
};
