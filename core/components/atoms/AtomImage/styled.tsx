import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomImageTypes } from './types';

export const AtomImageStyled = styled(motion.img)<AtomImageTypes>((props) => {
  return css`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: transparent;
    object-fit: cover;

    ${props?.theme?.image?.css?.(props.theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});
