import { CSSProperties } from '@emotion/serialize';
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
  AtomLoaderTypes,
  AtomTextTypes,
  AtomWrapperTypes,
  CSSType
} from '../types';

export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
  color2?: string;
  color3?: string;
};

export type ThemeProperties = CSSProperties & {
  blur?: string;
  font?: string;
  tooltip?: string;
  hover?: string;
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

export type ThemeAtomWrapper = ThemeDefault<AtomWrapperTypes>;

export type ThemeAtomLoader = ThemeDefault<AtomLoaderTypes>;

export type ThemeAtomText = ThemeDefault<AtomTextTypes>;

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
