import { CSSType, KeyThemeColor } from '../../../types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';

export type AtomWrapperTypes = HTMLMotionProps<'div'> &
  HTMLMotionProps<'form'> &
  HTMLMotionProps<'section'> &
  HTMLMotionProps<'li'> &
  HTMLMotionProps<'ul'> &
  HTMLMotionProps<'main'> &
  HTMLMotionProps<'footer'> &
  HTMLMotionProps<'nav'> & {
    astheme?: KeyThemeColor;
    as?:
      | 'div'
      | 'form'
      | 'section'
      | 'li'
      | 'ul'
      | 'main'
      | 'footer'
      | 'nav'
      | 'motion-div';
    css?: CSSType;
    ref?: ForwardedRef<any>;
  };
