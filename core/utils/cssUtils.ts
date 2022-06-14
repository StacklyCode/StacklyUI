import { css } from "@emotion/react";
import changeBrightness from "./changeBrightness";
import isBackDark from "./isBackDark";

export const backgroundColorFlat = (color: string) => css`
  background-color: ${color};
  color: ${isBackDark(color)};
  .lds-ring div {
    border-color: ${isBackDark(color)} transparent transparent transparent;
  }
  :hover {
    background-color: ${changeBrightness(color, -20)};
  }
  :active {
    background-color: ${changeBrightness(color, 20)};
  }
`;

export const backgroundColorOutline = (color: string) => css`
  background-color: transparent;
  border: 1px solid ${color};
  color: ${color};
  div .lds-ring div {
    border-color: ${color} transparent transparent transparent;
  }
  :hover {
    div .lds-ring div {
      border-color: ${isBackDark(color)} transparent transparent transparent;
    }
    color: ${isBackDark(color)};
    background-color: ${color};
  }
  :active {
    border: 1px solid ${changeBrightness(color, 20)};
    background-color: ${changeBrightness(color, 20)};
  }
`;
