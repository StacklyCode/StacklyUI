import { css } from '@emotion/react';
import { AtomWrapper } from 'components/atoms';
import AtomDragAndDrop from 'components/atoms/AtomDragAndDrop';

export const EXTENSIONS_IMAGES = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'svg',
  'webp',
  'heic',
  'heif'
];

const Test = () => {
  return (
    <AtomWrapper
      css={() => css`
        width: 100vw;
        height: 100vh;
        background-color: #ffffff;
        padding: 50px;
        gap: 20px;
      `}
    >
      <AtomDragAndDrop
        id="images"
        // onError={(e) => addAlert({ message: e, type: "error" })}
        extensions={EXTENSIONS_IMAGES}
        hasButtonOpen={true}
        hasReplace={true}
        hasPlaceholder={false}
        hasPreview={false}
        content={{
          css: () => css`
            border-radius: 50%;
          `
        }}
        image={{
          css: () => css`
            border-radius: 6px;
          `
        }}
        container={{
          css: () => css`
            width: 100%;
            height: max-content;
            height: max-content;
          `
        }}
        wrapper={{
          css: () => css`
            width: 100%;
            height: 300px;
            border-radius: 6px;
          `
        }}
        previewItemOpen={{
          css: () => css`
            transform: translate(-30%, 30%);
          `
        }}
        icon={{
          icon: 'fas fa-user',
          css: () => css`
            font-size: 52px;
          `
        }}
        formik={{
          values: {
            images: [
              {
                id: '18cf8eea-8f03-4a01-89ed-7b1b81d7ca9e',
                url: 'https://tfv-30273793-57e8-4304-84b2-ebea3b285bff.s3.us-east-2.amazonaws.com/30273793-57e8-4304-84b2-ebea3b285bff_2023-09-18T19%3A57%3A59.805062646Z/2023-09-18T19_58_00.373122311Z_md7247782552957345836.jpeg'
              }
            ]
          }
        }}
      />
      <AtomDragAndDrop extensions={['jpg', 'png', 'heic', 'heif', 'jpeg']} />

      <AtomDragAndDrop
        hasButtonOpen={true}
        hasPlaceholder={false}
        hasReplace={true}
        hasPreview={false}
        content={{
          css: () => css`
            border-radius: 50%;
          `
        }}
        wrapper={{
          css: () => css`
            width: 155px;
            height: 155px;
            border-radius: 50%;
          `
        }}
        previewItemOpen={{
          css: () => css`
            transform: translate(0%, 0%);
          `
        }}
        icon={{
          icon: 'fas fa-user',
          css: () => css`
            font-size: 64px;
          `
        }}
      />
    </AtomWrapper>
  );
};

export default Test;
