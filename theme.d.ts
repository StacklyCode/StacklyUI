/* eslint-disable @typescript-eslint/no-empty-interface */
import { IPalette, ThemeColor } from 'types';
import { themes } from './core/themes/index';
declare module '@emotion/react' {
  export * from '@emotion/react';
  export interface Theme extends IPalette {}
  export type ThemeKeys = keyof typeof themes;
  export type ColorKeys = keyof ThemeColor;
}
