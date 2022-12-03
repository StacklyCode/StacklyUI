import { FC, forwardRef } from 'react';
import { AtomImageStyled } from './styled';
import { AtomImageTypes } from './types';

const AtomImage: FC<AtomImageTypes> = forwardRef<any, AtomImageTypes>(
  (props, ref) => (
    <AtomImageStyled
      ref={ref}
      draggable={false}
      src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0002/icons/placeholder-image.png"
      {...props}
    />
  )
);

export default AtomImage;
