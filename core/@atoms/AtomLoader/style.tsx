import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LoaderProps } from "./types";

export const LoaderContainer = styled.div<LoaderProps>`
  ${({ type, width, height, backgroundColor }) =>
    type === "small"
      ? css`
          width: ${width || "max-content"};
          height: ${height || "max-content"};
          background-color: ${backgroundColor || "transparent"};
        `
      : css`
          width: 100%;
          height: 100vh;
          position: fixed;
          z-index: 9999;
          backdrop-filter: blur(12px);
          top: 0;
          left: 0;
          background-color: ${backgroundColor || "white"};
        `};
  background-image: ${({ backgroundImage }) => backgroundImage || `none`};
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: ${({ widthLoader }) => widthLoader || "8px"} solid
      ${({ colorLoading }) => colorLoading || `#fe6a6a`};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ colorLoading }) => colorLoading || `#fe6a6a`} transparent
      transparent transparent;
  }
  .lds-ring div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ customcss }) => customcss};
`;
