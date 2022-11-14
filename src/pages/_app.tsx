import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import CreateThemes from 'utils/createThemes';
import { LayoutAnimation } from 'layouts';
import ThemeContext from 'hooks/contextTheme';
import { themes } from 'themes/index';

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeContext themes={ThemesWithMachine} defaultTheme={themes?.light}>
      <LayoutAnimation pathname={router.pathname}>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </LayoutAnimation>
    </ThemeContext>
  );
};

export default MyApp;
