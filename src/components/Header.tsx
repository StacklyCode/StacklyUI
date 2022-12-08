import { css } from '@emotion/react';
import { AtomIcon, AtomInput, AtomText, AtomWrapper } from 'components/atoms';
import { IconCSS, WrapperBlurSTDarkCSS } from 'css';
import { useEffect, useState } from 'react';
import changeBrightness from 'utils/changeBrightness';
import isBackDark from 'utils/isBackDark';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsOffset(window.pageYOffset > 0);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AtomWrapper
      as="nav"
      css={() => css`
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: max-content;
        background-color: transparent;
        z-index: 9999;
      `}
    >
      <AtomWrapper
        css={(theme) => css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 90px;
          height: 40px;
          margin-top: ${isOffset ? '-40px' : '0px'};
          transition: margin-top 0.3s ease-in-out;
          background-color: ${theme?.header?.properties?.background?.toString() ??
          '#ffffff'};
          border-bottom: 1px solid
            ${changeBrightness(
              theme?.header?.properties?.border?.toString() ?? '#ffffff',
              20
            )};
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          z-index: 2;
          transition: all 0.3s ease-in-out;
        `}
      >
        <AtomText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam 😎
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        css={(theme) => css`
          flex-direction: row;
          padding: 10px 90px;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);

          ${isOffset &&
          css`
            ${WrapperBlurSTDarkCSS(
              theme?.header?.properties?.blur ?? '#ffffff'
            )}
            border-bottom: 1px solid
            ${changeBrightness(
              theme?.header?.properties?.border?.toString() ?? '#ffffff',
              20
            )};
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          `}
          transition: all 0.3s ease-in-out;
        `}
      >
        <AtomIcon
          css={(theme) => css`
            width: 150px;
            ${IconCSS(
              isBackDark(theme?.header?.properties?.background ?? '#fff')
            )}
          `}
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/logo.svg"
        />
        <AtomInput
          input={{
            placeholder: 'Search'
          }}
        />
        <ToggleTheme />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Header;
