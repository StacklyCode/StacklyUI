import { css } from "@emotion/react";
import changeBrightness from "./changeBrightness";
import isBackDark from "./isBackDark";

export const backgroundColorFlat = (color: string) => css`
  background-color: ${color};
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
  :hover {
    color: ${isBackDark(color)};
    background-color: ${color};
  }
  :active {
    border: 1px solid ${changeBrightness(color, 20)};
    background-color: ${changeBrightness(color, 20)};
  }
`;
