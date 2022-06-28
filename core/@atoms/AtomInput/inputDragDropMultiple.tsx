import { css } from '@emotion/react';
import { DragEvent, FC, FormEvent, useEffect, useState } from 'react';

import AtomImage from '../AtomImage';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import InputTextError from './error';
import {
  FileInputStyled,
  InputTextLabelStyled,
  InputTextSpanStyled,
} from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 },
};
type Props = AtomInputTypes & {
  heightpreview?: string;
};
const InputDragDropMultiple: FC<Props> = (props) => {
  const { id, children, formik, wrapperCustomCSS, imagePreviewArray } = props;
  const [preview, setPreview] = useState<string[]>([]);
  const [dropActive, setDropActive] = useState(false);

  useEffect(() => {
    if (imagePreviewArray) {
      setPreview(imagePreviewArray);
    }
  }, [imagePreviewArray]);

  useEffect(() => {
    if (formik?.values[`${id}`]) {
      setPreview(formik?.values[`${id}`].map((item) => item.url));
      setDropActive(false);
    } else {
      setPreview([]);
      setDropActive(false);
    }
  }, [formik?.values[`${id}`]]);

  const Drop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files.length !== 0) {
      const urlArray = Array.from(files).map((file: File) => {
        const url = URL?.createObjectURL(file);
        return { url, file };
      });
      formik?.setFieldValue(id, urlArray);
      setPreview(urlArray.map((item) => item.url));
      setDropActive(false);
    } else {
      setPreview([]);
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
        const urlArray = Array.from(files).map((file: File) => {
          const url = URL?.createObjectURL(file);
          return { url, file };
        });
        formik?.setFieldValue(id, urlArray);
        setPreview(urlArray.map((item) => item.url));
        setDropActive(false);
      } else {
        setPreview([]);
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
    borderRadius,
    heightpreview,
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
      <FileInputStyled
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
        {preview.length === 0 && (
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
        {preview.length > 0 && preview.find((_, idx) => idx === 0) && (
          <AtomWrapper
            customCSS={css`
              top: 0;
              position: absolute;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            <AtomImage
              alt="Drag and drop Preview"
              src={`${preview.find((_, idx) => idx === 0)}`}
              customCSS={css`
                border-radius: ${borderRadius || '4px'};
                width: 100%;
                height: ${heightpreview || '100%'};
                padding: 5px;
                object-fit: cover;
              `}
            />
            <AtomWrapper
              customCSS={css`
                flex-direction: row;
                height: 30%;
              `}
            >
              {preview
                .filter((_, idx) => idx !== 0 && idx < 5)
                .map((e) => (
                  <AtomImage
                    key={`${e}moreimages`}
                    alt="Drag and drop Preview"
                    src={`${e}`}
                    customCSS={css`
                      border-radius: ${borderRadius || '4px'};
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      margin: 5px;
                    `}
                  />
                ))}
              {preview.length > 5 && (
                <AtomWrapper
                  customCSS={css`
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    margin: 5px;
                    background-color: ${props.color || '#00abb9'};
                  `}
                >
                  <AtomText
                    customCSS={css`
                      font-size: 18px;
                      color: white;
                      margin: 0px;
                      padding: 0px;
                    `}
                  >
                    +{preview.length - 5}
                  </AtomText>
                </AtomWrapper>
              )}
            </AtomWrapper>
          </AtomWrapper>
        )}
        <input
          type="file"
          multiple
          id={id}
          onChange={DropInput}
          style={{ width: '100%', height: '100%' }}
        />
      </FileInputStyled>
      {children}
      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputDragDropMultiple;
