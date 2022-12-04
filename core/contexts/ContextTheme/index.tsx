import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { IPalette, ContextThemeProps, ThemeKeyType } from '../../types';
import CreateThemes from '../../utils/createThemes';
import { ThemeProvider } from '@emotion/react';
import { themes as themesDefault } from '../../themes';

type ContextProps = {
  key: string;
  theme: IPalette;
  themes: Record<string, IPalette>;
  toggle: (key?: string) => void;
};
export const ContextThemeReact = createContext({} as ContextProps);

const ContextTheme = (props: ContextThemeProps) => {
  const { children, themes = themesDefault, defaultTheme } = props;
  const [key, setKey] = useState(defaultTheme);

  const theme = useMemo(() => (themes[key] ?? {}) as IPalette, [key]);

  const machine = useMemo(() => CreateThemes(themes), [themes]);

  const toggle = useCallback(
    (keyArg?: string) => {
      const keyNext = (keyArg ??
        machine?.machine
          .transition(key, 'TOGGLE')
          .value.toString()) as ThemeKeyType;
      setKey(keyNext);
      localStorage.setItem('theme', keyNext);
      document.documentElement.style.setProperty(
        'background-color',
        themes?.[keyNext]?.general?.properties?.background ?? '#ffffff'
      );
    },
    [key]
  );

  useEffect(() => {
    const keyStorage = localStorage.getItem('theme') as ThemeKeyType;
    setKey(keyStorage ?? defaultTheme);
  }, []);

  return (
    <ContextThemeReact.Provider
      value={{
        key,
        theme,
        themes,
        toggle
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextThemeReact.Provider>
  );
};

export default ContextTheme;
