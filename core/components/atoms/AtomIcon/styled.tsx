import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconCSS } from '../../../css';
import { SSP } from '../../../types';
import AtomWrapper from '../AtomWrapper';
import { AtomIconTypes } from './types';

const IconWrapperStyles: SSP<AtomIconTypes> = (props) => {
  const { astheme = 'primary', theme } = props;
  return css`
    display: flex;
    width: 34px;
    height: 34px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    ${IconCSS(theme?.icon?.color?.[astheme] ?? '#adadad')};
    svg {
      width: 100%;
      height: 100%;
    }
    div {
      overflow: hidden;
    }
    ${props?.theme?.icon?.css?.(props.theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
};

export const IconWrapperStyled = styled(AtomWrapper)<AtomIconTypes>`
  ${(props) => IconWrapperStyles(props)}
`;
