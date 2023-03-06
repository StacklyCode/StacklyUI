import { FC } from 'react';
import Input from './input';
import InputCheckbox from './inputCheckbox';
import InputSelect from './inputSelect';
import InputToggle from './inputToggle';
import { AtomInputTypes } from './types';

const AtomInput: FC<AtomInputTypes> = (props) => {
  const { type } = props;
  switch (type) {
    case `toggle`:
      return <InputToggle {...props} />;
    case `checkbox`:
      return <InputCheckbox {...props} />;
    case `select`:
      return <InputSelect {...props} />;
    default:
      return <Input {...props} />;
  }
};

export default AtomInput;
