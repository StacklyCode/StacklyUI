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

const AtomWrapper: FC<AtomWrapperTypes> = forwardRef<any, AtomWrapperTypes>(
  (props, ref) => {
    const { as = 'div', children } = props;
    switch (as) {
      case 'form':
        return (
          <AtomWrapperFormStyled ref={ref} {...props}>
            {children}
          </AtomWrapperFormStyled>
        );
      case 'section':
        return (
          <AtomWrapperSectionStyled ref={ref} {...props}>
            {children}
          </AtomWrapperSectionStyled>
        );
      case 'li':
        return (
          <AtomWrapperLiStyled ref={ref} {...props}>
            {children}
          </AtomWrapperLiStyled>
        );
      case 'ul':
        return (
          <AtomWrapperUlStyled ref={ref} {...props}>
            {children}
          </AtomWrapperUlStyled>
        );
      case 'main':
        return (
          <AtomWrapperMainStyled ref={ref} {...props}>
            {children}
          </AtomWrapperMainStyled>
        );
      case 'footer':
        return (
          <AtomWrapperFooterStyled ref={ref} {...props}>
            {children}
          </AtomWrapperFooterStyled>
        );
      case 'nav':
        return (
          <AtomWrapperNavStyled ref={ref} {...props}>
            {children}
          </AtomWrapperNavStyled>
        );
      case 'div':
        return (
          <AtomWrapperDefaultStyled ref={ref} {...props}>
            {children}
          </AtomWrapperDefaultStyled>
        );
      default:
        return (
          <AtomWrapperDefaultStyled ref={ref} {...props}>
            {children}
          </AtomWrapperDefaultStyled>
        );
    }
  }
);

export default AtomWrapper;
