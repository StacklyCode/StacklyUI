import AtomButton from "@atoms/AtomButton";
import AtomText from "@atoms/AtomText";
import AtomWrapper from "@atoms/AtomWrapper";
import { css } from "@emotion/react";
import { backgroundColorHoverFlat, backgroundColorOutline } from "CSSUtils";

type Props = {};

const WrapperCSS = css`
  padding: 10px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const index = () => {
  return (
    <AtomWrapper css={WrapperCSS}>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Normal Buttons</AtomText>
        <AtomButton astheme="primary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="secondary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="accent">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astheme="primary" astype="outline">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton disabled>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Loading Buttons</AtomText>
        <AtomButton loading="true" astheme="primary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="secondary">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="accent">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" astheme="primary" astype="outline">
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" disabled>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS}>
        <AtomText>Custom Buttons</AtomText>
        <AtomButton css={backgroundColorHoverFlat("#db4a4a")}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton loading="true" css={backgroundColorHoverFlat("#db4a4a")}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton astype="outline" css={backgroundColorOutline("#975a27")}>
          <AtomText>Text Primary</AtomText>
        </AtomButton>
        <AtomButton
          loading="true"
          astype="outline"
          css={backgroundColorOutline("#975a27")}
        >
          <AtomText>Text Primary</AtomText>
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default index;
