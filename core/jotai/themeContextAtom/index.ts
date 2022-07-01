import { atom } from 'jotai';
import { ThemesFamilyType } from 'types';

const themeContextAtom = atom({
  key: 'NULL',
  toggle: () => null
} as ThemesFamilyType);

export default themeContextAtom;
