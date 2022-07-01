
import ThemeContext, { CreateThemes } from "hooks/ThemeContext";
import type { AppProps } from "next/app";
import { ThemeDark } from "src/styles/themes/dark";
import { ThemeLight } from "src/styles/themes/light";
import GlobalStyles from "styles/global";

const themes = {
  light: ThemeLight,
  dark: ThemeDark,
};

export const ThemesWithMachine = CreateThemes(themes);


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext themes={ThemesWithMachine}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContext>

  );
};

export default MyApp;

