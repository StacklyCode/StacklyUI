import { ColorKeys } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { ForwardedRef } from 'react';
import { CSSType } from '../../../types';

export type AtomAnchorProps = HTMLMotionProps<'a'> & {
  ref?: ForwardedRef<any>;
  astheme?: ColorKeys;
  css?: CSSType<AtomAnchorProps>;
};
