import { AtomInputTypes, IFileDragDrop } from './types';
import AtomWrapper from '../AtomWrapper';
import { css } from '@emotion/react';
import AtomImage from '../AtomImage';
import AtomIcon from '../AtomIcon';
import AtomText from '../AtomText';
import { MutableRefObject, useState } from 'react';
import { FCWC } from 'types';
import { get } from 'utils/tinyLodash';
import { UCT } from 'utils/changeTransparency';
import AtomButton from '../AtomButton';

type Type = AtomInputTypes & {
  refInput?: MutableRefObject<HTMLInputElement>;
};

const InputDragAndDropImage: FCWC<Type> = (props) => {
  const { id, formik, input, refInput } = props;
  const [selected, setSelected] = useState(0);
  const [select, setSelect] = useState(0);

  const images = get(formik?.values, id) as IFileDragDrop[];
  const isLoad = images.length > 0;
  const selectedImage = images?.[selected] ?? images?.[0];

  if (isLoad)
    return (
      <AtomWrapper
        css={(e) => css`
          position: relative;
          width: 100%;
          height: 100%;
          ${input?.cssDragDrop?.(e)}
        `}
      >
        <AtomImage
          css={() => css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src={
            selectedImage?.url
              ? selectedImage?.url
              : URL.createObjectURL(selectedImage?.file)
          }
        />

        {input?.isDragDropIcon && (
          <AtomButton
            css={(e) => css`
              position: absolute;
              top: 10px;
              right: 10px;
              padding: 0px;
              min-height: 0;
              width: 34px;
              height: 34px;
              z-index: 90;
              ${input?.cssDragDropIcon?.(e)}
            `}
          >
            <AtomIcon
              icon="fas fa-pencil"
              size={14}
              color="#ffffff"
              onClick={() => {
                refInput?.current?.click();
              }}
            />
          </AtomButton>
        )}

        {(input?.preview ?? true) && (
          <AtomWrapper
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            css={(theme) => css`
              bottom: 0;
              left: 0;
              position: absolute;
              width: 100%;
              height: max-content;
              padding: 8px;
              background-color: ${UCT(
                theme?.general?.properties?.background.toString() ?? '#000000',
                40
              )};
              overflow-x: auto;
              overflow-y: hidden;
            `}
          >
            <AtomWrapper
              css={() => css`
                width: max-content;
                height: max-content;
                flex-direction: row;
                gap: 10px;
              `}
            >
              {images?.map((img, idx) => (
                <AtomWrapper
                  key={img?.id}
                  onClick={() => {
                    setSelected(idx);
                    input?.onClickPreview?.(img, idx);
                  }}
                  css={() => css`
                    position: relative;
                    width: 100%;
                    height: max-content;
                    cursor: pointer;
                    border-radius: 2px;
                    border: 1px solid transparent;
                    box-shadow: 0px 0px 5px 1px transparent;
                    ${(selectedImage ? selected : 0) === idx &&
                    css`
                      border: 1px solid #0072f5;
                      box-shadow: 0px 0px 5px 1px ${UCT('#0072f5', 50)};
                    `}
                    transition: all 0.2s ease-in-out;
                  `}
                >
                  <AtomImage
                    css={() => css`
                      height: 40px;
                      width: 60px;
                      object-fit: cover;
                      border-radius: 2px;
                      overflow: hidden;
                    `}
                    src={URL.createObjectURL(img?.file)}
                  />
                  <AtomButton
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setSelected(
                        Math.max(0, selected === idx ? selected - 1 : selected)
                      );
                      formik?.setFieldValue(
                        id,
                        images?.filter((image) => image?.id !== img?.id)
                      );
                    }}
                    css={() => css`
                      cursor: pointer;
                      position: absolute;
                      width: 18px;
                      height: 18px;
                      bottom: -8px;
                      right: -8px;
                      border-radius: 50%;
                      padding: 0px;
                      min-height: 0;
                      background-color: #ca2525;
                      border: 1px solid #ca2525;
                      :hover {
                        background-color: #e23232;
                      }
                    `}
                  >
                    <AtomIcon icon="fas fa-trash" size={8} />
                  </AtomButton>
                  <AtomButton
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setSelect(idx);
                      input?.onSelectMain?.(img, idx);
                    }}
                    css={() => css`
                      cursor: pointer;
                      position: absolute;
                      width: 18px;
                      height: 18px;
                      top: -8px;
                      right: -8px;
                      border-radius: 50%;
                      padding: 0px;
                      min-height: 0;
                      border: 1px solid #e7c116;
                      background-color: transparent;
                      ${select === idx &&
                      css`
                        background-color: #e7c116;
                      `}
                    `}
                  >
                    <AtomIcon
                      icon="fas fa-star"
                      size={8}
                      color={select === idx ? '#ffffff' : '#e7c116'}
                    />
                  </AtomButton>
                </AtomWrapper>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        )}
      </AtomWrapper>
    );

  return (
    <AtomWrapper
      css={(e) => css`
        position: relative;
        width: max-content;
        background-color: transparent;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 10px 25px;
        align-items: center;
        justify-content: center;
        ${input?.cssDragDrop?.(e)}
      `}
    >
      {input?.isDragDropIcon && (
        <AtomButton
          onClick={() => {
            refInput?.current?.click();
          }}
          css={(e) => css`
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0px;
            min-height: 0;
            width: 34px;
            height: 34px;
            z-index: 90;
            ${input?.cssDragDropIcon?.(e)}
          `}
        >
          <AtomIcon icon="fas fa-pencil" size={14} color="#ffffff" />
        </AtomButton>
      )}

      <AtomIcon icon="fas fa-image" size={42} color="#344767" />
      {input?.drag ? (
        <AtomText
          css={(theme) => css`
            color: ${theme?.text?.color?.primary ?? '#ffffff'};
            font-size: 12px;
            font-weight: 500;
          `}
        >
          Suelta tu imagen
        </AtomText>
      ) : (
        input?.textDragDrop !== '' && (
          <AtomText
            css={(theme) => css`
              color: ${theme?.text?.color?.primary ?? '#ffffff'};
              font-size: 12px;
              font-weight: 500;
              text-align: center;
              b {
                cursor: pointer;
                color: ${theme?.text?.color?.accent ?? '#4285f4'};
              }
            `}
          >
            {input?.textDragDrop ?? (
              <>
                Arrastra y suelta tu imagen o{' '}
                <b
                  onClick={() => {
                    refInput?.current?.click();
                  }}
                >
                  Examinar
                </b>
              </>
            )}
          </AtomText>
        )
      )}
    </AtomWrapper>
  );
};

export default InputDragAndDropImage;
