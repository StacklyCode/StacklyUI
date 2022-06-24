import { SerializedStyles } from "@emotion/utils";

export type LoaderProps = {
  loading?: boolean | "true" | "false";
  widthLoader?: string;
  type?: "fullscreen" | "small";
  width?: string;
  height?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  colorLoading?: string;
  customcss?: SerializedStyles;
};
