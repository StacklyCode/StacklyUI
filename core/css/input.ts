import { css } from '@emotion/react';
import { ChangeBrightness, IsBackDark } from 'utils/index';

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
