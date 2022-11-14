import { ContextTheme } from 'contexts/ThemeContext';
import { useContext } from 'react';

const useToggleTheme = () => {
  const CONTEXT = useContext(ContextTheme);
  return CONTEXT;
};

export default useToggleTheme;
