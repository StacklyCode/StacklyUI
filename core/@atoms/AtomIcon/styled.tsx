import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colorIcon } from 'css';
import { motion } from 'framer-motion';
import { SSP } from 'types';
import { AtomIconTypes } from './types';

const IconWrapperStyles: SSP<AtomIconTypes> = (props) => {
  const { astheme = 'primary', theme } = props;
  return css`
    display: flex;
    width: 34px;
    height: 34px;
    transition: all 0.3s ease-in-out;
    ${colorIcon(theme?.icon?.color?.[astheme] ?? '#000000')};
    svg {
      width: 100%;
      height: 100%;
    }
    div {
      overflow: hidden;
    }
    ${theme?.icon?.css?.(theme)}
  `;
};

export const IconWrapperStyled = styled(motion.div)<AtomIconTypes>`
  ${(props) => IconWrapperStyles(props)}
`;
