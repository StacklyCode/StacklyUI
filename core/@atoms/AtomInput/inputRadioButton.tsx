import { FC, useEffect } from 'react';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import { AtomInputTypes } from './types';
import InputTextError from './error';
import {
  InputRadioButtonStyled,
  InputTextLabelStyled,
  LabelRadioButtonStyled,
} from './style';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputRadioButton: FC<AtomInputTypes> = (props) => {
  const { value, onChange, onBlur, formik, id, options } = props;
  const {
    labelWidth,
    labelColor,
    labelFontFamily,
    labelFontSize,
    labelFontWeight,
    labelMargin,
    labelPadding,
    spanMargin,
    customCSS,
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [formik?.values[id]]);
  return (
    <InputTextLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      spanMargin={spanMargin}
      customCSS={customCSS}
      id={id}
      htmlFor={id}
      defaultValue={
        formik && id && formik?.values[id] ? formik?.values[id] : value
      }
      onChange={formik ? formik?.handleChange : onChange}
      onBlur={(e) => {
        formik?.handleBlur(e);
        onBlur?.(e);
      }}
    >
      {options &&
        options.map((option) => (
          <AtomWrapper flexDirection="row" alignItems="center" key={option.id}>
            <LabelRadioButtonStyled htmlFor={option.id}>
              <InputRadioButtonStyled
                id={option.id}
                type="radio"
                {...Animation}
                name={id}
                disabled={props.disabled}
                value={`${option.value}`}
                defaultChecked={
                  (formik && id && formik?.values[id]
                    ? formik?.values[id]
                    : value) === option.value
                }
              />
              <AtomText>{option.label}</AtomText>
            </LabelRadioButtonStyled>
          </AtomWrapper>
        ))}
      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputRadioButton;
