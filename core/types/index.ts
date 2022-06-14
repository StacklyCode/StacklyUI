import { FC } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};
export type FCWC<P> = FC<P & ChildrenProps>;
