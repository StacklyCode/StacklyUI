import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomAnchorProps } from './types';

export const AnchorStyled = styled(motion.a)<AtomAnchorProps>((props) => {
  const { theme, css: cssProps, astheme = 'accent' } = props;
  return css`
    line-height: 150%;
    font-family: ${theme.text?.properties?.font ?? `'Inter', sans-serif`};
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: default;
    color: ${theme?.text?.color[astheme] ?? '#2e63ff'};
    transition: all 0.3s ease-in-out;
    ${theme?.text?.css?.(theme)}
    ${cssProps?.(theme)}
  `;
});
