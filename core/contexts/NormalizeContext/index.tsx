import { LayoutAnimation } from '../../layouts';
import GlobalStyles from '../../styles/GlobalStyles';
import ThemeContext from '../../contexts/ThemeContext';
import { ThemeContextProps } from '../../types';
import { LayoutAnimationProps } from '../../layouts/LayoutAnimation';

type Props = {
  children: React.ReactNode;
  theme?: ThemeContextProps;
  layout?: LayoutAnimationProps;
};

const NormalizeContext = (props: Props) => {
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

export default NormalizeContext;
