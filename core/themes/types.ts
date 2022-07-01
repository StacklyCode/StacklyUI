import { SerializedStyles, Theme } from '@emotion/react';

export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
};

type CSS = (theme: Theme) => SerializedStyles;

export type ThemeAtomButton = {
  color?: ThemeColor;
  type?: 'flat' | 'outline';
  theme?: keyof ThemeColor;
  css?: CSS;
};
export type ThemeAtomWrapper = {
  color?: ThemeColor;
  css?: CSS;
};

export type ThemeAtomIcon = {
  color?: ThemeColor;
  css?: CSS;
};

export type ThemeAtomText = {
  color?: ThemeColor;
  css?: CSS;
};

export type ThemeAtomInput = {
  color?: ThemeColor;
  css?: CSS;
};

export type ThemeScrollbar = {
  width?: number;
  thumb?: string;
  track?: string;
  css?: CSS;
};

export type Palette = {
  button?: ThemeAtomButton;
  text?: ThemeAtomText;
  wrapper?: ThemeAtomWrapper;
  icon?: ThemeAtomIcon;
  scrollbar?: ThemeScrollbar;
  input?: ThemeAtomInput;
};
