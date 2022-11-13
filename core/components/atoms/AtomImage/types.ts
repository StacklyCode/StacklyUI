import { HTMLMotionProps } from 'framer-motion';
import { AtomWrapperTypes, CSSType } from '../../../types';

export type AtomImageTypes = HTMLMotionProps<'img'> & {
  css?: CSSType;
  wrapper?: AtomWrapperTypes;
};
