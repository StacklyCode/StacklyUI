import { forwardRef } from 'react';
import AtomLoader from '../AtomLoader';
import { ButtonStyled } from './styled';
import { AtomButtonTypes } from './types';

const AtomButton = forwardRef<any, AtomButtonTypes>((props, ref) => {
  const { loading, children } = props;
  return (
    <ButtonStyled {...props} ref={ref}>
      <AtomLoader astype="button" loading={loading}>
        {children}
      </AtomLoader>
    </ButtonStyled>
  );
});

export default AtomButton;
