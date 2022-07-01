import { CSSType } from 'types';
import { ThemeAtomWrapper } from 'core/styles/theme';
import { HTMLMotionProps } from 'framer-motion';

export type AtomWrapperTypes = HTMLMotionProps<'div'> &
  HTMLMotionProps<'form'> &
  HTMLMotionProps<'section'> &
  HTMLMotionProps<'li'> &
  HTMLMotionProps<'ul'> &
  HTMLMotionProps<'main'> &
  HTMLMotionProps<'footer'> &
  HTMLMotionProps<'nav'> & {
    astheme?: keyof ThemeAtomWrapper['color'];
    as?: 'div' | 'form' | 'section' | 'li' | 'ul' | 'main' | 'footer' | 'nav';
    css?: CSSType;
  };
