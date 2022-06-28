import { FC } from 'react';
import InputTextError from './error';
import { InputCheckboxStyled, InputTextLabelStyled } from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputCheckbox: FC<AtomInputTypes> = (props) => {
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
    checked,
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
      spanMargin={spanMargin}
      customCSS={customCSS}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          width: '100%',
          alignItems: 'center',
        }}
      >
        {label && <span>{label}</span>}
        <InputCheckboxStyled
          type="checkbox"
          {...Animation}
          id={label}
          name={id}
          disabled={props.disabled}
          value={formik && id ? formik?.values[id] : value}
          onChange={(e) => {
            formik?.handleChange(e);
            onChange?.(e);
          }}
          onBlur={(e) => {
            formik?.handleBlur(e);
            onBlur?.(e);
          }}
          checked={
            formik && id
              ? formik?.values[id] === true
              : checked || value === `on`
          }
          accentColor={props.accentColor}
        />
        {children}
        {label}
      </div>

      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputCheckbox;
