import { useSetAtom, useAtom } from 'jotai';
import { FC, useEffect } from 'react';
import { ThemeAtom, ThemeCallbackAtom, ThemeKeyAtom } from 'jotais/index';
import { ThemeContextProps, ThemeKeyType } from 'types';
import { ThemeProvider } from '@emotion/react';

const ThemeContext: FC<ThemeContextProps> = (props) => {
  const { children, themes, defaultTheme } = props;
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [themeCallback, setThemeCallback] = useAtom(ThemeCallbackAtom);
  const setThemeKey = useSetAtom(ThemeKeyAtom);

  useEffect(() => {
    const loadTheme = async () => {
      const keyTheme = localStorage.getItem('theme') as ThemeKeyType;
      const key = keyTheme;
      setTheme(themes?.select?.[key] ?? defaultTheme);
      setThemeKey(key ?? 'light');
      setThemeCallback(() => async (keyArgs: ThemeKeyType) => {
        const keyTheme = localStorage.getItem('theme') as ThemeKeyType;
        const key = keyArgs ?? keyTheme;
        setTheme(themes?.select?.[key] ?? defaultTheme);
        setThemeKey(key);
        localStorage.setItem('theme', key);
      });
    };
    loadTheme();
    return () => null;
  }, [!themeCallback]);

  return (
    <ThemeProvider theme={theme ?? defaultTheme}>{children}</ThemeProvider>
  );
};

export default ThemeContext;
