import { FC } from 'react';
import InputCheckbox from './inputCheckbox';
import InputRange from './inputRange';
import InputSelect from './inputSelect';
import InputTextBox from './inputTexbox';
import InputText from './inputText';
import InputDragDrop from './inputDragDrop';
import InputDragDropMultiple from './inputDragDropMultiple';
import InputToggle from './inputToggle';
import InputRadioButton from './inputRadioButton';
import InputDragDropMultipleImages from './inputDragDropMultipleImages';
import InputDragDropFile from './inputDragDropFile';
import InputDragDropMultipleFiles from './inputDragDropMultipleFile';
import { AtomInputTypes } from './types';

const Input: FC<AtomInputTypes> = (props) => {
  const { type } = props;
  switch (type) {
    case `checkbox`:
      return <InputCheckbox {...props} />;
    case `select`:
      return <InputSelect {...props} />;
    case `range`:
      return <InputRange {...props} />;
    case `textbox`:
      return <InputTextBox {...props} />;
    case `dragdrop`:
      return <InputDragDrop {...props} />;
    case `dragdropMultiple`:
      return <InputDragDropMultiple {...props} />;
    case `dragdropMultipleImages`:
      return <InputDragDropMultipleImages {...props} />;
    case `toggle`:
      return <InputToggle {...props} />;
    case `radio`:
      return <InputRadioButton {...props} />;
    case `dragDropFile`:
      return <InputDragDropFile {...props} />;
    case `dragdropMultipleFiles`:
      return <InputDragDropMultipleFiles {...props} />;
    default:
      return <InputText {...props} />;
  }
};

export default Input;
