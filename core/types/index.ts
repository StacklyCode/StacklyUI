import {
  Interpolation,
  SerializedStyles,
  Theme,
  WithTheme
} from '@emotion/react';
import { FC } from 'react';

type ChildrenProps = {
  children?: React.ReactNode;
};

type RDC = Record<string, unknown>;

export type FCWC<P = RDC> = FC<P & ChildrenProps>;
export type SSP<P = RDC> = (props: WithTheme<P, Theme>) => SerializedStyles;
export type SSPS<P = RDC> = (props: WithTheme<P, Theme>) => string;

export type CSSType = Interpolation<Theme>;
export type { IPalette } from 'styles/theme';
