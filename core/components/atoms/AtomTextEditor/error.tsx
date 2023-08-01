import { FC } from 'react';
import { InputErrorStyled } from './styled';
import { AtomTextEditorType } from './types';

const InputTextError: FC<AtomTextEditorType> = (props) => {
  const { formik, id } = props;
  return (formik?.values[`${id}`] !== `` || formik?.touched[`${id}`]) &&
    formik?.errors[`${id}`] ? (
    <InputErrorStyled {...props}>{formik?.errors[`${id}`]}</InputErrorStyled>
  ) : (
    <InputErrorStyled {...{ ...props, children: null }} />
  );
};

export default InputTextError;
