import { CSSType, KeyThemeColor } from '../../../types';
import { LottieComponentProps } from 'lottie-react';

export type AtomLottieTypes = LottieComponentProps & {
  icon?: string;
  astheme?: KeyThemeColor;
  css?: CSSType;
};
