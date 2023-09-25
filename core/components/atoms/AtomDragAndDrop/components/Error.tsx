import { FC } from 'react';
import { AtomDragAndDropTypes } from '../types';
import { FormikValues } from 'formik';
import { get } from '../../../../utils/tinyLodash';
import AtomText from '../../AtomText';
import { css } from '@emotion/react';

const validateErrors = (formik: FormikValues, id: string, def: string) =>
  (get(formik?.values, id) !== `` || get(formik?.touched, id)) &&
  get(formik?.errors, id)
    ? get(formik?.errors, id)
    : def ?? ``;

const InputTextError: FC<AtomDragAndDropTypes> = (props) => {
  const { id, formik, error, textError } = props;
  if (!formik && !textError) return null;

  return (
    <AtomText
      {...error}
      css={(theme) => css`
        font-family: Montserrat, sans-serif;
        font-size: 10px;
        font-weight: 700;
        color: #ff0000;
        height: 30px;
        margin: 0px 0px 0px 0px;
        padding: 5px 0px 0px 0px;
        ${error?.css(theme)}
      `}
    >
      {validateErrors(formik, id, textError)}
    </AtomText>
  );
};

export default InputTextError;
