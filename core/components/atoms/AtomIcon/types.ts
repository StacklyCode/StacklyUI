import { AtomWrapperTypes, CSSType, ThemeAtomIcon } from '../../../types';

export type AtomIconTypes = AtomWrapperTypes & {
  icon?: string;
  astheme?: keyof ThemeAtomIcon['color'];
  css?: CSSType;
};
