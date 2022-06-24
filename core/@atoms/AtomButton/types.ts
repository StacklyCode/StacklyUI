import { ThemeAtomButton } from "core/styles/theme";
import { HTMLMotionProps } from "framer-motion";

export type AtomButtonTypes = HTMLMotionProps<"button"> & {
  loading?: boolean | "true" | "false";
  astheme?: keyof ThemeAtomButton["color"];
  astype?: ThemeAtomButton["type"];
};
