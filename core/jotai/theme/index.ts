import { atom } from 'jotai';
import { ThemesFamilyType } from 'types';

export const themeContextAtom = atom({
  key: 'NULL',
  toggle: () => null
} as ThemesFamilyType);
