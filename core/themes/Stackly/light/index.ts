import { css } from '@emotion/react';
import {
  ButtonIsDisabledPropsCSS,
  ButtonTypePropsCSS,
  InputCSS,
  InputErrorCSS,
  InputLabelCSS,
  InputOptionCSS,
  InputSelectCSS,
  TypeLoader,
  TypeLoaderCSS,
  WrapperCSS
} from 'css';
import { TextCSS } from 'css/Stackly/text';
import { IPalette } from '../../../types';

const ThemeDark: IPalette = {
  name: 'Stackly Dark',
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
      ${WrapperCSS(theme, props)}
    `
  },
  text: {
    color: {
      primary: '#5a6a8a',
      secondary: '#fafafa',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      ${TextCSS(theme, props)}
    `
  },
  button: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: (theme, props) => css`
      font-family: 'Inter', sans-serif;
      ${ButtonTypePropsCSS(theme, props)}
      ${ButtonIsDisabledPropsCSS(theme, props)}
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
      ${TypeLoaderCSS(theme, props)}
      ${TypeLoader(theme, props)}
    `
  },
  input: {
    span: {
      color: {
        primary: '#222222'
      },
      css: (theme, props) => css`
        ${InputLabelCSS(theme, props)}
      `
    },
    error: {
      color: {
        primary: '#e01220'
      },
      css: (theme, props) => css`
        ${InputErrorCSS(theme, props)}
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
        ${InputCSS(theme, props)}
      `
    },
    option: {
      color: {
        primary: '#dedede'
      },
      css: (theme, props) => css`
        ${InputOptionCSS(theme, props)}
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
        ${InputSelectCSS(theme, props)}
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

export default ThemeDark;
