import { CSSType, ThemeAtomIcon } from 'types';
import { LottieComponentProps } from 'lottie-react';

export type AtomLottieTypes = LottieComponentProps & {
  icon?: string;
  astheme?: keyof ThemeAtomIcon['color'];
  css?: CSSType;
};
