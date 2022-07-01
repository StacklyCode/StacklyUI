import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';

export type LoaderProps = AtomWrapperTypes & {
  loading?: boolean | 'true' | 'false';
  astype?: 'small' | `fullscreen` | `fullscreen`;
  astheme?: ""
};
