import { css } from '@emotion/react';
import {
  TextSTLightCSS,
  LoaderTypeSTLightCSS,
  LoaderTypeSTLight,
  InputSTLightCSS,
  InputOptionSTLightCSS,
  InputLabelSTLightCSS,
  InputErrorSTLightCSS,
  InputSelectSTLightCSS
} from 'css';
import {
  ButtonIsDisabledTWLightCSS,
  ButtonTypeTWLightCSS
} from 'css/Tailwind/button';
import { IPalette } from '../../../types';

const Light: IPalette = {
  name: 'Tailwind Light',
  general: {
    color: {
      primary: '#4f46e5',
      secondary: '#008ce4',
      accent: '#0f172a'
    },
    properties: {
      blur: '#ffffff',
      tooltip: '#e3e4e6',
      background: '#ffffff',
      hover: '#f8fafc'
    }
  },
  wrapper: {
    color: {
      primary: '#ffffff',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: (theme) => css`
      background-color: ${theme.general.properties.background};
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem 0.1rem ${theme.general.properties.blur};
    `
  },
  text: {
    color: {
      primary: '#1b1b1b',
      secondary: '#fafafa',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      ${TextSTLightCSS(theme, props)}
    `
  },
  button: {
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      padding: 8px 18px;
      font-weight: bold;
      border-radius: 8px;
      box-shadow: none;
      border: none;
      ${ButtonTypeTWLightCSS(theme, props)}
      ${ButtonIsDisabledTWLightCSS(theme, props)}
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
      primary: '#4f46e5',
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
        primary: '#4f46e5',
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
        primary: '#4f46e5',
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
      thumb: '#4f46e5',
      track: '#c5c5c598'
    }
  },
  dot: {
    color: {}
  },
  togletheme: {
    properties: {
      background: '#4f46e5',
      border: '#c8dbff'
    }
  }
};

export default Light;
