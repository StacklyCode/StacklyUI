import { ThemeAtomButton } from "core/styles/theme";
import { HTMLMotionProps } from "framer-motion";

export type AtomButtonTypes = HTMLMotionProps<"button"> & {
  loading?: boolean;
  as?: keyof ThemeAtomButton["color"];
  asType?: ThemeAtomButton["type"];
};
