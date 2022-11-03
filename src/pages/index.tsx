import { css } from '@emotion/react';
import {
  AtomButton,
  AtomLoader,
  AtomText,
  AtomWrapper
} from 'components/atoms';
import { useAtomValue } from 'jotai';
import { ThemeToggleAtom } from 'jotais/theme';
import { useState } from 'react';
import WrapperComponent from 'src/components/WrapperComponent';

const WrapperCSS = css`
  padding: 30px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

const Index = () => {
  const [fullscreen, setFullscreen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [key, toggle] = useAtomValue(ThemeToggleAtom);
  return (
    <AtomWrapper css={() => WrapperCSS}>
      <AtomText
        css={() => css`
          font-size: 32px;
        `}
      >
        StacklyUI
      </AtomText>
      <WrapperComponent title={`Component Theme: Active(${key})`} dot>
        <AtomButton
          astype={key === 'dark' ? 'flat' : 'outline'}
          onClick={() => toggle('dark')}
        >
          Dark
        </AtomButton>
        <AtomButton
          astype={key === 'light' ? 'flat' : 'outline'}
          onClick={() => toggle('light')}
        >
          Light
        </AtomButton>
      </WrapperComponent>

      <WrapperComponent title="Component Button" type="main" dot>
        <WrapperComponent title="Flatten">
          <AtomButton astheme="primary" />
          <AtomButton astheme="secondary" />
          <AtomButton astheme="accent" />
          <AtomButton astheme="color2" />
          <AtomButton astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Outline">
          <AtomButton astype="outline" astheme="primary" />
          <AtomButton astype="outline" astheme="secondary" />
          <AtomButton astype="outline" astheme="accent" />
          <AtomButton astype="outline" astheme="color2" />
          <AtomButton astype="outline" astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Loading">
          <AtomButton loading astheme="primary" />
          <AtomButton loading astheme="secondary" />
          <AtomButton loading astheme="accent" />
          <AtomButton loading astheme="color2" />
          <AtomButton loading astheme="color3" />
          <AtomButton astype="outline" loading astheme="primary" />
          <AtomButton astype="outline" loading astheme="secondary" />
          <AtomButton astype="outline" loading astheme="accent" />
          <AtomButton astype="outline" loading astheme="color2" />
          <AtomButton astype="outline" loading astheme="color3" />
        </WrapperComponent>
      </WrapperComponent>
      <WrapperComponent title="Component Loader" type="main" dot>
        <WrapperComponent title="Medium: (Auto)">
          <AtomLoader loading astheme="primary" />
          <AtomLoader loading astheme="secondary" />
          <AtomLoader loading astheme="accent" />
          <AtomLoader loading astheme="color2" />
          <AtomLoader loading astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Small">
          <AtomLoader astype="small" loading astheme="primary" />
          <AtomLoader astype="small" loading astheme="secondary" />
          <AtomLoader astype="small" loading astheme="accent" />
          <AtomLoader astype="small" loading astheme="color2" />
          <AtomLoader astype="small" loading astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Button">
          <AtomLoader astype="button" loading astheme="primary" />
          <AtomLoader astype="button" loading astheme="secondary" />
          <AtomLoader astype="button" loading astheme="accent" />
          <AtomLoader astype="button" loading astheme="color2" />
          <AtomLoader astype="button" loading astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Fullscreen">
          <AtomButton onClick={() => setFullscreen(!fullscreen)}>
            Open Fullscreen
          </AtomButton>
          <AtomLoader
            onClick={() => setFullscreen(!fullscreen)}
            astype="fullscreen"
            loading={fullscreen}
          />
        </WrapperComponent>
      </WrapperComponent>
    </AtomWrapper>
  );
};

export default Index;

{
  /* <AtomWrapper></AtomWrapper>
<AtomWrapper>
  <AtomLoader astype="small" loading={loading} />
  <AtomLoader astype="button" loading={loading} />
</AtomWrapper> */
}

{
  /* <AtomButton onClick={() => setLoading(!loading)}>Loading</AtomButton>
      <AtomButton onClick={() => setFullscreen(!fullscreen)}>
        Fullscreen
      </AtomButton>
      <AtomButton loading>Cargando</AtomButton>
      <AtomButton astype="outline" loading>
        Cargando
      </AtomButton>
      <AtomLoader loading={loading} />
      <AtomLoader
        onClick={() => setFullscreen(!fullscreen)}
        astype="fullscreen"
        loading={fullscreen}
      />
      <AtomIcon
        css={() => css`
          width: 30px;
          height: 30px;
        `}
      /> */
}
