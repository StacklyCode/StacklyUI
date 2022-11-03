import { css } from '@emotion/react';

export const colorLoader = (color: string) => css`
  .lds-ring div {
    border-color: ${color} transparent transparent transparent;
  }
`;
