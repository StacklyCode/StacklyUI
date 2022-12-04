import { Editor } from '@tiptap/react';
import { FormikValues } from 'formik';
import { CSSType } from '../../../types';

export type AtomTextEditorType = {
  id?: string;
  formik?: FormikValues;
  editor?: Editor;
  css?: CSSType<AtomTextEditorType>;
};
