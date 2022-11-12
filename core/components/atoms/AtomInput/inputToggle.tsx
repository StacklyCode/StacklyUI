import { get } from 'lodash';
import InputTextError from './inputError';
import {
  InputTextSpanStyled,
  InputToggleLabelStyled,
  InputToggleStyled,
} from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from 'types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputToggle: FCWC<AtomInputTypes> = (props) => {
  const { formik, id, children, astheme } = props;
  const { error, label, input, span, labeltext } = props;
  return (
    <InputToggleLabelStyled
      htmlFor={id}
      {...label}
    >
      {labeltext && (
        <InputTextSpanStyled astheme={astheme} {...span}>
          {labeltext}
        </InputTextSpanStyled>
      )}
      <InputToggleStyled
        id={id}
        astheme={astheme}
        type="checkbox"
        {...input}
        {...Animation}
        value={(input?.value ?? get(formik?.values, id)) ? 'on' : 'off'}
        onChange={(e) => {
          formik?.handleChange(e)
          input?.onChange?.(e)
        }}
        onBlur={(e) => {
          formik?.handleBlur(e);
          input?.onBlur?.(e);
        }}
      />
      {children}
      <InputTextError id={id} astheme={astheme} formik={formik} {...error} />
    </InputToggleLabelStyled>
  );
};

export default InputToggle;
