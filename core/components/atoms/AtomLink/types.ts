import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';
import { CSSType, ThemeAtomText } from '../../../types';

export type AtomAnchorProps = HTMLMotionProps<'a'> & {
  ref?: ForwardedRef<any>;
  as?: 'p' | 'span' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  astheme?: keyof ThemeAtomText['color'];
  css?: CSSType;
};
