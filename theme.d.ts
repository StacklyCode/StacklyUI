/* eslint-disable @typescript-eslint/no-empty-interface */
import { IPalette } from 'types';
import { themes } from '.';
declare module '@emotion/react' {
  export * from '@emotion/react';
  export interface Theme extends IPalette {}
  export type ThemeKeys = keyof typeof themes;
}
