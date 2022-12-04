import { ColorKeys } from '@emotion/react';
import { AtomLottieTypes } from '../AtomLottie/types';

export type AtomLoaderTypes = AtomLottieTypes & {
  loading?: boolean | 'true' | 'false';
  astype?: 'small' | 'medium' | `fullscreen` | `button`;
  astheme?: ColorKeys;
};
