import { FormikValues } from 'formik';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomTextTypes } from '../AtomText/types';
import { AtomIconTypes } from '../AtomIcon/types';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { AtomImageTypes } from '../AtomImage/types';
import { ChangeEvent } from 'react';
import { AtomButtonTypes } from '../AtomButton/types';

export type IFile = {
  id: string;
  file?: File;
  url?: string;
};

export type AtomDragAndDropTypes = {
  id?: string;
  files?: IFile[];
  formik?: FormikValues;

  textError?: string;
  textPlaceholder?: string;
  textPlaceholderDrag?: string;

  hasPreview?: boolean;
  hasReplace?: boolean;

  action?: string;
  select?: string;
  onAction?: (files: IFile) => void;
  onRemove?: (files: IFile) => void;

  wrapper?: AtomWrapperTypes;
  preview?: AtomWrapperTypes;
  previewItem?: AtomWrapperTypes;
  previewItemWrapper?: AtomWrapperTypes;
  previewItemImage?: AtomImageTypes;
  previewItemRemove?: AtomButtonTypes;
  previewItemRemoveIcon?: AtomIconTypes;
  previewItemAction?: AtomWrapperTypes;
  previewItemActionIcon?: AtomIconTypes;

  content?: AtomWrapperTypes;
  placeholder?: AtomTextTypes;
  image?: AtomImageTypes;
  icon?: AtomIconTypes;
  label?: AtomTextTypes;
  error?: AtomTextTypes;
};

export type DragFunc = (
  setter: Dispatch<SetStateAction<boolean>>
) => (e: DragEvent) => void;

export type DropFuncOpts = {
  ref?: MutableRefObject<HTMLInputElement>;
  props: AtomDragAndDropTypes;
  setDrag: Dispatch<SetStateAction<boolean>>;
  files: IFile[];
  setFiles: Dispatch<SetStateAction<IFile[]>>;
};

export type DropFunc = (
  opts: DropFuncOpts
) => (e: ChangeEvent<HTMLInputElement> | DragEvent) => void;

export type SetterFunc = (files: IFile[]) => void;
export type GetterFunc = () => IFile[];
