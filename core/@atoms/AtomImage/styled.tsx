import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AtomImageStyled = styled(motion.div) <AtomWrapperTypes>`
  width: 100px;
  height: 100px;
  position: relative;
  transition: all 0.3s ease-in-out;
  img {
    object-fit: cover;
    object-position: center center;
  }
`;
