import { css } from '@emotion/react';
import changeBrightness from './changeBrightness';
import isBackDark from './isBackDark';

export const backgroundColorFlat = (color: string) => css`
  background-color: ${color};
`;

export const backgroundColorHoverFlat = (color: string) => css`
  background-color: ${color};
  color: ${isBackDark(color)} !important;
  * {
    color: ${isBackDark(color)} !important;
  }
  .lds-ring div {
    border-color: ${isBackDark(color)} transparent transparent transparent;
  }
  :hover {
    background-color: ${changeBrightness(color, -20)};
  }
  :active {
    background-color: ${changeBrightness(color, 20)};
  }
`;

export const backgroundColorOutline = (color: string) => css`
  background-color: transparent;
  border: 1px solid ${color};
  color: ${color} !important;
  * {
    color: ${color} !important;
  }
  div .lds-ring div {
    border-color: ${color} transparent transparent transparent;
  }
  :hover {
    div .lds-ring div {
      border-color: ${isBackDark(color)} transparent transparent transparent;
    }
    background-color: ${color};
    color: ${isBackDark(color)} !important;
    * {
      color: ${isBackDark(color)} !important;
    }
  }
  :active {
    border: 1px solid ${changeBrightness(color, 20)};
    background-color: ${changeBrightness(color, 20)};
  }
`;

export const colorIcon = (color: string) => css`
  svg {
    * {
      path {
        fill: ${color};
      }
    }
  }
`;

export const backgroundColorInput = (color: string) => css`
  background-color: ${color};
  color: ${isBackDark(color)};
  border: 2px solid ${changeBrightness(color, -20)};
  ::placeholder {
    color: ${changeBrightness(isBackDark(color), 40)};
  }
`;

export const backgroundColorInputToggle = (color: string) => css`
  :before {
    background-color: ${isBackDark(color)};
    border: 2px solid ${color};
  }
  :checked {
    background-color: ${color};
    :before {
      left: 100%;
      background-color: ${color};
      border: 2px solid ${isBackDark(color)};
    }
  }
`;
