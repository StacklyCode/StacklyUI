import { KeyThemeColor } from '../../../types';
import { AtomLottieTypes } from '../AtomLottie/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';

export type AtomLoaderTypes = AtomWrapperTypes & {
  loading?: boolean | 'true' | 'false';
  astype?: 'small' | 'medium' | `fullscreen` | `button`;
  astheme?: KeyThemeColor;
  lottie?: AtomLottieTypes;
};
