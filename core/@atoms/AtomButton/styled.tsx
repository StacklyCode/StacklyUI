import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SSP, SSPS } from "types";
import { backgroundColorFlat, backgroundColorOutline } from "utils/cssUtils";
import { AtomButtonTypes } from "./types";
import isBackDark from "utils/isBackDark";

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  padding: 8px 30px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  min-height: 40px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  line-height: 150%;
  transition: background-color 0.3s ease-in-out;

  ${(props) => css`
    ${CSSAsType(props)}
    ${IsDisabled(props)}
  `}
`;

const CSSAsType: SSP<AtomButtonTypes> = (props) => {
  const { astype = "flat", astheme = "primary", theme } = props;
  switch (astype) {
    case "outline":
      return backgroundColorOutline(
        theme?.button?.color?.[astheme] ?? "#fe6a6a"
      );
    default:
      return backgroundColorFlat(theme?.button?.color?.[astheme] ?? "#fe6a6a");
  }
};

const IsDisabled: SSP<AtomButtonTypes> = (props) => {
  const { disabled } = props;
  return css`
    ${disabled &&
    css`
      background-color: #e6e6e6 !important;
      color: #7e7e7e !important;
      cursor: not-allowed !important;
    `}
  `;
};

const BorderColorSwitch: SSPS<AtomButtonTypes> = (props) => {
  const { astype, theme, astheme } = props;
  switch (astype) {
    case "outline":
      return theme?.button?.color?.[astheme] ?? "#fe6a6a";
    default:
      return isBackDark(theme?.button?.color?.[astheme] ?? "#fe6a6a");
  }
};
