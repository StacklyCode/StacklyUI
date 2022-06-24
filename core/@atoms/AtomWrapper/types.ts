import { ThemeAtomWrapper } from "core/styles/theme";
import { HTMLMotionProps } from "framer-motion";

export type AtomWrapperTypes = HTMLMotionProps<"div"> &
  HTMLMotionProps<"form"> &
  HTMLMotionProps<"section"> &
  HTMLMotionProps<"li"> & {
    astheme?: keyof ThemeAtomWrapper["color"];
    as?: "div" | "form" | "section" | "li";
  };
