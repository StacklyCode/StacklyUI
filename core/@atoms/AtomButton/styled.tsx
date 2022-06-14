import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import changeBrightness from "utils/changeBrightness";
import isBackDark from "utils/isBackDark";
import { AtomButtonTypes } from "./types";

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  padding: 10px 30px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 150%;

  ${({ theme, as = "primary", asType = "flat" }) => css`
    ${asType === "flat" &&
    css`
      background-color: ${theme?.button?.color?.[as] ?? "#fe6a6a"};
      color: ${isBackDark(theme?.button?.color?.[as] ?? "#fe6a6a")};
    `}
    ${asType === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid ${theme?.button?.color?.[as] ?? "#fe6a6a"};
      color: ${theme?.button?.color?.[as] ?? "#fe6a6a"};
      :hover {
        color: ${isBackDark(theme?.button?.color?.[as] ?? "#fe6a6a")};
      }
    `}
    :hover {
      background-color: ${changeBrightness(
        theme?.button?.color?.[as] ?? "#fe6a6a",
        -20
      )};
    }
    :active {
      background-color: ${changeBrightness(
        theme?.button?.color?.[as] ?? "#fe6a6a",
        20
      )};
    }
    transition: background-color 0.3s ease-in-out;
  `}

  ${({ disabled }) => css`
    ${disabled &&
    css`
      background-color: #e6e6e6;
      color: #7e7e7e;
    `}
  `};
`;
