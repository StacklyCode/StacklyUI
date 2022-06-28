/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedStyles } from '@emotion/utils';
import { FormikValues } from 'formik';
import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type ImagesArray = {
  id: string;
  url: string;
  file: File;
};

export type FilesArray = {
  id: string;
  url?: string;
  file: File;
};

export type AtomInputTypes = {
  type?:
    | 'password'
    | 'select'
    | 'time'
    | 'selectBig'
    | 'checkbox'
    | 'toggle'
    | 'email'
    | 'text'
    | 'search'
    | 'number'
    | 'radio'
    | 'tel'
    | 'date'
    | 'textbox'
    | 'tel'
    | 'dragdrop'
    | 'file'
    | 'range'
    | 'dragdropMultiple'
    | 'dragdropMultipleImages'
    | 'phone'
    | 'color'
    | 'dragDropFile'
    | 'dragdropMultipleFiles';
  formik?: FormikValues;
  video?: boolean;
  heightpreview?: string;
  disabled?: boolean;
  value?: string;
  dropActive?: boolean;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  onChangeDrop?: (e: File) => void;
  onChangeImageEditor?: (value: { url: string; file: File }) => void;
  onUpdateValues?: (value: { min: number; max: number }) => void;
  onKeyUp?: (e: KeyboardEvent<any>) => void;
  onKeyPress?: (e: KeyboardEvent<any>) => void;
  errorColor?: string;
  errorFontSize?: string;
  errorFontWeight?: string;
  errorFontFamily?: string;
  errorTextAlign?: string;
  errorMargin?: string;
  errorPadding?: string;
  errorHeight?: string;

  label?: string;
  labelWidth?: string;
  labelHeight?: string;
  labelTextAlign?: string;
  labelMargin?: string;
  labelColor?: string;
  labelPadding?: string;
  labelFontSize?: string;
  labelFontWeight?: string | number;
  labelFontFamily?: string;

  spanMargin?: string;

  id?: string;
  name?: string;
  margin?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  placeholder?: string;
  placeholderDragDrop?: (e: boolean) => ReactNode;
  placeholderColor?: string;

  multiple?: boolean;
  checked?: boolean;

  optionColor?: string;
  options?: { value: string | number; label: string; id: string }[];

  minRange?: number;
  maxRange?: number;

  loadValues?: { min: number; max: number };
  thumbColor?: string;
  thumbBorder?: string;
  trackColor?: string;
  trackBackground?: string;

  defaultText?: string;

  imagePreview?: string;
  imagePreviewMultiple?: ImagesArray[];
  imagePreviewArray?: string[];
  accentColor?: string;
  // color?: "dark" | "light";
  // placeholder?: string;
  // id?: string;
  // icon?: string;
  // margin?: string;
  // name?: string;
  // formik?: FormikValues;
  // label?: string;
  // options?: { value: string | number; label: string }[];
  // width?: string;
  // height?: string;
  // colorLabel?: string;
  // disable?: boolean;
  // onChange?: ChangeEventHandler<HTMLSelectElement>;
  // value?: string | ReadonlyArray<string> | number;
  // cheked?: boolean;
  // fontsize?: string;
  // padding?: string;
  // default?: string;
  // optionColor?: string;
  // border?: string;
  // borderRadius?: string;
  // dropActive?: boolean;
  // imagenPreview?: string;
  // disable?: boolean;
  // textdefault?: string;
  // font?: string;
  customCSS?: SerializedStyles;
  wrapperCustomCSS?: SerializedStyles;
  typeFile?: string;
  step?: string | number;
};
