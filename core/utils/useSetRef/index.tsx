import { SetStateAction } from 'jotai';
import { useEffect } from 'react';

const useSetRef = <T = undefined,>(
  val: T,
  set: (e: SetStateAction<T>) => void
) => {
  useEffect(() => {
    if (val) {
      set(val);
    }
  }, [val, set]);
};

export default useSetRef;
