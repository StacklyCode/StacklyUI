/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, forwardRef } from "react";
import { AtomWrapperTypes } from "./types";
import {
  AtomWrapperDefaultStyled,
  AtomWrapperFormStyled,
  AtomWrapperSectionStyled,
  AtomWrapperLiStyled,
  AtomWrapperUlStyled,
  AtomWrapperMainStyled,
  AtomWrapperFooterStyled,
  AtomWrapperNavStyled,
} from "./styled";

const Animation = {
  transition: {
    default: { duration: 0.3 },
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AtomWrapper: FC<AtomWrapperTypes> = forwardRef<any, AtomWrapperTypes>(
  (props, ref) => {
    const { as, children } = props;
    switch (as) {
      case "form":
        return (
          <AtomWrapperFormStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperFormStyled>
        );
      case "section":
        return (
          <AtomWrapperSectionStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperSectionStyled>
        );
      case "li":
        return (
          <AtomWrapperLiStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperLiStyled>
        );
      case "ul":
        return (
          <AtomWrapperUlStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperUlStyled>
        );
      case "main":
        return (
          <AtomWrapperMainStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperMainStyled>
        );
      case "footer":
        return (
          <AtomWrapperFooterStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperFooterStyled>
        );
      case "nav":
        return (
          <AtomWrapperNavStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperNavStyled>
        );
      default:
        return (
          <AtomWrapperDefaultStyled ref={ref} {...Animation} {...props}>
            {children}
          </AtomWrapperDefaultStyled>
        );
    }
  }
);

export default AtomWrapper;
