import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SSP } from 'types';
import { backgroundColorHoverFlat, backgroundColorOutline } from 'css';
import { AtomButtonTypes } from './types';

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  padding: 8px 30px;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  min-height: 40px;
  border: 1px solid transparent;
  border-radius: 4px;
  line-height: 150%;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  * {
    cursor: pointer;
  }

  ${(props) => css`
    ${CSSAsType(props)}
    ${IsDisabled(props)}
    ${props?.theme?.button?.css?.(props.theme)}
  `}
`;

const CSSAsType: SSP<AtomButtonTypes> = (props) => {
  const { astype, astheme, theme } = props;
  const MAINTYPE = astype ?? theme?.button?.type ?? 'flat';
  const MAINTHEME = astheme ?? theme?.button?.theme ?? 'primary';
  switch (MAINTYPE) {
    case 'outline':
      return backgroundColorOutline(
        theme?.button?.color?.[MAINTHEME] ?? '#fe6a6a'
      );
    default:
      return backgroundColorHoverFlat(
        theme?.button?.color?.[MAINTHEME] ?? '#fe6a6a'
      );
  }
};

const IsDisabled: SSP<AtomButtonTypes> = (props) => {
  const { disabled } = props;
  return css`
    ${disabled &&
    css`
      background-color: #e6e6e6 !important;
      color: #7e7e7e !important;
      cursor: not-allowed !important;
    `}
  `;
};
