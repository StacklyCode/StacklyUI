import trainedNet from './TrainedNet';

type IOutput = {
  black: number;
  white: number;
};

const hexToRgb = (hex = '#ffffff') => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
    hex.replace(shorthandRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a ? a + a : '');
    })
  );

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
};

const isBackDark = (hex = '#ffffff') => {
  const color = Object.keys(hexToRgb(hex)).reduce(
    (acc, key) => ({ ...acc, [key]: hexToRgb(hex)[key] / 255 }),
    {}
  );
  const output = trainedNet(color) as IOutput;
  if (output.black > output.white) {
    return '#000000';
  }
  return '#fff';
};

export const isBackDarkBoolean = (hex = '#ffffff') => {
  const color = Object.keys(hexToRgb(hex)).reduce(
    (acc, key) => ({ ...acc, [key]: hexToRgb(hex)[key] / 255 }),
    {}
  );
  const output = trainedNet(color) as IOutput;
  if (output.black > output.white) {
    return true;
  }
  return false;
};

export default isBackDark;
