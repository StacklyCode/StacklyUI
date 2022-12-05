import { FCWC } from 'types';
import AtomLottie from '../AtomLottie';
import { AtomLoaderTypes } from './types';
import LoadingDefaultAnimation from '../../../animations/loading-default.json';
import { css, useTheme } from '@emotion/react';
import { LoaderCSS } from 'css';

const AtomLoader: FCWC<AtomLoaderTypes> = (props) => {
  const { loading, children, ...rest } = props;
  const theme = useTheme();
  if (!loading) return <>{children}</>;

  return (
    <AtomLottie
      {...rest}
      animationData={LoadingDefaultAnimation}
      css={() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        ${LoaderCSS('#000000')}
        ${theme?.loader?.css?.(theme, props)};
        ${rest?.css?.(theme, props)};
      `}
    />
  );
};

export default AtomLoader;
