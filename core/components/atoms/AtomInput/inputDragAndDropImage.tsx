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

type Type = {
  id: AtomInputTypes['id'];
  formik: AtomInputTypes['formik'];
  input: AtomInputTypes['input'];
  refInput?: MutableRefObject<HTMLInputElement>;
};

const InputDragAndDropImage: FCWC<Type> = (props) => {
  const { id, formik, input, refInput } = props;
  const [selected, setSelected] = useState(0);

  const images = get(formik?.values, id) as IFileDragDrop[];
  const isLoad = images.length > 0;
  const selectedImage = images?.[selected];

  if (isLoad)
    return (
      <AtomWrapper
        css={() => css`
          position: relative;
          width: 100%;
          height: 100%;
        `}
      >
        <AtomImage
          css={() => css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src={URL.createObjectURL(selectedImage?.file)}
        />

        <AtomWrapper
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          css={() => css`
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 80px;
            padding: 10px 10px;
            background-color: #00000094;
            overflow-x: auto;
            overflow-y: hidden;
          `}
        >
          <AtomWrapper
            css={() => css`
              width: max-content;
              height: 100%;
              flex-direction: row;
              gap: 10px;
            `}
          >
            {images?.map((img, idx) => (
              <AtomWrapper
                key={img?.id}
                onClick={() => setSelected(idx)}
                css={(theme) => css`
                  position: relative;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  border-radius: 2px;
                  border: 1px solid transparent;
                  box-shadow: 0px 0px 5px 1px transparent;
                  ${selected === idx &&
                  css`
                    border: 1px solid
                      ${theme?.input?.input?.color?.primary ?? '#ffffff'};
                    box-shadow: 0px 0px 5px 1px
                      ${UCT(
                        theme?.input?.input?.color?.primary ?? '#ffffff',
                        50
                      )};
                  `}
                  transition: all 0.2s ease-in-out;
                `}
              >
                <AtomImage
                  css={() => css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 2px;
                    overflow: hidden;
                  `}
                  src={URL.createObjectURL(img?.file)}
                />

                <AtomIcon
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
                  icon="https://storage.googleapis.com/stackly-assets/the-film-vault/icons/cross-mark.svg"
                  css={() => css`
                    cursor: pointer;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    top: -5px;
                    right: -5px;
                    padding: 5px;
                    border-radius: 50%;
                    background-color: #ca2525;
                    :hover {
                      background-color: #e23232;
                    }
                    transition: background-color 0.2s ease-in-out;
                  `}
                />
              </AtomWrapper>
            ))}
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    );

  return (
    <AtomWrapper
      css={() => css`
        width: max-content;
        background-color: transparent;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 10px 25px;
        align-items: center;
        justify-content: center;
      `}
    >
      <AtomIcon
        icon="https://storage.googleapis.com/stackly-assets/rioshy/icons/imageInput.svg"
        css={(theme) => css`
          svg {
            path {
              fill: ${theme?.text?.color?.primary ?? '#ffffff'} !important;
              stroke: transparent !important;
            }
          }
        `}
      />
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
        <AtomText
          css={(theme) => css`
            color: ${theme?.text?.color?.primary ?? '#ffffff'};
            font-size: 12px;
            font-weight: 500;
            b {
              cursor: pointer;
              color: ${theme?.text?.color?.accent ?? '#4285f4'};
            }
          `}
        >
          Arrastra y suelta tu imagen o{' '}
          <b
            onClick={() => {
              refInput?.current?.click();
            }}
          >
            Examinar
          </b>
        </AtomText>
      )}
    </AtomWrapper>
  );
};

export default InputDragAndDropImage;
