import { css } from '@emotion/react';
import AtomWrapper from '../AtomWrapper';
import { AtomDragAndDropTypes, IFile } from './types';
import AtomIcon from '../AtomIcon';
import AtomText from '../AtomText';
import { useEffect, useRef, useState } from 'react';
import { onDragLeave, onDragOver, onDrop } from './utils/drag';
import AtomImage from '../AtomImage';
import { get } from 'utils/tinyLodash';
import AtomButton from '../AtomButton';
import InputTextError from '../AtomInput/inputError';
import AtomLoader from '../AtomLoader';

const AtomDragAndDrop = (props: AtomDragAndDropTypes) => {
  const {
    id,
    formik,
    textPlaceholder,
    textPlaceholderDrag,
    onOpen,
    onAction,
    onRemove
  } = props;
  const {
    hasPlaceholder = true,
    hasPreview = true,
    hasButtonOpen = false,
    hasButtonAction = true,
    hasButtonRemove = true
  } = props;
  const {
    container,
    wrapper,
    content,
    placeholder,
    icon,
    image,
    preview,
    previewItem,
    previewItemWrapper,
    previewItemImage,
    previewItemOpen,
    previewItemOpenIcon,
    previewItemAction,
    previewItemActionIcon,
    previewItemRemove,
    previewItemRemoveIcon
  } = props;

  const input = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([] as IFile[]);

  const [actionable, setActionable] = useState('');
  const [selectable, setSelectable] = useState(0);

  const action = props?.action ?? actionable;
  const select = props?.select ?? selectable;

  const getfile = get<IFile[]>(formik?.values, id, props?.files ?? files);
  const file = (getfile?.[select] ?? getfile?.[0]) as IFile;
  const selected = getfile?.[select]?.id ?? getfile?.[0]?.id;
  const isFile = Boolean(file);

  const [drag, setDrag] = useState(false);

  const [loading, setLoading] = useState(false);

  const opts = {
    ref,
    props,
    setDrag,
    files: getfile,
    setFiles,
    setLoading
  };

  useEffect(() => {
    if (!ref?.current) return;
    ref.current.addEventListener('dragover', onDragOver(setDrag));
    ref.current.addEventListener('dragleave', onDragLeave(setDrag));
    ref.current.addEventListener('drop', onDrop(opts));

    return () => {
      if (!ref?.current) return;
      ref.current.removeEventListener('dragover', onDragOver(setDrag));
      ref.current.removeEventListener('dragleave', onDragLeave(setDrag));
      ref.current.removeEventListener('drop', onDrop(opts));
    };
  }, [ref]);

  return (
    <AtomWrapper
      {...container}
      css={(theme) => css`
        position: relative;
        width: 400px;
        height: 400px;
        flex-direction: column;
        ${container?.css?.(theme, container)}
      `}
    >
      <AtomWrapper
        {...wrapper}
        ref={ref}
        onClick={() => input?.current?.click()}
        css={(theme) => css`
          position: relative;
          width: 100%;
          height: 100%;
          gap: 5px;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          background-color: #fafafa;
          border: 1px solid #adadad;
          :hover {
            border: 1px solid #929292;
          }
          :before {
            pointer-events: none;
          }
          ${drag &&
          css`
            border: 1px dashed #adadad;
            :before {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 8px;
              background-color: rgba(173, 173, 173, 0.2);
              z-index: 1;
            }
          `}
          transition: all 0.3s ease-in-out;
          ${wrapper?.css?.(theme, wrapper)}
          ${theme?.components?.draganddrop?.wrapper?.css?.(theme, wrapper)}
        `}
      >
        <AtomLoader loading={loading}>
          <input
            type="file"
            multiple
            ref={input}
            style={{ display: 'none' }}
            onChange={onDrop(opts)}
          />
          {isFile ? (
            <AtomWrapper
              {...content}
              css={(theme) => css`
                width: 100%;
                height: 100%;
                position: relative;
                border-radius: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                ${content?.css?.(theme, content)}
                ${theme?.components?.draganddrop?.content?.css?.(
                  theme,
                  content
                )}
              `}
            >
              <AtomImage
                {...image}
                css={(theme) => css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 7px;
                  ${image?.css?.(theme, image)}
                  ${theme?.components?.draganddrop?.image?.css?.(theme, image)}
                `}
                src={file?.file ? URL.createObjectURL(file?.file) : file?.url}
              />

              {hasPreview && (
                <AtomWrapper
                  {...preview}
                  css={(theme) => css`
                    width: calc(100% - 40px);
                    height: max-content;
                    position: absolute;
                    flex-direction: row;
                    bottom: 20px;
                    left: 20px;
                    overflow-x: auto;
                    scrollbar-gutter: thin;
                    background-color: #ffffff58;
                    padding: 5px;
                    border-radius: 4px;
                    ${preview?.css?.(theme, preview)}
                    ${theme?.components?.draganddrop?.preview?.css?.(
                      theme,
                      preview
                    )}
                  `}
                >
                  <AtomWrapper
                    css={(theme) => css`
                      width: max-content;
                      height: max-content;
                      flex-direction: row;
                      gap: 5px;
                      ${previewItemWrapper?.css?.(theme, previewItemWrapper)}
                      ${theme?.components?.draganddrop?.previewItemWrapper?.css?.(
                        theme,
                        previewItemWrapper
                      )}
                    `}
                  >
                    {getfile?.map((file, idx) => (
                      <AtomWrapper
                        key={file?.id}
                        {...previewItem}
                        css={(theme) => css`
                          position: relative;
                          width: 60px;
                          height: 45px;
                          border-radius: 4px;
                          ${previewItem?.css?.(theme, previewItem)}
                          ${theme?.components?.draganddrop?.previewItem?.css?.(
                            theme,
                            previewItem
                          )}
                        `}
                      >
                        {hasButtonAction && (
                          <AtomButton
                            onClick={(e) => {
                              e.stopPropagation();
                              setActionable(file?.id);
                              onAction?.(file);
                            }}
                            {...previewItemAction}
                            css={(theme) => css`
                              position: absolute;
                              z-index: 1;
                              top: 0px;
                              left: 0px;
                              padding: 0px;
                              width: 19px;
                              height: 19px;
                              border-radius: 50%;
                              justify-content: center;
                              align-items: center;
                              transform: translate(-20%, -20%);
                              border: 1px solid #0072f5;
                              background-color: #fafafa;
                              :hover {
                                box-shadow: 0px 0px 2px 0px #0072f5;
                                i {
                                  color: #ffffff;
                                }
                              }
                              ${action === file?.id &&
                              css`
                                background-color: #0072f5;
                              `}

                              ${previewItemAction?.css?.(
                                theme,
                                previewItemAction
                              )}
                       ${theme?.components?.draganddrop?.previewItemAction?.css?.(
                                theme,
                                previewItemAction
                              )}
                            `}
                          >
                            <AtomIcon
                              icon="fas fa-star"
                              css={(theme) => css`
                                font-size: 0.53rem;
                                color: #0072f5;
                                ${action === file?.id &&
                                css`
                                  color: #ffffff;
                                `}
                                ${previewItemActionIcon?.css?.(
                                  theme,
                                  previewItemActionIcon
                                )}
                         ${theme?.components?.draganddrop?.previewItemActionIcon?.css?.(
                                  theme,
                                  previewItemActionIcon
                                )}
                              `}
                            />
                          </AtomButton>
                        )}
                        <AtomImage
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectable(idx);
                          }}
                          css={(theme) => css`
                            border-radius: 4px;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            cursor: pointer;
                            border: 1px solid #adadad;
                            ${selected === file?.id &&
                            css`
                              border: 1px solid #0072f5;
                            `}

                            ${previewItemImage?.css?.(theme, previewItemImage)}
                        ${theme?.components?.draganddrop?.previewItemImage?.css?.(
                              theme,
                              previewItemImage
                            )}
                          `}
                          src={
                            file?.file
                              ? URL.createObjectURL(file?.file)
                              : file?.url
                          }
                        />
                        {hasButtonRemove && (
                          <AtomButton
                            onClick={(e) => {
                              e.stopPropagation();
                              setFiles((prev) =>
                                prev.filter((f) => f?.id !== file?.id)
                              );
                              onRemove?.(file);
                            }}
                            {...previewItemRemove}
                            css={(theme) => css`
                              position: absolute;
                              z-index: 1;
                              bottom: 0px;
                              right: 0px;
                              padding: 0px;
                              width: 18px;
                              height: 18px;
                              justify-content: center;
                              align-items: center;
                              transform: translate(20%, 0%);
                              border: 1px solid #ed1e45;
                              background-color: #ed1e45;
                              border-radius: 50%;
                              :hover {
                                background-color: #ce1134;
                                box-shadow: 0px 0px 2px 0px #ed1e45;
                              }
                              ${previewItemRemove?.css?.(
                                theme,
                                previewItemRemove
                              )}
                              ${theme?.components?.draganddrop?.previewItemRemove?.css?.(
                                theme,
                                previewItemRemove
                              )}
                            `}
                          >
                            <AtomIcon
                              icon="fas fa-trash"
                              css={(theme) => css`
                                font-size: 0.53rem;
                                color: #ffffff;
                                ${previewItemRemoveIcon?.css?.(
                                  theme,
                                  previewItemRemoveIcon
                                )}
                                ${theme?.components?.draganddrop?.previewItemRemoveIcon?.css?.(
                                  theme,
                                  previewItemRemoveIcon
                                )}
                              `}
                            />
                          </AtomButton>
                        )}
                      </AtomWrapper>
                    ))}
                  </AtomWrapper>
                </AtomWrapper>
              )}
            </AtomWrapper>
          ) : (
            <AtomWrapper
              {...content}
              css={(theme) => css`
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                pointer-events: none;
                ${content?.css?.(theme, content)}
                ${theme?.components?.draganddrop?.content?.css?.(
                  theme,
                  content
                )}
              `}
            >
              <AtomIcon
                icon="fas fa-cloud-upload-alt"
                {...icon}
                css={(theme) => css`
                  font-size: 40px;
                  color: #adadad;
                  pointer-events: none;
                  ${icon?.css?.(theme)}
                  ${theme?.components?.draganddrop?.icon?.css?.(theme, icon)}
                `}
              />
              <AtomText
                {...placeholder}
                css={(theme) => css`
                  font-family: Montserrat, sans-serif;
                  font-size: 14px;
                  font-weight: 500;
                  text-align: center;
                  color: #adadad;
                  margin: 10px 0px 0px 0px;
                  pointer-events: none;
                  user-select: none;
                  ${placeholder?.css?.(theme)}
                  ${theme?.components?.draganddrop?.placeholder?.css?.(
                    theme,
                    placeholder
                  )}
                `}
              >
                {hasPlaceholder && (
                  <>
                    {drag
                      ? textPlaceholderDrag ?? 'Suelta el archivo aquí'
                      : textPlaceholder ?? 'Arrastra y suelta aquí tu archivo'}
                  </>
                )}
              </AtomText>
            </AtomWrapper>
          )}
          {hasButtonOpen && (
            <AtomButton
              onClick={(e) => {
                e.stopPropagation();
                ref?.current?.click();
                onOpen?.(ref);
              }}
              {...previewItemOpen}
              css={(theme) => css`
                position: absolute;
                top: 0px;
                right: 0px;
                padding: 0px;
                width: 36px;
                height: 36px;
                border-radius: 4px;
                justify-content: center;
                align-items: center;
                transform: translate(-50%, 50%);
                :hover {
                  box-shadow: 0px 0px 2px 0px #0072f5;
                }
                ${action === file?.id &&
                css`
                  background-color: #0072f5;
                `}

                ${previewItemOpen?.css?.(theme, previewItemOpen)}
            ${theme?.components?.draganddrop?.previewItemOpen?.css?.(
                  theme,
                  previewItemOpen
                )}
              `}
            >
              <AtomIcon
                icon="fas fa-pencil-alt"
                css={(theme) => css`
                  font-size: 16px;
                  color: #ffffff;
                  ${action === file?.id &&
                  css`
                    color: #ffffff;
                  `}
                  ${previewItemOpenIcon?.css?.(theme, previewItemOpenIcon)}
                          ${theme?.components?.draganddrop?.previewItemOpenIcon?.css?.(
                    theme,
                    previewItemOpenIcon
                  )}
                `}
              />
            </AtomButton>
          )}
        </AtomLoader>
      </AtomWrapper>
      <InputTextError id={id} formik={formik} />
    </AtomWrapper>
  );
};

export default AtomDragAndDrop;
