import { CSSType } from '../../../types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';
import { ColorKeys } from '@emotion/react';

export type AtomWrapperTypes = HTMLMotionProps<'div'> &
  HTMLMotionProps<'form'> &
  HTMLMotionProps<'section'> &
  HTMLMotionProps<'li'> &
  HTMLMotionProps<'ul'> &
  HTMLMotionProps<'main'> &
  HTMLMotionProps<'footer'> &
  HTMLMotionProps<'nav'> & {
    astheme?: ColorKeys;
    as?: 'div' | 'form' | 'section' | 'li' | 'ul' | 'main' | 'footer' | 'nav';
    css?: CSSType<AtomWrapperTypes>;
    ref?: ForwardedRef<any>;
  };
