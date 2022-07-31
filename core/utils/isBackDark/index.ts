
type IOutput = {
  black: number;
  white: number;
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

const isBackDark = (hex) => {
  const color = hexToRgb(hex);
  const isDark =
    0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b <=
    128;
  return isDark ? "#535353" : "#ffffff";
  
};

export default isBackDark;
