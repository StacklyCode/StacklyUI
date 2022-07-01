import { useSetAtom, useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { FCWC, ThemeContextProps } from 'types';
import { ThemeAtom, ThemeContextAtom } from 'jotais';

const ThemeContext: FCWC<ThemeContextProps> = (props) => {
  const { children, themes } = props;
  const setThemeContext = useSetAtom(ThemeContextAtom);
  const [theme, toggle] = useAtom(ThemeAtom(themes));
  useEffect(
    () =>
      setThemeContext({
        key: theme.key,
        toggle
      }),
    [theme.key, toggle]
  );
  useEffect(() => {
    const key = Cookies.get('THEME');
    toggle(key);
  }, []);

  return <ThemeProvider theme={theme.theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
