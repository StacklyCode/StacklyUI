import { Theme } from '@emotion/react';
import { atom } from 'jotai';
import { ThemeKeyType, ThemesFamilyType } from '../../types';

export const ThemeAtom = atom(null as unknown as Theme);

export const ThemeKeyAtom = atom('light' as ThemeKeyType);
export const ThemeCallbackAtom = atom(
  null as unknown as (key: ThemeKeyType) => void
);
export const ThemeToggleAtom = atom(
  (get) => [get(ThemeKeyAtom), get(ThemeCallbackAtom)] as ThemesFamilyType
);
