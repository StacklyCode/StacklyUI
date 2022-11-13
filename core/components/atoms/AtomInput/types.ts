import { FormikValues } from 'formik';
import { HTMLMotionProps } from 'framer-motion';
import { CSSType, KeyThemeColor } from '../../../types';

type InputType = HTMLMotionProps<'input'>['type'] | 'toggle' | 'select';

type AtomInputInputProps = HTMLMotionProps<'input'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
};
type AtomInputLabelProps = HTMLMotionProps<'label'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
};
type AtomInputErrorProps = HTMLMotionProps<'span'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
};
type AtomInputSpanProps = HTMLMotionProps<'span'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
};
type AtomInputSelectProps = HTMLMotionProps<'select'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
};
type AtomInputOptionProps = HTMLMotionProps<'option'> & {
  astheme?: KeyThemeColor;
  css?: CSSType;
  defaultText?: string;
};
export type IOption = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
};
export type AtomInputTypes = {
  id?: string;
  formik?: FormikValues;
  input?: AtomInputInputProps;
  select?: AtomInputSelectProps;
  option?: AtomInputOptionProps;
  options?: IOption[];
  label?: AtomInputLabelProps;
  labeltext?: string;
  error?: AtomInputErrorProps;
  span?: AtomInputSpanProps;
  astheme?: KeyThemeColor;
  type?: InputType;
  css?: CSSType;
};
