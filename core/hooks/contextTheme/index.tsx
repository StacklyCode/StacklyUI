import { atom, useSetAtom, useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { atomFamily } from 'jotai/utils';
import { FCWC, ThemeContextProps, ThemesFamily } from 'types';
import { themeContextAtom } from 'jotais';

export const themeAtom = atomFamily((props: ThemesFamily) => {
  const { select, machine } = props;
  const themeAtomInFamily = atom(
    {
      key: 'light',
      theme: select['light']
    },
    (_, set, arg) => {
      const cookie = Cookies.get('THEME');
      const theme = cookie ?? 'light';
      if (!cookie) Cookies.set('THEME', theme, { expires: 365 });
      const nextState = (arg ??
        machine.transition(theme, 'TOGGLE').value.toString()) as string;
      const newTheme = {
        key: nextState,
        theme: select[nextState]
      };
      set(themeAtomInFamily, newTheme);
      Cookies.set('THEME', nextState, { expires: 365 });
    }
  );
  return themeAtomInFamily;
});

const ThemeContext: FCWC<ThemeContextProps> = (props) => {
  const { children, themes } = props;
  const setThemeContext = useSetAtom(themeContextAtom);
  const [theme, toggle] = useAtom(themeAtom(themes));
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
