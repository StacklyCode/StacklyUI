import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SSP } from '../../../types';
import {
  ButtonFlatCSS,
  ButtonDisableCSS,
  ButtonOutlineCSS,
  WrapperBlurCSS
} from '../../../css';
import { AtomButtonTypes } from './types';
import changeTransparency from '../../../utils/changeTransparency';

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>(
  (props) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    padding: 8px 30px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    min-height: 32px;
    border: 1px solid transparent;
    border-radius: 4px;
    line-height: 150%;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    * {
      cursor: pointer;
    }

    ${CSSAsType(props)}
    ${IsDisabled(props)}
    ${props?.theme?.button?.css?.(props.theme)}
    ${props?.css?.(props?.theme)}
  `
);

const CSSAsType: SSP<AtomButtonTypes> = (props) => {
  const { astype, astheme, theme } = props;
  const MAINTYPE = astype ?? theme?.button?.type ?? 'flat';
  const MAINTHEME = astheme ?? theme?.button?.theme ?? 'primary';
  const MAINCOLOR =
    theme?.button?.color?.[MAINTHEME] ??
    theme?.general?.color?.[MAINTHEME] ??
    '#0067ea';
  switch (MAINTYPE) {
    case 'outline':
      return css`
        ${ButtonOutlineCSS(MAINCOLOR)}
        ${WrapperBlurCSS(changeTransparency(MAINCOLOR, 10))}
      `;
    default:
      return ButtonFlatCSS(MAINCOLOR);
  }
};

const IsDisabled: SSP<AtomButtonTypes> = (props) => {
  const { disabled } = props;
  return disabled && ButtonDisableCSS('#e6e6e6');
};
