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
      user-select: none;
      * {
        user-select: none;
      }
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

export const InputSpanToggleStyled = styled(motion.span)<
  AtomInputTypes['label']
>((props) => {
  const { theme } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #adadad;
    ${theme?.input?.span?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});

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

export const InputDragAndDropInputStyled = styled(motion.input)<
  AtomInputTypes['input']
>(() => {
  return css`
    display: none;
  `;
});

export const InputDragAndDropStyled = styled(motion.div)<
  AtomInputTypes['input']
>((props) => {
  const { theme, drag } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    height: 40px;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #acacac;
    min-width: 300px;
    height: 300px;
    overflow: hidden;
    ${drag &&
    css`
      border: 1px dashed #acacac;
      background-color: #f5f5f524;
    `}
    transition: all 0.5s;
    ${theme?.input?.input?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});

export const InputToggleWrapperStyled = styled(motion.div)<
  AtomInputTypes['input']
>((props) => {
  return css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: max-content;
    gap: 20px;
    ${props?.css?.(props?.theme, props)}
  `;
});

export const InputToggleStyled = styled(motion.input)<AtomInputTypes['input']>(
  (props) => {
    const { theme } = props;
    return css`
      margin: 0px;
      position: relative;
      width: 28px;
      height: 12px;
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
        background-color: #ffffff7b;
        filter: backdrop-filter(10px);
        border: 1px solid #3a3a3a;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
      }
      :checked[type='checkbox'] {
        :before {
          left: 100%;
          background-color: #ffffffa2;
          transform: translate(-50%, -50%);
        }
      }

      ${theme?.input?.input?.css?.(theme, props)}
      ${props?.css?.(props?.theme, props)}
    `;
  }
);
export const InputCheckboxStyled = styled(motion.input)<
  AtomInputTypes['input']
>((props) => {
  const { theme } = props;
  return css`
    margin: 0px;
    position: relative;
    width: 12px;
    height: 12px;
    appearance: none;
    background: #fff;
    outline: none;
    border-radius: 4px;
    border: none;
    transition: all 0.5s;
    cursor: pointer;

    :before {
      content: '';
      position: absolute;
      background-color: #ffffff7b;
      filter: backdrop-filter(10px);
      border: 1px solid #3a3a3a;
      height: 12px;
      width: 12px;
      border-radius: 4px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
    }
    :checked[type='checkbox'] {
      :before {
        background-color: #ffffffa2;
        border-radius: 2px;
        height: 8px;
        width: 8px;
      }
    }

    ${theme?.input?.input?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});

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
