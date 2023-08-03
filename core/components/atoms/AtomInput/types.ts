import { ColorKeys } from '@emotion/react';
import { FormikValues } from 'formik';
import { HTMLMotionProps } from 'framer-motion';
import { AtomWrapperTypes, CSSType } from '../../../types';

export type IOption = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
};
export type AtomInputTypes = {
  id?: string;
  formik?: FormikValues;
  labelToggle?: string;
  labeltext?: string;
  options?: IOption[];
  type?: InputType;

  label?: AtomInputLabelProps;
  span?: AtomInputSpanProps;
  spanToggle?: AtomInputSpanProps;
  error?: AtomInputErrorProps;
  icon?: React.ReactNode;
  input?: AtomInputInputProps;
  toggle?: AtomInputToggleProps;
  select?: AtomInputSelectProps;
  option?: AtomInputOptionProps;
};

export type InputType =
  | HTMLMotionProps<'input'>['type']
  | 'toggle'
  | 'select'
  | 'dragdrop';

export type AtomInputInputProps = HTMLMotionProps<'input'> & {
  textDragDrop?: string;
  preview?: boolean;
  onClickPreview?: (img: IFileDragDrop, idx: number) => void;
  maxfiles?: number;
  astheme?: ColorKeys;
  isDragDropIcon?: boolean;
  css?: CSSType<AtomInputInputProps>;
  cssDragDrop?: CSSType<AtomWrapperTypes>;
  cssDragDropIcon?: CSSType<AtomWrapperTypes>;
  onSelectMain?: (img: IFileDragDrop, idx) => void;
};

export type AtomInputToggleProps = HTMLMotionProps<'input'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputInputProps>;
};

export type AtomInputLabelProps = HTMLMotionProps<'label'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputLabelProps>;
};
export type AtomInputErrorProps = HTMLMotionProps<'span'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputErrorProps>;
};
export type AtomInputSpanProps = HTMLMotionProps<'span'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputSpanProps>;
};
export type AtomInputSelectProps = HTMLMotionProps<'input'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputSelectProps>;
  search?: boolean;
};
export type AtomInputOptionProps = HTMLMotionProps<'option'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputOptionProps>;
  defaultText?: string;
};

export type IFileDragDrop = {
  id: string;
  file: File;
  url: string;
};
