import { EditorOptions } from '@tiptap/core';
import { DependencyList } from 'react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import UnderLine from '@tiptap/extension-underline';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import Image from '@tiptap/extension-image';
import Iframe from './iframe';
import VideoCustom from './video';
import { useEditor as useEditorTipTap } from '@tiptap/react';

const useEditor = (props?: Partial<EditorOptions>, deps?: DependencyList) => {
  const editor = useEditorTipTap(
    {
      extensions: [
        TextAlign.configure({
          types: ['heading', 'paragraph']
        }),
        StarterKit,
        TextStyle,
        FontFamily,
        Color,
        UnderLine,
        Image,
        Iframe,
        VideoCustom,
        Table.configure({
          resizable: true
        }),
        TableRow,
        TableHeader,
        TableCell,
        Link.configure({
          openOnClick: false
        })
      ],
      content: '',
      ...props
    },
    deps
  );
  return editor;
};

export default useEditor;
