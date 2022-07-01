import { css } from "@emotion/react";
import { FCWC } from "types";
import { LoaderContainer } from "./styled";
import { AtomLoaderTypes } from "./types";

const AtomLoader: FCWC<AtomLoaderTypes> = (props) => {
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

export const AtomLoaderSmall: FCWC<AtomLoaderTypes> = (props) => {
  const { loading, children } = props;
  return loading ? (
    <LoaderContainer
      {...props}
      astype="small"
      css={css`
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
