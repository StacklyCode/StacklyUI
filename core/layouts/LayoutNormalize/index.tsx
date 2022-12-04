import GlobalStyles from '../../styles/GlobalStyles';
import ThemeContext from '../../contexts/ContextTheme';
import { ContextThemeProps } from '../../types';
import { themes } from 'themes/index';

type Props = Omit<ContextThemeProps, 'themes'> & {
  children?: React.ReactNode;
};

const ContextNormalize = (props: Props) => {
  const { children } = props;
  return (
    <ThemeContext themes={themes} {...props}>
      <GlobalStyles />
      {children}
    </ThemeContext>
  );
};

export default ContextNormalize;
