import { EditorOptions } from '@tiptap/react';
import { FormikValues } from 'formik';
import { DependencyList } from 'react';
import { CSSType } from '../../../types';

export type AtomTextEditorType = {
  id?: string;
  formik?: FormikValues;
  value?: string;
  editor?: Partial<EditorOptions>;
  deps?: DependencyList;
  css?: CSSType;
};
