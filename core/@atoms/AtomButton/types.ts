import { CSSType } from 'types';
import { HTMLMotionProps } from 'framer-motion';
import { ThemeAtomButton } from 'styles/theme';

export type AtomButtonTypes = HTMLMotionProps<'button'> & {
  loading?: boolean | 'true' | 'false';
  astheme?: keyof ThemeAtomButton['color'];
  astype?: ThemeAtomButton['type'];
  css?: CSSType;
};
