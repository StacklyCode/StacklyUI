import { css } from '@emotion/react';
import changeBrightness from 'utils/changeBrightness';
import changeTransparency from 'utils/changeTransparency';
import { LoaderCSS } from '../components/atoms/AtomLoader/styled';
import { ChangeBrightness, IsBackDark } from '../utils/index';
import isBackDark from '../utils/isBackDark';
import { WrapperBlurCSS } from './wrapper';

export const ButtonLoadingCSS = (color: string) => css`
  div {
    div {
      svg {
        * {
          stroke: ${color ?? '#000'} !important;
        }
      }
    }
  }
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
    border: 1px solid ${ChangeBrightness(color, 50)};
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

export const ButtonDisableCSS = (color: string) => css`
  ${WrapperBlurCSS(changeTransparency(color, 40))}
  :hover {
    ${WrapperBlurCSS(changeTransparency(color, 40))}
  }
  border: 1px solid #757575 !important;
  color: ${changeBrightness(color, -200)} !important;
  cursor: not-allowed !important;
  font-weight: bold;
  text-align: center;
  span {
    color: ${changeBrightness(color, -200)} !important;
    cursor: not-allowed !important;
    font-weight: bold;
    text-align: center;
  }
  mix-blend-mode: screen;
`;
