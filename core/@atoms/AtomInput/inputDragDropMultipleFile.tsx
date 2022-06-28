import { DragEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import AtomWrapper from '../AtomWrapper';
import AtomImage from '../AtomImage';
import AtomButton from '../AtomButton';
import InputTextError from './error';
import AtomIcon from '../AtomIcon';
import {
  FileInputMultipleStyled,
  InputTextLabelStyled,
  InputTextSpanStyled,
} from './style';
import { AtomInputTypes, FilesArray } from './types';
import AtomText from '../AtomText';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputDragDropMultipleFiles: FC<AtomInputTypes> = (props) => {
  const { id, children, formik, wrapperCustomCSS } = props;
  const [dropActive, setDropActive] = useState(false);
  const [filter, setFilter] = useState<FilesArray[] | false>(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (filter !== false && formik) {
      formik.setFieldValue(id, filter);
      setFilter(false);
    }
  }, [filter]);

  const Drop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files.length !== 0) {
      const filesFilter = Array.from(files).map((i) => ({
        id: uuidv4(),
        file: i,
      }));
      const group = [...formik?.values[`${id}`], ...filesFilter];
      formik?.setFieldValue(id, group);
      setDropActive(false);
    } else {
      setDropActive(false);
      formik?.setFieldValue(id, ``);
    }
  };
  const DropInput = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.currentTarget;

    if (files) {
      if (files.length !== 0) {
        const filesFilter = Array.from(files).map((i) => ({
          id: uuidv4(),
          file: i,
        }));
        const group = [...formik?.values[`${id}`], ...filesFilter];
        formik?.setFieldValue(id, group);
        setDropActive(false);
      } else {
        setDropActive(false);
        formik?.setFieldValue(id, ``);
      }
    }
  };

  const handleDrag = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const {
    labelWidth,
    labelColor,
    labelFontFamily,
    labelFontSize,
    labelFontWeight,
    labelMargin,
    labelPadding,
    spanMargin,
    customCSS,
    label,
  } = props;

  return (
    <InputTextLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      customCSS={customCSS}
    >
      {label && (
        <InputTextSpanStyled spanMargin={spanMargin}>
          {label}
        </InputTextSpanStyled>
      )}
      <FileInputMultipleStyled
        dropActive={dropActive}
        htmlFor={id}
        onDrop={Drop}
        onDragOver={(e: DragEvent<HTMLLabelElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setDropActive(true);
        }}
        onDragEnter={(event: DragEvent<HTMLLabelElement>) => handleDrag(event)}
        onDragLeave={(e: DragEvent<HTMLLabelElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setDropActive(false);
        }}
        {...props}
        {...Animation}
      >
        {formik?.values[`${id}`].length === 0 && (
          <AtomWrapper flexDirection="row" customCSS={wrapperCustomCSS}>
            {!dropActive ? (
              <>
                <AtomImage
                  alt="Drag and drop"
                  height="15px"
                  width="15px"
                  margin="0px 10px 0px 0px"
                  src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg"
                />
                ARRASTRA Y SUELTA
              </>
            ) : (
              <>SUELTA</>
            )}
          </AtomWrapper>
        )}

        {formik?.values[`${id}`].length > 0 && (
          <AtomWrapper
            customCSS={css`
              top: 0;
              position: absolute;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              z-index: 10;
            `}
          >
            <AtomWrapper
              customCSS={css`
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 100%;
                flex-wrap: wrap;
                gap: 5px;
                overflow: hidden;
              `}
            >
              {formik?.values[`${id}`].map((e: FilesArray) => (
                <AtomWrapper
                  key={e.id}
                  {...Animation}
                  customCSS={css`
                    width: 100%;
                    min-height: 25px;
                    max-height: 100%;
                    position: relative;
                    align-items: center;
                  `}
                >
                  <AtomText width="80%">{e?.file?.name}</AtomText>
                  <AtomButton
                    customCSS={css`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      position: absolute;
                      background: #e52d27;
                      border-radius: 50%;
                      width: 22px;
                      height: 22px;
                      padding: 0;
                      right: 2px;
                      top: 0px;
                    `}
                    onClick={() => {
                      const filterArray = formik?.values[`${id}`].filter(
                        (e2: FilesArray) => e2.id !== e.id
                      );
                      setFilter(filterArray);
                    }}
                    type="button"
                  >
                    <AtomIcon
                      height="17px"
                      color="transparent"
                      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg"
                      customCSS={css`
                        svg {
                          g {
                            path {
                              stroke: #fff;
                            }
                          }
                        }
                      `}
                    />
                  </AtomButton>
                </AtomWrapper>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        )}
        <input
          ref={ref}
          type="file"
          multiple
          id={id}
          onChange={DropInput}
          style={{ width: '100%', height: '100%' }}
          accept="*/*"
        />
      </FileInputMultipleStyled>
      <AtomButton
        type="button"
        width="100%"
        backgroundColor="#f6f7fb"
        border="1px solid #c4c4c4"
        color="#707070"
        fontWeight="500"
        margin="10px 0px 0px 0px"
        onClick={() => {
          ref?.current?.click();
        }}
      >
        Cargar archivos
      </AtomButton>
      {children}
      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputDragDropMultipleFiles;
