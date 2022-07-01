import { CSSType, ThemeAtomIcon } from 'types';
import { HTMLMotionProps } from 'framer-motion';

export type AtomIconTypes = HTMLMotionProps<'div'> & {
  icon?: string;
  astheme?: keyof ThemeAtomIcon['color'];
  css?: CSSType;
};
