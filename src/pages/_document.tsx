import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      ></link>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function() {
        const themes ={
            light: '#fff',
            dark: '#000',
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
        root.style.setProperty('background-color', themes?.[colorMode] ?? themes.light);
        window.localStorage.setItem('theme', colorMode);
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

export default Document;
