import type { AppProps } from 'next/app';
import CreateThemes from 'utils/createThemes';
import { themes } from 'themes/index';
import NormalizeContext from 'contexts/NormalizeContext';

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <NormalizeContext layout={{ pathname: router.pathname }}>
      <Component {...pageProps} key={router.pathname} />
    </NormalizeContext>
  );
};

export default MyApp;
