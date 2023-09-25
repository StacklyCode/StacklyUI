import { css } from '@emotion/react';
import { AtomWrapper } from 'components/atoms';
import AtomDragAndDrop from 'components/atoms/AtomDragAndDrop';

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
      <AtomDragAndDrop />
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
