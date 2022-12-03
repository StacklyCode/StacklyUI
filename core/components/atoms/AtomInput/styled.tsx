import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  InputCSS,
  InputToggleCSS,
  InputSelectCSS
} from '../../../css';
import { motion } from 'framer-motion';
import { AtomInputTypes } from './types';

export const InputTextLabelStyled = styled(motion.label)<AtomInputTypes>(
  (props) => {
    const { theme } = props;
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      ${theme?.input?.css?.(theme)}
    `;
  }
);

export const InputTextSpanStyled = styled(motion.span)<AtomInputTypes['label']>`
  padding: 0px 0px 4px 0px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.input?.properties?.label ?? '#222222'};
`;

export const InputTextStyled = styled(motion.input)<AtomInputTypes['input']>(
  (props) => {
    const { theme, astheme = 'primary' } = props;
    return css`
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 15px;
      height: 40px;
      width: 250px;
      border-radius: 4px;
      ${InputCSS(
        theme?.input?.properties?.background ?? '#ffffff',
        theme?.input?.color?.[astheme]
      )}
    `;
  }
);

export const InputErrorStyled = styled(motion.span)<AtomInputTypes['error']>`
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.input?.properties?.error ?? '#ff0000'};
  height: 30px;
  margin: 0px 0px 0px 0px;
  padding: 5px 0px 0px 0px;
`;

export const InputToggleLabelStyled = styled(motion.label)<AtomInputTypes>(
  (props) => {
    const { theme } = props;
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      ${theme?.input?.css?.(theme)}
    `;
  }
);

export const InputToggleStyled = styled(motion.input)<AtomInputTypes['input']>(
  (props) => {
    const { theme, astheme = 'primary' } = props;
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
      ${InputToggleCSS(theme?.input?.color[astheme] ?? '#db4a4a')}

      ${InputCSS(theme?.input?.color[astheme] ?? '#ffffff')}
    `;
  }
);

export const InputSelectLabelStyled = styled(motion.label)<AtomInputTypes>(
  (props) => {
    const { theme } = props;
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      ${theme?.input?.css?.(theme)}
    `;
  }
);

export const InputSelectStyled = styled(motion.select)<
  AtomInputTypes['select']
>((props) => {
  const { theme, astheme = 'primary' } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 15px;
    height: 40px;
    width: 250px;
    border-radius: 4px;
    color: ${props.theme.input?.properties?.label ?? '#222222'};
    ${InputSelectCSS(
      theme?.input?.properties?.background ?? '#ffffff',
      theme?.input?.color?.[astheme]
    )}
  `;
});

export const InputSelectOptionStyled = styled(motion.option)<
  AtomInputTypes['option']
>((props) => {
  const { theme, astheme = 'primary' } = props;
  return css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 15px;
    height: 40px;
    width: 250px;
    border-radius: 4px;
    ${InputCSS(
      theme?.input?.properties?.background ?? '#ffffff',
      theme?.input?.color?.[astheme]
    )}
  `;
});

// export const InputCheckboxLabelStyled = styled(motion.label) <AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   font-family: ${({ labelFontFamily }) =>
//     labelFontFamily || `'Inter', sans-serif`};
//   margin: ${({ labelMargin }) => labelMargin || `0px 0px 0px 0px`};
//   color: ${({ labelColor }) => labelColor || `black`};
//   width: ${({ labelWidth }) => labelWidth || `max-content`};
//   height: ${({ labelHeight }) => labelHeight || `max-content`};
//   font-size: ${({ labelFontSize }) => labelFontSize || `16px`};
//   text-align: ${({ labelTextAlign }) => labelTextAlign || `left`};
//   font-weight: ${({ labelFontWeight }) => labelFontWeight || `500`};
//   position: relative;

//   ${({ customCSS }) => customCSS};
// `;

// export const InputCheckboxStyled = styled(motion.input) <AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
//   border: solid 1px #244a77;
//   :checked {
//     accent-color: ${({ accentColor }) => accentColor || `#005cc8`};
//   }
// `;

// export const InputRadioButtonStyled = styled(motion.input) <AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
//   border: solid 1px #244a77;
// `;

// export const LabelRadioButtonStyled = styled(motion.label) <AtomInputTypes>`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

// export const InputCheckboxToggleStyled = styled(motion.input) <AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
//   border: solid 1px #244a77;
// `;

// export const FileInputStyled = styled(motion.label) <AtomInputTypes>`
//   display: flex;
//   width: ${({ width }) => width || `250px`};
//   height: ${({ height }) => height || `40px`};
//   position: relative;

//   border-radius: ${({ borderRadius }) => borderRadius || `4px`};
//   background-color: #f6f7fb;
//   font-size: ${({ fontSize }) => fontSize || `12px`};
//   font-weight: 500;
//   color: #a5a7ad;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${({ dropActive }) =>
//     dropActive &&
//     css`
//       border: 2px solid white;
//       background-color: #dadada;
//       color: white;
//     `}
//   input {
//     opacity: 0;
//     position: absolute;
//     z-index: 1;
//   }
// `;

// export const FileInputMultipleStyled = styled(motion.label) <AtomInputTypes>`
//   display: flex;
//   width: ${({ width }) => width || `250px`};
//   height: ${({ height }) => height || `250px`};
//   position: relative;

//   border-radius: ${({ borderRadius }) => borderRadius || `4px`};
//   background-color: #f6f7fb;
//   font-size: ${({ fontSize }) => fontSize || `12px`};
//   font-weight: 500;
//   color: #a5a7ad;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${({ dropActive }) =>
//     dropActive &&
//     css`
//       border: 2px solid white;
//       background-color: #dadada;
//       color: white;
//     `}
//   input {
//     opacity: 0;
//     position: absolute;
//     z-index: 1;
//   }
// `;

// export const InputSelectStyled = styled(motion.select) <AtomInputTypes>`
//   margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: ${({ height }) => height || `35px`};
//   font-size: ${({ fontSize }) => fontSize || `12px`};
//   font-weight: 500;
//   border-radius: ${({ borderRadius }) => borderRadius || `4px`};
//   border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   color: ${({ optionColor }) => optionColor || `#75758b`};
//   option {
//     margin: 5px 0px;
//     font-size: ${({ fontSize }) => fontSize || `12px`};
//     font-weight: 600;
//     color: ${({ optionColor }) => optionColor || `#75758b`};
//     border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   }
//   ${({ customCSS }) => customCSS};
// `;

// export const InputOptionStyled = styled(motion.option)``;

// export const InputRangeLabelStyled = styled(motion.label) <AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   font-family: ${({ labelFontFamily }) =>
//     labelFontFamily || `'Inter', sans-serif`};
//   margin: ${({ labelMargin }) => labelMargin || `0px 0px 0px 0px`};
//   color: ${({ labelColor }) => labelColor || `black`};
//   width: ${({ labelWidth }) => labelWidth || `100%`};
//   height: ${({ labelHeight }) => labelHeight || `max-content`};
//   font-size: ${({ labelFontSize }) => labelFontSize || `16px`};
//   text-align: ${({ labelTextAlign }) => labelTextAlign || `left`};
//   font-weight: ${({ labelFontWeight }) => labelFontWeight || `500`};
//   position: relative;

//   ${({ customCSS }) => customCSS};
// `;

// export const InputRangeStyled = styled(motion.input) <AtomInputTypes>`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   width: 100%;
//   outline: none;
//   position: absolute;
//   margin: auto;
//   top: 50%;
//   background-color: transparent;
//   pointer-events: none;

//   ::-webkit-slider-runnable-track {
//     -webkit-appearance: none;
//     height: 5px;
//   }
//   ::-moz-range-track {
//     -moz-appearance: none;
//     height: 5px;
//   }
//   ::-ms-track {
//     appearance: none;
//     height: 5px;
//   }
//   ::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     height: 15px;
//     width: 15px;
//     background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
//     border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
//     cursor: pointer;
//     margin-top: -9px;
//     pointer-events: auto;
//     border-radius: 50%;
//   }
//   ::-moz-range-thumb {
//     -webkit-appearance: none;
//     height: 15px;
//     width: 15px;
//     cursor: pointer;
//     border-radius: 50%;
//     background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
//     border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
//     pointer-events: auto;
//   }
//   ::-ms-thumb {
//     appearance: none;
//     height: 15px;
//     width: 15px;
//     cursor: pointer;
//     border-radius: 50%;
//     background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
//     border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
//     pointer-events: auto;
//   }
//   :active::-webkit-slider-thumb {
//     background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
//     border: ${({ thumbBorder }) => thumbBorder || `3px solid #3264fe`};
//   }
// `;

// type InputRangeProps = AtomInputTypes & {
//   minTrack: number;
//   maxTrack: number;
// };

// export const SliderTrackStyled = styled(motion.div) <InputRangeProps>`
//   width: 100%;
//   height: 5px;
//   position: relative;
//   margin: auto;
//   top: 0;
//   bottom: 0;
//   border-radius: 200px;
//   background: ${({ minTrack, maxTrack, trackColor, trackBackground }) => {
//     const isNegative = minTrack - maxTrack < 0;

//     return isNegative
//       ? `linear-gradient(to right, ${trackBackground || `#dadae5`
//       } ${minTrack}% , ${trackColor || `#4271ff`} ${minTrack}% , ${trackColor || `#4271ff`
//       } ${maxTrack}%, ${trackBackground || `#dadae5`} ${maxTrack}%)`
//       : `linear-gradient(to right, ${trackBackground || `#dadae5`
//       } ${maxTrack}% , ${trackColor || `#4271ff`} ${maxTrack}% , ${trackColor || `#4271ff`
//       } ${minTrack}%, ${trackBackground || `#dadae5`} ${minTrack}%)`;
//   }};
// `;

// export const InputTextBoxStyled = styled(motion.textarea) <AtomInputTypes>`
//   font-family: ${({ fontFamily }) => fontFamily || `'Inter', sans-serif`};
//   font-size: ${({ fontSize }) => fontSize || `12px`};
//   font-weight: ${({ fontWeight }) => fontWeight || `500`};
//   margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
//   padding: ${({ padding }) => padding || `0px 0px 0px 15px`};
//   color: ${({ color }) => color || `black`};
//   ::placeholder {
//     color: ${({ placeholderColor }) => placeholderColor || `#1a1a1a`};
//   }
//   background-color: ${({ backgroundColor }) => backgroundColor || `#ffffff`};
//   height: ${({ height }) => height || `200px`};
//   width: ${({ width }) => width || `100%`};
//   max-width: ${({ maxWidth }) => maxWidth || `100%`};
//   border-radius: ${({ borderRadius }) => borderRadius || `4px`};
//   border: ${({ border }) => border || `1px solid #c8d2dd`};
// `;

// export const VideoPlayerStyledContainer = styled(motion.div) <AtomInputTypes>`
//   overflow: hidden;
//   max-height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const VideoPlayerStyled = styled(motion.video) <AtomInputTypes>`
//   width: ${({ width }) => width || `100%`};
// `;
