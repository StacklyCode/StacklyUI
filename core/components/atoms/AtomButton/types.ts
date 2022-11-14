import { CSSType, KeyThemeColor, ThemeAtomButton } from '../../../types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef, ReactEventHandler } from 'react';

export type AtomButtonTypes = HTMLMotionProps<'button'> & {
  loading?: boolean;
  astheme?: KeyThemeColor;
  astype?: ThemeAtomButton['type'];
  css?: CSSType;
  ref?: ForwardedRef<any>;
  nonce?: string;
  onResize?: ReactEventHandler<HTMLButtonElement>;
  onResizeCapture?: ReactEventHandler<HTMLButtonElement>;
};
