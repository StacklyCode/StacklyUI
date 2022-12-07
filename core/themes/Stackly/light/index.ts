import { css } from '@emotion/react';
import {
  InputSTDarkCSS,
  InputErrorSTDarkCSS,
  InputLabelSTDarkCSS,
  InputOptionSTDarkCSS,
  InputSelectSTDarkCSS,
  LoaderTypeSTDark,
  LoaderTypeSTDarkCSS,
  WrapperSTLightCSS,
  ButtonTypeSTLightCSS,
  ButtonIsDisabledSTLightCSS
} from 'css';
import { TextSTDarkCSS } from 'css/Stackly/text';
import { IPalette } from '../../../types';

const Light: IPalette = {
  name: 'Stackly Light',
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB',
      color2: '#5a6a8a',
      color3: '#7a8baa'
    },
    properties: {
      blur: '#ffffff0d',
      tooltip: '#387ac5',
      background: '#ffffff',
      hover: '#cecbdc1c'
    }
  },
  wrapper: {
    color: {
      primary: '#ffffff',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      ${WrapperSTLightCSS(theme, props)}
    `
  },
  text: {
    color: {
      primary: '#1b1b1b',
      secondary: '#fafafa',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      ${TextSTDarkCSS(theme, props)}
    `
  },
  button: {
    css: (theme, props) => css`
      font-family: 'Montserrat', sans-serif;
      ${ButtonTypeSTLightCSS(theme, props)}
      ${ButtonIsDisabledSTLightCSS(theme, props)}
    `
  },
  icon: {
    color: {
      primary: '#202124',
      secondary: '#5a6a8a',
      accent: '#3459a8'
    }
  },
  loader: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      ${LoaderTypeSTDarkCSS(theme, props)}
      ${LoaderTypeSTDark(theme, props)}
    `
  },
  input: {
    span: {
      color: {
        primary: '#222222'
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
        secondary: '#5a6a8a',
        accent: '#1461EB',
        color2: '#5a6a8a',
        color3: '#7a8baa'
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
      blur: '#ffffff0d',
      background: '#ffffff'
    }
  },
  scrollbar: {
    properties: {
      width: '4',
      thumb: '#0072f5',
      track: '#c5c5c598'
    }
  },
  dot: {
    color: {}
  }
};

export default Light;
