import { css } from '@emotion/react';
import {
  WrapperSTLightCSS,
  ButtonTypeSTLightCSS,
  ButtonIsDisabledSTLightCSS,
  TextSTLightCSS,
  LoaderTypeSTLightCSS,
  LoaderTypeSTLight,
  InputSTLightCSS,
  InputOptionSTLightCSS,
  InputLabelSTLightCSS,
  InputErrorSTLightCSS,
  InputSelectSTLightCSS
} from 'css';
import { IPalette } from '../../../types';

const Light: IPalette = {
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB',
      color2: '#5a6a8a',
      color3: '#7a8baa'
    },
    properties: {
      blur: '#ffffffc6',
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
      ${TextSTLightCSS(theme, props)}
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
      ${LoaderTypeSTLightCSS(theme, props)}
      ${LoaderTypeSTLight(theme, props)}
    `
  },
  input: {
    span: {
      color: {
        primary: '#222222'
      },
      css: (theme, props) => css`
        ${InputLabelSTLightCSS(theme, props)}
      `
    },
    error: {
      color: {
        primary: '#e01220'
      },
      css: (theme, props) => css`
        ${InputErrorSTLightCSS(theme, props)}
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
        background: '#f2f2f2'
      },
      css: (theme, props) => css`
        ${InputSTLightCSS(theme, props)}
      `
    },
    option: {
      color: {
        primary: '#1b1b1b'
      },
      css: (theme, props) => css`
        ${InputOptionSTLightCSS(theme, props)}
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
        ${InputSelectSTLightCSS(theme, props)}
      `
    }
  },
  header: {
    properties: {
      blur: '#ffffffff',
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
  },
  togletheme: {
    properties: {
      background: '#0072f5',
      border: '#c8dbff'
    }
  }
};

export default Light;
