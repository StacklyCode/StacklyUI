import { useSetAtom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { ThemeAtom, ThemeCallbackAtom, ThemeKeyAtom } from '../../jotai';
import { useThemeProps, ThemeKeyType } from '../../types';

const useTheme = (props: useThemeProps) => {
  const { themes, defaultTheme } = props;
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [themeCallback, setThemeCallback] = useAtom(ThemeCallbackAtom);
  const setThemeKey = useSetAtom(ThemeKeyAtom);

  useEffect(() => {
    const loadTheme = async () => {
      const keyTheme = localStorage.getItem('theme') as ThemeKeyType;
      const key = keyTheme ?? 'light';
      setTheme(themes?.select?.[key] ?? defaultTheme);
      setThemeKey(key);
      setThemeCallback(() => async (keyArgs: ThemeKeyType) => {
        const keyTheme =
          localStorage.getItem('theme') ?? ('light' as ThemeKeyType);
        const key =
          keyArgs ??
          (themes?.machine
            .transition(keyTheme, 'TOGGLE')
            .value.toString() as ThemeKeyType);
        setTheme(themes?.select?.[key] ?? defaultTheme);
        setThemeKey(key);
        localStorage.setItem('theme', key);
      });
    };
    loadTheme();
    return () => null;
  }, [!themeCallback]);

  return theme ?? defaultTheme;
};

export default useTheme;
