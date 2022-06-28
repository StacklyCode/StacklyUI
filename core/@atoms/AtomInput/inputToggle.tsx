import { css } from '@emotion/react';
import { FC } from 'react';
import InputTextError from './error';
import { InputCheckboxLabelStyled, InputCheckboxToggleStyled } from './style';
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
    <InputCheckboxLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      spanMargin={spanMargin}
      customCSS={css`
        input {
          margin: 0px;
        }
        input[type='checkbox'] {
          position: relative;
          width: 40px;
          height: 12px;
          appearance: none;
          background: #d8d8d8;
          outline: none;
          border-radius: 20px;
          border: none;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          transition: 0.5s;
          cursor: pointer;
        }
        input:checked[type='checkbox'] {
          background: #f1576c;
        }
        input[type='checkbox']:before {
          content: '';
          position: absolute;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          top: -40%;
          left: -5px;
          background-color: #fff;
          border: 2px solid #f1576c;
          transform: translate(2px, 2px);
          transition: 0.2s;
        }
        input:checked[type='checkbox']:before {
          left: 20px;
        }
        ${customCSS}
      `}
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
        <InputCheckboxToggleStyled
          {...Animation}
          {...props}
          type="checkbox"
          id={label}
          name={id}
          disabled={props.disabled}
          value={formik && id ? formik?.values[id] : value}
          onChange={formik ? formik?.handleChange : onChange}
          onBlur={(e) => {
            formik?.handleBlur(e);
            onBlur?.(e);
          }}
          checked={
            formik && id
              ? formik?.values[id] === true
              : checked || value === `on`
          }
        />
        {children}
        {label}
      </div>

      <InputTextError {...props} />
    </InputCheckboxLabelStyled>
  );
};

export default InputCheckbox;
