import { FormikValues } from 'formik';
import { HTMLMotionProps } from 'framer-motion';
import { CSSType, ThemeAtomInput } from 'types';

type ITheme = keyof ThemeAtomInput['color'];
type InputType = HTMLMotionProps<'input'>['type'] | 'toggle';
type AtomInputInputProps = HTMLMotionProps<'input'> & {
  astheme?: ITheme;
  type?: InputType;
  css?: CSSType;
};
type AtomInputLabelProps = HTMLMotionProps<'label'> & {
  astheme?: ITheme;
  css?: CSSType;
};
type AtomInputErrorProps = HTMLMotionProps<'span'> & {
  astheme?: ITheme;
  css?: CSSType;
};
type AtomInputSpanProps = HTMLMotionProps<'span'> & {
  astheme?: ITheme;
  css?: CSSType;
};

export type AtomInputTypes = {
  input?: AtomInputInputProps;
  label?: AtomInputLabelProps;
  error?: AtomInputErrorProps;
  span?: AtomInputSpanProps;
  spantext?: string;
  astheme?: ITheme;
  id?: string;
  type?: InputType;
  formik?: FormikValues;
  css?: CSSType;
};
