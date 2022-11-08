import { SerializedStyles, Theme } from '@emotion/react';

export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
  color2?: string;
  color3?: string;
};

export type KeyThemeColor = keyof ThemeColor;

export type ThemeProperties = {
  blur?: string;
  font?: string;
  tooltip?: string;
  background?: string;
  backgroundflash?: string;
};

type CSS = (theme: Theme) => SerializedStyles;

export type ThemeDefault = {
  color?: ThemeColor;
  css?: CSS;
  properties?: ThemeProperties;
  theme?: keyof ThemeColor;
};

export type ThemeAtomButton = ThemeDefault & {
  type?: 'flat' | 'outline';
};
export type ThemeGeneral = ThemeDefault;

export type ThemeAtomWrapper = ThemeDefault;

export type ThemeAtomIcon = ThemeDefault;

export type ThemeAtomLoader = ThemeDefault;

export type ThemeAtomText = ThemeDefault;

export type ThemeAtomInput = ThemeDefault;

export type ThemeAtomHeader = ThemeDefault;

export type ThemeAtomDot = ThemeDefault;

export type ThemeScrollbar = {
  css?: CSS;
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
