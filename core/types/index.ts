import { SerializedStyles, Theme, ThemeKeys, WithTheme } from '@emotion/react';
import { FC } from 'react';
import { themes } from '../themes/index';
import { Palette } from '../themes/types';
import { AnyEventObject, StateMachine } from 'xstate';

type ChildrenProps = {
  children?: React.ReactNode;
};

export type RDC = Record<string, unknown>;
export type FCWC<P = RDC> = FC<P & ChildrenProps>;
export type SSP<P = RDC> = (props: WithTheme<P, Theme>) => SerializedStyles;
export type SSPS<P = RDC> = (props: WithTheme<P, Theme>) => string;
export type CSSType = (theme: Theme) => SerializedStyles;
export type IPalette = Palette;
export type ThemesFamily = {
  select: {
    [key: string]: IPalette;
  };
  machine: StateMachine<string, unknown, AnyEventObject>;
};

export type ThemeKeyType = keyof typeof themes;

export type ThemesFamilyType = [ThemeKeyType, (key?: ThemeKeyType) => void];

export type useThemeProps = {
  themes: ThemesFamily;
  defaultTheme: IPalette;
};

export type ContextThemeProps = {
  themes?: {
    [key in ThemeKeyType]: IPalette;
  };
  defaultTheme?: ThemeKeys;
  children: React.ReactNode;
};

export * from '../themes/types';
export type { AtomButtonTypes } from '../components/atoms/AtomButton/types';
export type { AtomIconTypes } from '../components/atoms/AtomIcon/types';
export type { AtomImageTypes } from '../components/atoms/AtomImage/types';
export type { AtomInputTypes } from '../components/atoms/AtomInput/types';
export type { AtomLoaderTypes } from '../components/atoms/AtomLoader/types';
export type { AtomTextTypes } from '../components/atoms/AtomText/types';
export type { AtomWrapperTypes } from '../components/atoms/AtomWrapper/types';
