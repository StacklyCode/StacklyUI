import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { AtomButtonTypes } from "./types";

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  color: #ffffff;
  background-color: #fe6a6a;
  padding: 8px 30px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 150%;

  ${({ disabled }) => css`
    ${disabled &&
    css`
      background-color: #e6e6e6;
      color: #7e7e7e;
    `}
  `};
`;
