import { forwardRef } from "react";
import { ButtonStyled } from "./styled";
import { AtomButtonTypes } from "./types";
import { AtomLoaderSmall } from "../AtomLoader";

const Animation = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98 },
};
const isDisabledAnimation = (disabled: boolean) => (disabled ? {} : Animation);

const AtomButton = forwardRef<HTMLButtonElement, AtomButtonTypes>(
  (props, ref) => {
    const { loading, children, disabled } = props;
    return (
      <ButtonStyled
        {...isDisabledAnimation(disabled ?? loading)}
        {...props}
        ref={ref}
      >
        <AtomLoaderSmall isLoading={loading}>
          {children || `Text Default`}
        </AtomLoaderSmall>
      </ButtonStyled>
    );
  }
);

export default AtomButton;
