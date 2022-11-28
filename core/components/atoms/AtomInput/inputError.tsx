import { FC } from 'react';
import { InputErrorStyled } from './styled';
import { AtomInputTypes } from './types';
import { FormikValues } from 'formik';
import { get } from '../../../utils/tinyLodash';

const validateErrors = (formik: FormikValues, id: string) =>
  (get(formik?.values, id) !== `` || get(formik?.touched, id)) &&
  get(formik?.errors, id)
    ? get(formik?.errors, id)
    : ``;

const InputTextError: FC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  if (!formik) return null;

  return (
    <InputErrorStyled {...props}>{validateErrors(formik, id)}</InputErrorStyled>
  );
};

export default InputTextError;
