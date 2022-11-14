import { css } from '@emotion/react';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomText,
  AtomWrapper
} from '../../index';
import { IOption } from 'components/atoms/AtomInput/types';
import { useAtomValue } from 'jotai';
import { ThemeToggleAtom } from 'jotais/theme';
import { useState } from 'react';
import Header from 'src/components/Header';
import WrapperComponent from 'src/components/WrapperComponent';

const ContainerCSS = css`
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

const OPTIONS = [
  {
    id: '1',
    label: 'Option 1',
    value: '1'
  },
  {
    id: '2',
    label: 'Option 2',
    value: '2'
  },
  {
    id: '3',
    label: 'Option 3',
    value: '3'
  },
  {
    id: '4',
    label: 'Option 4',
    value: '4'
  }
] as IOption[];

const Index = () => {
  const [pressToLoad, setPressToLoad] = useState(false);
  const PressToLoadClick = () => {
    setPressToLoad(true);
    const timer = setTimeout(() => {
      setPressToLoad(false);
      clearTimeout(timer);
    }, 2000);
  };

  const [fullscreen, setFullscreen] = useState(false);
  const [key, toggle] = useAtomValue(ThemeToggleAtom);

  return (
    <AtomWrapper as="main" css={() => ContainerCSS}>
      <Header />
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
        <WrapperComponent title="Disabled">
          <AtomButton disabled astheme="primary" />
          <AtomButton disabled astheme="secondary" />
          <AtomButton disabled astheme="accent" />
          <AtomButton disabled astheme="color2" />
          <AtomButton disabled astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Loading">
          <AtomButton loading="true" astheme="primary" />
          <AtomButton loading="true" astheme="secondary" />
          <AtomButton loading="true" astheme="accent" />
          <AtomButton loading="true" astheme="color2" />
          <AtomButton loading="true" astheme="color3" />
          <AtomButton astype="outline" loading="true" astheme="primary" />
          <AtomButton astype="outline" loading="true" astheme="secondary" />
          <AtomButton astype="outline" loading="true" astheme="accent" />
          <AtomButton astype="outline" loading="true" astheme="color2" />
          <AtomButton astype="outline" loading="true" astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Press To Load">
          <AtomButton
            loading={pressToLoad}
            astheme="primary"
            onClick={PressToLoadClick}
          >
            Press To Load
          </AtomButton>

          <AtomButton
            astype="outline"
            loading={pressToLoad}
            astheme="primary"
            onClick={PressToLoadClick}
          >
            Press To Load
          </AtomButton>
        </WrapperComponent>
      </WrapperComponent>
      <WrapperComponent title="Component Loader" type="main" dot>
        <WrapperComponent title="Medium: (Auto)">
          <AtomLoader loading="true" astheme="primary" />
          <AtomLoader loading="true" astheme="secondary" />
          <AtomLoader loading="true" astheme="accent" />
          <AtomLoader loading="true" astheme="color2" />
          <AtomLoader loading="true" astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Small">
          <AtomLoader astype="small" loading="true" astheme="primary" />
          <AtomLoader astype="small" loading="true" astheme="secondary" />
          <AtomLoader astype="small" loading="true" astheme="accent" />
          <AtomLoader astype="small" loading="true" astheme="color2" />
          <AtomLoader astype="small" loading="true" astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Button">
          <AtomLoader astype="button" loading="true" astheme="primary" />
          <AtomLoader astype="button" loading="true" astheme="secondary" />
          <AtomLoader astype="button" loading="true" astheme="accent" />
          <AtomLoader astype="button" loading="true" astheme="color2" />
          <AtomLoader astype="button" loading="true" astheme="color3" />
        </WrapperComponent>
        <WrapperComponent title="Fullscreen">
          <AtomButton onClick={() => setFullscreen(!fullscreen)}>
            Open Fullscreen Loader
          </AtomButton>
          <AtomLoader
            onClick={() => setFullscreen(!fullscreen)}
            astype="fullscreen"
            loading={fullscreen}
          />
        </WrapperComponent>
      </WrapperComponent>
      <WrapperComponent title="Component Input" type="main" dot>
        <WrapperComponent title="Text">
          <AtomInput
            labeltext="Label Input Example"
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
          <AtomInput
            astheme="secondary"
            labeltext="Label Input Example"
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
        </WrapperComponent>
        <WrapperComponent title="Select">
          <AtomInput
            type="select"
            labeltext="Label Input Example"
            options={OPTIONS}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
          />
          <AtomInput
            type="select"
            astheme="secondary"
            labeltext="Label Input Example"
            options={OPTIONS}
            input={{
              placeholder: 'Placeholder Input Example'
            }}
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
