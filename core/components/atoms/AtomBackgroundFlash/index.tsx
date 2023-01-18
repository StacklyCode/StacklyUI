type Props = {
  theme: string;
};
const BackgroundFlash = (props: Props) => {
  const { theme } = props;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  const themes = {${theme}
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
  }
})();
`
      }}
    />
  );
};

export default BackgroundFlash;
