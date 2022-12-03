import { CSSType } from '../types';

export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
  color2?: string;
  color3?: string;
};

export type ThemeProperties = {
  label?: string;
  error?: string;
  blur?: string;
  font?: string;
  tooltip?: string;
  background?: string;
  backgroundflash?: string;
};

export type ThemeDefault = {
  css?: CSSType;
  theme?: keyof ThemeColor;
  color?: ThemeColor;
  properties?: ThemeProperties;
};

export type ThemeAtomButtonType = 'flat' | 'outline';

export type ThemeAtomButton = ThemeDefault & {
  type?: ThemeAtomButtonType;
};
export type ThemeGeneral = ThemeDefault;

export type ThemeAtomWrapper = ThemeDefault;

export type ThemeAtomIcon = ThemeDefault;

export type ThemeAtomLoader = ThemeDefault;

export type ThemeAtomText = ThemeDefault;

export type ThemeAtomInput = ThemeDefault;

export type ThemeAtomHeader = ThemeDefault;

export type ThemeAtomDot = ThemeDefault;

export type ThemeScrollbar = ThemeDefault & {
  width?: number;
  height?: number;
  thumb?: string;
  track?: string;
};

export type Palette = {
  general?: ThemeGeneral;
  button?: ThemeAtomButton;
  text?: ThemeAtomText;
  wrapper?: ThemeAtomWrapper;
  icon?: ThemeAtomIcon;
  loader?: ThemeAtomLoader;
  scrollbar?: ThemeScrollbar;
  input?: ThemeAtomInput;
  header?: ThemeAtomHeader;
  dot?: ThemeAtomDot;
};
