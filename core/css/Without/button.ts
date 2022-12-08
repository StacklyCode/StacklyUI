import { css } from '@emotion/react';
import { AtomButtonTypes, CSSType } from 'types';
import isBackDark from 'utils/isBackDark';

export const ButtonLoadingCSS = (color: string) => css`
  div {
    svg {
      * {
        stroke: ${color ?? '#000'} !important;
      }
    }
  }
`;

export const ButtonTypeCSS: CSSType<AtomButtonTypes> = (theme, props) => {
  const { astype } = props ?? {};
  const MAINTYPE = astype ?? 'flat';

  switch (MAINTYPE) {
    case 'outline':
      return css`
        border: 1px solid #adadad;
        color: #adadad;
        background-color: transparent;
        ${ButtonLoadingCSS('#adadad')}
      `;
    default:
      return css`
        background-color: #adadad;
        border: 1px solid #adadad;
        color: ${isBackDark('#adadad')};
        ${ButtonLoadingCSS(isBackDark('#adadad'))}
        * {
          color: ${isBackDark('#adadad')};
        }
      `;
  }
};
