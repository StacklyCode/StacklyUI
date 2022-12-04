import InputTextError from './inputError';
import { InputSpanStyled, InputLabelStyled, InputToggleStyled } from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from '../../../types';
import { get } from '../../../utils/tinyLodash';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputToggle: FCWC<AtomInputTypes> = (props) => {
  const { formik, id, children } = props;
  const { error, label, input, span, labeltext } = props;
  return (
    <InputLabelStyled htmlFor={id} {...label}>
      {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
      <InputToggleStyled
        id={id}
        type="checkbox"
        {...input}
        {...Animation}
        value={input?.value ?? get(formik?.values, id) ? 'on' : 'off'}
        onChange={(e) => {
          formik?.handleChange(e);
          input?.onChange?.(e);
        }}
        onBlur={(e) => {
          formik?.handleBlur(e);
          input?.onBlur?.(e);
        }}
      />
      {children}
      <InputTextError id={id} formik={formik} {...error} />
    </InputLabelStyled>
  );
};

export default InputToggle;
