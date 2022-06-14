import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SSP } from "types";
import { backgroundColorFlat, backgroundColorOutline } from "utils/cssUtils";
import { AtomButtonTypes } from "./types";

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  padding: 8px 30px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
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
