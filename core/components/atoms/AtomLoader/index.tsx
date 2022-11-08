import { FCWC } from 'types';
import AtomLottie from '../AtomLottie';
import { TypeColorLoader, TypeLoader } from './styled';
import { AtomLoaderTypes } from './types';
import LoadingDefaultAnimation from 'animations/loading-default.json';
import { AnimatePresence } from 'framer-motion';
import { css } from '@emotion/react';
import AtomWrapper from '../AtomWrapper';
import { useEffect, useState } from 'react';

const AtomLoader: FCWC<AtomLoaderTypes> = (props) => {
  const { loading, children, lottie } = props;
  const [complete, setComplete] = useState(true);

  useEffect(() => {
    setComplete(loading ? false : complete);
  }, [loading]);

  return (
    <AnimatePresence onExitComplete={() => setComplete(true)}>
      {loading ? (
        <AtomWrapper
          key={`LOADER`}
          {...props}
          css={(theme) => css`
            display: flex;
            justify-content: center;
            align-items: center;
            div {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            background-color: transparent;
            ${TypeLoader({ ...props, theme })}
          `}
        >
          <AtomLottie
            animationData={LoadingDefaultAnimation}
            {...lottie}
            css={(theme) => TypeColorLoader({ ...props, theme })}
          />
        </AtomWrapper>
      ) : (
        <>{complete && children}</>
      )}
    </AnimatePresence>
  );
};

export default AtomLoader;
