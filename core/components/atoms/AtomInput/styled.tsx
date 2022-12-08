import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomInputTypes } from './types';

export const InputLabelStyled = styled(motion.label)<AtomInputTypes['label']>(
  (props) => {
    const { theme } = props;
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0px;
      ${theme?.input?.label?.css?.(theme, props)}
      ${props?.css?.(theme, props)}
    `;
  }
);

export const InputSpanStyled = styled(motion.span)<AtomInputTypes['label']>(
  (props) => {
    const { theme } = props;
    return css`
      padding: 0px 0px 10px 0px;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #adadad;
      ${theme?.input?.span?.css?.(theme, props)}
      ${props?.css?.(props?.theme, props)}
    `;
  }
);

export const InputErrorStyled = styled(motion.span)<AtomInputTypes['error']>(
  (props) => {
    const { theme } = props;
    return css`
      font-family: Montserrat, sans-serif;
      font-size: 10px;
      font-weight: 700;
      color: #ff0000;
      height: 30px;
      margin: 0px 0px 0px 0px;
      padding: 5px 0px 0px 0px;
      ${theme?.input?.error?.css?.(theme, props)}
      ${props?.css?.(props?.theme, props)}
    `;
  }
);

export const InputStyled = styled(motion.input)<AtomInputTypes['input']>(
  (props) => {
    const { theme } = props;
    return css`
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 15px;
      height: 40px;
      width: 250px;
      border-radius: 4px;
      border: 1px solid #acacac;
      ::placeholder {
        color: #d7d7d7;
      }
      ${theme?.input?.input?.css?.(theme, props)}
      ${props?.css?.(props?.theme, props)}
    `;
  }
);

export const InputToggleStyled = styled(motion.input)<AtomInputTypes['input']>(
  (props) => {
    const { theme } = props;
    return css`
      margin: 0px;
      position: relative;
      width: 35px;
      height: 14px;
      appearance: none;
      background: #fff;
      outline: none;
      border-radius: 20px;
      border: none;
      transition: all 0.5s;
      cursor: pointer;

      :before {
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
      }
      ${theme?.input?.input?.css?.(theme, props)}
      ${props?.css?.(props?.theme, props)}
    `;
  }
);

export const InputSelectStyled = styled(motion.select)<
  AtomInputTypes['select']
>((props) => {
  const { theme } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 15px;
    height: 40px;
    width: 250px;
    border-radius: 4px;
    color: #acacac;
    border: 1px solid #acacac;
    ${theme?.input?.select?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});

export const InputSelectOptionStyled = styled(motion.option)<
  AtomInputTypes['option']
>((props) => {
  const { theme } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 15px;
    height: 40px;
    width: 250px;
    border-radius: 4px;
    ${theme?.input?.option?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});
