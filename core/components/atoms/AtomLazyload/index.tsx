import { css } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import AtomWrapper from '../AtomWrapper';
import { AtomLazyLoadTypes } from './types';

const AtomLazyLoad: FC<AtomLazyLoadTypes> = (props) => {
  const { children, wrapper, options } = props;

  const [isIntersecting, setIntersecting] = useState(false);
  const [size, setSize] = useState(null as { width: number; height: number });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        ...options
      }
    );
    observer.observe(ref.current as HTMLDivElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const { width, height } = ref.current?.getBoundingClientRect() || {};
    setSize({ width, height });
  }, [isIntersecting]);

  return (
    <AnimatePresence exitBeforeEnter>
      <AtomWrapper
        ref={ref}
        {...wrapper}
        css={(e) => css`
          ${size &&
          css`
            width: ${isIntersecting ? '100%' : `${size?.width}px`};
            height: ${isIntersecting ? 'max-content' : `${size?.height}px`};
          `}
          ${wrapper?.css?.(e)}
        `}
      >
        {(!size || isIntersecting) && children}
      </AtomWrapper>
    </AnimatePresence>
  );
};

export default AtomLazyLoad;
