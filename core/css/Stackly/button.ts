import { css } from '@emotion/react';
import { AtomButtonTypes, CSSType } from 'types';
import changeBrightness from '../../utils/changeBrightness';
import changeTransparency from '../../utils/changeTransparency';
import { ChangeBrightness, IsBackDark } from '../../utils/index';
import isBackDark from '../../utils/isBackDark';
import { LoaderCSS } from './loader';
import { WrapperBlurSTDarkCSS } from './wrapper';

export const ButtonLoadingCSS = (color: string) => css`
  div {
    svg {
      * {
        stroke: ${color ?? '#000'} !important;
      }
    }
  }
`;

export const BCCL = ButtonLoadingCSS;

export const ButtonAnimationCSS = () => css`
  :hover {
    transform: scale3d(1.08, 1.08, 1);
  }
  :active {
    transform: scale(0.99);
    opacity: 0.6;
  }
  transition: all 0.2s ease-in-out;
`;

export const ButtonDisabledAnimationCSS = () => css`
  :hover {
    transform: scale3d(1, 1, 1);
  }
  :active {
    transform: scale(1);
    opacity: 1;
  }
  transition: all 0.2s ease-in-out;
`;

export const ButtonFlatCSS = (color: string) => css`
  background-color: ${color};
  color: ${IsBackDark(color)} !important;
  * {
    color: ${IsBackDark(color)} !important;
  }

  ${ButtonLoadingCSS(IsBackDark(color))}
  ${LoaderCSS(IsBackDark(color))}
  border: 1px solid ${ChangeBrightness(color, 80)};
  :hover {
    border: 1px solid ${ChangeBrightness(color, -20)};
    background-color: ${ChangeBrightness(color, -20)};
    ${ButtonLoadingCSS(IsBackDark(ChangeBrightness(color, -20)))}
  }
  :active {
    background-color: ${ChangeBrightness(color, 20)};
    ${ButtonLoadingCSS(isBackDark(ChangeBrightness(color, 20)))}
  }
`;

export const ButtonOutlineCSS = (color: string) => css`
  background-color: transparent;
  border: 1px solid ${color};
  color: ${color} !important;
  * {
    color: ${color} !important;
  }

  ${ButtonLoadingCSS(color)}
  :hover {
    ${ButtonLoadingCSS(IsBackDark(color))}
    background-color: ${color};
    color: ${IsBackDark(color)} !important;
    * {
      color: ${IsBackDark(color)} !important;
    }
  }
  :active {
    ${ButtonLoadingCSS(isBackDark(ChangeBrightness(color, 20)))}
    border: 1px solid ${ChangeBrightness(color, 20)};
    background-color: ${ChangeBrightness(color, 20)};
  }
`;

export const ButtonDisableSTDarkCSS = (color: string) => css`
  ${WrapperBlurSTDarkCSS(changeTransparency(color, 20))}
  :hover {
    ${WrapperBlurSTDarkCSS(changeTransparency(color, 20))}
  }
  :active {
    ${WrapperBlurSTDarkCSS(changeTransparency(color, 20))}
  }
  border: 1px solid ${changeTransparency(color, 40)} !important;
  color: ${changeTransparency(color, 40)} !important;
  cursor: not-allowed !important;
  font-weight: bold;
  text-align: center;
  span {
    color: ${changeBrightness(color, -50)} !important;
    cursor: not-allowed !important;
    font-weight: bold;
    text-align: center;
  }
  mix-blend-mode: screen;
`;

export const ButtonDisableSTLightCSS = (color: string) => css`
  background-color: ${color};
  :hover {
    background-color: ${changeBrightness(color, 0)};
  }
  :active {
    background-color: ${changeBrightness(color, 0)};
  }
  border: 1px solid ${changeBrightness(color, -80)} !important;
  color: ${changeBrightness(color, -80)} !important;
  cursor: not-allowed !important;
  font-weight: bold;
  text-align: center;
  span {
    color: ${changeBrightness(color, -50)} !important;
    cursor: not-allowed !important;
    font-weight: bold;
    text-align: center;
  }
`;

export const ButtonTypeSTDarkCSS: CSSType<AtomButtonTypes> = (theme, props) => {
  const { astype, astheme } = props ?? {};
  const MAINTYPE = astype ?? 'flat';
  const MAINTHEME = astheme ?? 'primary';
  const MAINCOLOR =
    theme?.button?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  switch (MAINTYPE) {
    case 'outline':
      return css`
        ${ButtonAnimationCSS()}
        ${ButtonOutlineCSS(MAINCOLOR)}
        ${WrapperBlurSTDarkCSS(changeTransparency(MAINCOLOR, 20))}
      `;
    default:
      return css`
        ${ButtonAnimationCSS()}
        ${ButtonFlatCSS(MAINCOLOR)}
      `;
  }
};

export const ButtonIsDisabledSTDarkCSS: CSSType<AtomButtonTypes> = (
  _,
  props
) => {
  const { disabled } = props;
  if (disabled)
    return css`
      ${ButtonDisableSTDarkCSS('#e6e6e6')}
      ${ButtonDisabledAnimationCSS()}
    `;
  return css``;
};

export const ButtonTypeSTLightCSS: CSSType<AtomButtonTypes> = (
  theme,
  props
) => {
  const { astype, astheme } = props ?? {};
  const MAINTYPE = astype ?? 'flat';
  const MAINTHEME = astheme ?? 'primary';
  const MAINCOLOR =
    theme?.button?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  switch (MAINTYPE) {
    case 'outline':
      return css`
        ${ButtonOutlineCSS(MAINCOLOR)}
        ${ButtonAnimationCSS()}
      `;
    default:
      return css`
        ${ButtonFlatCSS(MAINCOLOR)}
        ${ButtonAnimationCSS()}
      `;
  }
};

export const ButtonIsDisabledSTLightCSS: CSSType<AtomButtonTypes> = (
  _,
  props
) => {
  const { disabled } = props;
  if (disabled)
    return css`
      ${ButtonDisableSTLightCSS('#e5e5e5')}
      ${ButtonDisabledAnimationCSS()}
    `;
  return css``;
};
