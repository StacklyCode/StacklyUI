import { AtomWrapperTypes } from '../AtomWrapper/types';

export type AtomLazyLoadTypes = {
  wrapper?: AtomWrapperTypes;
  children?: React.ReactNode;
  options?: IntersectionObserverInit;
};
