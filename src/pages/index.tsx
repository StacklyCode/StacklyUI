import AtomButton from "@atoms/AtomButton";
import { backgroundColorFlat, backgroundColorOutline } from "CSSUtils";

type Props = {};

const index = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        Normal Buttons
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
      </div>
      <div>
        Loading Buttons
        <AtomButton loading astheme="primary">
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton loading astheme="secondary">
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton loading astheme="accent">
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton loading astheme="primary" astype="outline">
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton loading disabled>
          <span>Text Primary</span>
        </AtomButton>
      </div>
      <div>
        Custom Buttons
        <AtomButton css={backgroundColorFlat("#db4a4a")}>
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton loading css={backgroundColorFlat("#db4a4a")}>
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton astype="outline" css={backgroundColorOutline("#a56b3b")}>
          <span>Text Primary</span>
        </AtomButton>
        <AtomButton
          loading
          astype="outline"
          css={backgroundColorOutline("#a56b3b")}
        >
          <span>Text Primary</span>
        </AtomButton>
      </div>
    </div>
  );
};

export default index;
