import { useState, useRef, ChangeEvent } from 'react';
import { AtomInputTypes, IFileDragDrop } from './types';
import {
  InputDragAndDropInputStyled,
  InputDragAndDropStyled,
  InputLabelStyled,
  InputSpanStyled
} from './styled';
import { FCWC } from 'types';
import InputTextError from './inputError';
import InputDragAndDropImage from './inputDragAndDropImage';
import { get } from 'utils/tinyLodash';
import uuid from 'utils/uuid';

const InputDragAndDrop: FCWC<AtomInputTypes> = (props) => {
  const { id, formik, label, labeltext, span, error, children } = props;
  const [drag, setDrag] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const setImage = (files: FileList) => {
    if (!files) return;
    const images = [...files];
    const getFiles = (get(formik?.values, id) ?? []) as IFileDragDrop[];
    const newFiles = images?.map((file) => ({
      id: uuid(),
      file
    })) as IFileDragDrop[];

    formik?.setFieldValue(id, [...getFiles, ...newFiles]);
  };
  return (
    <InputLabelStyled htmlFor={id} {...label}>
      {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
      <InputDragAndDropStyled
        drag={drag}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDrag(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDrag(false);
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setDrag(false);
          setImage(e.dataTransfer.files);
        }}
      >
        <InputDragAndDropInputStyled
          id={id}
          type="file"
          name={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.files)
          }
        />

        <InputDragAndDropImage
          id={id}
          formik={formik}
          refInput={ref}
          input={{
            ...props.input,
            drag
          }}
        />
      </InputDragAndDropStyled>
      {children}
      <InputTextError id={id} formik={formik} {...error} />
    </InputLabelStyled>
  );
};

export default InputDragAndDrop;
