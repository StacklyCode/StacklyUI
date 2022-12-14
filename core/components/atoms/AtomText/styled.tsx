import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomTextTypes } from './types';

type AtomTextTypesTheme = AtomTextTypes & {
  theme: Theme;
};

const TextStyle = (props: AtomTextTypesTheme) => {
  const { theme } = props;
  return css`
    line-height: 150%;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: default;
    color: #adadad;
    transition: all 0.3s ease-in-out;
    ${theme?.general?.css?.(theme, props)}
    ${theme?.text?.css?.(theme, props)}
    ${props?.css?.(theme, props)}
  `;
};

export const TextStyledDefault = styled(motion.span)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledA = styled(motion.a)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledP = styled(motion.p)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;

export const TextStyledB = styled(motion.b)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;

export const TextStyledH1 = styled(motion.h1)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH2 = styled(motion.h2)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH3 = styled(motion.h3)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH4 = styled(motion.h4)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH5 = styled(motion.h5)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH6 = styled(motion.h6)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
