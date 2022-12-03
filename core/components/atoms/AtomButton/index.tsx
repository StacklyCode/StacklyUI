import { forwardRef } from 'react';
import { ButtonStyled } from './styled';
import { AtomButtonTypes } from './types';
import AtomLoader from '../AtomLoader';

const Animation = {
  whileHover: {
    scale: 1.08,
    transition: { duration: 0.3 }
  },
  whileTap: {
    scale: 0.98,
    animate: {
      scale: 1.05
    }
  }
} as AtomButtonTypes;

const isDisabledAnimation = (disabled: boolean) =>
  disabled ? null : Animation;

const AtomButton = forwardRef<any, AtomButtonTypes>((props, ref) => {
  const { loading, children, disabled, disabledAnimation } = props;
  return (
    <ButtonStyled
      {...props}
      {...isDisabledAnimation(disabledAnimation ?? disabled ?? loading)}
      ref={ref}
    >
      <AtomLoader astype="button" loading={loading}>
        {children ?? "Text Default"}
      </AtomLoader>
    </ButtonStyled>
  );
});

export default AtomButton;
