import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SSP } from '../../../types';
import { AtomIconTypes } from './types';

const IconStyles: SSP<AtomIconTypes> = (props) => {
  const { size, color } = props;
  return css`
    font-size: 10px;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
    ${props?.theme?.general?.css?.(props.theme, props)}
    ${props?.theme?.icon?.css?.(props.theme, props)}
    ${props?.css?.(props?.theme, props)}
    ${size &&
    css`
      font-size: ${size}px;
    `}
    ${color &&
    css`
      color: ${color};
    `}
  `;
};

export const IconStyled = styled.i<AtomIconTypes>`
  ${(props) => IconStyles(props)}
`;
