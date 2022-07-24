/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
import { FC, forwardRef } from 'react';
import AtomWrapper from '../AtomWrapper';
import { AtomImageStyled } from './styled';
import { AtomImageTypes } from './types';

const AtomImage: FC<AtomImageTypes> = forwardRef<any, AtomImageTypes>(
  (props, ref) => {
    const { src, alt } = props;
    return (
      <AtomWrapper {...(props as any)}>
        <AtomImageStyled
          ref={ref}
          draggable={false}
          children={null}
          src={
            src ??
            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0002/icons/placeholder-image.png'
          }
          alt={alt}
        />
        {props.children}
      </AtomWrapper>
    );
  }
);

export default AtomImage;
