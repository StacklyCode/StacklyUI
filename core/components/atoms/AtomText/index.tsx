import { FC, forwardRef } from 'react';
import {
  TextStyledDefault,
  TextStyledA,
  TextStyledH1,
  TextStyledH2,
  TextStyledH3,
  TextStyledH4,
  TextStyledH5,
  TextStyledH6,
  TextStyledP,
  TextStyledB
} from './styled';
import { AtomTextTypes } from './types';

const AtomText: FC<AtomTextTypes> = forwardRef<any, AtomTextTypes>(
  (props, ref) => {
    const { as = 'span', children } = props;
    switch (as) {
      case 'a':
        return (
          <TextStyledA ref={ref} {...props}>
            {children}
          </TextStyledA>
        );
      case 'p':
        return (
          <TextStyledP ref={ref} {...props}>
            {children}
          </TextStyledP>
        );
      case 'b':
        return (
          <TextStyledB ref={ref} {...props}>
            {children}
          </TextStyledB>
        );
      case 'h1':
        return (
          <TextStyledH1 ref={ref} {...props}>
            {children}
          </TextStyledH1>
        );
      case 'h2':
        return (
          <TextStyledH2 ref={ref} {...props}>
            {children}
          </TextStyledH2>
        );
      case 'h3':
        return (
          <TextStyledH3 ref={ref} {...props}>
            {children}
          </TextStyledH3>
        );
      case 'h4':
        return (
          <TextStyledH4 ref={ref} {...props}>
            {children}
          </TextStyledH4>
        );
      case 'h5':
        return (
          <TextStyledH5 ref={ref} {...props}>
            {children}
          </TextStyledH5>
        );
      case 'h6':
        return (
          <TextStyledH6 ref={ref} {...props}>
            {children}
          </TextStyledH6>
        );
      case 'span':
        return (
          <TextStyledDefault ref={ref} {...props}>
            {children}
          </TextStyledDefault>
        );
      default:
        return (
          <TextStyledDefault ref={ref} {...props}>
            {children}
          </TextStyledDefault>
        );
    }
  }
);

export default AtomText;
