import { css } from "@emotion/react";

export const IconStyles = css`
  display: flex;
  width: 34px;
  height: 34px;
  .lds-ring {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px !important;
    height: 34px !important;
  }
  .lds-ring div {
    margin: auto !important;
    width: 28px !important;
    height: 28px !important;
    border-width: 4px !important;
  }
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #000000;
    }
  }
  div {
    overflow: hidden;
  }
`;
