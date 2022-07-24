import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomImageTypes } from './types';

export const AtomImageStyled = styled(motion.img)<AtomImageTypes>`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #f6f7f8;
  object-fit: cover;
  ${(props) => props.customCSS}
`;
