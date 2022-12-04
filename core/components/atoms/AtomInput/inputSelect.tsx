import InputTextError from './inputError';
import {
  InputLabelStyled,
  InputSelectOptionStyled,
  InputSelectStyled,
  InputSpanStyled
} from './styled';
import { AtomInputTypes } from './types';
import { FCWC } from '../../../types';
import { useEffect, useState } from 'react';
import { get } from '../../../utils/tinyLodash';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const InputText: FCWC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  const { error, label, select, span, labeltext, options, option } = props;
  const [component, setComponent] = useState(<></>);

  useEffect(() => {
    setComponent(
      <InputLabelStyled htmlFor={id} {...label}>
        {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
        <InputSelectStyled
          id={id}
          value={get(formik?.values, id)}
          {...select}
          {...Animation}
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
        <InputTextError id={id} formik={formik} {...error} />
      </InputLabelStyled>
    );
  }, [props]);

  return component;
};

export default InputText;
