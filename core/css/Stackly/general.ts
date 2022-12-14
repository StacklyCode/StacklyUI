import { ColorKeys, css, SerializedStyles } from '@emotion/react';
import { IPalette } from 'types';

type IGetColor = {
  theme: [IPalette, ColorKeys];
  astype?: (keyof Omit<IPalette, 'name'>)[];
  defs?: {
    color?: string;
    theme?: ColorKeys;
  };
  css?: (color: string) => SerializedStyles;
};
export const cssGetColor = (props: IGetColor) => {
  const { theme = [], astype = [], defs = {}, css: cssp = () => css`` } = props;
  const { color: defcolor, theme: deftheme } = defs;
  const [gettheme = [], astheme = deftheme ?? ''] = theme;
  const getAllAstype = astype
    .map((item) => gettheme?.[item]?.color?.[astheme])
    ?.find((item) => item);
  const color = getAllAstype ?? defcolor ?? '#000000';
  return cssp?.(color);
};

export const GC = cssGetColor;

type ICSSProps<T> = Record<keyof T, (key: keyof T) => SerializedStyles>;
type IValidateKey<T> = {
  defs?: {
    key?: keyof T;
  };
  variants?: ICSSProps<T>;
  css?: (key: keyof T) => SerializedStyles;
};

export const cssValidateKey = <T>(askey: keyof T, props: IValidateKey<T>) => {
  const { defs = {}, variants, css: cssp } = props;
  const { key: defkey } = defs;
  return css`
    ${variants?.[askey ?? defkey]?.(askey ?? defkey)}
    ${cssp?.(askey ?? defkey)}
  `;
};

export const VK = cssValidateKey;

type IValidateBoolean = {
  defs?: {
    bool?: boolean;
  };
  variants?: {
    true?: (bool: boolean) => SerializedStyles;
    false?: (bool: boolean) => SerializedStyles;
  };
  css?: (bool: boolean) => SerializedStyles;
};
export const cssValidateBoolean = (bool: boolean, props: IValidateBoolean) => {
  const { defs = {}, variants, css: cssp } = props;
  const { bool: defbool } = defs;
  const getBool = Boolean(bool ?? defbool);
  return css`
    ${variants?.[`${getBool}`]?.(getBool)}
    ${cssp?.(getBool)}
  `;
};

export const VB = cssValidateBoolean;
