import { FC } from 'react';
import { InputErrorStyled } from './styled';
import { AtomInputTypes } from './types';
import { FormikValues } from 'formik';
import { get } from '../../../utils/tinyLodash';

const validateErrors = (formik: FormikValues, id: string): string => {
  if (!formik || !id) return '';
  const errorGet = get<string>(formik?.errors, id);
  const touched = get<boolean>(formik?.touched, id);
  const hasError = Boolean(errorGet && touched);
  const isMultiple = Array.isArray(errorGet);
  const normalizeError = isMultiple
    ? errorGet?.map((e) => Object.values(e)?.join('\n'))?.join('\n')
    : errorGet;
  const error = hasError ? normalizeError : '';
  return error;
};

const InputTextError: FC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  if (!formik) return null;

  return (
    <InputErrorStyled {...props}>{validateErrors(formik, id)}</InputErrorStyled>
  );
};

export default InputTextError;
