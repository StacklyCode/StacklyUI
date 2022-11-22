import GlobalStyles from '../../styles/GlobalStyles';
import ThemeContext from '../../contexts/ContextTheme';
import { ContextThemeProps } from '../../types';

type Props = {
  children: React.ReactNode;
  theme?: ContextThemeProps;
};

const ContextNormalize = (props: Props) => {
  const { children, theme } = props;
  return (
    <ThemeContext {...theme}>
      <GlobalStyles />
      {children}
    </ThemeContext>
  );
};

export default ContextNormalize;
