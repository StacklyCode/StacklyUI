import { css } from '@emotion/react';

export const colorIcon = (color: string) => css`
  svg {
    path {
      fill: ${color} !important;
      stroke: ${color} !important;
    }
    * {
      path {
        fill: ${color} !important;
        stroke: ${color} !important;
      }
    }
  }
`;