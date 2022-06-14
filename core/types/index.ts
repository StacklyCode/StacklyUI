import { SerializedStyles, Theme, WithTheme } from "@emotion/react";
import { FC } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};
export type FCWC<P = {}> = FC<P & ChildrenProps>;

export type SSP<P = {}> = (props: WithTheme<P, Theme>) => SerializedStyles;
export type SSPS<P = {}> = (props: WithTheme<P, Theme>) => string;
