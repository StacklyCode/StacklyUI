/* eslint-disable @typescript-eslint/no-empty-interface */
import { IPalette } from './core/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends IPalette {}
}
