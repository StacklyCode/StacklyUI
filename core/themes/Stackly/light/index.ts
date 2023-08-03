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
      primary: '#60a8c4',
      secondary: '#F0E68C',
      accent: '#e0919d',
      color2: '#b88fea',
      color3: '#98FB98'
    },
    properties: {
      blur: '#f8fbff3d',
      tooltip: '#60a8c4',
      background: '#d3d3d3',
      hover: '#eeeeee44'
    },
    css: () => css`
      transition: all 0.3s ease;
    `
  },
  wrapper: {
    color: {
      primary: '#ffffff'
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
      primary: '#2c2e31',
      accent: '#60a8c4'
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
      primary: '#2c2e31',
      secondary: '#5a6a8a',
      accent: '#60a8c4'
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
    label: {
      color: {
        primary: '#2c2e31'
      }
    },
    span: {
      color: {
        primary: '#445c7d'
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
        primary: '#60a8c4',
        secondary: '#F0E68C',
        accent: '#e0919d',
        color2: '#b88fea',
        color3: '#98FB98'
      },
      properties: {
        background: '#00000012'
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
        primary: '#60a8c4',
        secondary: '#F0E68C',
        accent: '#e0919d',
        color2: '#b88fea',
        color3: '#98FB98'
      },
      properties: {
        background: '#00000012'
      },
      css: (theme, props) => css`
        ${InputSelectSTDarkCSS(theme, props)}
      `
    }
  },
  header: {
    properties: {
      blur: '#ffffff99',
      background: '#ffffff',
      border: '#60a8c4'
    }
  },
  scrollbar: {
    properties: {
      width: '4',
      thumb: '#60a8c4',
      track: '#8b8b8b50'
    }
  },
  dot: {
    color: {
      primary: '#60a8c4',
      secondary: '#F0E68C',
      accent: '#e0919d',
      color2: '#b88fea',
      color3: '#98FB98'
    }
  },
  togletheme: {
    properties: {
      background: '#e4e4e43d',
      border: '#60a8c4'
    }
  }
};

export default ThemeDark;
