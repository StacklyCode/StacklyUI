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
  extensions?: string[];

  textError?: string;
  textPlaceholder?: string;
  textPlaceholderDrag?: string;

  hasButtonOpen?: boolean;
  hasButtonAction?: boolean;
  hasButtonRemove?: boolean;

  hasPlaceholder?: boolean;
  hasPreview?: boolean;
  hasReplace?: boolean;

  action?: string;
  select?: string;
  onOpen?: (ref: MutableRefObject<HTMLInputElement>) => void;
  onAction?: (files: IFile) => void;
  onRemove?: (files: IFile) => void;
  onError?: (error: string) => void;

  preview?: AtomWrapperTypes;
  previewItem?: AtomWrapperTypes;
  previewItemWrapper?: AtomWrapperTypes;
  previewItemImage?: AtomImageTypes;

  previewItemOpen?: AtomWrapperTypes;
  previewItemOpenIcon?: AtomIconTypes;
  previewItemAction?: AtomWrapperTypes;
  previewItemActionIcon?: AtomIconTypes;
  previewItemRemove?: AtomButtonTypes;
  previewItemRemoveIcon?: AtomIconTypes;

  container?: AtomWrapperTypes;
  wrapper?: AtomWrapperTypes;
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
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export type DropFunc = (
  opts: DropFuncOpts
) => (e: ChangeEvent<HTMLInputElement> | DragEvent) => void;

export type SetterFunc = (files: IFile[]) => void;
export type GetterFunc = () => IFile[];
