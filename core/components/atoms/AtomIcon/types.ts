import { AtomWrapperTypes, CSSType, KeyThemeColor } from '../../../types';

export type AtomIconTypes = AtomWrapperTypes & {
  icon?: string;
  astheme?: KeyThemeColor;
  css?: CSSType;
};
