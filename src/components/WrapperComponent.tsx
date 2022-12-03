import { css } from '@emotion/react';
import { AtomWrapper } from 'components/atoms';
import { WrapperBlurCSS } from 'css';
import useTheme from 'hooks/useTheme';
import { useMemo, useRef } from 'react';
import isBackDark from 'utils/isBackDark';
import randomNumberBetween from 'utils/randomNumberBetween';

type IWrapperComponent = {
  title: string;
  children?: React.ReactNode;
  type?: 'main' | 'sub';
  dot?: boolean;
};

const initDot = {
  top: '50%',
  left: '50%',
  backgroundColor: '#ffffff00',
  shadow: `transparent 0px 0px 0px 0px`
};

const WrapperComponent = (props: IWrapperComponent) => {
  const { title, children, type = 'Sub', dot } = props;
  const { key, theme } = useTheme();
  const ref = useRef<HTMLDivElement>();

  const backDot = useMemo(() => {
    if (!ref.current || !theme || !dot) return initDot;
    const { width, height } = ref.current.getBoundingClientRect();
    const min = Math.ceil(height * 0.5);
    const max = Math.ceil(height * 0.7);
    const randomSize = randomNumberBetween(min, max);
    const colors = Object.values(theme?.dot?.color);
    const randomColor = `${
      colors[randomNumberBetween(0, colors.length - 1)] ?? 'transparent'
    }a7`;
    const minWidth = Math.ceil(randomSize);
    const maxWidth = Math.ceil(width - randomSize);
    const randomLeft = randomNumberBetween(minWidth, maxWidth);
    const minHeight = Math.ceil(randomSize);
    const maxHeight = Math.ceil(height - randomSize);
    const randomTop = randomNumberBetween(minHeight, maxHeight);
    return {
      size: `${randomSize}px`,
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
      backgroundColor: randomColor,
      shadow: `${randomColor} 0px 0px ${randomSize}px ${randomSize / 4}px`
    };
  }, [ref, theme]);

  return (
    <AtomWrapper
      ref={ref}
      css={(theme) => css`
        width: 100%;
        height: max-content;
        flex-direction: ${type === 'main' ? 'column' : 'row'};
        position: relative;
        justify-content: flex-start;
        align-items: center;
        background-color: transparent;
        gap: ${type === 'main' ? '30px' : '10px'};
        overflow: hidden;
        border: 1px solid ${theme?.general?.properties.tooltip ?? '#0072f5'};
        border-radius: 4px;
        padding: 40px 30px;

        ::after {
          font-family: 'Inter', sans-serif;
          content: '${title}';
          color: ${isBackDark(
            theme?.general?.properties?.tooltip ?? '#0072f5'
          )};
          ${WrapperBlurCSS(theme?.general?.properties?.tooltip ?? 'red')}
          padding: 6px 20px;
          border-radius: 0px 0px 4px 0px;
          font-size: 10px;
          font-weight: 500;
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: ${type === 'main' ? 9999 : 0};
        }
        ${dot &&
        css`
          ${WrapperBlurCSS(theme?.general?.properties?.blur ?? 'red')}
          ::before {
            content: '';
            position: absolute;
            top: ${backDot?.top};
            left: ${backDot?.left};
            transform: translate(-50%, -50%);
            width: 0px;
            height: 0px;
            background: ${backDot?.backgroundColor};
            box-shadow: ${backDot?.shadow};
            z-index: -4;
            transition: all 0.8s ease;
          }
        `}
        :hover {
          background-color: ${key === 'dark'
            ? 'rgba(57, 57, 85, 0.149)'
            : 'rgba(206, 203, 220, 0.112)'};
        }
        transition: all 0.4s ease;
      `}
    >
      {children}
    </AtomWrapper>
  );
};
export default WrapperComponent;
