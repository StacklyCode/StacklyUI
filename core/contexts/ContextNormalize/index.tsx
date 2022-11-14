import { LayoutAnimation } from '../../layouts';
import GlobalStyles from '../../styles/GlobalStyles';
import ThemeContext from '../ContextTheme';
import { ContextThemeProps } from '../../types';
import { LayoutAnimationProps } from '../../layouts/LayoutAnimation';

type Props = {
  children: React.ReactNode;
  theme?: ContextThemeProps;
  layout?: LayoutAnimationProps;
};

const ContextNormalize = (props: Props) => {
  const { children, layout, theme } = props;
  return (
    <ThemeContext {...theme}>
      <LayoutAnimation {...layout}>
        <GlobalStyles />
        {children}
      </LayoutAnimation>
    </ThemeContext>
  );
};

export default ContextNormalize;
