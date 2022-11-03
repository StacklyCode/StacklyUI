import { get } from 'lodash';
import InputTextError from './error';
import {
  InputTextLabelStyled,
  InputTextSpanStyled,
  InputTextStyled
} from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from 'types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputText: FCWC<AtomInputTypes> = (props) => {
  const { formik, id, type, children, astheme = 'primary' } = props;
  const { error, label, input, span, spantext } = props;
  return (
    <InputTextLabelStyled htmlFor={id} {...label}>
      {spantext && (
        <InputTextSpanStyled astheme={astheme} {...span}>
          {spantext}
        </InputTextSpanStyled>
      )}
      <InputTextStyled
        id={id}
        astheme={astheme}
        type={type}
        {...input}
        {...Animation}
        value={input?.value ?? get(formik?.values, id)}
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
      <InputTextError id={id} astheme={astheme} formik={formik} {...error} />
    </InputTextLabelStyled>
  );
};

export default InputText;
