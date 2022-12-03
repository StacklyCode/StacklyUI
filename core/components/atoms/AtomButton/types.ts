import { CSSType, KeyThemeColor, ThemeAtomButtonType } from '../../../types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef, ReactEventHandler } from 'react';

export type AtomButtonTypes = HTMLMotionProps<'button'> & {
  loading?: boolean;
  disabledAnimation?: boolean;
  astheme?: KeyThemeColor;
  astype?: ThemeAtomButtonType;
  css?: CSSType;
  ref?: ForwardedRef<any>;
  nonce?: string;
  onResize?: ReactEventHandler<HTMLButtonElement>;
  onResizeCapture?: ReactEventHandler<HTMLButtonElement>;
};
