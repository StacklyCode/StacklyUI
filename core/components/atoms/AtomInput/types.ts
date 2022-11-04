import { FormikValues } from 'formik';
import { HTMLMotionProps } from 'framer-motion';
import { CSSType, KeyThemeColor } from 'types';

type InputType = HTMLMotionProps<'input'>['type'] | 'toggle';

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

export type AtomInputTypes = {
  id?: string;
  formik?: FormikValues;
  input?: AtomInputInputProps;
  label?: AtomInputLabelProps;
  error?: AtomInputErrorProps;
  span?: AtomInputSpanProps;
  spantext?: string;
  astheme?: KeyThemeColor;
  type?: InputType;
  css?: CSSType;
};
