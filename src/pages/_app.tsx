import type { AppProps } from 'next/app';
import LayoutNormalize from 'layouts/LayoutNormalize';
import LayoutAnimation from 'layouts/LayoutAnimation';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <LayoutNormalize defaultTheme="stackly-dark">
      <LayoutAnimation pathname={router.pathname}>
        <Component {...pageProps} key={router.pathname} />
      </LayoutAnimation>
    </LayoutNormalize>
  );
};

export default MyApp;
