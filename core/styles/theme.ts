export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
};

export type ThemeAtomButton = {
  color?: ThemeColor;
  type?: 'flat' | 'outline';
  theme?: keyof ThemeColor;
};
export type ThemeAtomWrapper = {
  color?: ThemeColor;
};

export type ThemeAtomIcon = {
  color?: ThemeColor;
};

export type ThemeAtomText = {
  color?: ThemeColor;
};

export type ThemeAtomInput = {
  color?: ThemeColor;
};

export type ThemeScrollbar = {
  width?: number;
  thumb?: string;
  track?: string;
};

export type IPalette = {
  button?: ThemeAtomButton;
  text?: ThemeAtomText;
  wrapper?: ThemeAtomWrapper;
  icon?: ThemeAtomIcon;
  scrollbar?: ThemeScrollbar;
  input?: ThemeAtomInput;
};
