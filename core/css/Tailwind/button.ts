import { css } from '@emotion/react';
import { AtomButtonTypes, CSSType } from 'types';
import changeBrightness from '../../utils/changeBrightness';
import { ChangeBrightness, IsBackDark } from '../../utils/index';
import isBackDark from '../../utils/isBackDark';
import { LoaderCSS } from './loader';

export const ButtonLoadingCSS = (color: string) => css`
  div {
    svg {
      * {
        stroke: ${color ?? '#000'} !important;
      }
    }
  }
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
  border: 1px solid ${color};
  :hover {
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
  font-weight: 600;
  * {
    font-weight: 600;
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

export const ButtonDisableTWLightCSS = (color: string) => css`
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

export const ButtonTypeTWLightCSS: CSSType<AtomButtonTypes> = (
  theme,
  props
) => {
  const { astype, astheme } = props ?? {};
  const MAINTYPE = astype ?? 'flat';
  const MAINTHEME = astheme ?? 'primary';
  const MAINCOLOR =
    theme?.button?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    theme?.general?.color?.primary ??
    '#0067ea';
  switch (MAINTYPE) {
    case 'outline':
      return css`
        ${ButtonOutlineCSS(MAINCOLOR)}
      `;
    default:
      return css`
        ${ButtonFlatCSS(MAINCOLOR)}
      `;
  }
};

export const ButtonIsDisabledTWLightCSS: CSSType<AtomButtonTypes> = (
  _,
  props
) => {
  const { disabled } = props;
  if (disabled)
    return css`
      ${ButtonDisableTWLightCSS('#e5e5e5')}
      ${ButtonDisabledAnimationCSS()}
    `;
  return css``;
};
