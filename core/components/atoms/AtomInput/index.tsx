import { FC } from 'react';
import InputText from './inputText';
import InputSelect from './inputSelect';
import InputToggle from './inputToggle';
import { AtomInputTypes } from './types';

const AtomInput: FC<AtomInputTypes> = (props) => {
  const { type } = props;
  switch (type) {
    case `toggle`:
      return <InputToggle {...props} />;
    case `select`:
      return <InputSelect {...props} />;
    default:
      return <InputText {...props} />;
  }
};

export default AtomInput;
