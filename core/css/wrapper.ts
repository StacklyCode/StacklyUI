import { css } from '@emotion/react';

export const wrapperBlur = (color: string) => {
  return css`
    background-color: ${color ?? 'rgba(0, 0, 0, 0.192)'};
    backdrop-filter: saturate(180%) blur(14px);
  `;
};
