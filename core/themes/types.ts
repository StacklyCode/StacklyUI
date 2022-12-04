import {
  AtomInputErrorProps,
  AtomInputInputProps,
  AtomInputLabelProps,
  AtomInputOptionProps,
  AtomInputSelectProps,
  AtomInputSpanProps
} from 'components/atoms/AtomInput/types';
import {
  AtomButtonTypes,
  AtomIconTypes,
  AtomImageTypes,
  AtomInputTypes,
  CSSType
} from '../types';

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
  hover?: string;
  width?: string;
  height?: string;
  thumb?: string;
  track?: string;
};

export type ThemeDefault<T = unknown> = {
  css?: CSSType<T>;
  color?: ThemeColor;
  properties?: ThemeProperties;
};

export type ThemeGeneral = ThemeDefault;

export type ThemeAtomButton = ThemeDefault<AtomButtonTypes>;

export type ThemeAtomIcon = ThemeDefault<AtomIconTypes>;

export type ThemeAtomImage = ThemeDefault<AtomImageTypes>;

export type ThemeAtomInput = ThemeDefault<AtomInputTypes> & {
  label?: ThemeDefault<AtomInputLabelProps>;
  span?: ThemeDefault<AtomInputSpanProps>;
  error?: ThemeDefault<AtomInputErrorProps>;
  input?: ThemeDefault<AtomInputInputProps>;
  select?: ThemeDefault<AtomInputSelectProps>;
  option?: ThemeDefault<AtomInputOptionProps>;
};

export type ThemeAtomWrapper = ThemeDefault;

export type ThemeAtomLoader = ThemeDefault;

export type ThemeAtomText = ThemeDefault;

export type ThemeAtomHeader = ThemeDefault;

export type ThemeAtomDot = ThemeDefault;

export type ThemeScrollbar = ThemeDefault;

export type Palette = {
  name: string;
  general?: ThemeGeneral;
  icon?: ThemeAtomIcon;
  image?: ThemeAtomImage;
  button?: ThemeAtomButton;
  text?: ThemeAtomText;
  wrapper?: ThemeAtomWrapper;
  loader?: ThemeAtomLoader;
  scrollbar?: ThemeScrollbar;
  input?: ThemeAtomInput;
  header?: ThemeAtomHeader;
  dot?: ThemeAtomDot;
};
