import { css } from '@emotion/react';
import {
  ButtonIsDisabledSTDarkCSS,
  ButtonTypeSTDarkCSS,
  InputSTDarkCSS,
  InputErrorSTDarkCSS,
  InputLabelSTDarkCSS,
  InputOptionSTDarkCSS,
  InputSelectSTDarkCSS,
  LoaderTypeSTDark,
  LoaderTypeSTDarkCSS,
  WrapperSTDarkCSS
} from 'css';
import { TextSTDarkCSS } from 'css/Stackly/text';
import { IPalette } from '../../../types';

const ThemeDark: IPalette = {
  name: 'Stackly Dark',
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#49dc80',
      accent: '#d333f6',
      color2: '#f6d333',
      color3: '#33f6d3'
    },
    properties: {
      blur: '#1b1a203d',
      tooltip: '#0072f550',
      background: '#000000',
      hover: '#39395525'
    }
  },
  wrapper: {
    css: (theme, props) => css`
      ${WrapperSTDarkCSS(theme, props)}
    `
  },
  text: {
    color: {
      primary: '#e6e6e6',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      ${TextSTDarkCSS(theme, props)}
    `
  },
  button: {
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      ${ButtonTypeSTDarkCSS(theme, props)}
      ${ButtonIsDisabledSTDarkCSS(theme, props)}
    `
  },
  icon: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    }
  },
  loader: {
    css: (theme, props) => css`
      ${LoaderTypeSTDarkCSS(theme, props)}
      ${LoaderTypeSTDark(theme, props)}
    `
  },
  input: {
    span: {
      color: {
        primary: '#e6e6e6'
      },
      css: (theme, props) => css`
        ${InputLabelSTDarkCSS(theme, props)}
      `
    },
    error: {
      color: {
        primary: '#e01220'
      },
      css: (theme, props) => css`
        ${InputErrorSTDarkCSS(theme, props)}
      `
    },
    input: {
      color: {
        primary: '#0072f5',
        secondary: '#49dc80',
        accent: '#d333f6',
        color2: '#f6d333',
        color3: '#33f6d3'
      },
      properties: {
        background: '#262b33'
      },
      css: (theme, props) => css`
        ${InputSTDarkCSS(theme, props)}
      `
    },
    option: {
      color: {
        primary: '#dedede'
      },
      css: (theme, props) => css`
        ${InputOptionSTDarkCSS(theme, props)}
      `
    },
    select: {
      color: {
        primary: '#0072f5',
        secondary: '#49dc80',
        accent: '#d333f6',
        color2: '#f6d333',
        color3: '#33f6d3'
      },
      properties: {
        background: '#262b33'
      },
      css: (theme, props) => css`
        ${InputSelectSTDarkCSS(theme, props)}
      `
    }
  },
  header: {
    properties: {
      blur: '#00000099',
      background: '#000000',
      border: '#0c254b'
    }
  },
  scrollbar: {
    properties: {
      width: '4',
      thumb: '#0072f5',
      track: '#8b8b8b50'
    }
  },
  dot: {
    color: {
      primary: '#0072f5',
      secondary: '#49dc80',
      accent: '#d333f6',
      color2: '#f6d333',
      color3: '#33f6d3'
    }
  },
  togletheme: {
    properties: {
      background: '#1b1a203d',
      border: '#0072f550'
    }
  }
};

export default ThemeDark;
