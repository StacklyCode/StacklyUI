import { FC } from 'react';
import { IconStyled } from './styled';
import { AtomIconTypes } from './types';

const AtomIcon: FC<AtomIconTypes> = (props) => {
  const { icon } = props;
  return <IconStyled {...props} className={icon ?? 'fas fa-home'} />;
};

export default AtomIcon;
