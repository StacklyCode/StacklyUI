import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { ImageProps } from 'next/image';

export type AtomImageTypes = ImageProps & {
  wrapper?: AtomWrapperTypes;
};
