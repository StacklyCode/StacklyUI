import { SerializedStyles } from '@emotion/react';
import { Editor } from '@tiptap/core';
import { FormikValues } from 'formik';
import { FocusEventHandler } from 'react';

export type AtomTextEditorType = {
  content?: string;
  formik?: FormikValues;
  id?: string;
  maxWidth?: string;
  onChangeEditor?: (content: Editor) => void;
  onBlur?: FocusEventHandler;
  errorColor?: string;
  errorFontSize?: string;
  options?: {
    selectFont?: boolean;
    typeTags?: boolean;
    textAligns?: boolean;
  };
  customCSSH?: SerializedStyles;
  errorFontWeight?: string;
  errorFontFamily?: string;
  errorTextAlign?: string;
  errorMargin?: string;
  errorPadding?: string;
  minHeight?: string;
  customCSS?: SerializedStyles;
  errorHeight?: string;
  customCSSM?: SerializedStyles;
};
