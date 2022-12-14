import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        const defaultTheme = 'stackly-dark';
        const themes = {
          'stackly-dark': '#000000',
        }
        function getInitialColorMode() {
          const persistedColorPreference = window.localStorage.getItem('theme');
          const hasPersistedPreference = typeof persistedColorPreference === 'string';
          if (hasPersistedPreference) {
            return persistedColorPreference;
          }
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          const hasMediaQueryPreference = typeof mql.matches === 'boolean';
          if (hasMediaQueryPreference) {
            return mql.matches ? 'dark' : 'light';
          }
          return 'light';
        }
        const colorMode = getInitialColorMode();
        const root = document.documentElement;
        if(themes?.[colorMode]){
          root.style.setProperty('background-color', themes?.[colorMode] ?? themes.light);
          window.localStorage.setItem('theme', colorMode);
        }else{
          root.style.setProperty('background-color', themes?.[defaultTheme]);
          window.localStorage.setItem('theme', defaultTheme);
        }
      })();
    `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
