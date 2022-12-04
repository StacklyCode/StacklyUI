import { CSSType } from '../../../types';
import { LottieComponentProps } from 'lottie-react';
import { ColorKeys } from '@emotion/react';

export type AtomLottieTypes = Omit<LottieComponentProps, 'animationData'> & {
  icon?: string;
  astheme?: ColorKeys;
  css?: CSSType<AtomLottieTypes>;
  animationData?: any;
};
