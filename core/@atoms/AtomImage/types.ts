import { CSSType } from '@emotion/reac';
import { HTMLMotionProps } from 'framer-motion';

export type AtomImageTypes = HTMLMotionProps<'img'> & {
  css?: CSSType;
  customCSS?: CSSType;
};
