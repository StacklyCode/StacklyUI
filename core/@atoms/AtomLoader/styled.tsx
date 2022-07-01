import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomLoaderTypes } from './types';

const TypeLoader = (type: AtomLoaderTypes['astype']) => {
  switch (type) {
    case 'small':
      return css`
        width: max-content;
        height: max-content;
        background-color: transparent;
      `;
    case 'button':
      return css`
        width: 100%;
        .lds-ring {
          width: 15px;
          height: 15px;
          div {
            margin: 1px 2px;
            width: 14px;
            height: 14px;
          }
        }
      `;
    default:
      return css`
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 9999;
        backdrop-filter: blur(12px);
        top: 0;
        left: 0;
      `;
  }
};

export const LoaderContainer = styled(motion.div)<AtomLoaderTypes>((props) => {
  const { astype } = props;
  return css`
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #db4a4a transparent transparent transparent;
    }
    .lds-ring div:nth-of-type(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-of-type(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-of-type(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    ${TypeLoader(astype)}
  `;
});
