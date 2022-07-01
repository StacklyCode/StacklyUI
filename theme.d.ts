/* eslint-disable @typescript-eslint/no-empty-interface */
import { IPalette } from 'types';

declare module '@emotion/react' {
  export interface Theme extends IPalette {}
}
