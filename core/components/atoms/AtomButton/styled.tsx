import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SSP } from 'types';
import { backgroundColorHoverFlat, backgroundColorOutline } from 'css';
import { AtomButtonTypes } from './types';

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
  padding: 8px 30px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  min-height: 38px;
  border: 1px solid transparent;
  border-radius: 12px;
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
    ${props?.css?.(props?.theme)}
  `}
`;

const CSSAsType: SSP<AtomButtonTypes> = (props) => {
  const { astype, astheme, theme } = props;
  const MAINTYPE = astype ?? theme?.button?.type ?? 'flat';
  const MAINTHEME = astheme ?? theme?.button?.theme ?? 'primary';
  const MAINCOLOR = theme?.button?.color?.[MAINTHEME] ?? theme?.general?.color?.[MAINTHEME]  ?? '#0067ea';
  switch (MAINTYPE) {
    case 'outline':
      return backgroundColorOutline(MAINCOLOR);
    default:
      return backgroundColorHoverFlat(MAINCOLOR);
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
