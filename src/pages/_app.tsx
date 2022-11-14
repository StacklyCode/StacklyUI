import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import CreateThemes from 'utils/createThemes';
import { LayoutAnimation } from 'layouts';
import useTheme from 'hooks/useTheme';
import { ThemeProvider } from '@emotion/react';
import { themes } from 'themes/index';

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  
  const theme = useTheme({
    themes: ThemesWithMachine,
    defaultTheme: themes.light
  });

  return (
    <ThemeProvider theme={theme}>
      <LayoutAnimation pathname={router.pathname}>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </LayoutAnimation>
    </ThemeProvider>
  );
};

export default MyApp;
