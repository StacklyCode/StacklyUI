import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { IPalette, ThemeContextProps, ThemeKeyType } from '../../types';
import CreateThemes from '../../utils/createThemes';
import { ThemeProvider } from '@emotion/react';

type ContextProps = {
  key: string;
  theme: IPalette;
  toggle: (key?: string) => void;
};
export const ContextTheme = createContext({} as ContextProps);

const ThemeContext = (props: ThemeContextProps) => {
  const { children, themes, defaultTheme } = props;
  const [key, setKey] = useState(defaultTheme ?? 'light');

  const theme = useMemo(() => themes[key], [key]);

  const machine = useMemo(() => CreateThemes(themes), [themes]);

  const toggle = useCallback(
    (keyArg?: string) => {
      const keyNext = (keyArg ??
        machine?.machine
          .transition(key, 'TOGGLE')
          .value.toString()) as ThemeKeyType;
      setKey(keyNext);
      localStorage.setItem('theme', keyNext);
    },
    [key]
  );

  useEffect(() => {
    const keyStorage = localStorage.getItem('theme') as ThemeKeyType;
    setKey(keyStorage ?? defaultTheme ?? 'light');
  }, []);

  return (
    <ContextTheme.Provider
      value={{
        key,
        theme,
        toggle
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};

export default ThemeContext;
