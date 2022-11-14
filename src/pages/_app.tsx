import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import CreateThemes from 'utils/createThemes';
import { LayoutAnimation } from 'layouts';
import ThemeProvider from 'contexts/ThemeContext';
import { themes } from 'themes/index';

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider themes={themes} defaultTheme="light">
      <LayoutAnimation pathname={router.pathname}>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </LayoutAnimation>
    </ThemeProvider>
  );
};

export default MyApp;
