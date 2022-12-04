import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomButtonTypes } from './types';

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

    ${props?.theme?.button?.css?.(props.theme, props)}
    ${props?.css?.(props?.theme, props)}
  `
);
