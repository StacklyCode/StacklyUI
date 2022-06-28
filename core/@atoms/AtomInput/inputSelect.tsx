import { FC } from 'react';
import lodash from 'lodash';
import InputTextError from './error';
import {
  InputOptionStyled,
  InputSelectStyled,
  InputTextLabelStyled,
  InputTextSpanStyled,
} from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};
const DefaultAnimation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
  transition: {
    default: { duration: 0.3 },
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const InputSelect: FC<AtomInputTypes> = (props) => {
  const { value, onChange, onBlur, formik, id, children } = props;
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
    label,
    options,
    defaultText,
  } = props;
  return (
    <InputTextLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      customCSS={customCSS}
    >
      {label && (
        <InputTextSpanStyled spanMargin={spanMargin}>
          {label}
        </InputTextSpanStyled>
      )}
      <InputSelectStyled
        value={
          formik && id
            ? lodash.get(formik?.values, id)
            : formik && id && lodash.get(formik?.values, id) === ''
            ? 'DEFAULT'
            : value
        }
        onChange={formik ? formik?.handleChange : onChange}
        onBlur={(e) => {
          formik?.handleBlur(e);
          onBlur?.(e);
        }}
        {...props}
        {...Animation}
      >
        <InputOptionStyled {...DefaultAnimation} value="DEFAULT" disabled>
          {defaultText ?? 'Selecciona una opción'}
        </InputOptionStyled>
        {options &&
          options.length > 0 &&
          options?.map((e) => (
            <InputOptionStyled {...DefaultAnimation} value={e.value} key={e.id}>
              {e.label}
            </InputOptionStyled>
          ))}
      </InputSelectStyled>

      {children}
      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputSelect;
