import { css } from '@emotion/react';
import { ColorLoader } from '../components/atoms/AtomLoader/styled';
import { ChangeBrightness, IsBackDark } from '../utils/index';
import isBackDark from '../utils/isBackDark';

export const backgroundColorFlat = (color: string) => css`
  background-color: ${color};
`;

export const loadingButton = (color: string) => css`
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

export const backgroundColorHoverFlat = (color: string) => css`
  background-color: ${color};
  color: ${IsBackDark(color)} !important;
  * {
    color: ${IsBackDark(color)} !important;
  }

  ${loadingButton(IsBackDark(color))}
  ${ColorLoader(IsBackDark(color))}
  border: 1px solid ${ChangeBrightness(color, 80)};
  :hover {
    border: 1px solid ${ChangeBrightness(color, 50)};
    background-color: ${ChangeBrightness(color, -20)};
    ${loadingButton(IsBackDark(ChangeBrightness(color, -20)))}
  }
  :active {
    background-color: ${ChangeBrightness(color, 20)};
    ${loadingButton(isBackDark(ChangeBrightness(color, 20)))}
  }
`;

export const backgroundColorOutline = (color: string) => css`
  background-color: transparent;
  border: 1px solid ${color};
  color: ${color} !important;
  * {
    color: ${color} !important;
  }

  ${loadingButton(color)}
  :hover {
    ${loadingButton(IsBackDark(color))}
    background-color: ${color};
    color: ${IsBackDark(color)} !important;
    * {
      color: ${IsBackDark(color)} !important;
    }
  }
  :active {
    ${loadingButton(isBackDark(ChangeBrightness(color, 20)))}
    border: 1px solid ${ChangeBrightness(color, 20)};
    background-color: ${ChangeBrightness(color, 20)};
  }
`;
