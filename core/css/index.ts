import { css } from '@emotion/react';
import { ChangeBrightness, IsBackDark } from 'utils';

export const backgroundColorFlat = (color: string) => css`
  background-color: ${color};
`;

export const backgroundColorHoverFlat = (color: string) => css`
  background-color: ${color};
  color: ${IsBackDark(color)} !important;
  * {
    color: ${IsBackDark(color)} !important;
  }
  .lds-ring div {
    border: 2px solid ${IsBackDark(color)};
    border-color: ${IsBackDark(color)} transparent transparent transparent !important;
  }
  :hover {
    background-color: ${ChangeBrightness(color, -20)};
  }
  :active {
    background-color: ${ChangeBrightness(color, 20)};
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
    border: 2px solid ${color};
    border-color: ${color} transparent transparent transparent !important;
  }
  :hover {
    div .lds-ring div {
      border-color: ${IsBackDark(color)} transparent transparent transparent;
    }
    background-color: ${color};
    color: ${IsBackDark(color)} !important;
    * {
      color: ${IsBackDark(color)} !important;
    }
  }
  :active {
    border: 1px solid ${ChangeBrightness(color, 20)};
    background-color: ${ChangeBrightness(color, 20)};
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
  color: ${IsBackDark(color)};
  border: 2px solid ${ChangeBrightness(color, -20)};
  ::placeholder {
    color: ${ChangeBrightness(IsBackDark(color), 40)};
  }
`;

export const backgroundColorInputToggle = (color: string) => css`
  :before {
    background-color: ${IsBackDark(color)};
    border: 2px solid ${color};
  }
  :checked {
    background-color: ${color};
    :before {
      left: 100%;
      background-color: ${color};
      border: 2px solid ${IsBackDark(color)};
    }
  }
`;
