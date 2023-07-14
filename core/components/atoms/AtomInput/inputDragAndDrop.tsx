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
import uuid from 'utils/uuid';

const InputDragAndDrop: FCWC<AtomInputTypes> = (props) => {
  const { id, formik, label, labeltext, span, error, children, input } = props;
  const [drag, setDrag] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const setImage = (files: FileList) => {
    if (!files) return;
    const images = [...files];
    if (images.length - 1 >= input?.maxfiles) return;
    const isImage = images.every((file) => file.type.includes('image'));
    if (!isImage) return;

    const newFiles = images?.map((file) => ({
      id: uuid(),
      file
    })) as IFileDragDrop[];

    formik?.setFieldValue(id, newFiles);
  };
  return (
    <InputLabelStyled htmlFor={id} {...label}>
      {labeltext && <InputSpanStyled {...span}>{labeltext}</InputSpanStyled>}
      <InputDragAndDropStyled
        {...input}
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
          multiple
          name={id}
          ref={ref}
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
          {...props}
        />
      </InputDragAndDropStyled>
      {children}
      <InputTextError id={id} formik={formik} {...error} />
    </InputLabelStyled>
  );
};

export default InputDragAndDrop;
