import GlobalStyles from '../../styles/GlobalStyles';
import ThemeContext from '../../contexts/ContextTheme';
import { ContextThemeProps } from '../../types';
import { themes } from 'themes/index';

const ContextNormalize = (props: ContextThemeProps) => {
  const { children, themes: themesGet } = props;
  return (
    <ThemeContext themes={themesGet ?? themes} {...props}>
      <GlobalStyles />
      {children}
    </ThemeContext>
  );
};

export default ContextNormalize;
