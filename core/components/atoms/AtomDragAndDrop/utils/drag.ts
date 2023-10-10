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
  const { setDrag, files, setFiles, props, ref, setLoading } = opts;
  const { id, formik, onError } = props;
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

  const exts = props?.extensions ?? [];

  const hasPermittedFile = (file: File) => {
    const hasExt = exts.length > 0;
    if (!hasExt) return true;

    const ext = file.name.split('.').pop();
    if (!ext) return false;

    return exts.includes(ext?.toLowerCase());
  };

  const handleErrors = (error: string) => {
    if (!onError) return;
    onError(error);
  };

  const inputElement = e.target as HTMLInputElement;
  const inputDrop = e as DragEvent;

  const getFiles = getter();

  const newFiles = inputElement.files ?? inputDrop.dataTransfer?.files;
  const newFilesArray = Array.from(newFiles);

  const hasError = newFilesArray.map(hasPermittedFile);
  const hasErrorSome = hasError.some((error) => !error);

  if (hasErrorSome) {
    hasError.forEach((error, index) => {
      if (error) return;
      handleErrors(
        `El archivo ${
          newFilesArray[index].name
        } no es un tipo de archivo válido (${exts.join(', ')})`
      );
    });
  }

  const filteredFiles = newFilesArray.filter(hasPermittedFile) ?? [];

  const isPhone = async (file: File) => {
    if (typeof window !== 'undefined') {
      const ext = file.name.split('.').pop()?.toLowerCase();
      const isHEIC = ['heic', 'heif'].includes(ext ?? '');
      if (!isHEIC) return file;
      setLoading(true);

      const heic2any = require('heic2any');
      const blob = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.8
      });
      const blobArray = Array.isArray(blob) ? blob : [blob];
      const iphoneFile = new File(blobArray, `${file.name}.jpg`, {
        type: 'image/jpeg'
      });
      return iphoneFile;
    }
  };

  const newFilesMappedPromises = Promise.all(
    filteredFiles.map(async (file) => await isPhone(file))
  );

  newFilesMappedPromises.then((filteredFiles) => {
    const newFilesMapped = filteredFiles
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
    setLoading(false);
  });
};
