import { ColorKeys } from '@emotion/react';
import { CSSType } from '../../../types';

export type AtomIconTypes = {
  icon?: string;
  size?: number;
  color?: string;
  astheme?: ColorKeys;
  css?: CSSType<AtomIconTypes>;
} & React.HTMLAttributes<HTMLDivElement>;
