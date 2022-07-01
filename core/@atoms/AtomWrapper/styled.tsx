import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SSP } from 'types';
import { AtomWrapperTypes } from './types';

const AtomWrapperStyled: SSP<AtomWrapperTypes> = (props) => {
  const { theme, astheme = 'primary' } = props;
  return css`
    display: flex;
    width: 100%;
    max-width: 100%;
    border: none;
    outline: none;
    min-height: initial;
    max-height: initial;
    height: max-content;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: none;
    background-position: center;
    background-size: cover;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    flex-wrap: wrap;
    box-shadow: none;
    border-radius: 0px;
    overflow-x: auto;
    z-index: 0;
    position: static;
    cursor: default;
    mix-blend-mode: normal;
    background-color: ${theme?.wrapper?.color?.[astheme] ?? '#fafafa'};
    transition: all 0.3s ease-in-out;
    ${theme?.wrapper?.css?.(theme)}
  `;
};

export const AtomWrapperDefaultStyled = styled(motion.div)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperFormStyled = styled(motion.form)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperSectionStyled = styled(
  motion.section
)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperLiStyled = styled(motion.li)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperUlStyled = styled(motion.ul)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperMainStyled = styled(motion.main)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperFooterStyled = styled(motion.footer)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperNavStyled = styled(motion.nav)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;
