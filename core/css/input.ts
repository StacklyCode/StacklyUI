import { css } from '@emotion/react';
import changeTransparency from '../utils/changeTransparency';
import { ChangeBrightness, IsBackDark } from '../utils';
import { isBackDarkBoolean } from '../utils/isBackDark';

export const backgroundColorInput = (color: string, border?: string) => css`
  background-color: ${changeTransparency(color, 40)};
  backdrop-filter: blur(10px);
  color: ${ChangeBrightness(IsBackDark(color), 50)};
  border: 1px solid
    ${changeTransparency(border, 20) ?? ChangeBrightness(color, -25)};
  ::placeholder {
    color: ${changeTransparency(IsBackDark(color), 50)};
  }
  :focus {
    border: 1px solid ${border ?? ChangeBrightness(color, -25)};
  }
  transition: border 0.3s ease-in-out;
`;

export const backgroundColorSelect = (color: string, border?: string) => css`
  background-color: ${changeTransparency(color, 50)};
  backdrop-filter: blur(10px);
  border: 1px solid
    ${changeTransparency(border, 20) ?? ChangeBrightness(color, -20)};
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-color: ${changeTransparency(color, 50)};
  background-image: ${isBackDarkBoolean(color)
    ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVRYw+2SwQmAMAxFe+wKncY1PIldrwvocqXmkEIpKhFjpPAf/JvhPaTOAQAAGIBAW2j+wY3nm6ARkGiFtgkjPH9b+PY1My0LI1p55lsVoiCil0ftt3AX8bn8LGJnsZn86k+YyitrE2Eu7yN+kVcmHgAAgHE5AAvmLLjZosM/AAAAAElFTkSuQmCC)'
    : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABpAAAAaQBBTZdMgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACQSURBVFiF7ZGxDYMwEEVdgdnAw7AHSknHZCxAkWQ48lJwSAhh5CjGSfGf5O7O70nnnBBCiH8HCMANqD/YqW0n5AgYWbgDPmHe2yzAmCOgA+aUiJ18BrqvA+zjfhPxBJqDmQqYbOYFDFnkKRF28+vkZxHF5JGIh7315v2l8khEWflBRHn5JqIF2p/IhRBC5OINFxYJ3/X8yOoAAAAASUVORK5CYII=)'};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position-x: calc(100% - 12px);
  background-position-y: 50%;
  ::selection {
    color: ${changeTransparency(IsBackDark(color), 30)};
  }
  :focus {
    border: 1px solid ${border ?? ChangeBrightness(color, -25)};
  }
  transition: border 0.3s ease-in-out;
`;

export const backgroundColorInputToggle = (color: string) => css`
  :before {
    background-color: ${IsBackDark(color)};
    border: 2px solid ${color};
  }
  :checked {
    background-color: ${color};
    :before {
      left: 100%;
      background-color: ${color};
      border: 2px solid ${IsBackDark(color)};
    }
  }
`;
