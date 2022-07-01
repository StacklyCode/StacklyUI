import { CSSType } from 'types';
import { HTMLMotionProps } from 'framer-motion';
import { ThemeAtomIcon } from 'styles/theme';

export type AtomIconTypes = HTMLMotionProps<'div'> & {
  icon?: string;
  astheme?: keyof ThemeAtomIcon['color'];
  css?: CSSType;
};
