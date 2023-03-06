import { css } from '@emotion/react';
import changeTransparency from '../../utils/changeTransparency';
import { ChangeBrightness, IsBackDark } from '../../utils';
import { isBackDarkBoolean } from '../../utils/isBackDark';
import { CSSType } from 'types';
import { AtomInputTypes } from 'components/atoms/AtomInput/types';

export const InputSTDarkCSS: CSSType<AtomInputTypes['input']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.input?.properties?.background ??
    theme?.input?.properties?.background ??
    '#00000000';
  const border =
    theme?.input?.input?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#0072f5';
  return css`
    background-color: ${changeTransparency(color.toString(), 40)};
    backdrop-filter: blur(10px);
    color: ${ChangeBrightness(IsBackDark(color.toString()), 50)};
    border: 1px solid
      ${changeTransparency(border, 20) ??
      ChangeBrightness(color.toString(), -25)};
    ::placeholder {
      color: ${ChangeBrightness(color.toString(), 80)};
    }
    :focus {
      border: 1px solid ${border ?? ChangeBrightness(color.toString(), -25)};
    }
    ::before {
      background-color: ${changeTransparency(
        border ?? ChangeBrightness(color.toString(), -25),
        10
      )};
      backdrop-filter: blur(10px);
    }
    :checked[type='checkbox']::before {
      background-color: ${border ?? ChangeBrightness(color.toString(), -25)};
      border: 1px solid ${border ?? ChangeBrightness(color.toString(), -25)};
    }
    transition: border 0.3s ease-in-out;
  `;
};

export const InputSTLightCSS: CSSType<AtomInputTypes['input']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.input?.properties?.background ??
    theme?.input?.properties?.background ??
    '#161616';
  const border =
    theme?.input?.input?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#0072f5';
  return css`
    background-color: ${changeTransparency(color.toString(), 40)};
    backdrop-filter: blur(10px);
    color: ${ChangeBrightness(IsBackDark(color.toString()), 50)};
    border: 1px solid
      ${changeTransparency(border, 20) ??
      ChangeBrightness(color.toString(), -25)};
    ::placeholder {
      color: ${ChangeBrightness(color.toString(), -80)};
    }
    :focus {
      border: 1px solid ${border ?? ChangeBrightness(color.toString(), -25)};
    }
    transition: border 0.3s ease-in-out;
  `;
};

export const InputLabelSTDarkCSS: CSSType<AtomInputTypes['label']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.label?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#fff';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputLabelSTLightCSS: CSSType<AtomInputTypes['label']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.label?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#161616';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputErrorSTDarkCSS: CSSType<AtomInputTypes['label']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.error?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#ff0000';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputErrorSTLightCSS: CSSType<AtomInputTypes['label']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.error?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#ff0000';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputSelectSTDarkCSS: CSSType<AtomInputTypes['select']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.input?.properties?.background ??
    theme?.input?.properties?.background ??
    '#00000000';
  const border =
    theme?.input?.input?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#0072f5';
  return css`
    background-color: ${changeTransparency(color.toString(), 50)};
    backdrop-filter: blur(10px);
    color: ${ChangeBrightness(color.toString(), 80)};
    border: 1px solid
      ${changeTransparency(border, 20) ??
      ChangeBrightness(color.toString(), -20)};
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-color: ${changeTransparency(color.toString(), 50)};
    background-image: ${isBackDarkBoolean(color.toString())
      ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVRYw+2SwQmAMAxFe+wKncY1PIldrwvocqXmkEIpKhFjpPAf/JvhPaTOAQAAGIBAW2j+wY3nm6ARkGiFtgkjPH9b+PY1My0LI1p55lsVoiCil0ftt3AX8bn8LGJnsZn86k+YyitrE2Eu7yN+kVcmHgAAgHE5AAvmLLjZosM/AAAAAElFTkSuQmCC)'
      : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABpAAAAaQBBTZdMgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACQSURBVFiF7ZGxDYMwEEVdgdnAw7AHSknHZCxAkWQ48lJwSAhh5CjGSfGf5O7O70nnnBBCiH8HCMANqD/YqW0n5AgYWbgDPmHe2yzAmCOgA+aUiJ18BrqvA+zjfhPxBJqDmQqYbOYFDFnkKRF28+vkZxHF5JGIh7315v2l8khEWflBRHn5JqIF2p/IhRBC5OINFxYJ3/X8yOoAAAAASUVORK5CYII=)'};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position-x: calc(100% - 12px);
    background-position-y: 50%;
    ::selection {
      color: ${changeTransparency(IsBackDark(color.toString()), 50)};
    }
    :focus {
      border: 1px solid ${border ?? ChangeBrightness(color.toString(), -25)};
    }
    transition: border 0.3s ease-in-out;
  `;
};

export const InputSelectSTLightCSS: CSSType<AtomInputTypes['select']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.input?.properties?.background ??
    theme?.input?.properties?.background ??
    '#00000000';
  const border =
    theme?.input?.input?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#0072f5';
  return css`
    background-color: ${changeTransparency(color.toString(), 50)};
    backdrop-filter: blur(10px);
    color: ${ChangeBrightness(color.toString(), -80)};
    border: 1px solid
      ${changeTransparency(border, 20) ??
      ChangeBrightness(color.toString(), -20)};
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-color: ${changeTransparency(color.toString(), 50)};
    background-image: ${isBackDarkBoolean(color.toString())
      ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVRYw+2SwQmAMAxFe+wKncY1PIldrwvocqXmkEIpKhFjpPAf/JvhPaTOAQAAGIBAW2j+wY3nm6ARkGiFtgkjPH9b+PY1My0LI1p55lsVoiCil0ftt3AX8bn8LGJnsZn86k+YyitrE2Eu7yN+kVcmHgAAgHE5AAvmLLjZosM/AAAAAElFTkSuQmCC)'
      : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABpAAAAaQBBTZdMgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACQSURBVFiF7ZGxDYMwEEVdgdnAw7AHSknHZCxAkWQ48lJwSAhh5CjGSfGf5O7O70nnnBBCiH8HCMANqD/YqW0n5AgYWbgDPmHe2yzAmCOgA+aUiJ18BrqvA+zjfhPxBJqDmQqYbOYFDFnkKRF28+vkZxHF5JGIh7315v2l8khEWflBRHn5JqIF2p/IhRBC5OINFxYJ3/X8yOoAAAAASUVORK5CYII=)'};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position-x: calc(100% - 12px);
    background-position-y: 50%;
    ::selection {
      color: ${changeTransparency(IsBackDark(color.toString()), 50)};
    }
    :focus {
      border: 1px solid ${border ?? ChangeBrightness(color.toString(), -25)};
    }
    transition: border 0.3s ease-in-out;
  `;
};

export const InputOptionSTDarkCSS: CSSType<AtomInputTypes['option']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.option?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#fff';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputOptionSTLightCSS: CSSType<AtomInputTypes['option']> = (
  theme,
  props
) => {
  const { astheme } = props ?? {};
  const MAINTHEME = astheme ?? 'primary';
  const color =
    theme?.input?.option?.color?.[MAINTHEME] ??
    theme?.input?.color?.[MAINTHEME] ??
    '#fff';

  return css`
    color: ${color};
    transition: border 0.3s ease-in-out;
  `;
};

export const InputToggleCSS = (color: string) => css`
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
