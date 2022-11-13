import { HTMLMotionProps } from 'framer-motion';
import { CSSType } from '../../../types';

export type AtomImageTypes = HTMLMotionProps<'img'> & {
  css?: CSSType;
  customCSS?: CSSType;
};
