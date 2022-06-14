import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { Theme } from "styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
