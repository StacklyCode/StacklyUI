import { css } from '@emotion/react';
import { IPalette } from 'types';

const ThemeLight: IPalette = {
  button: {
    color: {
      primary: '#3459A8',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    type: 'flat',
  },
  wrapper: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: () => css`
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        background-color: red;
      }
    `
  },
  icon: {
    color: {
      primary: '#202124',
      secondary: '#5a6a8a',
      accent: '#3459a8'
    }
  },
  text: {
    color: {
      primary: '#5a6a8a',
      secondary: '#fafafa',
      accent: '#1461EB'
    }
  },
  input: {
    color: {
      primary: '#fafafa',
      secondary: '#3459a8',
      accent: '#db4a4a'
    }
  },
  scrollbar: {
    width: 7,
    thumb: '#3459A8',
    track: '#e6e6e6'
  }
};

export default ThemeLight;
