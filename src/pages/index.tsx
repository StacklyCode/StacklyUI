import AtomButton from "@atoms/AtomButton";
import { css } from "@emotion/react";
import { backgroundColorFlat, backgroundColorOutline } from "utils/cssUtils";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <AtomButton as="primary">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton as="secondary">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton as="accent">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton as="primary" asType="outline">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton
        css={css`
          ${backgroundColorFlat("#db4a4a")}
        `}
      >
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton
        asType="outline"
        css={css`
          ${backgroundColorOutline("#a56b3b")}
        `}
      >
        <span>Text Primary</span>
      </AtomButton>
    </div>
  );
};

export default index;
