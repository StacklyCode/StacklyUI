import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';
import { CSSType, ThemeAtomText } from '../../../types';

export type AtomTextTypes = HTMLMotionProps<'p'> &
  HTMLMotionProps<'span'> &
  HTMLMotionProps<'h1'> &
  HTMLMotionProps<'h2'> &
  HTMLMotionProps<'h3'> &
  HTMLMotionProps<'h4'> &
  HTMLMotionProps<'h5'> &
  HTMLMotionProps<'h6'> &
  HTMLMotionProps<'a'> & {
    ref?: ForwardedRef<any>;
    as?: 'p' | 'span' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    astheme?: keyof ThemeAtomText['color'];
    css?: CSSType;
  };
