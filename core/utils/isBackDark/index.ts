import train from "../train";
import { NeuralNetwork } from "brain.js";

type IOutput = {
  black: number;
  white: number;
};
const net = new NeuralNetwork();
net.train(train);

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

const isBackDark = (hex) => {
  const color = Object.keys(hexToRgb(hex)).reduce(
    (acc, key) => ({ ...acc, [key]: hexToRgb(hex)[key] / 255 }),
    {}
  );
  const output = net.run(color) as IOutput;
  if (output.black > output.white) {
    return "#535353";
  }
  return "#fff";
};

export default isBackDark;
