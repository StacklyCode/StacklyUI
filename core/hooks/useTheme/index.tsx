import { ContextThemeReact } from 'contexts/ContextTheme';
import { useContext } from 'react';

const useTheme = () => {
  const CONTEXT = useContext(ContextThemeReact);
  return CONTEXT;
};

export default useTheme;
