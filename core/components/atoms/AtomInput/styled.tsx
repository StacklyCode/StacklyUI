import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomInputTypes } from './types';
import { AtomWrapperTypes } from '../AtomWrapper/types';

export const InputLabelStyled = styled(motion.label)<AtomInputTypes['label']>(
  (props) => {
    const { theme } = props;
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0px;
      user-select: none;
      width: 250px;
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
    border-radius: 4px;
    border: 1px solid #acacac;
    width: 300px;
    height: 220px;
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

type InputSelectWrapperTypes = AtomWrapperTypes & {
  open: boolean;
};

export const InputSelectWrapperStyled = styled(
  motion.div
)<InputSelectWrapperTypes>(() => {
  return css`
    width: 100%;
    flex: 1;
    flex-direction: column;
    position: relative;
  `;
});

type SelectType = AtomInputTypes['select'] & {
  searching: boolean;
};

export const InputSelectStyled = styled(motion.input)<SelectType>((props) => {
  const { theme, search, searching } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px ${search ? '44px' : '15px'};
    height: 40px;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #acacac;
    ::placeholder {
      color: #d7d7d7;
    }
    ${theme?.input?.input?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
    ${searching &&
    css`
      color: transparent !important;
      ::placeholder {
        color: transparent !important;
      }
    `}
  `;
});

export const InputSelectSearchStyled = styled(motion.input)<SelectType>(
  (props) => {
    const { theme, searching } = props;
    return css`
      display: ${searching ? 'flex' : 'none'};
      position: absolute;
      top: 0;
      left: 0;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 44px;
      height: 40px;
      width: 250px;
      border-radius: 4px;
      border: 1px solid #acacac;
      ::placeholder {
        color: #d7d7d7;
      }
      ${theme?.input?.input?.css?.(theme, props)}
      background: transparent;
      backdrop-filter: blur(0px);
      ${props?.css?.(props?.theme, props)}
    `;
  }
);

type InputSelectOptionTypes = AtomInputTypes['option'] & {
  selected: boolean;
};
export const InputSelectOptionStyled = styled(
  motion.button
)<InputSelectOptionTypes>((props) => {
  const { theme, selected } = props;
  return css`
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    background-color: rgba(255, 255, 255, 0.034);
    border: 1px solid #0000001a;
    color: #ffffff;
    cursor: pointer;
    :hover {
      background-color: #ffffff1a;
      border-radius: 4px;
      border: 1px solid #0000001a;
      box-shadow: none;
    }
    transition: all 0.5s;
    ${selected &&
    css`
      background-color: ${theme?.input?.option?.color?.primary ??
      '#4285f4'} !important;
    `}
    ${props?.css?.(props?.theme, props)}
  `;
});

type InputSelectOptionWrapperTypes = AtomWrapperTypes & {
  floating: boolean;
};

export const InputSelectOptionWrapperStyled = styled(
  motion.div
)<InputSelectOptionWrapperTypes>((props) => {
  const { theme, floating = true } = props;
  return css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 200px;
    min-height: 40px;
    overflow-y: scroll;
    margin-top: 8px;
    border-radius: 4px;
    padding: 8px;
    gap: 8px;
    ${floating &&
    css`
      position: absolute;
      top: 100%;
    `}
    ${theme?.input?.input?.css?.(theme, props)}
    ${props?.css?.(props?.theme, props)}
  `;
});
