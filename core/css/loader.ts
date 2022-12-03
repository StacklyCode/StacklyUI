import { css } from '@emotion/react';

export const LoaderCSS = (color: string) => css`
  .lds-ring div {
    border-color: ${color} transparent transparent transparent;
  }
`;
