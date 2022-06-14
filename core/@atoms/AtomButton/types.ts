import { HTMLMotionProps } from "framer-motion";

export type AtomButtonTypes = HTMLMotionProps<"button"> & {
  loading?: boolean;
};
