import { get } from 'lodash';
import InputTextError from './inputError';
import {
  InputSelectLabelStyled,
  InputSelectOptionStyled,
  InputSelectStyled,
  InputTextSpanStyled
} from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from 'types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputText: FCWC<AtomInputTypes> = (props) => {
  const { formik, id, astheme = 'primary' } = props;
  const { error, label, select, span, labeltext, options, option } = props;
  return (
    <InputSelectLabelStyled htmlFor={id} {...label}>
      {labeltext && (
        <InputTextSpanStyled astheme={astheme} {...span}>
          {labeltext}
        </InputTextSpanStyled>
      )}
      <InputSelectStyled
        id={id}
        astheme={astheme}
        {...select}
        {...Animation}
        value={select?.value ?? get(formik?.values, id)}
        onChange={(e) => {
          formik?.handleChange(e);
          select?.onChange?.(e);
        }}
        onBlur={(e) => {
          formik?.handleBlur(e);
          select?.onBlur?.(e);
        }}
      >
        <InputSelectOptionStyled
          {...option}
          value={option?.defaultText ?? 'DEFAULT'}
          disabled
        >
          Select an option
        </InputSelectOptionStyled>
        {options?.map((e) => (
          <InputSelectOptionStyled key={e.id} {...option} value={e.value}>
            {e.label}
          </InputSelectOptionStyled>
        ))}
      </InputSelectStyled>
      <InputTextError id={id} astheme={astheme} formik={formik} {...error} />
    </InputSelectLabelStyled>
  );
};

export default InputText;
