import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { AtomTextTypes } from "./types";

type AtomTextTypesTheme = AtomTextTypes & {
  theme: Theme;
};

const TextStyle = (props: AtomTextTypesTheme) => {
  const { theme, astheme = "primary" } = props;
  return css`
    line-height: 150%;
    font-family: Montserrat, sans-serif;
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    width: max-content;
    max-width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: default;
    color: ${theme?.text?.color[astheme] ?? "#202124"};
  `;
};

export const TextStyledDefault = styled(motion.span)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledA = styled(motion.a)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledP = styled(motion.p)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH1 = styled(motion.h1)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH2 = styled(motion.h2)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH3 = styled(motion.h3)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH4 = styled(motion.h4)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH5 = styled(motion.h5)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH6 = styled(motion.h6)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
