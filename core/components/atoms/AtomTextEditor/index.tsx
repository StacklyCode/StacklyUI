/* eslint-disable react/no-unused-prop-types */
import { css, SerializedStyles } from '@emotion/react';
import { Editor } from '@tiptap/core';
import { EditorContent, useEditor } from '@tiptap/react';
import { FC, useEffect } from 'react';

import { Color } from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import HardBreak from '@tiptap/extension-hard-break';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import UnderLine from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import AtomIcon from '../AtomIcon';
import AtomInput from '../AtomInput';
import AtomWrapper from '../AtomWrapper';
import {
  ButtonStyled,
  GlobalStyles,
  InputColorStyled,
  SeparateVerticalStyled
} from './styled';
import { AtomTextEditorType } from './types';

HardBreak.configure({
  keepMarks: false
});

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`;

type MenuBarType = {
  editor?: Editor | null;
  options?: AtomTextEditorType['options'];
  customCSSH?: SerializedStyles;
};

const MenuBar: FC<MenuBarType> = (props) => {
  const { editor } = props;
  // const [isOpen, setIsOpen] = useState(false);
  // const [loadingFile, setLoadingFile] = useState(false);
  // const [image, setImage] = useState({} as File | string);
  // const [video, setVideo] = useState({} as File | string);
  // const [isOpenUrl, setIsOpenUrl] = useState(false);
  // const [isOpenVideo, setIsOpenVideo] = useState(false);
  // const [url, setUrl] = useState('');

  // const ref = useRef<HTMLButtonElement>(null);
  // const ref2 = useRef<HTMLButtonElement>(null);
  // const ref3 = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(event.target as Node)) {
  //       setIsOpenUrl(false);
  //     }
  //     if (ref2.current && !ref2.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //     if (ref3.current && !ref3.current.contains(event.target as Node)) {
  //       setIsOpenVideo(false);
  //     }
  //   };

  //   document.addEventListener(`mousedown`, handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener(`mousedown`, handleClickOutside, true);
  //   };
  // }, [ref, ref2, ref3]);

  const options: AtomTextEditorType['options'] = {
    selectFont: true,
    typeTags: true,
    textAligns: true,
    ...(props?.options ?? {})
  };

  return (
    <>
      <AtomWrapper
        className="menu-editor"
        css={() => css`
          gap: 10px;
          flex-direction: row;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          padding: 0px 0px 20px 0px;
          ButtonStyled {
            flex-basis: 40px;
            flex-grow: 1;
            width: 40px;
            height: 40px;
            font-size: 15px;
            overflow: hidden;
            background-color: #fafafa;
            border: none;
            color: #373737;
            font-weight: bold;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          }
          ${props?.customCSSH ?? css``}
        `}
      >
        <InputColorStyled
          type="color"
          onInput={(event) =>
            editor
              ?.chain()
              .focus()
              .setColor(`${event.currentTarget.value}`)
              .run()
          }
          value={editor?.getAttributes('textStyle').color ?? '#ffffff'}
        />
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleBold().run()}
          isActive={editor?.isActive('bold')}
        >
          <AtomIcon
            color={editor?.isActive('bold') ? '#fafafa' : '#373737'}
            size={12}
            icon="fas fa-bold"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          isActive={editor?.isActive('italic')}
        >
          <AtomIcon
            size={12}
            color={editor?.isActive('italic') ? '#fafafa' : '#373737'}
            icon="fas fa-italic"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          isActive={editor?.isActive('strike')}
        >
          <AtomIcon
            size={12}
            color={editor?.isActive('strike') ? '#fafafa' : '#373737'}
            icon="fas fa-strikethrough"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          isActive={editor?.isActive('underline')}
        >
          <AtomIcon
            size={12}
            color={editor?.isActive('underline') ? '#fafafa' : '#373737'}
            icon="fas fa-underline"
          />
        </ButtonStyled>
        {options?.selectFont ? (
          <>
            <SeparateVerticalStyled />
            <AtomInput
              type="select"
              label={{
                css: () => css`
                  width: 200px;
                `
              }}
              options={[
                { id: '0', value: 'Montserrat', label: 'Montserrat' },
                { id: '1', value: 'Inter', label: 'Inter' },
                {
                  id: '2',
                  value: 'Comic Sans MS, Comic Sans',
                  label: 'Comic Sans MS, Comic Sans'
                },
                { id: '3', value: 'Arial', label: 'Arial' },
                { id: '4', value: 'serif', label: 'serif' },
                { id: '5', value: 'monospace', label: 'monospace' },
                { id: '6', value: 'cursive', label: 'cursive' }
              ]}
              select={{
                onChange: (e) =>
                  editor
                    ?.chain()
                    .focus()
                    .setFontFamily(`${e.target.value}`)
                    .run(),
                css: () => css`
                  width: 100%;
                  font-size: 10px;
                  option {
                    font-size: 10px;
                  }

                  span {
                    display: none;
                  }
                `
              }}
            />
          </>
        ) : null}
        {options.textAligns ? (
          <>
            <SeparateVerticalStyled />
            <ButtonStyled
              onClick={() => editor?.chain().focus().setTextAlign('left').run()}
              isActive={editor?.isActive({ textAlign: 'left' })}
            >
              <AtomIcon
                size={12}
                color={
                  editor?.isActive({ textAlign: 'left' })
                    ? '#fafafa'
                    : '#373737'
                }
                icon="fas fa-align-left"
              />
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().setTextAlign('center').run()
              }
              isActive={editor?.isActive({ textAlign: 'center' })}
            >
              <AtomIcon
                size={12}
                color={
                  editor?.isActive({ textAlign: 'center' })
                    ? '#fafafa'
                    : '#373737'
                }
                icon="fas fa-align-center"
              />
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().setTextAlign('right').run()
              }
              isActive={editor?.isActive({ textAlign: 'right' })}
            >
              <AtomIcon
                size={12}
                color={
                  editor?.isActive({ textAlign: 'right' })
                    ? '#fafafa'
                    : '#373737'
                }
                icon="fas fa-align-right"
              />
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().setTextAlign('justify').run()
              }
              isActive={editor?.isActive({ textAlign: 'justify' })}
            >
              <AtomIcon
                size={12}
                color={
                  editor?.isActive({ textAlign: 'justify' })
                    ? '#fafafa'
                    : '#373737'
                }
                icon="fas fa-align-justify"
              />
            </ButtonStyled>
          </>
        ) : null}
        {options?.typeTags ? (
          <>
            <SeparateVerticalStyled />
            <ButtonStyled
              onClick={() => editor?.chain().focus().setParagraph().run()}
              isActive={editor?.isActive('paragraph')}
            >
              <AtomIcon
                size={12}
                color={editor?.isActive('paragraph') ? '#fafafa' : '#373737'}
                icon="fas fa-paragraph"
              />
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 1 }).run()
              }
              isActive={editor?.isActive('heading', { level: 1 })}
            >
              H1
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
              isActive={editor?.isActive('heading', { level: 2 })}
            >
              H2
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 3 }).run()
              }
              isActive={editor?.isActive('heading', { level: 3 })}
            >
              H3
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 4 }).run()
              }
              isActive={editor?.isActive('heading', { level: 4 })}
            >
              H4
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 5 }).run()
              }
              isActive={editor?.isActive('heading', { level: 5 })}
            >
              H5
            </ButtonStyled>
            <ButtonStyled
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 6 }).run()
              }
              isActive={editor?.isActive('heading', { level: 6 })}
            >
              H6
            </ButtonStyled>
          </>
        ) : null}
        {/* <SeparateVerticalStyled /> */}
        {/* <ButtonStyled
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={editor?.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={editor?.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        className={editor?.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().setHardBreak().run()}
      >
        hard break
      </ButtonStyled> */}
        {/* <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <AtomIcon size={12} color="#373737" icon="fas fa-image" />
          {isOpen && (
            <AtomWrapper
              ref={ref2}
              css={() => css`
                position: absolute;
                background-color: #ffffff;
                padding: 30px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :before {
                  content: '';
                  z-index: 100;
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              {loadingFile ? (
                <AtomLoader
                  loading
                  color="#f1576c"
                  height="200px"
                  type="small"
                />
              ) : (
                <>
                  <AtomInput
                    height="150px"
                    labelWidth="100%"
                    width="100%"
                    type="dragdrop"
                    onChangeDrop={(e) => {
                      setImage(e);
                    }}
                  />

                  <AtomWrapper
                    margin="10px"
                    customCSS={css`
                      ${typeof image === 'object' &&
                      image.name &&
                      css`
                        span {
                          color: #a0a0a0;
                        }
                        input {
                          background-color: #fcfcfc;
                        }
                      `}
                    `}
                  >
                    <AtomText
                      fontSize="12px"
                      fontWeight={600}
                      margin="0px 15px 0px 0px"
                    >
                      Url:
                    </AtomText>
                    <AtomInput
                      customCSS={css`
                        span {
                          display: none;
                        }
                      `}
                      labelWidth="100%"
                      width="100%"
                      type="text"
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </AtomWrapper>
                  <AtomWrapper flexDirection="row" justifyContent="flex-end">
                    <AtomButton
                      customCSS={css`
                        padding: 5px;
                        background-color: #f1576c;
                      `}
                      onClick={async () => {
                        if (typeof image === 'string') {
                          editor
                            ?.chain()
                            .focus()
                            .setImage({ src: image })
                            .run();
                          setImage({} as File);
                          setLoadingFile(true);
                          setTimeout(() => {
                            setLoadingFile(false);
                            setIsOpen(false);
                          }, 500);
                        } else if (image.name) {
                          setLoadingFile(true);
                          await uploadImage(image, {
                            name: 'textbox',
                            orgcode: 'IXU-0001'
                          })
                            .then((res) => {
                              setLoadingFile(false);
                              setIsOpen(false);
                              editor
                                ?.chain()
                                .focus()
                                .setImage({ src: res })
                                .run();
                              setImage({} as File);
                            })
                            .catch((err) => {
                              setLoadingFile(false);
                              console.warn(err);
                            });
                        }
                        setIsOpen(false);
                      }}
                    >
                      <AtomIcon
                        height="16px"
                        width="16px"
                        color="white"
                        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                      />
                    </AtomButton>
                  </AtomWrapper>
                </>
              )}
            </AtomWrapper>
          )}
        </ButtonStyled>
        <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpenUrl(true);
          }}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/link-solid.svg"
          />
          {isOpenUrl && (
            <AtomWrapper
              refObject={ref}
              customCSS={css`
                position: absolute;
                background-color: #ffffff;
                padding: 10px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :after {
                  content: '';
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              <AtomText
                fontSize="12px"
                fontWeight={600}
                margin="0px 15px 0px 0px"
              >
                Url:
              </AtomText>
              <AtomInput
                customCSS={css`
                  span {
                    display: none;
                  }
                `}
                labelWidth="100%"
                width="90%"
                type="text"
                value={url as string}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <AtomWrapper
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="30%"
              >
                <AtomButton
                  onClick={() => {
                    editor
                      ?.chain()
                      .focus()
                      .extendMarkRange('link')
                      .unsetLink()
                      .run();
                    setUrl('');
                    setTimeout(() => {
                      setIsOpenUrl(false);
                    }, 500);
                  }}
                  customCSS={css`
                    padding: 5px;
                    border: 1px solid #f1576c;
                    color: #f1576c;
                    background-color: transparent;
                  `}
                >
                  <AtomIcon
                    height="15px"
                    width="15px"
                    color="#f1576c"
                    customCSS={css`
                      svg {
                        fill: none;
                      }
                    `}
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/trash.svg"
                  />
                </AtomButton>
                <AtomButton
                  customCSS={css`
                    padding: 5px;
                    background-color: #f1576c;
                  `}
                  onClick={() => {
                    setTimeout(() => {
                      setIsOpenUrl(false);
                    }, 500);
                    if (url) {
                      editor
                        ?.chain()
                        .focus()
                        .extendMarkRange('link')
                        .setLink({ href: url })
                        .run();
                    }
                  }}
                >
                  <AtomIcon
                    height="16px"
                    width="16px"
                    color="white"
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                  />
                </AtomButton>
              </AtomWrapper>
            </AtomWrapper>
          )}
        </ButtonStyled>
        <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpenVideo(true);
          }}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/video-svgrepo-com.svg"
          />
          {isOpenVideo && (
            <AtomWrapper
              refObject={ref3}
              customCSS={css`
                position: absolute;
                background-color: #ffffff;
                padding: 30px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :after {
                  content: '';
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              {loadingFile ? (
                <AtomLoader
                  isLoading
                  colorLoading="#f1576c"
                  height="200px"
                  type="small"
                />
              ) : (
                <>
                  <AtomInput
                    height="200px"
                    labelWidth="100%"
                    width="100%"
                    type="dragdrop"
                    video
                    onChangeDrop={(e) => {
                      setVideo(e);
                    }}
                  />
                  <AtomWrapper
                    margin="10px"
                    customCSS={css`
                      ${typeof image === 'object' &&
                      image.name &&
                      css`
                        span {
                          color: #a0a0a0;
                        }
                        input {
                          background-color: #fcfcfc;
                        }
                      `}
                    `}
                  >
                    <AtomText
                      fontSize="12px"
                      fontWeight={600}
                      margin="0px 15px 0px 0px"
                    >
                      Url:
                    </AtomText>
                    <AtomInput
                      customCSS={css`
                        span {
                          display: none;
                        }
                      `}
                      labelWidth="100%"
                      width="100%"
                      type="text"
                      onChange={(e) => {
                        setVideo(e.target.value);
                      }}
                    />
                  </AtomWrapper>
                  <AtomWrapper flexDirection="row" justifyContent="flex-end">
                    <AtomButton
                      customCSS={css`
                        padding: 5px;
                        background-color: #f1576c;
                      `}
                    >
                      <AtomIcon
                        height="16px"
                        width="16px"
                        color="white"
                        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                      />
                    </AtomButton>
                  </AtomWrapper>
                </>
              )}
            </AtomWrapper>
          )}
        </ButtonStyled> */}
        {/* <SeparateVerticalStyled />
        <ButtonStyled
          onClick={() =>
            editor
              ?.chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          <AtomIcon size={12} color="#373737" icon="fas fa-table" />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteTable().run()}
          disabled={!editor?.can().deleteTable()}
        >
          <AtomIcon size={12} color="#373737" icon="fas fa-trash-alt" />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addColumnBefore().run()}
          disabled={!editor?.can().addColumnBefore()}
        >
          <AtomIcon size={12} color="#373737" icon="fas fa-border-left" />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteColumn().run()}
          disabled={!editor?.can().deleteColumn()}
        >
          <AtomIcon
            size={12}
            color="#a0a0a0"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-v.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addColumnAfter().run()}
          disabled={!editor?.can().addColumnAfter()}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-right.svg"
          />
        </ButtonStyled>

        <ButtonStyled
          onClick={() => editor?.chain().focus().addRowBefore().run()}
          disabled={!editor?.can().addRowBefore()}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-top.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteRow().run()}
          disabled={!editor?.can().deleteRow()}
        >
          <AtomIcon
            size={12}
            color="#a0a0a0"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-h.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addRowAfter().run()}
          disabled={!editor?.can().addRowAfter()}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-bottom.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={editor?.isActive('bulletList') ? 'is-active' : ''}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ul-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={editor?.isActive('orderedList') ? 'is-active' : ''}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ol-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().liftListItem('listItem').run()}
          disabled={!editor?.can().liftListItem('listItem')}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/outdent-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().sinkListItem('listItem').run()}
          disabled={!editor?.can().sinkListItem('listItem')}
        >
          <AtomIcon
            size={12}
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/indent-solid.svg"
          />
        </ButtonStyled> */}
      </AtomWrapper>
    </>
  );
};

const AtomTextEditor: FC<AtomTextEditorType> = (props) => {
  const { content, id, onBlur } = props;
  const editor = useEditor(
    {
      extensions: [
        TextAlign.configure({
          types: ['heading', 'paragraph']
        }),
        StarterKit,
        TextStyle,
        FontFamily,
        Color,
        UnderLine
      ],
      content: content ?? ''
    },
    [content]
  );
  const HTML = editor?.getHTML();

  useEffect(() => {
    props?.onChangeEditor?.(editor);
  }, [HTML]);

  return (
    <AtomWrapper
      css={() => css`
        margin: 0px 0px;
        width: 100%;
        .editor-content {
          min-height: ${props?.minHeight ?? '500px'};
          padding: 12px 16px;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          border-radius: 8px;
          background-color: #f0f2f5;
        }
        ${props?.customCSSM}
      `}
    >
      <GlobalStyles />
      <MenuBar
        editor={editor}
        options={props?.options}
        customCSSH={props?.customCSSH ?? css``}
      />

      <EditorContent
        className="editor-content"
        onClick={() => editor?.chain().focus().run()}
        id={id}
        onBlur={onBlur}
        editor={editor}
      />
    </AtomWrapper>
  );
};

export default AtomTextEditor;
