import { css } from '@emotion/react';
import { AtomWrapperTypes, CSSType } from 'types';

export const WrapperSTDarkCSS: CSSType<AtomWrapperTypes> = (theme, props) => {
  const { astheme } = props ?? {};
  const MAINCOLOR =
    theme?.wrapper?.color?.[astheme] ??
    theme?.general?.color?.[astheme] ??
    'transparent';
  return css`
    background-color: ${MAINCOLOR};
  `;
};

export const WrapperBlurSTDarkCSS = (color: string, blur?: number) => {
  return css`
    background-color: ${color ?? 'rgba(0, 0, 0, 0.192)'};
    backdrop-filter: saturate(180%) blur(${blur ?? 14}px);
  `;
};

export const WrapperBlurSTLightCSS = (color: string, blur?: number) => {
  return css`
    background-color: ${color ?? 'rgba(0, 0, 0, 0.192)'};
    backdrop-filter: saturate(180%) blur(${blur ?? 14}px);
  `;
};

export const WrapperSTLightCSS: CSSType<AtomWrapperTypes> = (theme, props) => {
  const { astheme } = props ?? {};
  const MAINCOLOR =
    theme?.wrapper?.color?.[astheme] ??
    theme?.general?.color?.[astheme] ??
    '#ffffff';
  return css`
    background-color: ${MAINCOLOR};
  `;
};
