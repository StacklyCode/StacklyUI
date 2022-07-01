import ThemeContext from 'hooks/contextTheme';
import type { AppProps } from 'next/app';

import { CreateThemes } from 'utils';
import { DefaultLayout } from 'layouts';
import GlobalStyles from 'styles';
import { ThemeDark, ThemeLight } from 'themes';

const themes = {
  light: ThemeLight,
  dark: ThemeDark
};

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext themes={ThemesWithMachine}>
      <DefaultLayout>
        <GlobalStyles />
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeContext>
  );
};

export default MyApp;
