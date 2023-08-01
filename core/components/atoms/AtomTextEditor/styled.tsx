import { Global, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { AtomTextEditorType } from './types';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      .ProseMirror {
        * {
          font-family: 'Montserrat', sans-serif;
          color: #292929;
          ::selection {
            background: #e9e9e9;
          }
        }
        a {
          color: #f1576c;
          cursor: pointer;
        }
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 2rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        h4 {
          font-size: 1.25rem;
        }
        h5 {
          font-size: 1rem;
        }
        h6 {
          font-size: 0.875rem;
        }
        p {
          font-size: 14px;
        }
        img {
          width: 100%;
        }
        ol {
          list-style-type: decimal;
          padding-left: 1rem;
        }
        ul {
          list-style-type: disc;
          padding-left: 1rem;
        }
        .tableWrapper {
          height: max-content;
        }
        table {
          height: max-content;
          margin: 20px 0px;
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          border: 1px solid #ddd;
        }
        th,
        td {
          border: 1px solid #ddd;
          text-align: left;
          padding: 8px;
          font-size: 1rem;
          font-family: 'Montserrat', sans-serif;
        }
        td {
          font-weight: 500;
        }
        tr:nth-child(even) {
          color: #2e2e2e;
          background-color: #f3f3f3;
        }

        .ProseMirror-selectednode {
          background: #f2f2f2;
        }
      }
    `}
  />
);

export const InputErrorStyled = styled.span<AtomTextEditorType>`
  font-family: ${({ errorFontFamily }) =>
    errorFontFamily || `'Montserrat', sans-serif`};
  font-size: ${({ errorFontSize }) => errorFontSize || `10px`};
  font-weight: ${({ errorFontWeight }) => errorFontWeight || `700`};
  color: ${({ errorColor }) => errorColor || `#ff295f`};
  height: ${({ errorHeight }) => errorHeight || `20px`};
  margin: ${({ errorMargin }) => errorMargin || `0px 0px 0px 0px`};
  padding: ${({ errorPadding }) => errorPadding || `5px 0px 0px 0px`};
`;

export const InputColorStyled = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 50%;

  width: 25px;
  height: 25px;
  border-radius: 300px;
  overflow: hidden;
  ::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
`;

type ButtonStyledProps = {
  isActive?: boolean;
  customCSS?: SerializedStyles;
};

export const SeparateVerticalStyled = styled.hr`
  height: 10px;
  width: 2px;
  background-color: #d5d5d5;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 0px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #373737;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  span {
    cursor: pointer;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #0072f5;
      color: white !important;
    `}

  ${({ customCSS }) => customCSS}
`;

export const TextAreaStyled = styled.textarea`
  padding: 15px 20px;
  border: none;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;
