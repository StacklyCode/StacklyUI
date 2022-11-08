import { forwardRef } from 'react';
import { ButtonStyled } from './styled';
import { AtomButtonTypes } from './types';
import AtomLoader from '../AtomLoader';
import AtomText from '../AtomText';

const Animation = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: {
    scale: 0.98,
    animate: {
      scale: 1.05
    }
  }
} as AtomButtonTypes;
const isDisabledAnimation = (disabled: boolean | 'true' | 'false') =>
  disabled ? {} : Animation;

const AtomButton = forwardRef<any, AtomButtonTypes>((props, ref) => {
  const { loading, children, disabled } = props;
  return (
    <ButtonStyled
      {...isDisabledAnimation(disabled ?? loading)}
      {...props}
      ref={ref}
    >
      <AtomLoader astype="button" loading={loading}>
        {children ?? <AtomText as="span">Text Default</AtomText>}
      </AtomLoader>
    </ButtonStyled>
  );
});

export default AtomButton;
