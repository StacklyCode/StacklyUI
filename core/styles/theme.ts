export type ThemeColor = {
  primary?: string;
  secondary?: string;
  accent?: string;
};

export type ThemeAtomButton = {
  color?: ThemeColor;
  type?: "flat" | "outline";
};
export type ThemeAtomWrapper = {
  color?: ThemeColor;
};
export type ThemeAtomText = {
  color?: ThemeColor;
};

export type ThemeScrollbar = {
  width?: number;
  thumb?: string;
  track?: string;
};

export type IPalette = {
  button?: ThemeAtomButton;
  text?: ThemeAtomText;
  wrapper?: ThemeAtomWrapper;
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
  wrapper: {
    color: {
      primary: "#fafafa",
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
  },
  text: {
    color: {
      primary: "#5a6a8a",
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
  },
  scrollbar: {
    width: 7,
    thumb: "#3459A8",
    track: "#e6e6e6",
  },
};
