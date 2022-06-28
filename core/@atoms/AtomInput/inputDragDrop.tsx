import { DragEvent, FC, FormEvent, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AtomWrapper from '../AtomWrapper';
import AtomImage from '../AtomImage';
import InputTextError from './error';
import {
  FileInputStyled,
  InputTextLabelStyled,
  InputTextSpanStyled,
  VideoPlayerStyled,
  VideoPlayerStyledContainer,
} from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputDragDrop: FC<AtomInputTypes> = (props) => {
  const {
    id,
    children,
    formik,
    wrapperCustomCSS,
    imagePreview,
    placeholderDragDrop,
    onChangeDrop,
    video,
  } = props;
  const [preview, setPreview] = useState(``);
  const [dropActive, setDropActive] = useState(false);

  useEffect(() => {
    setPreview(imagePreview);
  }, [imagePreview]);

  useEffect(() => {
    if (formik?.values[`${id}`]?.name) {
      const url = URL?.createObjectURL(formik?.values[`${id}`]);
      setPreview(url);
      setDropActive(false);
    } else {
      setPreview(imagePreview ?? ``);
      setDropActive(false);
    }
  }, [formik?.values[`${id}`]]);

  const Drop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files.length !== 0) {
      const url = URL?.createObjectURL(files[0]);
      setPreview(url);
      setDropActive(false);
      formik?.setFieldValue(id, files[0]);
      onChangeDrop?.(files[0]);
    } else {
      setPreview(``);
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
        const url = URL?.createObjectURL(files[0]);
        setPreview(url);
        setDropActive(false);
        formik?.setFieldValue(id, files[0]);
        onChangeDrop?.(files[0]);
      } else {
        setPreview(``);
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
        {preview === `` && (
          <AtomWrapper flexDirection="row" customCSS={wrapperCustomCSS}>
            {placeholderDragDrop ? (
              placeholderDragDrop(dropActive)
            ) : (
              <>
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
              </>
            )}
          </AtomWrapper>
        )}
        {video ? (
          <>
            {preview !== `` && (
              <VideoPlayerStyledContainer>
                <VideoPlayerStyled muted autoPlay loop src={preview} />
              </VideoPlayerStyledContainer>
            )}
          </>
        ) : (
          <>
            {preview !== `` && (
              <AtomImage
                alt="Drag and drop Preview"
                src={preview}
                customCSS={css`
                  border-radius: ${borderRadius || '4px'};
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            )}
          </>
        )}
        <input
          type="file"
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

export default InputDragDrop;
