import { Ref } from 'react';
import { AtomTextTypes } from '../AtomText/types';

export type AtomLinkProps = AtomTextTypes & {
  link?: string;
  href?: string;
  ref?: Ref<HTMLAnchorElement>;
  target?: string;
};
