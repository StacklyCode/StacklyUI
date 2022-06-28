import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { motion } from 'framer-motion';
import { AtomInputTypes } from './types';

// export const GlobalContainerStyled = styled.label<AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   width: ${({ width }) => width || `max-content`};
// `;

// export const InputLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   height: max-content;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
// `;

// export const ContainerRadioStyled = styled.div<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   height: max-content;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   fieldset {
//     margin-top: 10px;
//     border: none;
//     display: flex;
//     width: 100%;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     label {
//       width: max-content;
//     }
//   }
// `;

// export const DragDropStyled = styled.div<AtomInputTypes>`
//   border-radius: 10px;
//   background-color: #f6f7fb;
//   margin: 5px 0px 20px 0px;
//   height: ${({ height }) => height || `150px`};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #a5a7ad;
// `;

// export const RadioLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: max-content;
//   width: ${({ width }) => width || `250px`};
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
// `;

// export const RadioInputStyled = styled.input<AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
// `;

// export const CheckboxLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: ${({ margin }) => margin || `10px 0px 0px 30px`};
//   display: flex;
//   align-items: center;
//   width: ${({ width }) => width || `max-content`};
//   justify-content: center;
//   height: max-content;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   button {
//     margin-left: 5px;
//     border: none;
//     background-color: transparent;
//     color: #2b6ab5;
//     font-size: 14px;
//     font-weight: 600;
//     text-decoration: underline;
//   }
// `;
// export const SelectLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   align-items: flex-start;
//   justify-content: center;
//   height: max-content;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   margin: ${({ marginLabel }) => marginLabel || `0px 0px`};
// `;
// export const SelectInputStyled = styled.select<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: ${({ margin }) => margin || `10px 0px 20px 0px`};
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: ${({ height }) => height || `35px`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   border-radius: ${({ borderRadius }) => borderRadius || `10px`};
//   border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   color: ${({ optionColor }) => optionColor || `#244a77`};
//   option {
//     margin: 5px 0px;
//     font-size: ${({ fontsize }) => fontsize || `12px`};
//     font-weight: 600;
//     color: ${({ optionColor }) => optionColor || `#75758b`};
//     border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   }
//   ${({ disabled }) =>
//     disabled &&
//     css`
//       background-color: #fafafa;
//     `}
// `;

// export const CheckboxInputStyled = styled.input<AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
//   border: solid 1px #244a77;
// `;

// export const SelectBigLabelStyled = styled.label<AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   align-items: flex-start;
//   justify-content: center;
//   height: max-content;
//   font-weight: 600;
//   position: relative;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
// `;

// export const TextAreaInputStyled = styled.textarea<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: ${({ height }) => height || `150px`};
//   border-radius: 10px;
//   border: 2px solid #c8d2dd;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   border-radius: ${({ borderRadius }) => borderRadius || `10px`};
//   border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   font-weight: 500;
//   padding-top: 10px;
//   color: #0f1e2f;
//   font-family: "Montserrat", sans-serif;
//   font-weight: bold;
//   resize: none;
// `;

// export const SelectBigInputStyled = styled.select<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: 30px;
//   border-radius: 10px;
//   border: 2px solid #c8d2dd;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   color: #244a77;
//   div {
//     background-color: red;
//     display: flex;
//     height: 400px;
//     position: absolute;
//   }
//   option {
//     margin: 5px 0px;
//     font-size: ${({ fontsize }) => fontsize || `12px`};
//     font-weight: 600;
//     color: #75758b;
//     border: 2px solid #c8d2dd;
//   }
// `;

// export const FileInputStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   position: relative;
//   height: ${({ height }) => height || `170px`};
//   border-radius: 10px;
//   background-color: #f6f7fb;
//   border-radius: 4px;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   color: #a5a7ad;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${({ dropActive }) =>
//     dropActive &&
//     css`
//       border: 2px solid #c8d2dd;
//       background-color: #193452;
//       color: white;
//     `}
//   span {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img {
//       width: 20px;
//       margin-right: 10px;
//     }
//   }
//   input {
//     opacity: 0;
//     position: absolute;
//     z-index: -1;
//   }
//   .preview {
//     border-radius: 4px;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
/// ///////////////////////////////////////////////////////////////////////////////////////////

export const InputTextLabelStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  flex-direction: column;
  font-family: ${({ labelFontFamily }) =>
    labelFontFamily || `'Montserrat', sans-serif`};
  margin: ${({ labelMargin }) => labelMargin || `0px 0px 0px 0px`};
  color: ${({ labelColor }) => labelColor || `black`};
  width: ${({ labelWidth }) => labelWidth || `max-content`};
  height: ${({ labelHeight }) => labelHeight || `max-content`};
  font-size: ${({ labelFontSize }) => labelFontSize || `16px`};
  text-align: ${({ labelTextAlign }) => labelTextAlign || `left`};
  font-weight: ${({ labelFontWeight }) => labelFontWeight || `500`};
  position: relative;

  ${({ customCSS }) => customCSS};
`;

export const InputCheckboxLabelStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  flex-direction: column;
  font-family: ${({ labelFontFamily }) =>
    labelFontFamily || `'Montserrat', sans-serif`};
  margin: ${({ labelMargin }) => labelMargin || `0px 0px 0px 0px`};
  color: ${({ labelColor }) => labelColor || `black`};
  width: ${({ labelWidth }) => labelWidth || `max-content`};
  height: ${({ labelHeight }) => labelHeight || `max-content`};
  font-size: ${({ labelFontSize }) => labelFontSize || `16px`};
  text-align: ${({ labelTextAlign }) => labelTextAlign || `left`};
  font-weight: ${({ labelFontWeight }) => labelFontWeight || `500`};
  position: relative;

  ${({ customCSS }) => customCSS};
`;

export const InputTextSpanStyled = styled.span<AtomInputTypes>`
  margin: ${({ spanMargin }) => spanMargin || `10px 0px 0px 0px`};
`;

export const InputTextStyled = styled(motion.input)<AtomInputTypes>`
  font-family: ${({ fontFamily }) => fontFamily || `'Montserrat', sans-serif`};
  font-size: ${({ fontSize }) => fontSize || `12px`};
  font-weight: ${({ fontWeight }) => fontWeight || `600`};
  margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
  padding: ${({ padding }) => padding || `0px 0px 0px 15px`};
  color: ${({ color }) => color || `#1a1a1a`};
  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || `#202124`};
  }
  background-color: ${({ backgroundColor }) => backgroundColor || `#ffffff`};
  height: ${({ height }) => height || `35px`};
  width: ${({ width }) => width || `100%`};
  max-width: ${({ maxWidth }) => maxWidth || `100%`};
  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  border: ${({ border }) => border || `1px solid #f2f2f2`};
`;

export const InputCheckboxStyled = styled(motion.input)<AtomInputTypes>`
  margin-right: 10px;
  display: flex;
  border: solid 1px #244a77;
  :checked {
    accent-color: ${({ accentColor }) => accentColor || `#005cc8`};
  }
`;

export const InputRadioButtonStyled = styled(motion.input)<AtomInputTypes>`
  margin-right: 10px;
  display: flex;
  border: solid 1px #244a77;
`;

export const LabelRadioButtonStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InputCheckboxToggleStyled = styled(motion.input)<AtomInputTypes>`
  margin-right: 10px;
  display: flex;
  border: solid 1px #244a77;
`;

export const InputErrorStyled = styled.span<AtomInputTypes>`
  font-family: ${({ errorFontFamily }) =>
    errorFontFamily || `'Montserrat', sans-serif`};
  font-size: ${({ errorFontSize }) => errorFontSize || `10px`};
  font-weight: ${({ errorFontWeight }) => errorFontWeight || `700`};
  color: ${({ errorColor }) => errorColor || `#ff295f`};
  height: ${({ errorHeight }) => errorHeight || `20px`};
  margin: ${({ errorMargin }) => errorMargin || `0px 0px 0px 0px`};
  padding: ${({ errorPadding }) => errorPadding || `5px 0px 0px 0px`};
`;

export const FileInputStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  width: ${({ width }) => width || `250px`};
  height: ${({ height }) => height || `40px`};
  position: relative;

  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  background-color: #f6f7fb;
  font-size: ${({ fontSize }) => fontSize || `12px`};
  font-weight: 500;
  color: #a5a7ad;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ dropActive }) =>
    dropActive &&
    css`
      border: 2px solid white;
      background-color: #dadada;
      color: white;
    `}
  input {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
`;

export const FileInputMultipleStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  width: ${({ width }) => width || `250px`};
  height: ${({ height }) => height || `250px`};
  position: relative;

  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  background-color: #f6f7fb;
  font-size: ${({ fontSize }) => fontSize || `12px`};
  font-weight: 500;
  color: #a5a7ad;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ dropActive }) =>
    dropActive &&
    css`
      border: 2px solid white;
      background-color: #dadada;
      color: white;
    `}
  input {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
`;

export const InputSelectStyled = styled(motion.select)<AtomInputTypes>`
  margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
  padding: 0px 10px;
  display: flex;
  width: 100%;
  height: ${({ height }) => height || `35px`};
  font-size: ${({ fontSize }) => fontSize || `12px`};
  font-weight: 500;
  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  border: ${({ border }) => border || `2px solid #c8d2dd;`};
  color: ${({ optionColor }) => optionColor || `#75758b`};
  option {
    margin: 5px 0px;
    font-size: ${({ fontSize }) => fontSize || `12px`};
    font-weight: 600;
    color: ${({ optionColor }) => optionColor || `#75758b`};
    border: ${({ border }) => border || `2px solid #c8d2dd;`};
  }
  ${({ customCSS }) => customCSS};
`;

export const InputOptionStyled = styled(motion.option)``;

export const InputRangeLabelStyled = styled(motion.label)<AtomInputTypes>`
  display: flex;
  flex-direction: column;
  font-family: ${({ labelFontFamily }) =>
    labelFontFamily || `'Montserrat', sans-serif`};
  margin: ${({ labelMargin }) => labelMargin || `0px 0px 0px 0px`};
  color: ${({ labelColor }) => labelColor || `black`};
  width: ${({ labelWidth }) => labelWidth || `100%`};
  height: ${({ labelHeight }) => labelHeight || `max-content`};
  font-size: ${({ labelFontSize }) => labelFontSize || `16px`};
  text-align: ${({ labelTextAlign }) => labelTextAlign || `left`};
  font-weight: ${({ labelFontWeight }) => labelFontWeight || `500`};
  position: relative;

  ${({ customCSS }) => customCSS};
`;

export const InputRangeStyled = styled(motion.input)<AtomInputTypes>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 50%;
  background-color: transparent;
  pointer-events: none;

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
  }
  ::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
  }
  ::-ms-track {
    appearance: none;
    height: 5px;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
    border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
    cursor: pointer;
    margin-top: -9px;
    pointer-events: auto;
    border-radius: 50%;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
    border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
    pointer-events: auto;
  }
  ::-ms-thumb {
    appearance: none;
    height: 15px;
    width: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
    border: ${({ thumbBorder }) => thumbBorder || `2px solid #3264fe`};
    pointer-events: auto;
  }
  :active::-webkit-slider-thumb {
    background-color: ${({ thumbColor }) => thumbColor || `#ffffff`};
    border: ${({ thumbBorder }) => thumbBorder || `3px solid #3264fe`};
  }
`;

type InputRangeProps = AtomInputTypes & {
  minTrack: number;
  maxTrack: number;
};

export const SliderTrackStyled = styled(motion.div)<InputRangeProps>`
  width: 100%;
  height: 5px;
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 200px;
  background: ${({ minTrack, maxTrack, trackColor, trackBackground }) => {
    const isNegative = minTrack - maxTrack < 0;

    return isNegative
      ? `linear-gradient(to right, ${
          trackBackground || `#dadae5`
        } ${minTrack}% , ${trackColor || `#4271ff`} ${minTrack}% , ${
          trackColor || `#4271ff`
        } ${maxTrack}%, ${trackBackground || `#dadae5`} ${maxTrack}%)`
      : `linear-gradient(to right, ${
          trackBackground || `#dadae5`
        } ${maxTrack}% , ${trackColor || `#4271ff`} ${maxTrack}% , ${
          trackColor || `#4271ff`
        } ${minTrack}%, ${trackBackground || `#dadae5`} ${minTrack}%)`;
  }};
`;

export const InputTextBoxStyled = styled(motion.textarea)<AtomInputTypes>`
  font-family: ${({ fontFamily }) => fontFamily || `'Montserrat', sans-serif`};
  font-size: ${({ fontSize }) => fontSize || `12px`};
  font-weight: ${({ fontWeight }) => fontWeight || `500`};
  margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
  padding: ${({ padding }) => padding || `0px 0px 0px 15px`};
  color: ${({ color }) => color || `black`};
  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || `#1a1a1a`};
  }
  background-color: ${({ backgroundColor }) => backgroundColor || `#ffffff`};
  height: ${({ height }) => height || `200px`};
  width: ${({ width }) => width || `100%`};
  max-width: ${({ maxWidth }) => maxWidth || `100%`};
  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  border: ${({ border }) => border || `1px solid #c8d2dd`};
`;

export const VideoPlayerStyledContainer = styled(motion.div)<AtomInputTypes>`
  overflow: hidden;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VideoPlayerStyled = styled(motion.video)<AtomInputTypes>`
  width: ${({ width }) => width || `100%`};
`;
