import { ColorKeys } from '@emotion/react';
import { FormikValues } from 'formik';
import { HTMLMotionProps } from 'framer-motion';
import { CSSType } from '../../../types';

export type IOption = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
};
export type AtomInputTypes = {
  id?: string;
  formik?: FormikValues;
  labeltext?: string;
  options?: IOption[];
  type?: InputType;

  label?: AtomInputLabelProps;
  span?: AtomInputSpanProps;
  error?: AtomInputErrorProps;
  input?: AtomInputInputProps;
  select?: AtomInputSelectProps;
  option?: AtomInputOptionProps;
};

export type InputType =
  | HTMLMotionProps<'input'>['type']
  | 'toggle'
  | 'select'
  | 'dragdrop';

export type AtomInputInputProps = HTMLMotionProps<'input'> & {
  maxfiles?: number;
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
export type AtomInputSelectProps = HTMLMotionProps<'select'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputSelectProps>;
};
export type AtomInputOptionProps = HTMLMotionProps<'option'> & {
  astheme?: ColorKeys;
  css?: CSSType<AtomInputOptionProps>;
  defaultText?: string;
};

export type IFileDragDrop = {
  id: string;
  file: File;
};
