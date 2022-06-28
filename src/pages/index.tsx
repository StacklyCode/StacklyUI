import AtomButton from "@atoms/AtomButton";
import AtomIcon from "@atoms/AtomIcon";
import AtomText from "@atoms/AtomText";
import AtomWrapper from "@atoms/AtomWrapper";
import { css } from "@emotion/react";
import { backgroundColorHoverFlat, backgroundColorOutline } from "CSSUtils";


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
      <AtomWrapper css={WrapperCSS} astheme="primary">
        <AtomText>WRAPPER</AtomText>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS} astheme="secondary">
        <AtomText
          css={{
            color: "#fff",
          }}
        >
          WRAPPER SECONDARY
        </AtomText>
      </AtomWrapper>
      <AtomWrapper css={WrapperCSS} astheme="accent">
        <AtomText
          css={{
            color: "#fff",
          }}
        >
          WRAPPER ACCENT
        </AtomText>
      </AtomWrapper>
      <AtomIcon />
      <AtomIcon icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/house-beat.svg" />
      <AtomIcon />
    </AtomWrapper>
  );
};

export default index;
