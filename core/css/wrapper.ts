import { css } from '@emotion/react';

export const wrapperBlur = (color: string, blur?: number) => {
  return css`
    background-color: ${color ?? 'rgba(0, 0, 0, 0.192)'};
    backdrop-filter: saturate(180%) blur(${blur ?? 14}px);
  `;
};
