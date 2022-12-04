import { ColorKeys } from '@emotion/react';
import { AtomWrapperTypes, CSSType } from '../../../types';

export type AtomIconTypes = AtomWrapperTypes & {
  icon?: string;
  astheme?: ColorKeys;
  css?: CSSType<AtomIconTypes>;
};
