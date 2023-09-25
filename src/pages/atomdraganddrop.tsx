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
      `}
    >
      <AtomDragAndDrop />
    </AtomWrapper>
  );
};

export default Test;
