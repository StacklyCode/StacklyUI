import { css } from "@emotion/react";
import { FCWC } from "types";
import { LoaderContainer } from "./style";
import { LoaderProps } from "./types";

const AtomLoader: FCWC<LoaderProps> = (props) => {
  const { loading, children } = props;
  return loading ? (
    <LoaderContainer {...props}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderContainer>
  ) : (
    <>{children}</>
  );
};

export default AtomLoader;

export const AtomLoaderSmall: FCWC<LoaderProps> = (props) => {
  const { loading, customcss, children } = props;
  return loading ? (
    <LoaderContainer
      {...props}
      type="small"
      colorLoading="white"
      widthLoader="2px"
      customcss={css`
        width: 100%;
        .lds-ring {
          width: 15px;
          height: 15px;
          div {
            margin: 1px 2px;
            width: 14px;
            height: 14px;
          }
        }
        ${customcss}
      `}
    >
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderContainer>
  ) : (
    <>{children}</>
  );
};
