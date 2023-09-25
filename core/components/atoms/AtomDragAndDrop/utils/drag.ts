import { DragFunc, DropFunc, GetterFunc, SetterFunc } from '../types';

export const onDragOver: DragFunc = (setter) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  setter(true);
};

export const onDragLeave: DragFunc = (setter) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  setter(false);
};

export const onDrop: DropFunc = (opts) => (e) => {
  const { setDrag, files, setFiles, props, ref } = opts;
  const { id, formik } = props;
  e.preventDefault();
  e.stopPropagation();
  setDrag(false);

  const getter: GetterFunc = () => {
    if (!formik) return files;
    return formik.values[id];
  };

  const setter: SetterFunc = (files) => {
    if (!formik) return setFiles(files);
    return formik.setFieldValue(id, files);
  };

  const getFiles = getter();

  const inputElement = e.target as HTMLInputElement;
  const inputDrop = e as DragEvent;

  const newFiles = inputElement.files ?? inputDrop.dataTransfer?.files;
  const newFilesArray = Array.from(newFiles);
  const newFilesMapped = newFilesArray
    .map((file) => ({
      id: file.size + file.name,
      file: file,
      url: URL.createObjectURL(file)
    }))
    .filter((file) => !getFiles.some((f) => f.id === file.id));

  const hasReplace = props.hasReplace ?? false;

  const filesMapped = hasReplace
    ? newFilesMapped
    : [...getFiles, ...newFilesMapped];

  setter(filesMapped);
  ref.current.value = '';
};
