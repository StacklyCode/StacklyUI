import { css } from '@emotion/react';
import {
  InputSTDarkCSS,
  InputErrorSTDarkCSS,
  InputLabelSTDarkCSS,
  InputOptionSTDarkCSS,
  InputSelectSTDarkCSS,
  BCCL,
  ICC,
  LCC
} from 'css';
import { GC, VB, VK } from 'css/Stackly/general';
import UCB from 'utils/changeBrightness';
import UCT from 'utils/changeTransparency';
import UIBD from 'utils/isBackDark';
import { IPalette } from '../../../types';

const ThemeDark: IPalette = {
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
    },
    css: () => css`
      transition: all 0.3s ease;
    `
  },
  wrapper: {
    color: {
      primary: '#00000000'
    },
    css: (theme, props) =>
      GC({
        theme: [theme, props?.astheme],
        astype: ['wrapper', 'general'],
        defs: {
          theme: 'primary'
        },
        css: (color) => css`
          background-color: ${color};
        `
      })
  },
  text: {
    color: {
      primary: '#e6e6e6',
      accent: '#1461EB'
    },
    css: (theme, props) =>
      GC({
        theme: [theme, props?.astheme],
        astype: ['text'],
        defs: {
          theme: 'primary'
        },
        css: (color) => css`
          font-family: 'Inter', sans-serif;
          color: ${color};
        `
      })
  },
  button: {
    css: (theme, props) =>
      GC({
        theme: [theme, props?.astheme],
        astype: ['button', 'general'],
        defs: {
          theme: 'primary'
        },
        css: (color) =>
          VB(props?.disabled, {
            css: () => css`
              font-family: 'Inter', sans-serif;
              font-size: 12px;
            `,
            variants: {
              false: () =>
                VK(props?.astype, {
                  defs: {
                    key: 'flat'
                  },
                  css: () => css`
                    :hover {
                      box-shadow: 0px 0px 10px 4px ${UCT(UCB(color, -50), 50)};
                    }
                  `,
                  variants: {
                    gradient: () => css`
                      background: linear-gradient(
                        90deg,
                        ${UCB(UCT(color, 20), -10)} 0%,
                        ${UCB(UCT(color, 20), -10)} 10%,
                        ${UCB(UCT(color, 10), 35)} 50%,
                        ${UCB(UCT(color, 20), -10)} 80%,
                        ${UCB(UCT(color, 20), -10)} 100%
                      );
                      background-size: 200% auto;
                      animation: gradient 4s ease-in-out infinite;
                      @keyframes gradient {
                        0% {
                          background-position: 200% 50%;
                        }
                        100% {
                          background-position: 0% 50%;
                        }
                      }
                      border: 1px solid ${color};
                      color: ${color};
                    `,
                    flat: () => css`
                      background-color: ${color};
                      border: 1px solid ${color};
                      color: ${UIBD(color)};
                      ${BCCL(UIBD(color))}
                    `,
                    outline: () => css`
                      background-color: ${UCT(color, 15)};
                      backdrop-filter: blur(8px);
                      border: 1px solid ${color};
                      color: ${color};
                      ${BCCL(color)}
                      :hover {
                        background-color: ${UCT(color, 25)};
                      }
                    `
                  }
                })
            }
          })
      })
  },
  icon: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    css: (theme, props) =>
      GC({
        theme: [theme, props?.astheme],
        astype: ['icon'],
        defs: {
          theme: 'primary'
        },
        css: (color) => ICC(color)
      })
  },
  loader: {
    css: (theme, props) =>
      GC({
        theme: [theme, props?.astheme],
        astype: ['loader', 'general'],
        defs: {
          theme: 'primary'
        },
        css: (color) =>
          VK(props?.astype, {
            css: () => LCC(color),
            defs: {
              key: 'medium'
            },
            variants: {
              button: () => css`
                width: 38px;
                height: max-content;
              `,
              small: () => css`
                width: 80px;
                height: 80px;
              `,
              medium: () => css`
                width: 100%;
                height: 100%;
              `,
              fullscreen: () => css`
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                background-color: ${UCT(UCB(color, -333), 50)};
                backdrop-filter: blur(5px);
                svg {
                  width: 250px !important;
                  height: 250px !important;
                }
              `
            }
          })
      })
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
        primary: '#052957'
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
