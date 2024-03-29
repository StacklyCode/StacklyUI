import { css } from '@emotion/react';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomText,
  AtomWrapper,
  AtomImage,
  AtomIcon,
  IPalette,
  AtomLink,
  AtomTextEditor
} from 'index';
import { IOption } from 'components/atoms/AtomInput/types';
import useToggleTheme from 'hooks/useTheme';
import { useMemo, useState } from 'react';
import Header from 'src/components/Header';
import WrapperComponent from 'src/components/WrapperComponent';
import { useFormik } from 'formik';

const ContainerCSS = css`
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const OPTIONS = Array.from({ length: 100 }, (_, i) => ({
  id: `${i}`,
  label: `Option ${i}`,
  value: `${i}`
})) as IOption[];

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
  const { key, toggle, themes } = useToggleTheme();

  const themesFilter = useMemo(
    () =>
      Object.entries(themes ?? {}).reduce(
        (acc, [key, data]) => {
          const keyGet = key?.split('-')[0] ?? 'none';
          const getTheme = acc[keyGet];
          const keyfirstLetter = `${keyGet[0].toUpperCase()}${keyGet.slice(1)}`;
          const newAcc = getTheme
            ? {
                ...acc,
                [keyGet]: {
                  ...getTheme,
                  themes: [...getTheme.themes, { key, data }]
                }
              }
            : {
                ...acc,
                [keyGet]: {
                  key: keyGet,
                  name: keyfirstLetter,
                  themes: [{ key, data }]
                }
              };
          return newAcc;
        },
        {} as {
          [key: string]: {
            key: string;
            name: string;
            themes: { key: string; data: IPalette }[];
          };
        }
      ),
    [themes]
  );

  const themesArray = useMemo(
    () => Object.values(themesFilter ?? {}),
    [themesFilter]
  );

  const formik = useFormik({
    initialValues: {
      images: []
    },
    onSubmit: (values) => {
      console.warn(values);
    }
  });

  return (
    <>
      <AtomWrapper as="main" css={() => ContainerCSS}>
        <Header />
        <AtomWrapper
          css={() => css`
            gap: 30px;
            padding: 10px 90px;
            @media (max-width: 768px) {
              padding: 10px 30px;
            }
          `}
        >
          <AtomText
            css={() => css`
              font-size: 32px;
            `}
          >
            {key ?? 'Theme Without Name'}
          </AtomText>

          <WrapperComponent title={`NPM Package: @stacklycore/ui`} dot>
            <WrapperComponent title="Installation (npm)" overflow>
              <AtomText>npm i @stacklycore/ui</AtomText>
            </WrapperComponent>
            <WrapperComponent title="Installation (yarn)" overflow>
              <AtomText>yarn add @stacklycore/ui</AtomText>
            </WrapperComponent>
            <WrapperComponent title="Installation (yarn)" overflow>
              <AtomLink
                href="https://www.npmjs.com/package/@stacklycore/ui"
                target={'_blank'}
                css={(theme) => css`
                  color: ${theme?.general?.color?.accent ?? 'black'};
                  font-weight: bold;
                  cursor: pointer;
                `}
              >
                Link to NPM Package
              </AtomLink>
            </WrapperComponent>
          </WrapperComponent>
          <WrapperComponent
            title={`Component Theme: Active(${key})`}
            type="main"
            dot
          >
            {themesArray.map(({ key: asKey, name, themes }) => (
              <WrapperComponent key={asKey} title={`Theme ${name}`}>
                {themes?.map((e) => (
                  <AtomButton
                    key={e?.key}
                    astype={key === e?.key ? 'flat' : 'outline'}
                    onClick={() => toggle(e?.key)}
                  >
                    {e?.key ?? 'Theme Without Name'}
                  </AtomButton>
                ))}
              </WrapperComponent>
            ))}
            {/* {Object.entries(themes ?? {}).map(([keyTheme, data]) => (
            <AtomButton
              key={keyTheme}
              astype={key === keyTheme ? 'flat' : 'outline'}
              onClick={() => toggle(keyTheme)}
            >
              {data?.name ?? 'Theme Without Name'}
            </AtomButton>
          ))} */}
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
            <WrapperComponent title="Gradient">
              <AtomButton astype="gradient" astheme="primary" />
              <AtomButton astype="gradient" astheme="secondary" />
              <AtomButton astype="gradient" astheme="accent" />
              <AtomButton astype="gradient" astheme="color2" />
              <AtomButton astype="gradient" astheme="color3" />
            </WrapperComponent>
            <WrapperComponent title="Disabled">
              <AtomButton disabled astheme="primary" />
              <AtomButton disabled astheme="secondary" />
              <AtomButton disabled astheme="accent" />
              <AtomButton disabled astheme="color2" />
              <AtomButton disabled astheme="color3" />
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

          <WrapperComponent title="Component Icon" dot>
            <AtomIcon size={20} icon="fas fa-home" />
            <AtomIcon size={20} icon="fas fa-user" />
            <AtomIcon size={20} icon="fas fa-cog" />
            <AtomIcon size={20} icon="fas fa-bell" />
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
                labeltext="Label Input Example"
                input={{
                  placeholder: 'Placeholder Input Example'
                }}
              />
            </WrapperComponent>
            <WrapperComponent title="Text Editor">
              <AtomTextEditor />
            </WrapperComponent>
            <WrapperComponent title="Drag and Drop">
              <AtomInput
                id="images"
                formik={formik}
                type="dragdrop"
                input={{
                  css: () => css`
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                  `,
                  cssDragDrop: () => css`
                    img {
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                    }
                  `,
                  cssDragDropIcon: () => css`
                    right: 0;
                    top: -5px;
                  `,
                  preview: false,
                  maxfiles: 1,
                  isDragDropIcon: true,
                  placeholder: 'Placeholder Input Example',
                  textDragDrop: ''
                }}
              />
              <AtomInput
                id="images"
                formik={formik}
                type="dragdrop"
                labeltext=" Drag and Drop Input Example"
                input={{
                  placeholder: 'Placeholder Input Example'
                }}
              />
              <AtomInput
                id="images"
                formik={formik}
                type="dragdrop"
                labeltext=" Drag and Drop Input Example"
                input={{
                  maxfiles: 1,
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
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  placeholder: 'Placeholder Input Example'
                }}
              />
              <AtomInput
                type="select"
                labeltext="Label Input Example"
                options={OPTIONS}
                select={{
                  search: true
                }}
                input={{
                  placeholder: 'Placeholder Input Example'
                }}
              />
            </WrapperComponent>
            <WrapperComponent title="Toggle">
              <AtomInput
                type="toggle"
                labelToggle="Toggle Input Example"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  placeholder: 'Placeholder Input Example',
                  astheme: 'primary'
                }}
              />
              <AtomInput
                type="toggle"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'secondary'
                }}
              />
              <AtomInput
                type="toggle"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'accent'
                }}
              />
              <AtomInput
                type="toggle"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'color2'
                }}
              />
            </WrapperComponent>

            <WrapperComponent title="Checkbox">
              <AtomInput
                type="checkbox"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  placeholder: 'Placeholder Input Example',
                  astheme: 'primary'
                }}
              />
              <AtomInput
                type="checkbox"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'secondary'
                }}
              />
              <AtomInput
                type="checkbox"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'accent'
                }}
              />
              <AtomInput
                type="checkbox"
                labeltext="Label Input Example"
                options={OPTIONS}
                input={{
                  checked: true,
                  placeholder: 'Placeholder Input Example',
                  astheme: 'color2'
                }}
              />
            </WrapperComponent>
          </WrapperComponent>

          <WrapperComponent title={`Component Images`} dot>
            <AtomImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
            <AtomImage
              css={() => css`
                width: 200px;
                height: 200px;
              `}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            />
            <AtomImage
              css={() => css`
                width: 100px;
                height: 100px;
              `}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            />
          </WrapperComponent>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default Index;
