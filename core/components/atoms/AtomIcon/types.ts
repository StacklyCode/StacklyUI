import { ColorKeys } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { CSSType } from '../../../types';

export type AtomIconTypes = HTMLMotionProps<'div'> & {
  icon?: string;
  astheme?: ColorKeys;
  css?: CSSType<AtomIconTypes>;
};
