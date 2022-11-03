import { FC, forwardRef } from 'react';
import { AtomWrapperTypes } from './types';
import {
  AtomWrapperDefaultStyled,
  AtomWrapperFormStyled,
  AtomWrapperSectionStyled,
  AtomWrapperLiStyled,
  AtomWrapperUlStyled,
  AtomWrapperMainStyled,
  AtomWrapperFooterStyled,
  AtomWrapperNavStyled
} from './styled';
import { MotionFadeInOut } from 'animations/motion';

const AtomWrapper: FC<AtomWrapperTypes> = forwardRef<any, AtomWrapperTypes>(
  (props, ref) => {
    const { as = 'div', children } = props;
    switch (as) {
      case 'form':
        return (
          <AtomWrapperFormStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperFormStyled>
        );
      case 'section':
        return (
          <AtomWrapperSectionStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperSectionStyled>
        );
      case 'li':
        return (
          <AtomWrapperLiStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperLiStyled>
        );
      case 'ul':
        return (
          <AtomWrapperUlStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperUlStyled>
        );
      case 'main':
        return (
          <AtomWrapperMainStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperMainStyled>
        );
      case 'footer':
        return (
          <AtomWrapperFooterStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperFooterStyled>
        );
      case 'nav':
        return (
          <AtomWrapperNavStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperNavStyled>
        );
      case 'div':
        return (
          <AtomWrapperDefaultStyled ref={ref} {...MotionFadeInOut} {...props}>
            {children}
          </AtomWrapperDefaultStyled>
        );
      default:
        return (
          <AtomWrapperDefaultStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperDefaultStyled>
        );
    }
  }
);

export default AtomWrapper;
