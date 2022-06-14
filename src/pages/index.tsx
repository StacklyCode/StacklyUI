import AtomButton from "@atoms/AtomButton";
import { css } from "@emotion/react";
import { backgroundColorFlat, backgroundColorOutline } from "utils/cssUtils";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <AtomButton astheme="primary">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton astheme="secondary">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton astheme="accent">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton astheme="primary" astype="outline">
        <span>Text Primary</span>
      </AtomButton>
      <AtomButton disabled>
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
        astype="outline"
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
