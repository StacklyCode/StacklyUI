import { CSSType, KeyThemeColor, ThemeAtomButton } from 'types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';

export type AtomButtonTypes = HTMLMotionProps<'button'> & {
  loading?: boolean | 'true' | 'false';
  astheme?: KeyThemeColor;
  astype?: ThemeAtomButton['type'];
  css?: CSSType;
  ref?: ForwardedRef<any>;
};
