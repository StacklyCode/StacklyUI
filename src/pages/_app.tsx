import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import CreateThemes from 'utils/createThemes';
import { DefaultLayout } from 'layouts';
import ThemeContext from 'hooks/contextTheme';
import { themes } from 'themes/index';

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeContext themes={ThemesWithMachine} defaultTheme={themes?.light}>
      <DefaultLayout>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </DefaultLayout>
    </ThemeContext>
  );
};

export default MyApp;
