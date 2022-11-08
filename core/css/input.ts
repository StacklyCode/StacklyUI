import { css } from '@emotion/react';
import changeTransparency from 'utils/changeTransparency';
import { ChangeBrightness, IsBackDark } from 'utils/index';

export const backgroundColorInput = (color: string, border?: string) => css`
  background-color: ${color};
  color: ${IsBackDark(color)};
  border: 2px solid
    ${changeTransparency(border, 20) ?? ChangeBrightness(color, -25)};
  ::placeholder {
    color: ${changeTransparency(IsBackDark(color), 30)};
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
