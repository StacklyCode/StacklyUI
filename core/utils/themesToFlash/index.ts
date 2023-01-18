import { IPalette } from 'types';

type IThemeFlash = Record<string, IPalette>;

export const ThemesToFlash = (themes: IThemeFlash) =>
  Object.entries(themes).reduce(
    (acc, [key, theme], idx, arr) =>
      `${acc}
      '${key}': '${theme?.general?.properties?.background ?? '#ffffff'}'${
        idx === arr?.length - 1 ? '' : ','
      }`,
    ``
  );
