import { CSSType } from '../../../types';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef, ReactEventHandler } from 'react';
import { ColorKeys } from '@emotion/react';

export interface AtomButtonTypes extends HTMLMotionProps<'button'> {
  loading?: boolean;
  astheme?: ColorKeys;
  astype?: 'flat' | 'outline' | 'gradient';
  css?: CSSType<AtomButtonTypes>;
  ref?: ForwardedRef<any>;
  nonce?: string;
  onResize?: ReactEventHandler<HTMLButtonElement>;
  onResizeCapture?: ReactEventHandler<HTMLButtonElement>;
}
