import { FC } from "react";
import {
  TextStyledDefault,
  TextStyledA,
  TextStyledH1,
  TextStyledH2,
  TextStyledH3,
  TextStyledH4,
  TextStyledH5,
  TextStyledH6,
  TextStyledP,
} from "./styled";
import { AtomTextTypes } from "./types";

const AtomText: FC<AtomTextTypes> = (props) => {
  const { children, as } = props;

  switch (as) {
    case "a":
      return <TextStyledA {...props}>{children}</TextStyledA>;
    case "p":
      return <TextStyledP {...props}>{children}</TextStyledP>;
    case "h1":
      return <TextStyledH1 {...props}>{children}</TextStyledH1>;
    case "h2":
      return <TextStyledH2 {...props}>{children}</TextStyledH2>;
    case "h3":
      return <TextStyledH3 {...props}>{children}</TextStyledH3>;
    case "h4":
      return <TextStyledH4 {...props}>{children}</TextStyledH4>;
    case "h5":
      return <TextStyledH5 {...props}>{children}</TextStyledH5>;
    case "h6":
      return <TextStyledH6 {...props}>{children}</TextStyledH6>;
    default:
      return <TextStyledDefault {...props}>{children}</TextStyledDefault>;
  }
};

export default AtomText;
