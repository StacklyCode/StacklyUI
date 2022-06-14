export type ThemeAtomButton = {
  color?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  type?: "flat" | "outline";
};

export type ThemeScrollbar = {
  width?: number;
  thumb?: string;
  track?: string;
};

export type IPalette = {
  button?: ThemeAtomButton;
  scrollbar?: ThemeScrollbar;
};

export const Theme: IPalette = {
  button: {
    color: {
      primary: "#3459A8",
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
    type: "flat",
  },
  scrollbar: {
    width: 7,
    thumb: "#3459A8",
    track: "#e6e6e6",
  },
};
