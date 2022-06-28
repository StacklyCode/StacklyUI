import { FC } from 'react';
import lodash from 'lodash';
import { InputErrorStyled } from './style';
import { AtomInputTypes } from './types';

const InputTextError: FC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  return formik ? (
    (lodash.get(formik?.values, id) !== `` ||
      lodash.get(formik?.touched, id)) &&
    lodash.get(formik?.errors, id) ? (
      <InputErrorStyled {...props}>
        {lodash.get(formik?.errors, id)}
      </InputErrorStyled>
    ) : (
      <InputErrorStyled {...{ ...props, children: null }} />
    )
  ) : (
    <></>
  );
};

export default InputTextError;
