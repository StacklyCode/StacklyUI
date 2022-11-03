import { SerializedStyles, Theme, WithTheme } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { themes } from 'themes/index';
import { Palette } from 'themes/types';
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

export type ThemeContextProps = {
  themes: ThemesFamily;
  children: ReactNode;
  defaultTheme: IPalette;
};

export * from 'core/themes/types';
export type { AtomButtonTypes } from 'atoms/AtomButton/types';
export type { AtomIconTypes } from 'atoms/AtomIcon/types';
export type { AtomImageTypes } from 'atoms/AtomImage/types';
export type { AtomInputTypes } from 'atoms/AtomInput/types';
export type { AtomLoaderTypes } from 'atoms/AtomLoader/types';
export type { AtomTextTypes } from 'atoms/AtomText/types';
export type { AtomWrapperTypes } from 'atoms/AtomWrapper/types';
