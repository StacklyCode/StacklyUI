import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonLoadingCSS } from 'css';
import { GC, VB, VK } from 'css/Stackly/general';
import { motion } from 'framer-motion';
import changeBrightness from 'utils/changeBrightness';
import isBackDark from 'utils/isBackDark';

import { AtomButtonTypes } from './types';

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>((props) =>
  GC({
    theme: [props?.theme, props?.astheme],
    defs: {
      color: '#adadad'
    },
    css: (color) =>
      VB(props?.disabled, {
        css: () => css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          height: max-content;
          padding: 8px 30px;
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          border-radius: 4px;
          line-height: 150%;
          transition: all 0.3s ease;
          ${props?.theme?.general?.css?.(props.theme, props)}
          ${props?.theme?.button?.css?.(props.theme, props)}
          ${props?.css?.(props?.theme, props)}
        `,
        variants: {
          true: () => css`
            background-color: ${color};
            border: 1px solid ${color};
            color: ${changeBrightness(color, -100)};
            cursor: not-allowed;
            opacity: 0.3;
            * {
              cursor: not-allowed;
            }
          `,
          false: () =>
            VK(props?.astype, {
              css: () => css`
                cursor: pointer;
                * {
                  cursor: pointer;
                }
              `,
              defs: {
                key: 'flat'
              },
              variants: {
                gradient: () => css`
                  background-image: linear-gradient(
                    90deg,
                    ${changeBrightness(color, -100)} 0%,
                    ${changeBrightness(color, 100)} 100%
                  );
                  border: 1px solid ${color};
                  color: ${isBackDark(color)};
                `,
                flat: () => css`
                  background-color: ${color};
                  border: 1px solid ${color};
                  color: ${isBackDark(color)};
                  ${ButtonLoadingCSS(isBackDark(color))}
                `,
                outline: () => css`
                  background-color: transparent;
                  border: 1px solid ${color};
                  color: ${color};
                  ${ButtonLoadingCSS(color)}
                `
              }
            })
        }
      })
  })
);
